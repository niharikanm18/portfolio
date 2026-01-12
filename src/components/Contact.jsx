import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Replace these with your EmailJS credentials
      const serviceId = 'service_dkgixdq';
      const templateId = 'template_2mbl6ct';
      const publicKey = 'XZW0dUyXbmvdx-Xqn';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'niharika1018.work@gmail.co'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again or email me directly.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'niharika1018.work@gmail.com',
      link: 'mailto:niharika1018.work@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '3162472491',
      link: 'tel:3162472491'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Plano, TX',
      link: null
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/niharika-m-64817628b/'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Feel free to reach out through any of these channels. I'm always open to discussing 
              new projects, opportunities, or partnerships.
            </p>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-card-icon">{info.icon}</div>
                  <div className="contact-card-content">
                    <div className="contact-card-title">{info.title}</div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="contact-card-value"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="contact-card-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <a href="https://www.linkedin.com/in/niharika-m-64817628b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/niharikanm18" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:niharika1018.work@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status.error && (
              <div className="error-message">
                ✗ {status.error}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Job Opportunity"
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
                disabled={status.submitting}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status.submitting}>
              <FaPaperPlane /> {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
