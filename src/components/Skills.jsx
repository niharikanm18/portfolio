import React from 'react';
import { FaPython, FaAws, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiSnowflake, SiTableau, SiPowerbi, SiApachespark, SiJavascript, SiTypescript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript'],
      icon: <FaPython />
    },
    {
      title: 'Data Analytics',
      skills: ['Predictive Modeling', 'Statistics', 'A/B Testing', 'Data Quality'],
      icon: <FaDatabase />
    },
    {
      title: 'Big Data & ETL',
      skills: ['Spark', 'Hive', 'Presto', 'Informatica DQ', 'Data Pipelines'],
      icon: <SiApachespark />
    },
    {
      title: 'Visualization',
      skills: ['Power BI', 'Tableau', 'Metrics Design', 'Dashboards'],
      icon: <SiTableau />
    },
    {
      title: 'Cloud & Tools',
      skills: ['AWS (S3, EC2, Lambda)', 'Snowflake', 'Docker', 'CI/CD', 'Git'],
      icon: <FaAws />
    },
    {
      title: 'Databases',
      skills: ['SQL Server', 'MySQL', 'PostgreSQL'],
      icon: <FaDatabase />
    },
    {
      title: 'Methods',
      skills: ['Agile', 'Lean', 'Six Sigma', 'Data Governance'],
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
