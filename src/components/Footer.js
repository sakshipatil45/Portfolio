import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-left">
          <h2 className="footer-logo">SAKSHI PATIL</h2>
          <p className="footer-role">FULL-STACK AI ENGINEER</p>
        </div>
        
        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/sakshipatil45" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sakship11/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:sakshicpatil2006@gmail.com">Email</a>
          </div>
          <p className="copyright">&copy; {currentYear} Sakshi Patil. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
