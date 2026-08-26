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
            I build full-stack applications and I'm currently exploring how AI can solve real-world problems.
          </p>
          <p className="hero-description delay-100">
            CSE student — working with React, Node.js, Python, and modern databases. Figuring out AI engineering one project at a time.
          </p>
          
          <div className="hero-actions delay-200">
            <a href="#work" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
          
          <div className="hero-socials delay-300">
            <a href="https://github.com/sakshipatil45" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="https://www.linkedin.com/in/sakship11/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="mailto:sakshicpatil2006@gmail.com">EMAIL</a>
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
              <div className="db-icon"></div> Database
            </div>
            <div className="floating-element git-node" style={{'--delay': '0.5s'}}>
              FastAPI
            </div>
            <div className="floating-element docker-node" style={{'--delay': '1.5s'}}>
              Docker
            </div>
            <div className="floating-element backend-node" style={{'--delay': '2.5s'}}>
              AI/ML
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
