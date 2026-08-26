import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        
        <div className="contact-content">
          <h2 className="contact-heading">
            HAVE AN IDEA OR <br/>
            OPPORTUNITY? <span className="text-gradient">LET'S TALK.</span>
          </h2>
          
          <p className="contact-subtext">
            Have an idea, opportunity, or just want to talk tech? I'm always open to interesting conversations.
          </p>
          
          <div className="contact-actions">
            <a href="mailto:sakshicpatil2006@gmail.com" className="btn btn-primary">Get In Touch &rarr;</a>
          </div>
          
          <div className="contact-links">
            <a href="mailto:sakshicpatil2006@gmail.com">Email</a>
            <a href="https://github.com/sakshipatil45" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sakship11/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="What's on your mind?"></textarea>
            </div>
            
            <button type="submit" className="btn btn-outline submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
