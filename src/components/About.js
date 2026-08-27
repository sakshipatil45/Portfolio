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
              FULL STACK ENGINEER <br/>
              EXPLORING AI.
            </h2>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <p className="about-description">
              I'm a Computer Science & Engineering student who enjoys building things end-to-end. I've worked across frontend and backend — from React interfaces to Python APIs and database design.
            </p>
            <p className="about-description">
              Recently, I've been diving into AI engineering — learning how to build applications with LLMs, RAG pipelines, and agent frameworks like LangGraph. Most of my learning happens while building projects, and Forensiq is where a lot of that comes together.
            </p>
            <p className="about-description">
              I'm currently improving my Python, backend engineering, DSA fundamentals, and understanding of how to bring AI into real applications.
            </p>
            
            <div className="focus-areas">
              <div className="focus-line">
                <span className="focus-item">FULL STACK DEVELOPMENT</span>
                <span className="focus-dot">·</span>
                <span className="focus-item">AI ENGINEERING</span>
              </div>
              <div className="focus-line">
                <span className="focus-item">PYTHON & BACKEND</span>
                <span className="focus-dot">·</span>
                <span className="focus-item">REACT & NEXT.JS</span>
              </div>
              <div className="focus-line">
                <span className="focus-item">DATABASES</span>
                <span className="focus-dot">·</span>
                <span className="focus-item">PROBLEM SOLVING</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
