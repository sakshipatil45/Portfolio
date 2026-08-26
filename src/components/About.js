import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="about-grid">
          
          {/* Left Column */}
          <div className="about-left">
            <span className="eyebrow">ABOUT ME</span>
            <h2 className="about-statement">
              BUILDING THINGS,<br/>
              LEARNING AS I GO.
            </h2>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <p className="about-description">
              I'm a Computer Science & Engineering student who enjoys building things across the full stack. Most of what I've learned has come from actually working on projects — figuring out backend APIs, connecting databases, and building UIs that work.
            </p>
            <p className="about-description" style={{ marginTop: '1rem' }}>
              Recently, I've been getting into AI engineering. I'm learning how to build applications on top of LLMs, work with RAG pipelines, and use Python for backend development. It's still early, but I find it genuinely interesting.
            </p>
            
            <div className="focus-areas">
              <div className="focus-line">
                <span className="focus-item">FULL STACK DEVELOPMENT</span>
                <span className="focus-dot">·</span>
                <span className="focus-item">PYTHON & BACKEND</span>
              </div>
              <div className="focus-line">
                <span className="focus-item">AI ENGINEERING</span>
                <span className="focus-dot">·</span>
                <span className="focus-item">REAL-WORLD PROJECTS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
