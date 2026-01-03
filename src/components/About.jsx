import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an AI/ML and Data Engineer with <strong>5+ years of experience</strong> building 
              scalable data and machine learning platforms on AWS. I specialize in LLMOps, RAG systems, 
              and compliance-first AI pipelines for analytics and GenAI workloads.
            </p>
            <p>
              Proficient in <strong>Python, SQL, Airflow, Docker, and Terraform</strong>, I excel at 
              MLOps automation, feature stores, and vector database integration. My expertise spans 
              building RAG pipelines, orchestrating ML workflows, and implementing secure, enterprise-grade 
              AI infrastructure.
            </p>
            <p>
              I'm passionate about designing reliable, secure, and enterprise-grade AI infrastructure 
              that accelerates innovation and insight delivery. My work has improved retrieval accuracy 
              by 38%, reduced query latency by 27%, and enhanced security compliance by 30%.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-number">5+</div>
                <div className="highlight-label">Years Experience</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">38%</div>
                <div className="highlight-label">Retrieval Improvement</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">27%</div>
                <div className="highlight-label">Latency Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
