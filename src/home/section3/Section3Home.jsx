import React, { useState } from 'react';
import './Section3Home.css';
import projectLandry from "../../images/projectLandry.png"

const Section3Home = () => {
  // Project data - easy to add new projects here
  const projects = [
    {
      id: 1,
      title: "Online Laundry Management System",
      tech: "MEAN Stack",
      icon: "👕",
      description: "A comprehensive laundry management system with user authentication, order tracking, and payment integration. Features real-time notifications and admin dashboard.",
      image: projectLandry, // Fixed: Remove curly braces
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      demoUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "Tourist Travel Management System",
      tech: "MEAN Stack",
      icon: "✈️",
      description: "Full-stack travel booking platform with destination browsing, hotel reservations, and itinerary planning. Includes payment gateway integration.",
      image: null, // Add image URL when available
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      demoUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "E-Channeling System",
      tech: "Java",
      icon: "⛑️",
      description: "Healthcare appointment booking system with doctor scheduling, patient management, and medical record tracking. Built with Java Swing GUI.",
      image: null, // Add image URL when available
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      demoUrl: "#",
      githubUrl: "#",
      status: "completed"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="work-section">
        <div className="work-container">
          <div className="work-header">
            <h2 className="work-title">
              Featured <span className="work-title-gradient">Projects</span>
            </h2>
            <p className="work-description">
              A collection of academic and personal projects showcasing my journey in software development
            </p>
          </div>
          
          <div className="work-grid">
            {projects.map((project) => (
              <div key={project.id} className="work-card" onClick={() => openProjectModal(project)}>
                <div className="work-card-image">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="work-card-photo"
                      onError={(e) => {
                        console.error('Image failed to load:', project.image);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div className="work-card-placeholder">
                      <span className="work-card-icon">{project.icon}</span>
                    </div>
                  )}
                  {project.image && (
                    <div className="work-card-placeholder" style={{display: 'none'}}>
                      <span className="work-card-icon">{project.icon}</span>
                    </div>
                  )}
                  <div className="work-card-overlay">
                    <span className="work-card-view">View Details</span>
                  </div>
                </div>
                
                <div className="work-card-content">
                  <div className="work-card-header">
                    <h3 className="work-card-title">{project.title}</h3>
                    <span className={`work-card-status status-${project.status}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="work-card-description">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...` 
                      : project.description
                    }
                  </p>
                  
                  <div className="work-card-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="work-card-footer">
                    <span className="work-card-tag">{project.tech}</span>
                    <div className="work-card-links">
                      <a href={project.demoUrl} className="work-card-link" onClick={(e) => e.stopPropagation()}>
                        Demo →
                      </a>
                      <a href={project.githubUrl} className="work-card-link" onClick={(e) => e.stopPropagation()}>
                        Code →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            
            <div className="modal-image">
              {selectedProject.image ? (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-photo"
                  onError={(e) => {
                    console.error('Modal image failed to load:', selectedProject.image);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : (
                <div className="modal-placeholder">
                  <span className="modal-icon">{selectedProject.icon}</span>
                </div>
              )}
              {selectedProject.image && (
                <div className="modal-placeholder" style={{display: 'none'}}>
                  <span className="modal-icon">{selectedProject.icon}</span>
                </div>
              )}
            </div>
            
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className={`modal-status status-${selectedProject.status}`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-technologies">
                <h4>Technologies Used:</h4>
                <div className="modal-tech-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="modal-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <a 
                  href={selectedProject.demoUrl} 
                  className="modal-btn modal-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
                <a 
                  href={selectedProject.githubUrl} 
                  className="modal-btn modal-btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Section3Home;