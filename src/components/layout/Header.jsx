import React from 'react';
import Navigation from './Navigation';
import HeaderContent from './HeaderContent';
// import AxesCross from '../common/AxesCross';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      {/* <AxesCross /> */}
      <HeaderContent />
      <Navigation />
    </header>
  );
};

export default Header;

