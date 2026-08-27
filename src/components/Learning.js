import React from 'react';
import './Learning.css';

const learningItems = [
  {
    title: "LLM Application Development",
    desc: "Building applications powered by large language models."
  },
  {
    title: "RAG Pipelines",
    desc: "Retrieval-augmented generation for grounded AI responses."
  },
  {
    title: "AI Agents",
    desc: "Autonomous agents that reason, plan, and use tools."
  },
  {
    title: "LangGraph",
    desc: "Multi-step agent workflows with state management."
  },
  {
    title: "Backend Engineering",
    desc: "Building robust APIs, services, and system architecture."
  },
  {
    title: "System Design Fundamentals",
    desc: "Scalability patterns, databases, and distributed systems."
  }
];

const Learning = () => {
  return (
    <section id="learning" className="section learning-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">CURRENTLY</span>
          <h2 className="section-title">WHAT I'M LEARNING</h2>
        </div>

        <p className="learning-intro">
          I'm actively building my skills in AI engineering and backend development. These are the areas I'm focused on right now — most of my learning happens through building real projects.
        </p>

        <div className="learning-grid">
          {learningItems.map((item, index) => (
            <div key={index} className="learning-item">
              <div className="learning-indicator"></div>
              <div className="learning-content">
                <h4 className="learning-title">{item.title}</h4>
                <p className="learning-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Learning;
