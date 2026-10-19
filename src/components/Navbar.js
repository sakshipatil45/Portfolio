import React, { useState, useEffect } from 'react';
import { FiDownload, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        
        {/* Editorial Logo */}
        <a href="#home" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-initials">SP</span>
          <span className="logo-name">Sakshi Patil</span>
          <span className="logo-tag">/ CSE '27</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions">
          <a 
            href="/Sakshi%20Patil%20Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-resume-link desktop-only"
            aria-label="Download resume"
          >
            <FiDownload className="action-icon" />
            <span>Resume</span>
          </a>

          <a href="#contact" className="btn btn-primary btn-sm desktop-only">
            <span>Connect</span>
            <FiArrowUpRight className="action-icon" />
          </a>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((item) => (
            <li key={item.label} className="mobile-nav-item">
              <a 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-action-item">
            <a 
              href="/Sakshi%20Patil%20Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </li>
          <li className="mobile-action-item">
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get In Touch</span>
              <FiArrowUpRight />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
