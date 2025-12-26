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
              I'm a Data Analyst with <strong>3+ years of experience</strong> in data science, 
              analytics, and data operations. I specialize in transforming complex data into 
              actionable insights that drive business decisions.
            </p>
            <p>
              Proficient in <strong>Python, SQL, Spark, and Snowflake on AWS</strong>, 
              I excel at building robust data pipelines, creating insightful BI dashboards, 
              and implementing comprehensive data governance frameworks.
            </p>
            <p>
              I have a strong track record of improving data quality and accelerating insights 
              for enterprise decision-making. My expertise spans predictive modeling, ETL automation, 
              and cloud-based data solutions that reduce latency and enhance operational efficiency.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-number">3+</div>
                <div className="highlight-label">Years Experience</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">40%</div>
                <div className="highlight-label">Latency Reduction</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">3</div>
                <div className="highlight-label">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
