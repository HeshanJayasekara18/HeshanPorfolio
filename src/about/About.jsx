import React, { useState, useEffect } from 'react';
import './About.css';
import myimg2 from '../images/my img2.jpg'; // Ensure this path is correct

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);


 



  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="section-badge">About Me</div>
          <h2 className="about-title">
            Get to Know <span className="title-gradient">More About Me</span>
          </h2>
          <p className="about-subtitle">
            Passionate developer with a love for creating innovative solutions and bringing ideas to life through code.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Side - Image and Quick Info */}
          <div className="about-left">
            <div className={`about-image-container ${isVisible ? 'animate' : ''}`}>
              <div className="image-wrapper">
                {/* Replace with your actual image */}
                <img 
                  src= {myimg2 }
                  alt="Heshan Jayasekara" 
                  className="about-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image fails to load */}
                <div className="image-placeholder">
                  <span className="placeholder-icon">👨‍💻</span>
                  <p>Add Your Photo Here</p>
                </div>
              </div>
              <div className="image-glow"></div>
            </div>

           
          </div>

          {/* Right Side - Content */}
          <div className="about-right">
            <div className="about-text">
              <h3 className="about-subtitle-text">Who I Am</h3>
              <p className="about-paragraph">
                I'm Heshan Jayasekara, an undergraduate student at SLIIT pursuing BSc (Hons) in Information Technology, 
                specializing in Software Engineering. I'm passionate about creating innovative digital solutions and 
                building the future through code.
              </p>
              <p className="about-paragraph">
                My journey in technology started with curiosity and has evolved into a deep passion for full-stack 
                development. I love tackling complex problems and turning creative ideas into functional, user-friendly applications.
              </p>
              
            </div>

            </div>
            {/* Interests Section */}
         
          </div>
        
      </div>

      {/* Background Effects */}
      <div className="about-bg-effects">
        <div className="about-blob-1"></div>
        <div className="about-blob-2"></div>
        <div className="about-blob-3"></div>
      </div>
    </section>
  );
};

export default About;