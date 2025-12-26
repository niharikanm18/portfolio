import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'BNY Mellon',
      position: 'SQL Developer',
      location: 'Pittsburgh, PA (Remote)',
      period: 'Aug 2025 - Present',
      achievements: [
        'Built Python-SQL-Snowflake data pipelines improving reporting quality and analytics accuracy',
        'Designed APIs supporting predictive analytics and AI integrations for finance risk forecasting',
        'Automated metadata and lineage tracking processes, strengthening enterprise data governance',
        'Delivered BI dashboards that reduced manual reporting by 25% and improved KPI visibility',
        'Deployed AWS Lambda and Docker CI/CD workflows, cutting release cycles by 30%'
      ]
    },
    {
      company: 'Wells Fargo',
      position: 'Data Scientist',
      location: 'Richardson, TX',
      period: 'Jul 2024 - Aug 2025',
      achievements: [
        'Automated Python-SQL ETL pipelines, cutting latency by 40% and improving data accuracy',
        'Built Power BI and Tableau dashboards visualizing KPIs, compliance, and risk performance',
        'Applied data quality and lineage frameworks to strengthen governance and data reliability',
        'Delivered insights that optimized customer operations and enhanced product performance'
      ]
    },
    {
      company: 'Lumen Technologies',
      position: 'Data Analyst',
      location: 'Hyderabad, India',
      period: 'Mar 2021 - Apr 2022',
      achievements: [
        'Optimized SSIS ETL and SQL queries, improving query efficiency and reducing runtime issues',
        'Built validation scripts ensuring data accuracy, lineage traceability, and report consistency',
        'Automated Power BI dashboards, reducing manual reporting time by 38% and improving visuals',
        'Enhanced data governance through Lean processes, improving data ops and compliance synergy'
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
