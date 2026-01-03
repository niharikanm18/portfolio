import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'BNY Mellon',
      position: 'Senior AI/ML and Data Engineer',
      location: 'Remote',
      period: 'Aug 2025 - Present',
      achievements: [
        'Designed RAG and embedding pipelines with AWS Lambda and vector stores, improving retrieval by 38%',
        'Automated LLM prompt orchestration using LangChain, reducing query latency by 27%',
        'Built CI/CD for MLflow models using Terraform and Jenkins to deploy models securely on AWS EKS',
        'Partnered with DevOps to implement IaC guardrails, encryption, and HIPAA-compliant data flows',
        'Integrated observability with Datadog to monitor drift, cost, and agentic AI performance metrics'
      ]
    },
    {
      company: 'Wells Fargo',
      position: 'AI/ML Platform and Data Engineer',
      location: 'Richardson, TX',
      period: 'Aug 2023 - Aug 2025',
      achievements: [
        'Engineered ETL and ML pipelines in Airflow and Python for predictive analytics and retraining',
        'Deployed feature extraction workflows using AWS S3 and Snowflake, enhancing ML efficiency',
        'Implemented RAG components for document embeddings and retrieval scoring in risk models',
        'Partnered with ML scientists to optimize inference performance and token usage for GenAI models',
        'Automated compliance and audit logging with Terraform and AWS Config, improving security by 30%'
      ]
    },
    {
      company: 'Lumen Technologies',
      position: 'Data Analyst Intern',
      location: 'Hyderabad, India',
      period: 'Jul 2020 - Aug 2022',
      achievements: [
        'Developed SQL dashboards and Power BI insights to monitor data quality and operational metrics',
        'Assisted in AI data preparation and schema optimization, improving model training efficiency by 20%',
        'Built automation scripts for data validation and integrity checks in ML preprocessing pipelines',
        'Collaborated with engineers to document RAG schema metadata and performance benchmarks'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-position">{exp.position}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <div className="exp-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </div>
                    <div className="exp-period">
                      <FaCalendar /> {exp.period}
                    </div>
                  </div>
                </div>
                <ul className="exp-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
