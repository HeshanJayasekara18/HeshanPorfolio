import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject required';
    if (!formData.message.trim()) newErrors.message = 'Message required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/meozklon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:jayasekaravithanage18@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayasekaravithanage18@gmail.com',
      href: 'mailto:jayasekaravithanage18@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 329 0630',
      href: 'tel:+94763290630'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Malabe, Western Province, LK',
      href: 'https://maps.google.com/?q=Malabe,Western+Province,LK'
    }
  ];

  const getStyles = () => ({
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F172A 0%, #581C87 50%, #0F172A 100%)',
      padding: isMobile ? '0.5rem' : '1rem',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    },
    card: {
      background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: isMobile ? '1rem' : '1.5rem',
      border: '1px solid rgba(124, 58, 237, 0.2)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      overflow: 'hidden',
      width: '100%'
    },
    header: {
      textAlign: 'center',
      padding: isMobile ? '2rem 1rem' : '3rem 1.5rem',
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(219, 39, 119, 0.2) 100%)'
    },
    title: {
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'white',
      lineHeight: '1.2'
    },
    accent: {
      background: 'linear-gradient(45deg, #A78BFA, #F472B6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    subtitle: {
      color: '#D1D5DB',
      fontSize: isMobile ? '1rem' : '1.125rem',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      padding: isMobile ? '0 0.5rem' : '0'
    },
    content: {
      display: isMobile ? 'block' : 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '2fr 3fr',
      gap: isMobile ? '1.5rem' : '2rem',
      padding: isMobile ? '1rem' : '2rem'
    },
    leftPanel: {
      display: 'flex',
      flexDirection: 'column',
      order: isMobile ? 2 : 1
    },
    rightPanel: {
      display: 'flex',
      flexDirection: 'column',
      order: isMobile ? 1 : 2
    },
    infoCard: {
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: isMobile ? '1.25rem' : '1.5rem',
      border: '1px solid rgba(124, 58, 237, 0.2)',
      height: 'fit-content'
    },
    infoTitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: 'white'
    },
    contactList: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'column',
      gap: '1rem',
      marginBottom: '2rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '0.75rem' : '1rem',
      padding: isMobile ? '0.875rem' : '1rem',
      borderRadius: '0.75rem',
      background: 'rgba(55, 65, 81, 0.5)',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(75, 85, 99, 0.5)',
      width: '100%',
      boxSizing: 'border-box'
    },
    iconWrapper: {
      width: isMobile ? '2.25rem' : '2.5rem',
      height: isMobile ? '2.25rem' : '2.5rem',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #7C3AED, #E91E63)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      flexShrink: 0
    },
    contactLabel: {
      fontSize: '0.75rem',
      color: '#9CA3AF',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.25rem'
    },
    contactValue: {
      fontSize: isMobile ? '0.8rem' : '0.875rem',
      fontWeight: '500',
      color: 'white',
      wordBreak: 'break-all'
    },
    responseInfo: {
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(75, 85, 99, 0.5)'
    },
    responseIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: isMobile ? '0.8rem' : '0.875rem',
      color: '#9CA3AF'
    },
    formCard: {
      background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.5) 0%, rgba(30, 41, 59, 0.5) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: isMobile ? '1.25rem' : '1.5rem',
      border: '1px solid rgba(75, 85, 99, 0.5)'
    },
    formGrid: {
      display: isMobile ? 'block' : 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    input: {
      width: '100%',
      padding: isMobile ? '1rem' : '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid #4B5563',
      background: 'rgba(17, 24, 39, 0.7)',
      color: 'white',
      fontSize: isMobile ? '1rem' : '0.875rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      WebkitAppearance: 'none'
    },
    textarea: {
      width: '100%',
      padding: isMobile ? '1rem' : '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid #4B5563',
      background: 'rgba(17, 24, 39, 0.7)',
      color: 'white',
      fontSize: isMobile ? '1rem' : '0.875rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      resize: 'vertical',
      minHeight: isMobile ? '140px' : '120px',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      WebkitAppearance: 'none'
    },
    inputError: {
      borderColor: '#EF4444'
    },
    error: {
      color: '#F87171',
      fontSize: isMobile ? '0.8rem' : '0.75rem',
      marginTop: '0.5rem',
      display: 'block'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '0.75rem' : '1rem',
      marginTop: '1.5rem'
    },
    submitBtn: {
      flex: isMobile ? 'none' : 1,
      padding: isMobile ? '1rem 1.5rem' : '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      background: 'linear-gradient(45deg, #7C3AED, #E91E63)',
      color: 'white',
      fontWeight: '600',
      fontSize: isMobile ? '1rem' : '0.875rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      minHeight: isMobile ? '3rem' : 'auto'
    },
    emailBtn: {
      padding: isMobile ? '1rem' : '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid rgba(124, 58, 237, 0.5)',
      background: 'transparent',
      color: '#A78BFA',
      fontSize: isMobile ? '1rem' : '0.875rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      minHeight: isMobile ? '3rem' : 'auto'
    },
    emailBtnText: {
      display: isMobile ? 'none' : 'inline'
    },
    successBtn: {
      background: 'linear-gradient(45deg, #10B981, #059669)'
    },
    errorBtn: {
      background: 'linear-gradient(45deg, #EF4444, #DC2626)'
    },
    disabledBtn: {
      opacity: 0.7,
      cursor: 'not-allowed'
    },
    spinner: {
      width: '1rem',
      height: '1rem',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    successMsg: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: isMobile ? '1rem' : '0.75rem',
      borderRadius: '0.5rem',
      fontSize: isMobile ? '0.9rem' : '0.875rem',
      marginTop: '1rem',
      background: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      color: '#10B981'
    },
    errorMsg: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: isMobile ? '1rem' : '0.75rem',
      borderRadius: '0.5rem',
      fontSize: isMobile ? '0.9rem' : '0.875rem',
      marginTop: '1rem',
      background: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      color: '#EF4444'
    }
  });

  const styles = getStyles();

  return (
    <div style={styles.container } id='contact'>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          {/* Header */}
          <div style={styles.header}>
            <h2 style={styles.title}>
              Get In <span style={styles.accent}>Touch</span>
            </h2>
            <p style={styles.subtitle}>
              I'm always excited to discuss new opportunities and innovative projects. 
              Feel free to reach out through any of these channels.
            </p>
          </div>

          <div style={styles.content}>
            {/* Contact Form - First on Mobile */}
            <div style={styles.rightPanel}>
              <div style={styles.formCard}>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      style={{
                        ...styles.input,
                        ...(errors.name ? styles.inputError : {})
                      }}
                      onFocus={(e) => {
                        if (!errors.name) {
                          e.target.style.borderColor = '#7C3AED';
                          e.target.style.boxShadow = '0 0 0 2px rgba(124, 58, 237, 0.2)';
                        }
                      }}
                      onBlur={(e) => {
                        if (!errors.name) {
                          e.target.style.borderColor = '#4B5563';
                          e.target.style.boxShadow = 'none';
                        }
                      }}
                    />
                    {errors.name && <span style={styles.error}>{errors.name}</span>}
                  </div>

                  <div style={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email *"
                      style={{
                        ...styles.input,
                        ...(errors.email ? styles.inputError : {})
                      }}
                      onFocus={(e) => {
                        if (!errors.email) {
                          e.target.style.borderColor = '#7C3AED';
                          e.target.style.boxShadow = '0 0 0 2px rgba(124, 58, 237, 0.2)';
                        }
                      }}
                      onBlur={(e) => {
                        if (!errors.email) {
                          e.target.style.borderColor = '#4B5563';
                          e.target.style.boxShadow = 'none';
                        }
                      }}
                    />
                    {errors.email && <span style={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    style={{
                      ...styles.input,
                      ...(errors.subject ? styles.inputError : {})
                    }}
                    onFocus={(e) => {
                      if (!errors.subject) {
                        e.target.style.borderColor = '#7C3AED';
                        e.target.style.boxShadow = '0 0 0 2px rgba(124, 58, 237, 0.2)';
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.subject) {
                        e.target.style.borderColor = '#4B5563';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {errors.subject && <span style={styles.error}>{errors.subject}</span>}
                </div>

                <div style={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message *"
                    rows={isMobile ? 6 : 5}
                    style={{
                      ...styles.textarea,
                      ...(errors.message ? styles.inputError : {})
                    }}
                    onFocus={(e) => {
                      if (!errors.message) {
                        e.target.style.borderColor = '#7C3AED';
                        e.target.style.boxShadow = '0 0 0 2px rgba(124, 58, 237, 0.2)';
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.message) {
                        e.target.style.borderColor = '#4B5563';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {errors.message && <span style={styles.error}>{errors.message}</span>}
                </div>

                <div style={styles.buttonGroup}>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                    style={{
                      ...styles.submitBtn,
                      ...(status === 'sending' ? styles.disabledBtn : {}),
                      ...(status === 'success' ? styles.successBtn : {}),
                      ...(status === 'error' ? styles.errorBtn : {})
                    }}
                    onMouseEnter={(e) => {
                      if (status === 'idle') {
                        e.target.style.background = 'linear-gradient(45deg, #6D28D9, #DB2777)';
                        e.target.style.transform = 'scale(1.02)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (status === 'idle') {
                        e.target.style.background = 'linear-gradient(45deg, #7C3AED, #E91E63)';
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <div style={styles.spinner}></div>
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle size={18} />
                        Sent!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <AlertCircle size={18} />
                        Try Again
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  

              
                </div>

                {status === 'success' && (
                  <div style={styles.successMsg}>
                    <CheckCircle size={16} />
                    Message sent successfully!
                  </div>
                )}

                {status === 'error' && (
                  <div style={styles.errorMsg}>
                    <AlertCircle size={16} />
                    Failed to send. Please try email client or contact directly.
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info - Second on Mobile */}
            <div style={styles.leftPanel}>
              <div style={styles.infoCard}>
                <h3 style={styles.infoTitle}>Contact Information</h3>
                
                <div style={styles.contactList}>
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.href}
                        style={styles.contactItem}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(124, 58, 237, 0.2)';
                          e.target.style.borderColor = 'rgba(124, 58, 237, 0.5)';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                          e.target.style.borderColor = 'rgba(75, 85, 99, 0.5)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <div style={styles.iconWrapper}>
                          <Icon size={isMobile ? 16 : 18} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={styles.contactLabel}>{method.label}</div>
                          <div style={styles.contactValue}>{method.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div style={styles.responseInfo}>
                  <div style={styles.responseIndicator}>
                    <Clock size={16} style={{ color: '#A78BFA' }} />
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS keyframes for spinner animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 480px) {
    body {
      -webkit-text-size-adjust: 100%;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Contact;