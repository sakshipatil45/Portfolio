import React from 'react';
import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="eyebrow">SKILLS</span>
          <h2 className="section-title">TECHNOLOGIES I WORK WITH</h2>
        </div>

        <div className="skills-container">
          {skills.map((category, index) => (
            <div key={index} className={`skill-category ${category.isLearning ? 'learning' : ''}`}>
              <h3 className="category-title">
                {category.category}
                {category.isLearning && <span className="learning-badge">Exploring</span>}
              </h3>
              
              <div className="tech-grid">
                {category.technologies.map((tech, i) => (
                  <div key={i} className="tech-card">
                    <div className="tech-card-inner">
                      <h4 className="tech-name">{tech.name}</h4>
                    </div>
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
