   import React, { useState, useEffect } from 'react';
    import { debounce } from 'lodash';
    import './Home.css';
    import Spline from '@splinetool/react-spline';
    import HomeSection2 from './section2/HomeSection2.jsx';
    import Section3Home from './section3/Section3Home.jsx';
   
    import { Link } from 'react-router-dom';

    const Model3D = ({ mousePosition }) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const [loadError, setLoadError] = useState(false);

      const Fallback3D = () => (
        <div className="fallback-3d">
          <div className="fallback-object">
            <div className="fallback-face front">💻</div>
            <div className="fallback-face back">🚀</div>
            <div className="fallback-face right">⚡</div>
            <div className="fallback-face left">🎯</div>
            <div className="fallback-face top">💡</div>
            <div className="fallback-face bottom">🔧</div>
          </div>
        </div>
      );

      useEffect(() => {
        const loadSpline = async () => {
          try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsLoaded(true);
          } catch (error) {
            console.error('Failed to load Spline scene:', error);
            setLoadError(true);
            setIsLoaded(true);
          }
        };
        loadSpline();
      }, []);

      return (
        <div className="model-container">
          <div className={`spline-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
            {loadError ? (
              <Fallback3D />
            ) : (
              <Spline scene="https://prod.spline.design/iucZxbXCECPQUrHF/scene.splinecode" />
            )}
          </div>
          {loadError && (
            <div className="error-indicator">
              <p>Using fallback 3D animation</p>
            </div>
          )}
        </div>
      );
    };

    const Homepage = () => {
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      const [scrollY, setScrollY] = useState(0);
      const [currentText, setCurrentText] = useState(0);
      const [isTyping, setIsTyping] = useState(true);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const animatedTexts = [
        "Undergraduate",
        "Full Stack Developer",
        "Software Engineer",
        "Problem Solver"
      ];

      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        const handleMouseMove = debounce((e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const x = (clientX / innerWidth - 0.5) * 2;
          const y = -(clientY / innerHeight - 0.5) * 2;
          setMousePosition({ x, y });
        }, 100);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          handleMouseMove.cancel();
        };
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentText((prev) => (prev + 1) % animatedTexts.length);
            setIsTyping(true);
          }, 500);
        }, 3000);
        return () => clearInterval(interval);
      }, []);

      const techStack = [
        { name: 'React', icon: '⚛️', color: '#61DAFB' },
        { name: 'HTML', icon: '🌐', color: '#E34F26' },
        { name: 'Java', icon: '☕', color: '#F89820' },
        { name: 'Python', icon: '🐍', color: '#3776AB' },
        { name: 'C++', icon: '⚡', color: '#00599C' },
        { name: 'MEAN', icon: '🔥', color: '#4CAF50' }
      ];

      const socialLinks = {
        facebook: "https://www.facebook.com/hesh.an.391?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/he_sh_02?igsh=MTIweHB6c3hmemtoNQ==",
        linkedin: "https://www.linkedin.com/in/heshan-jayasekara-037b92312",
        pinterest: "https://www.pinterest.com/hmjayasekara/"
      };

      const downloadCV = () => {
        window.open('/path-to-your-cv.pdf', '_blank');
      };

      return (
        <div className="homepage">
          <nav className="navbar">
            <div className="navbar-container">
              <div className="logo">Heshan Jayasekara</div>
              <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>                
                <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
              <button
                className="mobile-menu-btn"
                aria-label="Toggle mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>

          <section className="hero-section">
            <div className="hero-container">
              <div className="hero-content">
                <div className="hero-greeting">Hello, I'm</div>
                <h1 className="hero-title">
                  <span className="hero-name">Heshan Jayasekara</span>
                  <br />
                  <span className={`animated-text ${isTyping ? 'typing' : 'deleting'}`}>
                    {animatedTexts[currentText]}
                  </span>
                </h1>
                <p className="hero-description">
                  Passionate undergraduate student at SLIIT pursuing BSc (Hons) in Information Technology Specialising in Software Engineering.
                  Dedicated to crafting innovative digital solutions and building the future through code.
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn-primary">View My Projects</a>
                  <button onClick={downloadCV} className="btn-secondary">
                    <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </button>
                </div>
                <div className="tech-stack">
                  <div className="tech-label">Tech Stack:</div>
                  <div className="tech-icons">
                    {techStack.map((tech, index) => (
                      <div key={tech.name} className="tech-item" style={{'--delay': `${index * 0.1}s`}}>
                        <span className="tech-icon" style={{color: tech.color}}>{tech.icon}</span>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="social-links">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className={`social-link ${platform}`}
                      title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${platform} profile`}
                    >
                      {platform === 'facebook' && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )}
                      {platform === 'instagram' && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )}
                      {platform === 'linkedin' && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {platform === 'pinterest' && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hero-model" style={{
                transform: `translateY(${scrollY * 0.2}px) rotateY(${mousePosition.x * 5}deg)`
              }}>
                <Model3D mousePosition={mousePosition} />
              </div>
            </div>
            <div className="bg-effects">
              <div className="bg-blob-1"></div>
              <div className="bg-blob-2"></div>
              <div className="floating-element floating-1"></div>
              <div className="floating-element floating-2"></div>
              <div className="floating-element floating-3"></div>
            </div>
            <div className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-dot"></div>
              </div>
            </div>
          </section>

          <HomeSection2 />
          <Section3Home />
        </div>
      );
    };

    

export default Homepage;