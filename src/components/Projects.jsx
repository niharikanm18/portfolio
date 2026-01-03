import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Generative AI Data Platform',
      description: 'Built RAG pipeline integrating embeddings, vector DB, and prompt caching. Designed end-to-end GenAI infrastructure with LangChain for intelligent document retrieval and context-aware responses.',
      technologies: ['Python', 'LangChain', 'Vector DB', 'RAG', 'Embeddings', 'AWS'],
      github: 'https://github.com/niharikanm18/GenAI-Knowledge-Asssistant',
      highlights: ['RAG pipeline', 'Vector database', 'Prompt caching']
    },
    {
      title: 'MLOps Automation with Airflow',
      description: 'Orchestrated ML model deployment and retraining workflows. Built automated pipelines for continuous model training, validation, and deployment with comprehensive monitoring and alerting.',
      technologies: ['Airflow', 'MLflow', 'Python', 'CI/CD', 'Model Deployment'],
      github: 'https://github.com/niharikanm18/ETL-Automation-Reporting-Framework',
      highlights: ['Automated deployment', 'Model retraining', 'Workflow orchestration']
    },
    {
      title: 'Cloud-native ML Infrastructure',
      description: 'Provisioned S3-to-Sagemaker training pipelines using Terraform. Implemented infrastructure-as-code for scalable ML workloads with automated resource management and cost optimization.',
      technologies: ['Terraform', 'AWS S3', 'Sagemaker', 'IaC', 'ML Training'],
      github: 'https://github.com/niharikanm18/Data-Governance-Framework',
      highlights: ['Infrastructure as Code', 'Automated pipelines', 'Cost optimization']
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
