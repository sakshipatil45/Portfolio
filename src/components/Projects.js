import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  // Forensiq is our primary featured project (id: 1)
  const featuredProject = projects.find(p => p.featured);
  const supportingProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            SELECTED ENGINEERING WORK
          </span>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-subtitle">
            A showcase of applications I have built across cybersecurity operations, full-stack web platforms, database systems, and infrastructure tooling.
          </p>
        </div>

        <div className="projects-showcase">
          {/* Primary Featured Project Showcase (Forensiq) */}
          {featuredProject && (
            <div className="featured-wrapper">
              <div className="featured-flag">
                <span>Featured Capstone</span>
              </div>
              <ProjectCard project={featuredProject} isFeatured={true} />
            </div>
          )}

          {/* Supporting Projects Grid (Neara, Gymkhana, Dorkly, ERP Deployment) */}
          <div className="supporting-projects-header">
            <h3 className="supporting-title">Supporting Engineering Projects</h3>
            <span className="supporting-count">4 Systems</span>
          </div>

          <div className="projects-grid">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={false} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
