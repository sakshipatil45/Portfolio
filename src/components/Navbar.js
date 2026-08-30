import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'LEARNING', 'EXPERIENCE', 'CONTACT'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <a href="#home" className="logo">
          SAKSHI PATIL
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase() === 'projects' ? 'work' : link.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li className="mobile-only">
            <a href="/Sakshi%20Patil%20Resume.pdf" download="Sakshi_Patil_Resume.pdf" className="nav-resume-btn" onClick={() => setMobileMenuOpen(false)}>
              RESUME
            </a>
          </li>
          <li className="mobile-only" style={{ marginTop: '1rem' }}>
            <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>
              Let's Talk &rarr;
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <a href="/Sakshi%20Patil%20Resume.pdf" download="Sakshi_Patil_Resume.pdf" className="nav-resume-btn desktop-only">
            RESUME
          </a>
          <a href="#contact" className="nav-cta desktop-only">
            Let's Talk &rarr;
          </a>
          
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
