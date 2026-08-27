import React from 'react';
import './Services.css';

const servicesData = [
  {
    num: "01",
    title: "FULL STACK DEVELOPMENT",
    desc: "Building complete web applications — from React frontends to Python/Node backends, databases, authentication, and deployment."
  },
  {
    num: "02",
    title: "AI APPLICATION DEVELOPMENT",
    desc: "Currently learning to build AI-powered applications using LLMs, RAG pipelines, and agent frameworks like LangGraph and LangChain."
  },
  {
    num: "03",
    title: "BACKEND & API ENGINEERING",
    desc: "Developing REST APIs, database integrations, and server-side logic with Python (FastAPI), Node.js, and PostgreSQL."
  }
];

const Services = () => {
  return (
    <section className="section services-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">WHAT I BUILD</span>
          <h2 className="section-title">MY FOCUS AREAS</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.num}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              {/* Decorative line */}
              <div className="service-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
