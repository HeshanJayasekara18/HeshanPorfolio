import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import './Home.css';
import HomeSection2 from './section2/HomeSection2.jsx';
import Section3Home from './section3/Section3Home.jsx';
import NavBar from '../nav-bar/NavBar.jsx';
import AboutPage from '../about/About.jsx';
import Contact from '../contact/Contact.jsx';
import dockericon from '../images/tech_icons/dockerimg.png';
import aspNetcoreicon from '../images/tech_icons/asp.netimg.png';
import azureicon from '../images/tech_icons/azureimg.png';
import htmlicon from '../images/tech_icons/htmlimg.png';
import javaicon from '../images/tech_icons/javaimg.png';
import nodejsicon from '../images/tech_icons/nodejsimg.png';
import pythonicon from '../images/tech_icons/pythonimg.png';
import reacticon from '../images/tech_icons/reactimg.png';
import heroPhoto from '../images/myimg.png';



const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const animatedTexts = [
    "Undergraduate",
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver"
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move handler with debounce
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

  // Text animation with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % animatedTexts.length);
        setIsTyping(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  const techStack = [
    { name: 'React', src: reacticon, color: '#61DAFB' },
    { name: 'HTML', src: htmlicon, color: '#E34F26' },
    { name: 'Java', src: javaicon, color: '#F89820' },
    { name: 'Python', src: pythonicon, color: '#3776AB' },
    { name: 'ASP.Net Core', src: aspNetcoreicon, color: '#00599C' },
    { name: 'Node js', src: nodejsicon, color: '#4CAF50' },
    { name: 'Docker', src: dockericon, color: '#2496ED' },
    { name: 'Azure', src: azureicon, color: '#0089D6' }  
  ];

  const socialLinks = {
    facebook: "https://www.facebook.com/hesh.an.391?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/he_sh_02?igsh=MTIweHB6c3hmemtoNQ==",
    linkedin: "https://www.linkedin.com/in/heshan-jayasekara-037b92312",
    pinterest: "https://www.pinterest.com/hmjayasekara/"
  };

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1vqvmlZUrCYWZiN1py2DcuruOdzZV3aET/view?usp=sharing', '_blank');
  };

  return (
    <div className="homepage" id="home">
      <NavBar />

      <section className="hero-section">
        {/* Big typography - solid black, BEHIND image */}
        <div className="hero-typography hero-typography--base">
          <div className="hero-text-row hero-text-row--1">
            <span className="hero-big-text">I'M A</span>
          </div>
          <div className="hero-text-row hero-text-row--2">
            <span className="hero-big-text">SOFTWARE</span>
          </div>
          <div className="hero-text-row hero-text-row--3">
            <span className="hero-big-text">ENGINEER</span>
          </div>
        </div>

        {/* Person photo overlaid in center */}
        <div className="hero-photo-wrapper">
          <img src={heroPhoto} alt="Heshan Jayasekara" className="hero-photo" />
        </div>

        {/* White-outline text layer ABOVE image — visible on the person */}
        <div className="hero-typography hero-typography--overlay" aria-hidden="true">
          <div className="hero-text-row hero-text-row--1">
            <span className="hero-big-text hero-big-text--white-outline">I'M A</span>
          </div>
          <div className="hero-text-row hero-text-row--2">
            <span className="hero-big-text hero-big-text--white-outline">SOFTWARE</span>
          </div>
          <div className="hero-text-row hero-text-row--3">
            <span className="hero-big-text hero-big-text--white-outline">ENGINEER</span>
          </div>
        </div>

        {/* Bio Chat Bubble */}
        <div className="hero-bio-bubble-wrapper">
          <div className="hero-bio-bubble">
            <h3 className="bubble-greeting">Hi, I'm Heshan!</h3>
            <p className="bubble-text">
              I'm a <strong>Software Engineer</strong> who designs and builds high-performance web applications & AI Solutions from me.
            </p>
            <span className="bubble-footer">Feel free to contact me!</span>
            <svg className="bubble-tail" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 40,0 Q 40,40 0,100 Q 70,70 100,0 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Decorative diamond/cross accent */}
        <div className="hero-diamond hero-diamond--1"></div>
        <div className="hero-diamond hero-diamond--2"></div>

        {/* Bottom info bar */}
        <div className="hero-bottom-bar">
          <div className="hero-bottom-left">
            <div className="hero-greeting-tag">Hello, I'm</div>
            <div className="hero-name-tag">Heshan Jayasekara</div>
            <div className="hero-role-tag">
              <span className={`hero-animated-role ${isTyping ? 'typing' : 'deleting'}`}>
                {animatedTexts[currentText]}
              </span>
            </div>
          </div>
          <div className="hero-bottom-center">
            <div className="scroll-cta" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>SCROLL DOWN</span>
              <div className="scroll-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="hero-bottom-right">
            <div className="hero-buttons-row">
              <a href="#projects" className="btn-primary">View Projects</a>
              <button onClick={downloadCV} className="btn-secondary">
                <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
            </div>
            
          </div>
        </div>
      </section>
      
      <HomeSection2 />
      <Section3Home />
      <AboutPage />
      <Contact />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/94763290630"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-tooltip">Say hi to Heshan 👋</span>
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default Homepage;