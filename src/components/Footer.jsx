import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-text">
          <p>© {new Date().getFullYear()} Niharika Miriyala. All rights reserved.</p>
          <p className="footer-made">
            Made with <FaHeart className="heart-icon" /> by Niharika
          </p>
        </div>
        <div className="footer-links">
          <a href="#hero">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
