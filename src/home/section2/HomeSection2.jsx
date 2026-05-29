import './HomeSection2.css';
import React from 'react';

const HomeSection2 = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/heshan-jayasekara-037b92312",
    instagram: "https://www.instagram.com/he_sh_02?igsh=MTIweHB6c3hmemtoNQ==",
    facebook: "https://www.facebook.com/hesh.an.391?mibextid=ZbWKwL"
  };

  return (
    <section className="stats-section">
      <div className="stats-section-container">
        
        {/* TOP ROW: Global Info & Statement */}
        <div className="stats-top-row">
          
          {/* Left Column: Globe & Socials */}
          <div className="stats-left-col">
            <div className="globe-info-wrapper">
              <svg className="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <p className="globe-text">
                Building digital solutions for clients all over the world
              </p>
            </div>
            
            <div className="stats-socials">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-circle linkedin-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-circle instagram-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-circle facebook-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column: Statement Text */}
          <div className="stats-right-col">
            <h2 className="statement-text">
              <span className="text-bright">I'm a results-driven software engineer passionate about crafting </span>
              <span className="text-muted">high-performance web systems, custom sytems, and intelligent digital experiences that grow businesses.</span>
            </h2>
          </div>
          
        </div>
        
        {/* BOTTOM ROW: 3 Columns Statistics */}
        <div className="stats-bottom-row">
          
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-meta">
              <span className="stat-dot"></span>
              <span className="stat-label">Project Done</span>
            </div>
            <div className="stat-underline"></div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">99%</div>
            <div className="stat-meta">
              <span className="stat-dot"></span>
              <span className="stat-label">Successful Rating</span>
            </div>
            <div className="stat-underline"></div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">2.5y</div>
            <div className="stat-meta">
              <span className="stat-dot"></span>
              <span className="stat-label">Active Experience</span>
            </div>
            <div className="stat-underline"></div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default HomeSection2;