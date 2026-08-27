import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content animate-fade-in-up">
          <span className="eyebrow">
            FULL-STACK AI ENGINEER
          </span>
          
          <h1 className="hero-title">
            Hi, I'm <br/>
            <span className="text-gradient">Sakshi Patil.</span>
          </h1>
          
          <p className="hero-description delay-100">
            I build practical applications across the frontend, backend, and AI — and I'm currently exploring how intelligent systems can solve real-world problems.
          </p>
          
          <div className="hero-actions delay-200">
            <a href="#work" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
          
          <div className="hero-social-pills delay-300">
            <a href="https://github.com/sakshipatil45" target="_blank" rel="noreferrer" className="social-pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            
            <a href="https://www.linkedin.com/in/sakship11/" target="_blank" rel="noreferrer" className="social-pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

            <a href="mailto:sakshicpatil2006@gmail.com" className="social-pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Email</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Right Developer Graphic */}
        <div className="hero-visual delay-400">
          <div className="dev-env">
            
            {/* Profile Photo */}
            <div className="photo-container">
              <div className="photo-glow"></div>
              <img src="/photo.jpeg" alt="Sakshi Patil" className="profile-photo" />
            </div>

            <div className="floating-element react-icon" style={{'--delay': '0s'}}>
              &lt;React /&gt;
            </div>
            <div className="floating-element api-node" style={{'--delay': '1s'}}>
              <span className="node-dot"></span> Python
            </div>
            <div className="floating-element db-node" style={{'--delay': '2s'}}>
              <div className="db-icon"></div> FastAPI
            </div>
            <div className="floating-element git-node" style={{'--delay': '0.5s'}}>
              Git
            </div>
            <div className="floating-element docker-node" style={{'--delay': '1.5s'}}>
              Docker
            </div>
            <div className="floating-element backend-node" style={{'--delay': '2.5s'}}>
              AI
            </div>
            <div className="floating-element frontend-node" style={{'--delay': '0.8s'}}>
              Next.js
            </div>
            
            {/* Decorative lines */}
            <svg className="connections" width="100%" height="100%" viewBox="0 0 400 400">
              <path d="M100,100 C150,150 250,100 300,150" className="line" />
              <path d="M200,200 C250,250 150,300 200,350" className="line" />
              <path d="M150,150 C200,200 100,250 150,300" className="line" />
              <path d="M250,100 C300,200 250,300 300,400" className="line" />
            </svg>
            
            <div className="glow-orb main-orb"></div>
            <div className="glow-orb secondary-orb"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
