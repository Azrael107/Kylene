import React from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <h1 className="header-title">Kylene Halliday, Psy.D</h1>
        <p className="header-tagline">Where the heart, mind and spirit meet clinical psychology.</p>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;

