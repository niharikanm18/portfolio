import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="greeting">Hello, I'm</div>
          <h1 className="hero-title">Niharika Miriyala</h1>
          <h2 className="hero-subtitle">Data Analyst & Data Scientist</h2>
          <p className="hero-description">
            Transforming data into actionable insights with 2+ years of experience 
            in analytics, data science, and data operations
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
            <a href="mailto:niharikamiriyala2000@gmail.com" aria-label="Email">
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
              src="/niharika linkedin image.jpeg" 
              alt="Niharika Miriyala" 
              className="profile-image"
            />
          </div>
          <div className="location-badge">
            <FaMapMarkerAlt /> Plano, TX
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
