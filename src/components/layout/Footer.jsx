import React from 'react';
import { headerContent } from '../../constants/content';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; 2024 Kylene Halliday, Psy.D. All rights reserved.</p>
        <p className="footer-tagline">{headerContent.tagline}</p>
      </div>
    </footer>
  );
};

export default Footer;

