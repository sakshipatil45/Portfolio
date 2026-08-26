import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  // Separate featured project and others
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">SELECTED WORK</span>
          <h2 className="section-title">A SELECTION OF <br/> THINGS I'VE BUILT.</h2>
        </div>

        <div className="projects-wrapper">
          {/* Featured Project */}
          {featuredProject && (
            <div className="featured-project-wrapper">
              <ProjectCard project={featuredProject} isFeatured={true} />
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={false} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
