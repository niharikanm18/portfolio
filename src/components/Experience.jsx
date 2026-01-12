import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'BNY Mellon',
      position: 'Data Scientist and Data Analyst',
      location: 'Remote',
      period: 'May 2024 - Present',
      achievements: [
        'Developed predictive models in Python and SQL to detect fraud and AML risk events',
        'Built and deployed ML pipelines, improving fraud detection accuracy by 22% and latency by 18%',
        'Analyzed 50M+ transactions to uncover behavioral anomalies, supporting compliance investigations',
        'Partnered with Financial Risk Management teams to deliver model insights for fraud prevention',
        'Presented findings to executives, shaping data-driven anti-fraud strategies and model investments'
      ]
    },
    {
      company: 'Wells Fargo',
      position: 'Software Engineer',
      location: 'Richardson, TX',
      period: 'Aug 2022 - May 2024',
      achievements: [
        'Built scalable ETL workflows and feature stores powering ML-based fraud detection models',
        'Applied machine learning to predict suspicious activity, reducing false positives by 25%',
        'Collaborated with model risk and compliance teams to ensure regulatory and audit adherence',
        'Created dashboards in Power BI and Tableau for real-time fraud trend visualization'
      ]
    },
    {
      company: 'Lumen Technologies',
      position: 'Software Engineer Intern',
      location: 'Hyderabad, India',
      period: 'Jul 2020 - Jul 2022',
      achievements: [
        'Designed anomaly detection algorithms for financial data, improving fraud pattern discovery',
        'Automated SQL and Python data pipelines, cutting report generation time by 35%',
        'Supported data scientists in developing behavioral models for segmentation and churn prediction',
        'Communicated findings using visual analytics and concise performance summaries for stakeholders'
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
