import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-logo">Sakshi Patil</span>
            <span className="footer-dot">·</span>
            <span className="footer-role">Computer Science Engineer (Class of 2027)</span>
          </div>
          <p className="footer-tagline">
            Building software for real-world problems. Focused on backend systems, full-stack development, and applied AI.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="footer-links">
            <a 
              href="https://github.com/sakshipatil45" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/sakship11/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:sakshicpatil2006@gmail.com"
              aria-label="Direct Email"
            >
              <FiMail />
              <span>Email</span>
            </a>
          </div>

          <div className="footer-bottom-row">
            <p className="copyright">&copy; {currentYear} Sakshi Patil. All rights reserved.</p>
            <button 
              type="button" 
              onClick={scrollToTop} 
              className="scroll-top-btn"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <FiArrowUp />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
