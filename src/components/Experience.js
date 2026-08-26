import React from 'react';
import { experience, education } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="experience-grid">
          
          {/* Experience Timeline */}
          <div className="timeline-column">
            <div className="section-header">
              <span className="eyebrow">EXPERIENCE</span>
              <h2 className="section-title">WORK HISTORY</h2>
            </div>
            
            <div className="timeline">
              {experience.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <h4 className="timeline-company">{item.company}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-column">
            <div className="section-header">
              <span className="eyebrow">EDUCATION</span>
              <h2 className="section-title">ACADEMICS</h2>
            </div>
            
            <div className="timeline">
              {education.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.year}</span>
                    <h3 className="timeline-role">{item.degree}</h3>
                    <h4 className="timeline-company">{item.institution}</h4>
                    <p className="timeline-desc">{item.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};

export default Experience;
