import React from 'react';
import { FiGithub, FiExternalLink, FiLayers, FiShield, FiMapPin, FiAward, FiSearch } from 'react-icons/fi';

const ProjectCard = ({ project, isFeatured }) => {
  // Render bespoke representative technical illustration/diagram for each project
  const renderVisual = () => {
    switch (project.previewType) {
      case "security-dashboard":
        return (
          <div className="preview-canvas canvas-forensiq">
            <div className="preview-terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">forensiq // soc-investigation-telemetry</span>
              <span className="terminal-status">LIVE TELEMETRY</span>
            </div>

            <div className="preview-body forensiq-body">
              <div className="telemetry-grid">
                <div className="telemetry-card alert-summary">
                  <div className="telemetry-label">INCIDENT CLASSIFICATION</div>
                  <div className="telemetry-val high-risk">CRITICAL · MITRE ATT&CK T1059</div>
                  <div className="telemetry-metric">
                    <span>IOC Correlation: <strong>94.2%</strong></span>
                    <span>Triage Stage: <strong>Timeline Synthesis</strong></span>
                  </div>
                </div>

                <div className="telemetry-card threat-intel">
                  <div className="telemetry-label">SECURITY PIPELINE WORKFLOW</div>
                  <div className="workflow-steps">
                    <div className="step-node active">
                      <FiShield className="step-icon" />
                      <span>Ingest Alert</span>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-node active">
                      <span>Extract IOCs</span>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-node active highlight">
                      <span>MITRE Map</span>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-node">
                      <span>Reconstruct</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="telemetry-console">
                <div className="console-line">
                  <span className="console-ts">[14:32:01]</span>
                  <span className="console-info">ANALYZING:</span>
                  <span>Sysmon EventID 1 & Network telemetry ingested into LangGraph pipeline</span>
                </div>
                <div className="console-line">
                  <span className="console-ts">[14:32:02]</span>
                  <span className="console-success">MATCH:</span>
                  <span>T1059.001 PowerShell execution correlated with C2 beaconing pattern</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "hyperlocal-services":
        return (
          <div className="preview-canvas canvas-neara">
            <div className="preview-browser-header">
              <div className="browser-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="browser-address">https://neara.local/discover?radius=5km</div>
            </div>
            <div className="preview-body neara-body">
              <div className="neara-layout">
                <div className="neara-sidebar">
                  <div className="filter-chip active"><FiMapPin /> Within 5 km</div>
                  <div className="filter-chip">Home Services</div>
                  <div className="filter-chip">Verified Providers</div>
                </div>
                <div className="neara-cards">
                  <div className="provider-card">
                    <div className="provider-header">
                      <span className="provider-avatar">EP</span>
                      <div>
                        <div className="provider-title">Electrical Repairs</div>
                        <div className="provider-meta">4.9 ★ · 1.2 km away</div>
                      </div>
                    </div>
                    <div className="provider-status">Available for Instant Booking</div>
                  </div>
                  <div className="provider-card subtle">
                    <div className="provider-header">
                      <span className="provider-avatar blue">PL</span>
                      <div>
                        <div className="provider-title">Plumbing & Maintenance</div>
                        <div className="provider-meta">4.8 ★ · 2.5 km away</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "event-records":
        return (
          <div className="preview-canvas canvas-gymkhana">
            <div className="preview-browser-header">
              <div className="browser-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="browser-address">gymkhana.portal/admin/events</div>
            </div>
            <div className="preview-body gymkhana-body">
              <div className="table-preview">
                <div className="table-header-row">
                  <span>EVENT</span>
                  <span>CATEGORY</span>
                  <span>REGISTRATIONS</span>
                  <span>STATUS</span>
                </div>
                <div className="table-row">
                  <span className="event-name"><FiAward className="table-icon" /> Annual Athletics Meet</span>
                  <span>Track & Field</span>
                  <span>142 Students</span>
                  <span className="badge-active">Active</span>
                </div>
                <div className="table-row">
                  <span className="event-name"><FiAward className="table-icon" /> Inter-Dept Badminton</span>
                  <span>Racquet Sports</span>
                  <span>64 Students</span>
                  <span className="badge-scheduled">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "recon-suite":
        return (
          <div className="preview-canvas canvas-dorkly">
            <div className="preview-terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">dorkly // query-builder & audit</span>
            </div>
            <div className="preview-body dorkly-body">
              <div className="query-box">
                <div className="query-label"><FiSearch /> Target Pattern</div>
                <code>site:target.edu filetype:env | filetype:sql</code>
              </div>
              <div className="dorkly-metrics">
                <div className="metric-box">
                  <span className="label">Recon Modules</span>
                  <span className="num">12 Configured</span>
                </div>
                <div className="metric-box">
                  <span className="label">Stack</span>
                  <span className="num">MERN + REST</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "deployment-system":
        return (
          <div className="preview-canvas canvas-erp">
            <div className="preview-terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">erp.deploy // pipeline-runner</span>
            </div>
            <div className="preview-body erp-body">
              <div className="deploy-stages">
                <div className="stage-item complete">
                  <span className="stage-status">✓</span>
                  <span>Environment Config Validation</span>
                </div>
                <div className="stage-item complete">
                  <span className="stage-status">✓</span>
                  <span>Module Container Build (Docker)</span>
                </div>
                <div className="stage-item running">
                  <span className="stage-status spin">⟳</span>
                  <span>ERP Database Schema Migration & Service Rollout</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="preview-canvas">
            <div className="preview-body placeholder-body">
              <FiLayers size={36} />
              <span>Project Interface Showcase</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article className={`project-card ${isFeatured ? 'featured' : ''}`}>
      
      {/* Project Visual Area */}
      <div className="project-visual">
        <div className="visual-container">
          {renderVisual()}
        </div>
      </div>

      {/* Project Content Area */}
      <div className="project-info">
        <div className="project-meta">
          <span className="project-index">0{project.id}</span>
          <span className="meta-separator">/</span>
          <span className="project-category">{project.category}</span>
          {project.badge && (
            <span className="project-badge">{project.badge}</span>
          )}
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-desc">{project.description}</p>

        {isFeatured && project.problemStatement && (
          <div className="problem-statement-box">
            <span className="problem-label">Problem Addressed:</span>
            <p className="problem-text">{project.problemStatement}</p>
          </div>
        )}
        
        <div className="project-tech">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-actions">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
              aria-label={`View ${project.shortTitle} repository on GitHub`}
            >
              <FiGithub className="btn-icon" />
              <span>Source Repository</span>
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
              aria-label={`Open live demonstration of ${project.shortTitle}`}
            >
              <span>Live Application</span>
              <FiExternalLink className="btn-icon" />
            </a>
          )}
        </div>
      </div>
      
    </article>
  );
};

export default ProjectCard;
