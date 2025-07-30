import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const CompactContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

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

  // Real form submission using Formspree (free service)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('sending');
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
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

  // Alternative: Email client submission
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

  return (
    <div style={styles.container} id="contact">
      <div style={styles.header}>
        <h2 style={styles.title}>Get In <span style={styles.accent}>Touch</span></h2>
        <p style={styles.subtitle}>I'm always excited to discuss new opportunities and innovative projects. 
              Feel free to reach out through any of these channels.</p>
      </div>

      <div style={styles.content}>
        {/* Contact Info - Left Side */}
        <div style={styles.infoPanel}>
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
                >
                  <div style={styles.iconWrapper}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={styles.contactLabel}>{method.label}</div>
                    <div style={styles.contactValue}>{method.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <div style={styles.responseInfo}>
            <div style={styles.responseIndicator}>
              <Clock size={14} />
              <span>Usually responds within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Contact Form - Right Side */}
        <div style={styles.form}>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                style={{...styles.input, ...(errors.name ? styles.inputError : {})}}
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
                style={{...styles.input, ...(errors.email ? styles.inputError : {})}}
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
              style={{...styles.input, ...(errors.subject ? styles.inputError : {})}}
            />
            {errors.subject && <span style={styles.error}>{errors.subject}</span>}
          </div>

          <div style={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message *"
              rows={4}
              style={{...styles.textarea, ...(errors.message ? styles.inputError : {})}}
            />
            {errors.message && <span style={styles.error}>{errors.message}</span>}
          </div>

          <div style={styles.buttonGroup}>
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                ...styles.submitBtn,
                ...(status === 'success' ? styles.successBtn : {}),
                ...(status === 'error' ? styles.errorBtn : {}),
                ...(status === 'sending' ? styles.disabledBtn : {})
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

            <button
              type="button"
              onClick={handleEmailSubmit}
              style={styles.emailBtn}
            >
              <Mail size={18} />
              Open Email Client
            </button>
          </div>

          {status === 'success' && (
            <div style={{...styles.statusMsg, ...styles.successMsg}}>
              <CheckCircle size={16} />
              Message sent successfully!
            </div>
          )}

          {status === 'error' && (
            <div style={{...styles.statusMsg, ...styles.errorMsg}}>
              <AlertCircle size={16} />
              Failed to send. Please try email client or contact directly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    
    margin: '0 auto',
    padding: '2rem',
    background: 'linear-gradient(135deg, #080822ff 0%, #1a1a2e 100%)',
    borderRadius: '1rem',
    color: 'white',
    fontFamily: 'Inter, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  accent: {
    background: 'linear-gradient(45deg, #A78BFA, #F472B6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: '1rem'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '3rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem'
    }
  },
  infoPanel: {
    background: 'rgba(124, 58, 237, 0.1)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    height: 'fit-content'
  },
  infoTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: 'white'
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    background: 'rgba(124, 58, 237, 0.05)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.2s ease',
    ':hover': {
      background: 'rgba(124, 58, 237, 0.1)'
    }
  },
  iconWrapper: {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexShrink: 0
  },
  contactLabel: {
    fontSize: '0.75rem',
    color: '#9CA3AF',
    marginBottom: '0.125rem'
  },
  contactValue: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white'
  },
  responseInfo: {
    paddingTop: '1rem',
    borderTop: '1px solid rgba(124, 58, 237, 0.2)'
  },
  responseIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#9CA3AF'
  },
  form: {
    background: 'rgba(26, 26, 46, 0.8)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(124, 58, 237, 0.2)'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    background: 'rgba(15, 15, 35, 0.8)',
    color: 'white',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    background: 'rgba(15, 15, 35, 0.8)',
    color: 'white',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    resize: 'vertical',
    minHeight: '100px',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  inputError: {
    borderColor: '#EF4444'
  },
  error: {
    color: '#EF4444',
    fontSize: '0.75rem',
    marginTop: '0.25rem',
    display: 'block'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  submitBtn: {
    flex: 1,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
    color: 'white',
    fontWeight: '600',
    fontSize: '0.875rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease'
  },
  emailBtn: {
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(124, 58, 237, 0.5)',
    background: 'transparent',
    color: '#A78BFA',
    fontSize: '0.875rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease'
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
  statusMsg: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    marginTop: '1rem'
  },
  successMsg: {
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    color: '#10B981'
  },
  errorMsg: {
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#EF4444'
  }
};

export default CompactContact;