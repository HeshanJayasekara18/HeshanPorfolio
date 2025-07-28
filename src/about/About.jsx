import React, { useState, useEffect, useCallback } from 'react';
import myImg from '../images/my img2.jpg'; // Renamed to avoid spaces in file name
import { throttle } from 'lodash'; // Optional: Install lodash for throttling


const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Throttle scroll event for performance
  const handleScroll = useCallback(
    throttle(() => setScrollY(window.scrollY), 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const skills = [
    { name: 'Frontend Development', level: 90, icon: '🎨', color: '#61DAFB' },
    { name: 'Backend Development', level: 85, icon: '⚡', color: '#68D391' },
    { name: 'Database Management', level: 80, icon: '🗄️', color: '#9F7AEA' },
    { name: 'Mobile Development', level: 75, icon: '📱', color: '#F6AD55' },
    { name: 'UI/UX Design', level: 70, icon: '✨', color: '#FC8181' },
    { name: 'Project Management', level: 85, icon: '📊', color: '#4FD1C7' },
  ];

  const experiences = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer',
      company: 'Leaning Project',
      description:
        'Developing modern web applications using React, Node.js, and various databases. Working on multiple client projects with focus on user experience and performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      year: '2023 - 2024',
      title: 'Software Engineering Student',
      company: 'SLIIT',
      description:
        'Pursuing BSc (Hons) in Information Technology specializing in Software Engineering. Learning cutting-edge technologies and building innovative projects.',
      technologies: ['Java', 'Python', 'C++', 'Database Design'],
    },
    {
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'Learning Projects',
      description:
        'Built various personal projects to enhance skills in modern web development. Focused on responsive design and user interface development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
  ];

  const interests = [
    { name: 'Web Development', icon: '💻', description: 'Creating modern, responsive web applications' },
    { name: 'Mobile Apps', icon: '📱', description: 'Building cross-platform mobile solutions' },
    { name: 'UI/UX Design', icon: '🎨', description: 'Designing intuitive user experiences' },
    { name: 'Open Source', icon: '🚀', description: 'Contributing to open source projects' },
    { name: 'Learning', icon: '📚', description: 'Staying updated with latest technologies' },
    { name: 'Innovation', icon: '💡', description: 'Exploring new ideas and solutions' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <div style={styles.logo}>Heshan Jayasekara</div>
          <div style={{ ...styles.navLinks, ...(isMobileMenuOpen ? styles.navLinksOpen : {}) }}>
            <a
              href="/"
              style={styles.navLink}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Home"
            >
              Home
            </a>
            <a
              href="#about"
              style={styles.navLink}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="About"
            >
              About
            </a>
            {/* <a
              href="#projects"
              style={styles.navLink}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Projects"
            >
              Projects
            </a> */}
            <a
              href="/#/contact"
              style={styles.navLink}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Contact"
            >
              Contact
            </a>
          </div>
          <button
            style={styles.mobileMenuBtn}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg style={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <div style={styles.heroGreeting}>About Me</div>
            <h1 style={styles.heroTitle}>
              <span style={styles.heroName}>Passionate Developer</span>
              <br />
              <span style={styles.subTitle}>& Creative Problem Solver</span>
            </h1>
            <p style={styles.heroDescription}>
              I'm a dedicated undergraduate student pursuing BSc (Hons) in Information Technology
              at SLIIT, specializing in Software Engineering. With a passion for creating
              innovative digital solutions, I strive to build the future through code.
            </p>
          </div>
          <div style={{ ...styles.heroImage, transform: `translateY(${scrollY * 0.1}px)` }}>
            <div style={styles.imageContainer}>
              <img src={myImg} alt="Heshan Jayasekara" style={styles.profileImg} loading="lazy" />
              <div style={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section
        id="personal-info"
        style={{ ...styles.section, ...(isVisible['personal-info'] ? styles.sectionVisible : {}) }}
      >
        <div style={styles.sectionContainer}>
          <div style={styles.gridContainer}>
            <div style={styles.infoCard}>
              <h3 style={styles.cardTitle}>Personal Information</h3>
              <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Full Name:</span>
                  <span style={styles.infoValue}>Heshan Jayasekara</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Location:</span>
                  <span style={styles.infoValue}>Malabe, Sri Lanka</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Education:</span>
                  <span style={styles.infoValue}>BSc (Hons) IT - Software Engineering</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>University:</span>
                  <span style={styles.infoValue}>SLIIT</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Languages:</span>
                  <span style={styles.infoValue}>English, Sinhala</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Status:</span>
                  <span style={styles.infoValue}>Available for Opportunities</span>
                </div>
              </div>
            </div>
            <div style={styles.statsCard}>
              <h3 style={styles.cardTitle}>Quick Stats</h3>
              <div style={styles.statsGrid}>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>5+</div>
                  <div style={styles.statLabel}>Projects Completed</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>6</div>
                  <div style={styles.statLabel}>familier Technologies </div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>Good</div>
                  <div style={styles.statLabel}>Acadamic Perfomances</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>100%</div>
                  <div style={styles.statLabel}>Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ ...styles.section, ...(isVisible['skills'] ? styles.sectionVisible : {}) }}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.titleGradient}>Technical Skills</span>
            </h2>
            <p style={styles.sectionDescription}>
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>
          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                style={{
                  ...styles.skillCard,
                  ...(activeSkill === index ? styles.skillCardActive : {}),
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                role="button"
                tabIndex={0}
                aria-label={`Skill: ${skill.name}, ${skill.level}% proficiency`}
              >
                <div style={styles.skillHeader}>
                  <span style={{ ...styles.skillIcon, color: skill.color }}>{skill.icon}</span>
                  <h4 style={styles.skillName}>{skill.name}</h4>
                </div>
                <div style={styles.skillProgress}>
                  <div style={styles.progressBar}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                  <span style={styles.skillLevel}>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        style={{ ...styles.section, ...(isVisible['experience'] ? styles.sectionVisible : {}) }}
      >
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.titleGradient}>Experience & Education</span>
            </h2>
            <p style={styles.sectionDescription}>
              My journey in software development and continuous learning
            </p>
          </div>
          <div style={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineMarker}></div>
                <div style={styles.timelineContent}>
                  <div style={styles.timelineYear}>{exp.year}</div>
                  <h4 style={styles.timelineTitle}>{exp.title}</h4>
                  <div style={styles.timelineCompany}>{exp.company}</div>
                  <p style={styles.timelineDescription}>{exp.description}</p>
                  <div style={styles.timelineTech}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section
        id="interests"
        style={{ ...styles.section, ...(isVisible['interests'] ? styles.sectionVisible : {}) }}
      >
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.titleGradient}>Interests & Passions</span>
            </h2>
            <p style={styles.sectionDescription}>
              What drives me and keeps me motivated in the world of technology
            </p>
          </div>
          <div style={styles.interestsGrid}>
            {interests.map((interest, index) => (
              <div key={index} style={styles.interestCard}>
                <div style={styles.interestIcon}>{interest.icon}</div>
                <h4 style={styles.interestName}>{interest.name}</h4>
                <p style={styles.interestDescription}>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Let's Work Together</h2>
          <p style={styles.ctaDescription}>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div style={styles.ctaButtons}>
            <a href="#contact" style={styles.btnPrimary} aria-label="Get in touch">
              Get In Touch
            </a>
            <a
              href="/assets/cv.pdf" // Update with actual path
              style={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)',
    color: 'white',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  // Navigation
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    background: 'rgba(15, 15, 35, 0.9)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
  },
  navbarContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #A78BFA, #F472B6)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  navLinks: {
    display: 'none',
    gap: '2rem',
  },
  navLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(15, 15, 35, 0.95)',
    backdropFilter: 'blur(16px)',
    padding: '1rem',
    textAlign: 'center',
    borderTop: '1px solid rgba(139, 92, 246, 0.2)',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    transform: 'translateY(0)',
    opacity: 1,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    fontSize: '1rem',
    fontWeight: 500,
  },
  mobileMenuBtn: {
    display: 'block',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  menuIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  // Hero Section
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5rem',
    overflow: 'hidden',
  },
  heroContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    gap: '3rem',
  },
  heroContent: {
    zIndex: 10,
    order: 2,
    textAlign: 'center',
  },
  heroGreeting: {
    color: '#A78BFA',
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.05em',
    marginBottom: '1rem',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  heroName: {
    background: 'linear-gradient(to right, white, #E9D5FF, #A78BFA)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  subTitle: {
    background: 'linear-gradient(45deg, #F472B6, #A78BFA, #60A5FA)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  heroDescription: {
    fontSize: '1rem',
    color: '#D1D5DB',
    maxWidth: '32rem',
    lineHeight: 1.6,
    margin: '0 auto',
  },
  heroImage: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    order: 1,
  },
  imageContainer: {
    position: 'relative',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid rgba(167, 139, 250, 0.5)',
    boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  imageGlow: {
    position: 'absolute',
    inset: '-20px',
    
    borderRadius: '50%',
    opacity: 0.3,
    filter: 'blur(20px)',
    zIndex: 1,
  },
  // Sections
  section: {
    padding: '3rem 0',
    position: 'relative',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  },
  sectionVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  sectionContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  titleGradient: {
    background: 'linear-gradient(to right, #A78BFA, #F472B6)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  sectionDescription: {
    fontSize: '1rem',
    color: '#9CA3AF',
    maxWidth: '32rem',
    margin: '0 auto',
  },
  // Grid Layouts
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
  // Cards
  infoCard: {
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(26, 26, 46, 0.8))',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(124, 58, 237, 0.3)',
  },
  statsCard: {
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(26, 26, 46, 0.8))',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(236, 72, 153, 0.3)',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: 'white',
  },
  // Info Grid
  infoGrid: {
    display: 'grid',
    gap: '1rem',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '0.75rem 0',
    borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
  },
  infoLabel: {
    color: '#9CA3AF',
    fontWeight: 500,
    fontSize: '0.9rem',
  },
  infoValue: {
    color: 'white',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
  // Stats Grid
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #F472B6, #A78BFA)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    marginBottom: '0.5rem',
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: '0.8rem',
  },
  // Skills
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
  skillCard: {
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(26, 26, 46, 0.8))',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  skillCardActive: {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)',
  },
  skillHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  skillIcon: {
    fontSize: '1.5rem',
  },
  skillName: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 600,
  },
  skillProgress: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  progressBar: {
    flex: 1,
    height: '8px',
    background: 'rgba(124, 58, 237, 0.2)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 1s ease',
  },
  skillLevel: {
    color: '#9CA3AF',
    fontSize: '0.9rem',
    fontWeight: 600,
    minWidth: '40px',
  },
  // Timeline
  timeline: {
    position: 'relative',
    paddingLeft: '1rem',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '2rem',
    paddingLeft: '1.5rem',
  },
  timelineMarker: {
    position: 'absolute',
    left: '-6px',
    top: '0.5rem',
    width: '12px',
    height: '12px',
    background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
    borderRadius: '50%',
    boxShadow: '0 0 0 4px rgba(124, 58, 237, 0.2)',
  },
  timelineContent: {
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(26, 26, 46, 0.8))',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(124, 58, 237, 0.3)',
  },
  timelineYear: {
    color: '#A78BFA',
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  timelineTitle: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  timelineCompany: {
    color: '#F472B6',
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: '1rem',
  },
  timelineDescription: {
    color: '#D1D5DB',
    lineHeight: 1.6,
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  timelineTech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    background: 'rgba(124, 58, 237, 0.2)',
    color: '#A78BFA',
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    fontWeight: 500,
  },
  // Interests
  interestsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
  interestCard: {
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(26, 26, 46, 0.8))',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  interestIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  interestName: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  interestDescription: {
    color: '#9CA3AF',
    fontSize: '0.85rem',
    lineHeight: 1.5,
  },
  // CTA Section
  ctaSection: {
    padding: '3rem 0',
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1))',
    textAlign: 'center',
  },
  ctaContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(to right, #A78BFA, #F472B6)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  ctaDescription: {
    fontSize: '1rem',
    color: '#D1D5DB',
    marginBottom: '2rem',
  },
  ctaButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  btnPrimary: {
    padding: '1rem 2rem',
    background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
    border: 'none',
    borderRadius: '50px',
    fontWeight: 600,
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    minWidth: '180px',
    transition: 'all 0.3s ease',
  },
  btnSecondary: {
    padding: '1rem 2rem',
    border: '2px solid #7C3AED',
    background: 'transparent',
    borderRadius: '50px',
    fontWeight: 600,
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    minWidth: '180px',
    transition: 'all 0.3s ease',
  },
};

// CSS for hover effects (save in a separate file, e.g., About.module.css)
const cssStyles = `
  .navLink:hover {
    color: #A78BFA;
  }
  .btnPrimary:hover {
    background: linear-gradient(45deg, #6D28D9, #DB2777);
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(139, 92, 246, 0.25);
  }
  .btnSecondary:hover {
    background: rgba(124, 58, 237, 0.1);
    transform: translateY(-2px);
  }
  @media (min-width: 480px) {
    .ctaButtons {
      flex-direction: row;
      gap: 1.5rem;
      justify-content: center;
    }
  }
  @media (min-width: 768px) {
    .navLinks {
      display: flex;
    }
    .mobileMenuBtn {
      display: none;
    }
    .heroContainer {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
    .heroContent {
      order: 1;
      text-align: left;
    }
    .heroImage {
      order: 2;
    }
    .heroTitle {
      font-size: 3.5rem;
    }
    .heroDescription {
      font-size: 1.2rem;
    }
    .imageContainer {
      width: 300px;
      height: 300px;
    }
    .section {
      padding: 5rem 0;
    }
    .sectionHeader {
      margin-bottom: 4rem;
    }
    .sectionTitle {
      font-size: 2.5rem;
    }
    .sectionDescription {
      font-size: 1.25rem;
    }
    .gridContainer {
      grid-template-columns: 1fr 1fr;
    }
    .infoCard, .statsCard {
      padding: 2rem;
    }
    .cardTitle {
      font-size: 1.5rem;
    }
    .infoItem {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    .statsGrid {
      grid-template-columns: 1fr 1fr;
    }
    .statNumber {
      font-size: 2.5rem;
    }
    .statLabel {
      font-size: 0.9rem;
    }
    .skillsGrid {
      grid-template-columns: repeat(2, 1fr);
    }
    .skillName {
      font-size: 1.1rem;
    }
    .timeline {
      padding-left: 2rem;
    }
    .timelineItem {
      margin-bottom: 3rem;
      padding-left: 2rem;
    }
    .timelineTitle {
      font-size: 1.3rem;
    }
    .timelineDescription {
      font-size: 1rem;
    }
    .interestsGrid {
      grid-template-columns: repeat(2, 1fr);
    }
    .interestCard {
      padding: 2rem;
    }
    .interestIcon {
      font-size: 3rem;
    }
    .interestName {
      font-size: 1.2rem;
    }
    .interestDescription {
      font-size: 0.9rem;
    }
    .ctaSection {
      padding: 5rem 0;
    }
    .ctaTitle {
      font-size: 2.5rem;
    }
    .ctaDescription {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1024px) {
    .skillsGrid {
      grid-template-columns: repeat(3, 1fr);
    }
    .interestsGrid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default About;