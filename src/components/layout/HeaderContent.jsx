import React from 'react';
import { headerContent } from '../../constants/content';
import './HeaderContent.css';

const HeaderContent = () => {
  return (
    <div className="header-content">
      <h1 className="header-title">{headerContent.title}</h1>
      <p className="header-tagline">{headerContent.tagline}</p>
    </div>
  );
};

export default HeaderContent;

