import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
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
      value: '+94 12 345 6789',
      link: 'tel:+94123456789'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      link: 'https://maps.google.com/?q=Colombo,Sri Lanka'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/heshan-jayasekara-037b92312'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://www.facebook.com/hesh.an.391?mibextid=ZbWKwL',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/he_sh_02?igsh=MTIweHB6c3hmemtoNQ==',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/heshan-jayasekara-037b92312',
      color: '#0077B5'
    },
    {
      name: 'Pinterest',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      ),
      url: 'https://www.pinterest.com/hmjayasekara/',
      color: '#E60023'
    }
  ];

  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Heshan Jayasekara</div>
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link active">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-hero-description">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
              I'm always excited to work on new projects and challenges.
            </p>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="bg-effects">
          <div className="bg-blob-1"></div>
          <div className="bg-blob-2"></div>
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
          <div className="floating-element floating-3"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="contact-section-title">Let's Connect</h2>
              <p className="contact-section-description">
                Feel free to reach out through any of these channels. I'm always happy to discuss new opportunities, 
                collaborate on projects, or just have a chat about technology and innovation.
              </p>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-card"
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    <div className="contact-info-icon">{info.icon}</div>
                    <div className="contact-info-content">
                      <h3 className="contact-info-title">{info.title}</h3>
                      <p className="contact-info-value">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h3 className="contact-social-title">Follow Me</h3>
                <div className="contact-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      style={{ '--social-color': social.color }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="contact-section-title">Send a Message</h2>
              <p className="contact-section-description">
                Have a project in mind? Drop me a message and let's discuss how we can work together.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
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
                  <label htmlFor="email" className="form-label">Email Address</label>
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
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="send-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-footer-container">
          <div className="contact-footer-content">
            <p>&copy; 2024 Heshan Jayasekara. All rights reserved.</p>
            <p>Built with passion using React & modern web technologies</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%);
          color: white;
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
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #A78BFA;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, #A78BFA, #F472B6);
          border-radius: 1px;
        }

        /* Hero Section */
        .contact-hero {
          position: relative;
          padding: 8rem 0 4rem;
          overflow: hidden;
        }

        .contact-hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }

        .contact-hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(45deg, #F472B6, #A78BFA, #60A5FA);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-hero-description {
          font-size: 1.25rem;
          color: #D1D5DB;
          max-width: 40rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Background Effects */
        .bg-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-blob-1 {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 24rem;
          height: 24rem;
          background: rgba(124, 58, 237, 0.15);
          border-radius: 50%;
          filter: blur(3rem);
          animation: blobPulse 4s infinite;
        }

        .bg-blob-2 {
          position: absolute;
          bottom: 20%;
          right: 10%;
          width: 20rem;
          height: 20rem;
          background: rgba(236, 72, 153, 0.15);
          border-radius: 50%;
          filter: blur(3rem);
          animation: blobPulse 4s infinite 1s;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
        }

        .floating-1 {
          top: 15%;
          left: 5%;
          width: 1rem;
          height: 1rem;
          background: #7C3AED;
          animation: blobFloat 3s infinite;
        }

        .floating-2 {
          bottom: 30%;
          right: 15%;
          width: 1.5rem;
          height: 1.5rem;
          background: #EC4899;
          animation: blobFloat 3s infinite 1s;
        }

        .floating-3 {
          top: 40%;
          right: 5%;
          width: 0.75rem;
          height: 0.75rem;
          background: #60A5FA;
          animation: blobFloat 3s infinite 2s;
        }

        @keyframes blobPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        @keyframes blobFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Main Content */
        .contact-content {
          padding: 4rem 0;
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        .contact-section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #A78BFA, #F472B6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-section-description {
          color: #9CA3AF;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        /* Contact Information */
        .contact-info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          animation: slideUp 0.6s ease forwards;
          animation-delay: var(--delay);
          opacity: 0;
          transform: translateY(20px);
        }

        .contact-info-card:hover {
          background: rgba(124, 58, 237, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.2);
        }

        .contact-info-icon {
          font-size: 2rem;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(45deg, #7C3AED, #EC4899);
          border-radius: 0.75rem;
        }

        .contact-info-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: white;
        }

        .contact-info-value {
          color: #9CA3AF;
          font-size: 0.9rem;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Social Links */
        .contact-social {
          padding-top: 2rem;
          border-top: 1px solid rgba(124, 58, 237, 0.2);
        }

        .contact-social-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .contact-social-links {
          display: flex;
          gap: 1rem;
        }

        .contact-social-link {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--social-color);
          color: white;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .contact-social-link svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        .contact-social-link:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        /* Contact Form */
        .contact-form {
          background: rgba(26, 26, 46, 0.4);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.5rem;
          padding: 2rem;
          backdrop-filter: blur(8px);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: #D1D5DB;
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(15, 15, 35, 0.6);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 0.75rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #A78BFA;
          box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.1);
          background: rgba(15, 15, 35, 0.8);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
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
          border-radius: 0.75rem;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .form-submit:hover:not(:disabled) {
          background: linear-gradient(45deg, #6D28D9, #DB2777);
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(139, 92, 246, 0.25);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .form-submit.submitting {
          background: linear-gradient(45deg, #6D28D9, #DB2777);
        }

        .send-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .spinner {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .form-success {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 0.75rem;
          color: #86EFAC;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .success-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Footer */
        .contact-footer {
          padding: 2rem 0;
          border-top: 1px solid rgba(124, 58, 237, 0.2);
          background: rgba(15, 15, 35, 0.8);
        }

        .contact-footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .contact-footer-content {
          text-align: center;
          color: #9CA3AF;
        }

        .contact-footer-content p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
          .contact-hero-title {
            font-size: 2.5rem;
          }

          .contact-hero-description {
            font-size: 1rem;
          }

          .contact-hero {
            padding: 6rem 0 3rem;
          }

          .contact-grid {
            gap: 3rem;
          }

          .contact-section-title {
            font-size: 1.5rem;
          }

          .contact-info-card {
            padding: 1rem;
          }

          .contact-info-icon {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.5rem;
          }

          .contact-social-links {
            justify-content: center;
          }

          .contact-social-link {
            width: 2.5rem;
            height: 2.5rem;
          }

          .contact-social-link svg {
            width: 1.25rem;
            height: 1.25rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.75rem;
          }

          .form-submit {
            padding: 0.75rem 1.5rem;
          }

          .nav-links {
            display: none;
          }

          .bg-blob-1,
          .bg-blob-2 {
            width: 16rem;
            height: 16rem;
          }
        }

        /* Tablet Portrait */
        @media (min-width: 481px) and (max-width: 768px) {
          .contact-hero-title {
            font-size: 3rem;
          }

          .contact-hero-description {
            font-size: 1.1rem;
          }

          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bg-blob-1,
          .bg-blob-2 {
            width: 20rem;
            height: 20rem;
          }
        }

        /* Tablet Landscape and Desktop */
        @media (min-width: 769px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .contact-hero-title {
            font-size: 4rem;
          }

          .contact-hero-description {
            font-size: 1.3rem;
          }
        }

        /* Large Desktop */
        @media (min-width: 1025px) {
          .contact-hero {
            padding: 10rem 0 6rem;
          }

          .contact-content {
            padding: 6rem 0;
          }

          .contact-grid {
            gap: 6rem;
          }

          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .bg-blob-1,
          .bg-blob-2,
          .floating-element,
          .spinner {
            animation: none !important;
          }

          .contact-info-card {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .contact-info-card {
            border-width: 2px;
          }

          .form-input,
          .form-textarea {
            border-width: 2px;
          }

          .contact-footer {
            border-top-width: 2px;
          }
        }

        /* Print Styles */
        @media print {
          .bg-effects,
          .floating-element {
            display: none;
          }

          .contact-page {
            background: white;
            color: black;
          }

          .gradient-text,
          .contact-section-title {
            color: black;
          }

          .form-submit {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;