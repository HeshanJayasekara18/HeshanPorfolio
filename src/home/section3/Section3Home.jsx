import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from 'lucide-react';
import './Section3Home.css';
import laundryprojectimg from '../../images/projectLandry.png';
import TouristAndTraval from '../../images/TouristAndTraval.png';
import portfolio from '../../images/portfolio.png';
import echannel from '../../images/echannel.png';

const Section3Home = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Online Laundry Management System",
      tech: "MERN Stack",
      icon: "👕",
      shortDescription: "A comprehensive laundry management system with user authentication, order tracking, and payment integration.",
      fullDescription: "This is a sample full-stack web app I built using the MERN stack (MongoDB, Express, React, Node). The idea is simple: users can book a laundry pickup online by filling out a form and choosing a convenient time. Then, a laundry agent visits their home, checks the weight of the clothes, picks them up, and delivers them after cleaning. The system supports different laundry packages like: Full Package (wash + dry), Wash Package (wash only), Dry Package (drying only), Heavy Package (for big orders). Users can view their current and past orders, and also check About Us and Contact Us info. There's also a basic admin panel (with predefined login) where the admin can manage laundry packages. Features real-time notifications and admin dashboard.",
      image: laundryprojectimg,
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe"],
      demoUrl: "#",
      githubUrl: "https://github.com/HeshanJayasekara18/DIRTYCLOTHS-Laundry-Project.git",
      status: "completed"
    },
    {
      id: 2,
      title: "Tourist Travel Management System",
      tech: "MERN Stack",
      icon: "✈️",
      shortDescription: "Full-stack travel booking platform with destination browsing and hotel reservations.(University Project)",
      fullDescription: "A comprehensive travel management system that allows users to browse destinations, book hotels, plan itineraries, and manage their travel experiences. The platform features an intuitive booking system with real-time availability, secure payment processing, and detailed travel guides. Admin features include destination management, booking oversight, and customer support tools.",
      image: TouristAndTraval,
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Payment Gateway"],
      demoUrl: "#",
      githubUrl: "https://github.com/HeshanJayasekara18/Tourist-Travel-Management-System.git",
      status: "completed"
    },
    {
      id: 3,
      title: "E-Channeling System",
      tech: "Java",
      icon: "⛑️",
      shortDescription: "Healthcare appointment booking system with doctor scheduling and patient management.(University Project)",
      fullDescription: "A comprehensive healthcare management system built with Java that streamlines the appointment booking process. Features include doctor scheduling, patient management, medical record tracking, and automated notification systems. The system uses Java Swing for the GUI and MySQL for robust data management, ensuring secure handling of sensitive medical information.",
      image: echannel,
      technologies: ["Java", "MySQL", "Servlet", "JDBC"],
      demoUrl: "#",
      githubUrl: "https://github.com/HeshanJayasekara18/eChannelling-System.git",
      status: "completed"
    },
    {
      id: 4,
      title: "My Portfolio Website",
      tech: "React",
      icon: "🧑‍🦱",
      shortDescription: "A personal portfolio website showcasing skills, projects, and experience.",
      fullDescription: "A modern, responsive portfolio website built with React showcasing my journey as a software developer. Features include project galleries, skill demonstrations, interactive components, and a clean, professional design. The site is optimized for performance and accessibility, with smooth animations and mobile-first responsive design.",
      image: portfolio,
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      hostUrl: "https://heshan-jayasekara.netlify.app/",
      githubUrl: "https://github.com/HeshanJayasekara18/HeshanPorfolio.git",
      status: "completed"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const ProjectCard = ({ project, onClick }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    const toggleDescription = (e) => {
      e.stopPropagation();
      setShowFullDescription(!showFullDescription);
    };

    return (
      <div className="project-card" onClick={() => onClick(project)}>
        <div className="project-card-image">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="project-placeholder" style={{display: 'none'}}>
            <span className="project-icon">{project.icon}</span>
          </div>
          <div className="project-overlay">
            <span className="view-details">View Full Details</span>
          </div>
        </div>
        
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <span className={`project-status status-${project.status}`}>
              {project.status}
            </span>
          </div>
          
          <div className="project-description">
            <p>
              {showFullDescription ? project.fullDescription : project.shortDescription}
              <button 
                className="see-more-btn"
                onClick={toggleDescription}
              >
                {showFullDescription ? ' Show less' : ' See more'}
              </button>
            </p>
          </div>
          
          <div className="project-tech">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-more">+{project.technologies.length - 3}</span>
            )}
          </div>
          
          <div className="project-footer">
            <span className="project-tech-main">{project.tech}</span>
            <div className="project-links">
              <a href={project.demoUrl} className="project-link" onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={16} />
                Demo
              </a>
              <a href={project.githubUrl} className="project-link" onClick={(e) => e.stopPropagation()}>
                <Github size={16} />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            Featured <span className="title-gradient">Projects</span>
          </h2>
          <p className="projects-description">
            A collection of academic and personal projects showcasing my journey in software development
          </p>
        </div>
        
        <div className="slider-container">
          <button className="slider-btn slider-btn-left" onClick={scrollLeft}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="projects-slider" ref={sliderRef}>
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={openProjectModal}
              />
            ))}
          </div>
          
          <button className="slider-btn slider-btn-right" onClick={scrollRight}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <X size={24} />
            </button>
            
            <div className="modal-image">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="modal-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="modal-placeholder" style={{display: 'none'}}>
                <span className="modal-icon">{selectedProject.icon}</span>
              </div>
            </div>
            
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className={`modal-status status-${selectedProject.status}`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <p className="modal-description">{selectedProject.fullDescription}</p>
              
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
                  <ExternalLink size={20} />
                  View Demo
                </a>
                <a 
                  href={selectedProject.githubUrl} 
                  className="modal-btn modal-btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Section3Home;