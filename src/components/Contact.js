import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiCheck, FiArrowUpRight, FiCopy } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "sakshicpatil2006@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="contact-card">
          
          <div className="contact-left">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>
              GET IN TOUCH
            </span>
            
            <h2 className="contact-heading">
              Looking for an SDE intern or entry-level software engineer?
            </h2>
            
            <p className="contact-subtext">
              I am actively seeking software engineering internships and 2027 graduate roles. If you have an opportunity or would like to discuss my project experience with Forensiq, Neara, or full-stack engineering, I would be glad to connect.
            </p>

            <div className="contact-direct-actions">
              <a 
                href={`mailto:${emailAddress}?subject=Software%20Engineering%20Opportunity%20-%20Sakshi%20Patil`} 
                className="btn btn-primary"
              >
                <FiMail className="btn-icon" />
                <span>Send Email Directly</span>
              </a>

              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="btn btn-secondary"
                aria-label="Copy email address"
              >
                {copied ? <FiCheck className="btn-icon text-success" /> : <FiCopy className="btn-icon" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          <div className="contact-right">
            <div className="reach-box">
              <span className="reach-label">DIRECT CHANNELS</span>

              <div className="reach-channel-list">
                <a 
                  href={`mailto:${emailAddress}`} 
                  className="channel-item"
                >
                  <div className="channel-icon-box">
                    <FiMail />
                  </div>
                  <div className="channel-info">
                    <span className="channel-title">Email</span>
                    <span className="channel-val">{emailAddress}</span>
                  </div>
                  <FiArrowUpRight className="channel-arrow" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/sakship11/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-item"
                >
                  <div className="channel-icon-box">
                    <FiLinkedin />
                  </div>
                  <div className="channel-info">
                    <span className="channel-title">LinkedIn</span>
                    <span className="channel-val">linkedin.com/in/sakship11</span>
                  </div>
                  <FiArrowUpRight className="channel-arrow" />
                </a>

                <a 
                  href="https://github.com/sakshipatil45" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-item"
                >
                  <div className="channel-icon-box">
                    <FiGithub />
                  </div>
                  <div className="channel-info">
                    <span className="channel-title">GitHub</span>
                    <span className="channel-val">github.com/sakshipatil45</span>
                  </div>
                  <FiArrowUpRight className="channel-arrow" />
                </a>
              </div>

              <div className="location-footnote">
                <span>Kolhapur / Remote · Maharashtra, India</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
