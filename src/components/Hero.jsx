import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Niharika Miriyala';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="greeting">Hello, I'm</div>
          <h1 className="hero-title">{displayedName}<span className="cursor">|</span></h1>
          <h2 className="hero-subtitle">Senior AI/ML and Data Engineer</h2>
          <p className="hero-description">
            AI/ML and Data Engineer with 5+ years building scalable data and machine learning platforms on AWS. 
            Experienced in LLMOps, RAG systems, and compliance-first AI pipelines for analytics and GenAI workloads.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/niharika-m-64817628b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/niharikanm18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:niharika1018.work@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:945-900-4356" aria-label="Phone">
              <FaPhone />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="/portfolio/profile.jpeg" 
              alt="Niharika Miriyala" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
