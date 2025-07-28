import React, { useState, useEffect } from 'react';

const ContactPage = () => {
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

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'heshan@example.com',
      description: 'Drop me a line anytime',
      link: 'mailto:heshan@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 77 123 4567',
      description: 'Call for urgent matters',
      link: 'tel:+94771234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Negombo, Sri Lanka',
      description: 'Available for remote work',
      link: 'https://maps.google.com/?q=Negombo,Sri+Lanka'
    },
    {
      icon: '⏰',
      title: 'Availability',
      value: '9 AM - 6 PM',
      description: 'GMT+5:30 timezone',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/heshan-jayasekara-037b92312', icon: 'linkedin', color: 'from-blue-600 to-blue-700' },
    { name: 'Facebook', url: 'https://www.facebook.com/hesh.an.391?mibextid=ZbWKwL', icon: 'facebook', color: 'from-blue-500 to-blue-600' },
    { name: 'Instagram', url: 'https://www.instagram.com/he_sh_02?igsh=MTIweHB6c3hmemtoNQ==', icon: 'instagram', color: 'from-pink-500 to-orange-500' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/hmjayasekara/', icon: 'pinterest', color: 'from-red-500 to-red-600' }
  ];

  const quickLinks = [
    { title: 'Download Resume', icon: '📄', action: () => console.log('Download resume') },
    { title: 'View Portfolio', icon: '💼', action: () => window.open('#/', '_self') },
    { title: 'Schedule Call', icon: '📞', action: () => window.open('https://calendly.com', '_blank') },
    { title: 'Send WhatsApp', icon: '💬', action: () => window.open('https://wa.me/94771234567', '_blank') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-1/2 -right-20 animation-delay-2000"></div>
        <div className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse bottom-20 left-1/3 animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Heshan Jayasekara
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#/" className="hover:text-purple-400 transition-colors duration-300">Home</a>
              <a href="#/about" className="hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#/contact" className="text-purple-400">Contact</a>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a href="#/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-400 transition-colors">About</a>
            <a href="#/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-purple-400">Contact</a>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? I'm always excited to discuss new opportunities 
            and innovative ideas. Let's create something extraordinary together.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {quickLinks.map((link, index) => (
            <button
              key={link.title}
              onClick={link.action}
              className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {link.title}
              </div>
            </button>
          ))}
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-purple-200 transition-colors">
                  {info.title}
                </h3>
                <p className="text-lg font-medium mb-2 group-hover:text-white transition-colors">
                  {info.value}
                </p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {info.description}
                </p>
                
                {info.link && (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="absolute inset-0 z-20"
                    aria-label={`Contact via ${info.title}`}
                  />
                )}
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse" style={{ padding: '1px' }}>
                  <div className="w-full h-full rounded-3xl bg-slate-900/90"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Follow My Journey
            </span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg">Stay updated with my latest projects and insights</p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {social.icon === 'linkedin' && (
                  <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                
                {social.icon === 'facebook' && (
                  <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )}
                
                {social.icon === 'instagram' && (
                  <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                
                {social.icon === 'pinterest' && (
                  <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                )}
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Start Something Amazing?
            </span>
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Whether you have a project in mind, need technical consultation, or just want to say hello, 
            I'm always open to new connections and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:heshan@example.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="mr-2">📧</span>
              Send Email
            </a>
            <a
              href="tel:+94771234567"
              className="inline-flex items-center px-8 py-4 border border-purple-400 rounded-xl font-semibold text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">📞</span>
              Call Now
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;