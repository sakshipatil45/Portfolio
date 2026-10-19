import React from 'react';
import { experience, education, achievements } from '../data/experience';
import { FiBriefcase, FiBookOpen, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            EXPERIENCE & ACADEMIC BACKGROUND
          </span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            A chronological timeline of my internships, academic qualifications, and technical hackathon accomplishments.
          </p>
        </div>

        <div className="experience-layout">
          
          {/* Work History Column */}
          <div className="timeline-block">
            <div className="block-header">
              <div className="block-icon">
                <FiBriefcase />
              </div>
              <h3 className="block-title">Internship Experience</h3>
            </div>
            
            <div className="timeline-list">
              {experience.map((item) => (
                <div key={item.id} className="timeline-card">
                  <div className="card-top-row">
                    <span className="timeline-badge">
                      <FiCalendar className="badge-icon" />
                      {item.period}
                    </span>
                  </div>
                  <h4 className="timeline-role">{item.role}</h4>
                  <div className="timeline-company">
                    <FiMapPin className="company-icon" />
                    <span>{item.company}</span>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-block">
            <div className="block-header">
              <div className="block-icon">
                <FiBookOpen />
              </div>
              <h3 className="block-title">Education</h3>
            </div>
            
            <div className="timeline-list">
              {education.map((item) => (
                <div key={item.id} className="timeline-card">
                  <div className="card-top-row">
                    <span className="timeline-badge academic">
                      <FiCalendar className="badge-icon" />
                      {item.year}
                    </span>
                    <span className="cgpa-pill">{item.cgpa}</span>
                  </div>
                  <h4 className="timeline-role">{item.degree}</h4>
                  <div className="timeline-company">
                    <FiMapPin className="company-icon" />
                    <span>{item.institution}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Subsection */}
            <div className="achievements-section">
              <div className="block-header small">
                <div className="block-icon small">
                  <FiAward />
                </div>
                <h4 className="block-title small">Competitions & Hackathons</h4>
              </div>

              <div className="achievements-list">
                {achievements.map((item) => (
                  <div key={item.id} className="achievement-pill">
                    <span className="achievement-bullet">★</span>
                    <div>
                      <strong className="achievement-name">{item.title}:</strong>{' '}
                      <span className="achievement-desc">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
