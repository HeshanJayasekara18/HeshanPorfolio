import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import './Section3Home.css';
import laundryprojectimg from '../../images/projectLandry.png';
import TouristAndTraval from '../../images/TouristAndTraval.png';
import portfolio from '../../images/portfolio.png';
import echannel from '../../images/echannel.png';
import clothingstore from '../../images/clothstore.png';
import dirtycloths from '../../images/dirtyclothshome.png';

const Section3Home = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Online Laundry Management System",
      tech: "MERN Stack",
      icon: "👕",
      shortDescription: "A comprehensive laundry management system with user authentication, order tracking, and payment integration.",
      fullDescription: "This is a full-stack web app built using the MERN stack (MongoDB, Express, React, Node). Users can book a laundry pickup online by filling out a form and choosing a convenient time. Then, a laundry agent visits their home, checks the weight of the clothes, picks them up, and delivers them after cleaning. The system supports different laundry packages, a basic admin panel where the admin can manage laundry packages, and features real-time notifications.",
      image: laundryprojectimg,
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe"],
      demoUrl: "#",
      githubUrl: "https://github.com/HeshanJayasekara18/DIRTYCLOTHS-Laundry-Project.git",
      status: "completed"
    },
    {
      id: 2,
      title: "Online Clothing Store - Verve",
      tech: ".Net Core, React",
      icon: "🛍️",
      shortDescription: "E-commerce platform with a Google Gemini API powered AI Fashion Assistant.",
      fullDescription: "Verve is a full-stack AI-powered online clothing store built with React (frontend) and ASP.NET Core (backend). It enables users to explore and purchase clothing items while offering secure Google authentication. The highlight feature is the AI Fashion Assistant powered by Google Gemini API — users can type natural prompts like 'I have a birthday party and need a frock, my size is XL', and the system intelligently suggests matching outfits. Deployed on Microsoft Azure via Docker, with frontend hosted on Vercel.",
      image: clothingstore,
      technologies: ["MongoDB", ".Net Core", "React", "Azure", "Docker", "Gemini API"],
      demoUrl: "https://online-clothing-store-umber.vercel.app/",
      githubUrl: "https://github.com/HeshanJayasekara18/OnlineClothingStore.git",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Tourist Travel Management System",
      tech: "MERN Stack",
      icon: "✈️",
      shortDescription: "Full-stack travel booking platform with destination browsing and hotel reservations.",
      fullDescription: "A comprehensive travel management system that allows users to browse destinations, book hotels, plan itineraries, and manage their travel experiences. The platform features an intuitive booking system with real-time availability, secure payment processing, and detailed travel guides. Admin features include destination management, booking oversight, and customer support tools.",
      image: TouristAndTraval,
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Payment Gateway"],
      demoUrl: "#",
      githubUrl: "https://github.com/HeshanJayasekara18/Tourist-Travel-Management-System.git",
      status: "completed"
    },
    {
      id: 4,
      title: "E-Channeling System",
      tech: "Java",
      icon: "⛑️",
      shortDescription: "Healthcare appointment booking system with doctor scheduling and patient management.",
      fullDescription: "A comprehensive healthcare management system built with Java that streamlines the appointment booking process. Features include doctor scheduling, patient management, medical record tracking, and automated notification systems. The system uses Java Swing for the GUI and MySQL for robust data management, ensuring secure handling of sensitive medical information.",
      image: echannel,
      technologies: ["Java", "MySQL", "Servlet", "JDBC"],
      demoUrl: "#",
      githubUrl: "https://github.com/HeshanJayasekara18/eChannelling-System.git",
      status: "completed"
    },
    {
      id: 5,
      title: "DirtyCloths Laundry Website",
      tech: "React",
      icon: "🧺",
      shortDescription: "Modern business profile website for a laundry service, featuring a clean UI and responsive React design.",
      fullDescription: "A professional business profile website developed for DirtyCloths Laundry using React. The site highlights the company’s premium laundry services, eco-friendly practices, and modern aesthetics. It includes sections such as Home, About, Services, and Contact, ensuring a seamless and responsive user experience. The project is hosted on Netlify for easy public access.",
      image: dirtycloths,
      technologies: ["React", "HTML", "CSS", "JavaScript", "Netlify"],
      demoUrl: "https://dirtyclothslaundry-midigama.netlify.app/",
      githubUrl: "https://github.com/HeshanJayasekara18/DITYCLOTHS_App.git",
      status: "in progress"
    },
    {
      id: 6,
      title: "My Portfolio Website",
      tech: "React",
      icon: "🧑‍🦱",
      shortDescription: "A personal portfolio website showcasing skills, projects, and experience.",
      fullDescription: "A modern, responsive portfolio website built with React showcasing my journey as a software developer. Features include project galleries, skill demonstrations, interactive components, and a clean, professional design. The site is optimized for performance and accessibility, with smooth animations and mobile-first responsive design.",
      image: portfolio,
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      demoUrl: "https://heshan-jayasekara.netlify.app/",
      githubUrl: "https://github.com/HeshanJayasekara18/HeshanPorfolio.git",
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

  const ProjectCard = ({ project, index, onClick }) => {
    return (
      <div 
        className={`fanned-project-card card-index-${index}`} 
        onClick={() => onClick(project)}
      >
        <div className="card-inner">
          <div className="card-image-wrapper">
            <img 
              src={project.image} 
              alt={project.title}
              className="card-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="card-placeholder" style={{display: 'none'}}>
              <span className="card-placeholder-icon">{project.icon}</span>
            </div>
            <div className="card-overlay">
              <div className="card-overlay-content">
                <span className="card-tech-main">{project.tech}</span>
                <h4 className="card-title">{project.title}</h4>
                <div className="card-tags">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="card-tag">{tech}</span>
                  ))}
                </div>
                <span className="card-view-btn">View Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-section" id="projects">
      {/* Decorative vertical texts */}
      <div className="vertical-decor vertical-left">A E S T H E T I C S</div>
      <div className="top-decor-right">W O R K .</div>

      <div className="projects-container">
        
        {/* Artistic Typography Header */}
        <div className="artistic-title-container">
          <h2 className="artistic-title">
            <span className="title-folio">pROJECTS</span>
            
          </h2>
          <div className="artistic-subtitle">
            <span className="subtitle-arrow">→</span> SELECTED PROJECTS by Heshan
          </div>
        </div>

        {/* Fanned Cards Stack Wrapper */}
        <div className="fanned-stack-wrapper">
          <div className="fanned-stack">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={openProjectModal}
              />
            ))}
          </div>
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