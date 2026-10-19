import React from 'react';
import { FiCode, FiCpu, FiDatabase, FiArrowRight } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            ABOUT & ENGINEERING PERSPECTIVE
          </span>
          <h2 className="section-title">How I Approach Software</h2>
          <p className="section-subtitle">
            A software engineering student with an interest in backend systems, product engineering, and practical AI applications.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Main Narrative Column */}
          <div className="about-narrative">
            <div className="narrative-card">
              <h3 className="narrative-heading">
                Building reliable software from system design to client interface.
              </h3>
              
              <p className="narrative-text">
                I am a Computer Science & Engineering undergraduate (Class of 2027) with a solid foundation in software development, data structures, and database management. Rather than viewing software as isolated layers, I enjoy connecting the pieces—designing clean REST APIs, modeling structured relational schemas, and crafting responsive frontend experiences.
              </p>
              
              <p className="narrative-text">
                My interest in machine learning and AI is grounded in practical application: how can intelligent workflows genuinely enhance user experience or solve domain-specific problems? Through projects like <strong>Forensiq</strong>, my final-year capstone, I explore how agentic frameworks (LangGraph) and LLM pipelines can assist human analysts by correlating complex telemetry and automating tedious security triage.
              </p>

              <div className="narrative-points">
                <div className="point-item">
                  <span className="point-dot"></span>
                  <div>
                    <strong>Practical Product Mindset:</strong> Focus on building software that solves concrete user and administrative problems.
                  </div>
                </div>
                <div className="point-item">
                  <span className="point-dot"></span>
                  <div>
                    <strong>Continuous Learning:</strong> Actively strengthening DSA fundamentals, backend concurrency patterns, and systems design.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars / Problem Domains */}
          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FiCode />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Full-Stack Application Development</h4>
                <p className="pillar-desc">
                  Building modular web applications using React, Next.js, Node.js, and modern CSS. Focused on accessible, component-driven UI architecture and clean state management.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FiDatabase />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Backend Systems & API Engineering</h4>
                <p className="pillar-desc">
                  Architecting structured RESTful endpoints using Python (FastAPI) and Node.js. Designing normalized relational schemas with PostgreSQL and MySQL.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FiCpu />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Applied AI & Intelligent Workflows</h4>
                <p className="pillar-desc">
                  Exploring practical LLM integration, retrieval-augmented generation (RAG), and agentic graph workflows (LangGraph) to automate complex data analysis.
                </p>
              </div>
            </div>

            <a href="#skills" className="about-skills-link">
              <span>View Technical Skillset & Tools</span>
              <FiArrowRight />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
