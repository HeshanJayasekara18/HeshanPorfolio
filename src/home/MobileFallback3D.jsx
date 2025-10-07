// Mobile Performance Utilities and Hooks

import { useState, useEffect, useCallback, useRef } from 'react';

// Device capability detection
export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState({
    isMobile: false,
    isLowEnd: false,
    hasSlowConnection: false,
    supportsWebGL: false,
    deviceMemory: null,
    hardwareConcurrency: null,
    screenSize: 'desktop'
  });

  useEffect(() => {
    const detectCapabilities = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      const deviceMemory = navigator.deviceMemory || null;
      const hardwareConcurrency = navigator.hardwareConcurrency || null;
      const isLowEnd = (deviceMemory && deviceMemory < 4) || (hardwareConcurrency && hardwareConcurrency < 4);
      
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const hasSlowConnection = connection && 
        ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
      
      // WebGL support detection
      const canvas = document.createElement('canvas');
      const supportsWebGL = !!(
        canvas.getContext('webgl') || 
        canvas.getContext('experimental-webgl') ||
        canvas.getContext('webgl2')
      );
      
      const screenWidth = window.innerWidth;
      let screenSize = 'desktop';
      if (screenWidth < 480) screenSize = 'mobile';
      else if (screenWidth < 768) screenSize = 'tablet-portrait';
      else if (screenWidth < 1024) screenSize = 'tablet-landscape';
      
      setCapabilities({
        isMobile,
        isLowEnd,
        hasSlowConnection,
        supportsWebGL,
        deviceMemory,
        hardwareConcurrency,
        screenSize
      });
    };

    detectCapabilities();
    window.addEventListener('resize', detectCapabilities);
    
    return () => window.removeEventListener('resize', detectCapabilities);
  }, []);

  return capabilities;
};

// Optimized scroll handler for mobile
export const useOptimizedScroll = (callback, dependencies = [], options = {}) => {
  const { 
    throttleMs = 16, 
    mobileThrottleMs = 50, 
    passive = true 
  } = options;
  
  const [isMobile, setIsMobile] = useState(false);
  const callbackRef = useRef(callback);
  const lastCallTime = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback, ...dependencies]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const throttleTime = isMobile ? mobileThrottleMs : throttleMs;
    
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCallTime.current >= throttleTime) {
        callbackRef.current();
        lastCallTime.current = now;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, throttleMs, mobileThrottleMs, passive]);
};

// Intersection Observer for lazy loading
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const { 
    threshold = 0.1, 
    rootMargin = '50px',
    triggerOnce = true 
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        
        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
          if (triggerOnce) {
            observerRef.current?.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
};

// Touch gesture handler
export const useTouchGestures = (callbacks = {}) => {
  const elementRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchMoveRef = useRef(null);

  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onPinch,
    onRotate,
    minSwipeDistance = 50,
    maxSwipeTime = 1000
  } = callbacks;

  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now()
      };
    } else if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      touchStartRef.current = { distance, time: Date.now() };
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchStartRef.current) return;
    
    touchMoveRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      touches: e.touches.length
    };
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!touchStartRef.current || !touchMoveRef.current) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: Date.now()
    };

    const deltaX = touchEnd.x - touchStartRef.current.x;
    const deltaY = touchEnd.y - touchStartRef.current.y;
    const deltaTime = touchEnd.time - touchStartRef.current.time;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance >= minSwipeDistance && deltaTime <= maxSwipeTime) {
      const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
      
      if (angle >= -45 && angle <= 45) {
        onSwipeRight?.(e);
      } else if (angle >= 135 || angle <= -135) {
        onSwipeLeft?.(e);
      } else if (angle >= 45 && angle <= 135) {
        onSwipeDown?.(e);
      } else if (angle >= -135 && angle <= -45) {
        onSwipeUp?.(e);
      }
    }

    touchStartRef.current = null;
    touchMoveRef.current = null;
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, minSwipeDistance, maxSwipeTime]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return elementRef;
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memoryUsage: null,
    loadTime: null,
    isLowPerformance: false
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFPS = (currentTime) => {
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        setMetrics(prev => ({
          ...prev,
          fps,
          isLowPerformance: fps < 30
        }));
        
        frameCount = 0;
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(measureFPS);
    };

    // Start FPS monitoring
    animationId = requestAnimationFrame(measureFPS);

    // Memory usage (if available)
    if (performance.memory) {
      const updateMemory = () => {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: {
            used: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
            total: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
            limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) // MB
          }
        }));
      };
      
      updateMemory();
      const memoryInterval = setInterval(updateMemory, 5000);
      
      return () => {
        cancelAnimationFrame(animationId);
        clearInterval(memoryInterval);
      };
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return metrics;
};

// Optimized image loading hook
export const useOptimizedImage = (src, options = {}) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
    src: null
  });

  const { 
    lazy = true, 
    placeholder = null,
    quality = 'auto',
    format = 'auto'
  } = options;

  const { elementRef, hasIntersected } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (!src || (lazy && !hasIntersected)) return;

    const img = new Image();
    
    img.onload = () => {
      setImageState({
        loaded: true,
        error: false,
        src: img.src
      });
    };

    img.onerror = () => {
      setImageState({
        loaded: false,
        error: true,
        src: placeholder
      });
    };

    // Progressive loading: start with low quality, then load high quality
    if (quality === 'progressive') {
      const lowQualitySrc = src.replace(/\.(jpg|jpeg|png|webp)$/i, '_low.$1');
      img.src = lowQualitySrc;
      
      setTimeout(() => {
        if (imageState.loaded) {
          img.src = src;
        }
      }, 100);
    } else {
      img.src = src;
    }
  }, [src, hasIntersected, lazy, placeholder, quality]);

  return {
    ...imageState,
    elementRef,
    shouldLoad: lazy ? hasIntersected : true
  };
};

// Debounced resize handler
export const useDebounceResize = (callback, delay = 250) => {
  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        callbackRef.current();
      }, delay);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);
};

// Network status hook
export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    online: navigator.onLine,
    effectiveType: null,
    downlink: null,
    rtt: null,
    saveData: false
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      setNetworkStatus({
        online: navigator.onLine,
        effectiveType: connection?.effectiveType || null,
        downlink: connection?.downlink || null,
        rtt: connection?.rtt || null,
        saveData: connection?.saveData || false
      });
    };

    const handleOnline = () => setNetworkStatus(prev => ({ ...prev, online: true }));
    const handleOffline = () => setNetworkStatus(prev => ({ ...prev, online: false }));

    updateNetworkStatus();

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkStatus);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, []);

  return networkStatus;
};