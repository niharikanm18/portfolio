import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Data Governance Framework',
      description: 'Created comprehensive Python + Snowflake pipeline for metadata management and data quality validation. Implemented automated tracking and monitoring systems to ensure data integrity across enterprise systems.',
      technologies: ['Python', 'Snowflake', 'Data Quality', 'Metadata Management'],
      github: 'https://github.com/niharikanm18/Data-Governance-Framework',
      highlights: ['Automated DQ validation', 'Metadata tracking', 'Enterprise-scale governance']
    },
    {
      title: 'GenAI Data Assistant',
      description: 'Built an intelligent interface using Python, LangChain, and OpenAI API that enables natural-language queries for data analysis. Streamlines data exploration and insights generation through conversational AI.',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'NLP', 'AI/ML'],
      github: 'https://github.com/niharikanm18/GenAI-Knowledge-Asssistant.git',
      highlights: ['Natural language queries', 'AI-powered insights', 'LangChain integration']
    },
    {
      title: 'ETL Automation Platform',
      description: 'Developed robust Spark–AWS ETL pipeline with comprehensive validation dashboards. Reduced data processing latency by 35% while improving data accuracy and reliability through automated validation checks.',
      technologies: ['Apache Spark', 'AWS', 'ETL', 'Python', 'Dashboards'],
      github: 'https://github.com/niharikanm18/ETL-Automation-Reporting-Framework',
      highlights: ['35% latency reduction', 'Automated validation', 'Real-time dashboards']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-badge">{highlight}</span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
