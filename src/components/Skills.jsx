import React from 'react';
import { FaPython, FaAws, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiSnowflake, SiTableau, SiPowerbi, SiApachespark, SiTensorflow, SiPytorch, SiKubernetes, SiMongodb, SiRedis, SiElasticsearch, SiPostgresql, SiMysql, SiTerraform, SiJenkins } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'Bash', 'PowerShell', '.NET (NpgSQL)'],
      icon: <FaPython />
    },
    {
      title: 'ML/AI Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'LlamaIndex'],
      icon: <SiTensorflow />
    },
    {
      title: 'MLOps/AI',
      skills: ['MLflow', 'Airflow', 'RAG', 'LLMOps', 'Vector Search', 'Feature Stores'],
      icon: <SiApachespark />
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS (S3, EKS, Lambda, Sagemaker)', 'Azure', 'GCP'],
      icon: <FaAws />
    },
    {
      title: 'Infrastructure',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD', 'IaC'],
      icon: <FaDocker />
    },
    {
      title: 'Data Engineering',
      skills: ['ETL', 'Data Modeling', 'Orchestration', 'Observability', 'Compliance Automation'],
      icon: <FaDatabase />
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Snowflake', 'Redis', 'MongoDB', 'ElasticSearch'],
      icon: <SiPostgresql />
    },
    {
      title: 'Other Tools',
      skills: ['Datadog', 'Kafka', 'Tableau', 'Git', 'API Development'],
      icon: <FaGitAlt />
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
