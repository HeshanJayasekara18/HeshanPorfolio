import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import './Home.css';

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const splineRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = -(clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const onLoad = (spline) => {
    console.log('Spline loaded successfully');
    splineRef.current = spline;
    setIsLoaded(true);
    setLoadError(false);
  };

  const onError = (error) => {
    console.error('Spline loading error:', error);
    setLoadError(true);
    setIsLoaded(false);
  };

  useEffect(() => {
    if (splineRef.current && isLoaded) {
      try {
        // Apply rotation based on mouse position with smoother values
        const rotationX = mousePosition.y * 0.05;
        const rotationY = mousePosition.x * 0.05;
        
        // Try to set variables in Spline if your model supports it
        splineRef.current.setVariable('mouseX', mousePosition.x);
        splineRef.current.setVariable('mouseY', mousePosition.y);
      } catch (error) {
        // Fallback if variables aren't available - this is normal
        console.log('Spline variables not available, using fallback');
      }
    }
  }, [mousePosition, isLoaded]);

  // Fallback 3D-like component when Spline fails
  const Fallback3D = () => (
    <div className="fallback-3d">
      <div className="fallback-object">
        <div className="fallback-face front">🎨</div>
        <div className="fallback-face back">✨</div>
        <div className="fallback-face right">🚀</div>
        <div className="fallback-face left">💫</div>
        <div className="fallback-face top">⭐</div>
        <div className="fallback-face bottom">🌟</div>
      </div>
    </div>
  );

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Portfolio</div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="mobile-menu-btn">
            <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-greeting">Hello, I'm Heshan Jayasekara</div>
            <h1 className="hero-title">
              <span className="hero-title-gradient">Full Stack</span>
              <br />
              <span>Developer</span>
            </h1>
            <p className="hero-description">
              Crafting digital experiences that blend innovation with artistry. 
              Transforming ideas into visually stunning realities.
            </p>
            
            <div className="hero-buttons">
              <a href="#work" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right 3D Model */}
          <div className="model-container">
            <div className={`spline-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
              {loadError ? (
                <Fallback3D />
              ) : (
                <Spline scene="https://prod.spline.design/iucZxbXCECPQUrHF/scene.splinecode" />
  

              )}
            </div>
            
            
            
            {/* Error indicator */}
            {loadError && (
              <div className="error-indicator">
                <p>Using fallback 3D animation</p>
              </div>
            )}
            
            {/* Floating elements */}
            <div className="floating-element floating-1"></div>
            <div className="floating-element floating-2"></div>
            <div className="floating-element floating-3"></div>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="bg-effects">
          <div className="bg-blob-1"></div>
          <div className="bg-blob-2"></div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="work-section">
        <div className="work-container">
          <div className="work-header">
            <h2 className="work-title">
              Featured <span className="work-title-gradient">Work</span>
            </h2>
            <p className="work-description">
              A selection of projects that showcase my passion for creating exceptional digital experiences
            </p>
          </div>
          
          <div className="work-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="work-card">
                <div className="work-card-image">
                  🎨
                </div>
                <div className="work-card-content">
                  <h3 className="work-card-title">Project {item}</h3>
                  <p className="work-card-description">
                    Creative design solution with modern approach
                  </p>
                  <div className="work-card-footer">
                    <span className="work-card-tag">Web Design</span>
                    <a href="#" className="work-card-link">
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Homepage;