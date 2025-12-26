import React from 'react';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'M.S. in Data Science',
      institution: 'Wichita State University',
      location: 'Wichita, KS, USA',
      period: 'Aug 2022 - May 2024',
      type: 'Master\'s Degree'
    },
    {
      degree: 'B.Tech in Computer & Electrical Engineering',
      institution: 'ICFAI University',
      location: 'Hyderabad, India',
      period: 'Aug 2018 - Jun 2022',
      type: 'Bachelor\'s Degree'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-icon">
                <FaGraduationCap />
              </div>
              <div className="edu-content">
                <div className="edu-type">{edu.type}</div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <div className="edu-meta">
                  <div className="edu-location">
                    <FaMapMarkerAlt /> {edu.location}
                  </div>
                  <div className="edu-period">
                    <FaCalendar /> {edu.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
