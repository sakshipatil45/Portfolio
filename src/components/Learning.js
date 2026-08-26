import React from 'react';
import './Learning.css';

const learningItems = [
  {
    title: "LLM Application Development",
    desc: "Building apps on top of large language models — prompting, chaining, and tool use."
  },
  {
    title: "RAG (Retrieval-Augmented Generation)",
    desc: "Combining document retrieval with LLMs to answer questions grounded in real data."
  },
  {
    title: "AI Agents & Workflows",
    desc: "Learning LangGraph and LangChain to build multi-step autonomous agent workflows."
  },
  {
    title: "Backend Engineering with Python",
    desc: "FastAPI, async patterns, database design, and building production-ready APIs."
  },
  {
    title: "System Design Fundamentals",
    desc: "Understanding how to design scalable systems — databases, caching, APIs, and trade-offs."
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Strengthening problem-solving fundamentals consistently."
  }
];

const Learning = () => {
  return (
    <section id="learning" className="section learning-section">
      <div className="container">

        <div className="section-header">
          <span className="eyebrow">CURRENTLY</span>
          <h2 className="section-title">WHAT I'M LEARNING</h2>
          <p className="learning-subtitle">
            Things I'm actively working through. Not claiming expertise — just honest about where I'm headed.
          </p>
        </div>

        <div className="learning-grid">
          {learningItems.map((item, index) => (
            <div key={index} className="learning-card">
              <div className="learning-index">0{index + 1}</div>
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
