import React from 'react';
import { skillCategories } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            TECHNICAL COMPETENCIES
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Categorized tools and technologies verified through project implementations, coursework, and ongoing applied exploration.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((group, index) => (
            <div 
              key={index} 
              className={`skill-category-card ${group.isLearning ? 'is-learning-group' : ''}`}
            >
              <div className="category-header">
                <div className="title-row">
                  <h3 className="category-title">{group.category}</h3>
                  {group.isLearning && (
                    <span className="learning-badge">Active Exploration</span>
                  )}
                </div>
                <p className="category-desc">{group.description}</p>
              </div>
              
              <div className="tech-chips-list">
                {group.technologies.map((tech, i) => (
                  <div key={i} className="tech-chip">
                    {tech.icon && <span className="tech-chip-icon">{tech.icon}</span>}
                    <span className="tech-chip-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
