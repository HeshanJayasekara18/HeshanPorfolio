import './HomeSection2.css';
import React from 'react';
import myimg from '../../images/myimg.jpg'; // Adjust the path as necessary

const HomeSection2 = () => {
  return (
    <section className="stats-section">
      {/* Animated background elements */}
      <div className="background-overlay">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className="section-container">
        {/* Profile Image Section */}
        <div className="image-container">
          <div className="image-glow-wrapper">
            <img src={myimg} alt="Heshan Jayasekara" className="profile-image" />
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* Stats and Education Section */}
        <div className="stats-container">
          <div className="education-info">
            <h3 className="education-title">Currently Studying at</h3>
            <div className="university-name">SLIIT</div>
            <div className="degree-info">BSc (Hons) in Information Technology Specialising in Software Engineering</div>
          </div>

          <div className="stats-grid">
            {[
              { number: "5+", label: "Projects" },
              { number: "6+", label: "Technologies" },
              { number: "Software Engineering", label: "Specialising" },
              { number: "3rd Year", label: "Undergraduate" }
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-glow"></div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;