import React from 'react';
import './Services.css';

const servicesData = [
  {
    num: "01",
    title: "FULL STACK DEVELOPMENT",
    desc: "Building complete web applications — from the frontend UI down to APIs, databases, and authentication. I work across React, Node.js, PHP, and PostgreSQL."
  },
  {
    num: "02",
    title: "AI APPLICATION DEVELOPMENT",
    desc: "Exploring how to build practical applications using LLMs, RAG, and AI agents. Currently learning to integrate intelligent workflows into real software."
  },
  {
    num: "03",
    title: "BACKEND & APIs",
    desc: "Designing and building REST APIs, server-side logic, and database integrations. Working with Python, Node.js, FastAPI, and PostgreSQL."
  }
];

const Services = () => {
  return (
    <section className="section services-section">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">WHAT I DO</span>
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
