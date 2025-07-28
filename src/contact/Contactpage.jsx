import React, { useState, useEffect } from 'react';

// Remove React Router imports for hash navigation
// import { Link, useNavigate } from 'react-router-dom';

const ContactPage = () => {
  // const navigate = useNavigate(); // Remove this for hash navigation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = -(clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Option 1: Formspree (Recommended)
      const response = await fetch('https://formspree.io/f/meozklon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Fallback: mailto link
      console.log('Form service failed, opening email client...');
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:heshan@example.com?subject=${subject}&body=${body}`;
      setSubmitStatus('email');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'heshan@example.com',
      link: 'mailto:heshan@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Negombo, Sri Lanka',
      link: 'https://maps.google.com/?q=Negombo,Sri+Lanka'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'heshan-jayasekara',
      link: 'https://www.linkedin.com/in/heshan-jayasekara-037b92312'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/hesh.an.391?mibextid=ZbWKwL', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/he_sh_02?igsh=MTIweHB6c3hmemtoNQ==', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/heshan-jayasekara-037b92312', icon: 'linkedin' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/hmjayasekara/', icon: 'pinterest' }
  ];

  return (
    <div className="contact-page">
      <style jsx>{`
        /* Base Styles */
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%);
          color: white;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          background: rgba(15, 15, 35, 0.9);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #A78BFA, #F472B6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-decoration: none;
        }

        .nav-links {
          display: none;
          gap: 2rem;
        }

        .nav-links.open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 15, 35, 0.9);
          backdrop-filter: blur(16px);
          padding: 1rem;
          text-align: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: #A78BFA;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .menu-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        /* Contact Header */
        .contact-header {
          padding: 8rem 0 4rem;
          text-align: center;
          position: relative;
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #A78BFA, #F472B6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: #9CA3AF;
          max-width: 32rem;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        /* Contact Content */
        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 5rem;
        }

        /* Contact Info Cards */
        .contact-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .contact-card {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(26, 26, 46, 0.8));
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.2);
          border-color: rgba(167, 139, 250, 0.5);
        }

        .contact-card:hover::before {
          left: 100%;
        }

        .contact-card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .contact-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #A78BFA;
          margin-bottom: 0.5rem;
        }

        .contact-card-value {
          color: white;
          font-size: 1rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-card:hover .contact-card-value {
          color: #F472B6;
        }

        /* Contact Form */
        .contact-form {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(26, 26, 46, 0.8));
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 1rem;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          color: #A78BFA;
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(15, 15, 35, 0.5);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 0.5rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #A78BFA;
          box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.1);
          background: rgba(15, 15, 35, 0.7);
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #6B7280;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(45deg, #7C3AED, #EC4899);
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }

        .form-submit:hover:not(:disabled) {
          background: linear-gradient(45deg, #6D28D9, #DB2777);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .submit-text {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .loading-spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Status Messages */
        .status-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          text-align: center;
        }

        .status-success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #4ADE80;
        }

        .status-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #F87171;
        }

        /* Social Links */
        .social-section {
          text-align: center;
          padding: 3rem 0;
          border-top: 1px solid rgba(124, 58, 237, 0.2);
        }

        .social-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .social-link svg {
          width: 1.5rem;
          height: 1.5rem;
          z-index: 2;
          transition: color 0.3s ease;
        }

        .social-link.facebook {
          background: linear-gradient(45deg, #1877F2, #42A5F5);
          color: white;
        }

        .social-link.instagram {
          background: linear-gradient(45deg, #E4405F, #F77737, #FCAF45);
          color: white;
        }

        .social-link.linkedin {
          background: linear-gradient(45deg, #0077B5, #00A0DC);
          color: white;
        }

        .social-link.pinterest {
          background: linear-gradient(45deg, #E60023, #FF6B6B);
          color: white;
        }

        .social-link:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        /* Background Effects */
        .bg-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(3rem);
          animation: float 6s ease-in-out infinite;
        }

        .bg-blob-1 {
          top: 20%;
          left: 10%;
          width: 20rem;
          height: 20rem;
          background: rgba(124, 58, 237, 0.1);
          animation-delay: 0s;
        }

        .bg-blob-2 {
          bottom: 20%;
          right: 10%;
          width: 16rem;
          height: 16rem;
          background: rgba(236, 72, 153, 0.1);
          animation-delay: 2s;
        }

        .bg-blob-3 {
          top: 50%;
          left: 60%;
          width: 12rem;
          height: 12rem;
          background: rgba(96, 165, 250, 0.1);
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
          
          .nav-links.open {
            display: flex;
            position: static;
            background: none;
            backdrop-filter: none;
            padding: 0;
            flex-direction: row;
          }
          
          .mobile-menu-btn {
            display: none;
          }

          .contact-content {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }

          .contact-info {
            grid-template-columns: 1fr 1fr;
          }

          .contact-title {
            font-size: 4rem;
          }

          .contact-subtitle {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-info {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 2.5rem;
          }

          .contact-form {
            padding: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-subtitle {
            font-size: 1rem;
          }

          .contact-card {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.25rem;
          }

          .social-links {
            gap: 1rem;
          }

          .social-link {
            width: 2.5rem;
            height: 2.5rem;
          }

          .social-link svg {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        /* Animation utilities */
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#/" className="logo">Heshan Jayasekara</a>
          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <a 
              href="#/" 
              className="nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#/about" 
              className="nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#/contact" 
              className="nav-link active" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          <button
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="bg-effects">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      {/* Contact Header */}
      <section className="contact-header">
        <div className="contact-container">
          <h1 className="contact-title animate-fade-in">Get In Touch</h1>
          <p className="contact-subtitle animate-slide-up">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
            I'm always excited to work on new projects and connect with fellow developers.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-container">
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="contact-card-icon">{info.icon}</span>
                <h3 className="contact-card-title">{info.title}</h3>
                <p className="contact-card-value">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="form-title">Send me a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Project collaboration, job opportunity, etc."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  required
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                <span className="submit-text">
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </span>
              </button>

              {submitStatus && (
                <div className={`status-message ${
                  submitStatus === 'success' ? 'status-success' : 
                  submitStatus === 'email' ? 'status-success' : 'status-error'
                }`}>
                  {submitStatus === 'success' && '✅ Message sent successfully! I\'ll get back to you soon.'}
                  {submitStatus === 'email' && '📧 Opening your email client to send the message...'}
                  {submitStatus === 'error' && '❌ Something went wrong. Please try again later.'}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="social-section">
          <h2 className="social-title">Connect With Me</h2>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`social-link ${social.icon}`}
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name} profile`}
              >
                {social.icon === 'facebook' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )}
                {social.icon === 'instagram' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social.icon === 'pinterest' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;