import React from 'react';

const ProjectCard = ({ project, isFeatured }) => {

  const renderVisual = () => {
    if (project.title === "FORENSIQ") {
      return (
        <div className="artwork forensiq-artwork">
          <div className="grid-bg"></div>
          <div className="shield-container">
            <div className="shield-outer"></div>
            <div className="shield-inner"></div>
            <div className="scan-line"></div>
          </div>
          <div className="data-stream s1"></div>
          <div className="data-stream s2"></div>
          <div className="data-stream s3"></div>
          <div className="threat-node t1"></div>
          <div className="threat-node t2"></div>
          <div className="threat-node t3"></div>
        </div>
      );
    } else if (project.title === "NEARA") {
      return (
        <div className="artwork neara-artwork">
          <div className="map-base"></div>
          <div className="radar-circle c1"></div>
          <div className="radar-circle c2"></div>
          <div className="radar-circle c3"></div>
          <div className="location-marker">
            <div className="marker-dot"></div>
          </div>
          <div className="service-node n1"></div>
          <div className="service-node n2"></div>
          <div className="service-node n3"></div>
        </div>
      );
    } else if (project.title === "GYMKHANA MANAGEMENT SYSTEM") {
      return (
        <div className="artwork gymkhana-artwork">
          <div className="field-bg"></div>
          <div className="field-lines">
            <div className="center-circle"></div>
            <div className="half-line"></div>
          </div>
          <div className="event-rings">
            <div className="ring r1"></div>
            <div className="ring r2"></div>
            <div className="ring r3"></div>
          </div>
          <div className="motion-streak s1"></div>
          <div className="motion-streak s2"></div>
        </div>
      );
    } else if (project.title === "TELECOM CHURN PREDICTION") {
      return (
        <div className="artwork churn-artwork">
          <div className="grid-bg"></div>
          <div className="trend-graph">
            <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="graph-svg">
              <path d="M0,100 L30,80 L60,60 L90,70 L120,40 L150,50 L180,20 L200,30 L200,100 Z" className="graph-area" />
              <path d="M0,100 L30,80 L60,60 L90,70 L120,40 L150,50 L180,20 L200,30" className="graph-line" />
              <circle cx="60" cy="60" r="3" className="graph-point delay-1" />
              <circle cx="120" cy="40" r="3" className="graph-point delay-2" />
              <circle cx="180" cy="20" r="3" className="graph-point delay-3" />
            </svg>
          </div>
          <div className="churn-bar b1"></div>
          <div className="churn-bar b2"></div>
          <div className="churn-bar b3"></div>
          <div className="churn-bar b4"></div>
        </div>
      );
    } else if (project.title === "CAREERSYNC") {
      return (
        <div className="artwork careersync-artwork">
          <div className="grid-bg"></div>
          <div className="trend-graph">
            <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="graph-svg">
              <path d="M0,100 L40,70 L80,85 L140,30 L200,45 L200,100 Z" className="graph-area" />
              <path d="M0,100 L40,70 L80,85 L140,30 L200,45" className="graph-line" />
              <circle cx="40" cy="70" r="3" className="graph-point delay-1" />
              <circle cx="80" cy="85" r="3" className="graph-point delay-2" />
              <circle cx="140" cy="30" r="3" className="graph-point delay-3" />
              <circle cx="200" cy="45" r="3" className="graph-point delay-4" />
            </svg>
          </div>
          <div className="abstract-profile"></div>
        </div>
      );
    }
    
    return <div className="generic-graphic"></div>;
  };

  return (
    <div className={`project-card ${isFeatured ? 'featured' : ''}`}>
      
      {/* Project Visual Area */}
      <div className="project-visual">
        <div className={`abstract-visual ${project.visual}`}>
          <div className="visual-overlay"></div>
          {renderVisual()}
        </div>
      </div>

      {/* Project Info Area */}
      <div className="project-info">
        <div className="project-meta">
          <span className="project-number">0{project.id}</span>
          <span className="project-category">{project.category}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-desc">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
              VIEW PROJECT
            </a>
          )}
          {project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-icon">
              GITHUB &rarr;
            </a>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;
