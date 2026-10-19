import React from 'react';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Introduction & Primary Actions */}
        <div className="hero-content animate-fade-in-up">
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">
              <span className="status-indicator"></span>
              COMPUTER SCIENCE ENGINEER · CLASS OF 2027
            </span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm Sakshi Patil.<br />
            I build software for <span className="highlight-text">real-world problems.</span>
          </h1>
          
          <p className="hero-description">
            I build practical software applications and explore how AI can make them more useful. Focused on full-stack architecture, backend systems, and thoughtful engineering.
          </p>
          
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              <span>Explore My Work</span>
              <FiArrowDown className="btn-icon" />
            </a>
            <a 
              href="/Sakshi%20Patil%20Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <FiDownload className="btn-icon" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-status-row">
            <div className="status-pill">
              <span className="status-dot-subtle"></span>
              <span>Available for SDE Internships & 2027 Graduate Roles</span>
            </div>
          </div>
          
          <div className="hero-connect-row">
            <span className="connect-label">Connect:</span>
            <div className="connect-links">
              <a 
                href="https://github.com/sakshipatil45" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="connect-item"
                aria-label="GitHub profile"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
              <span className="connect-divider">/</span>
              <a 
                href="https://www.linkedin.com/in/sakship11/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="connect-item"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <span className="connect-divider">/</span>
              <a 
                href="mailto:sakshicpatil2006@gmail.com" 
                className="connect-item"
                aria-label="Send email"
              >
                <FiMail />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Showcase */}
        <div className="hero-visual animate-fade-in-up delay-200">
          <div className="portrait-frame-wrapper">
            <div className="portrait-card">
              <div className="portrait-image-container">
                <img 
                  src="/photo.jpeg" 
                  alt="Sakshi Patil - Computer Science Engineer" 
                  className="portrait-image" 
                />
                <div className="portrait-gradient-overlay"></div>
              </div>

              <div className="portrait-card-footer">
                <div className="portrait-meta-info">
                  <div className="portrait-name">Sakshi Patil</div>
                  <div className="portrait-sub">B.Tech CSE · D.Y. Patil College</div>
                </div>
                <div className="portrait-chip">
                  <span>9.02 CGPA</span>
                </div>
              </div>
            </div>

            {/* Subtle editorial card accents */}
            <div className="portrait-accent-backdrop"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
