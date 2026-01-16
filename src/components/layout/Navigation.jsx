import React, { useState } from 'react';
import { menuItems } from '../../constants/menuItems';
import NavLink from '../common/NavLink';
import './Navigation.css';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className="main-nav">
      <div className="nav-wrapper">
        <div className="nav-chevron nav-chevron-left">›</div>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              label={item.label}
              isActive={activeLink === item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </ul>
        <div className="nav-chevron nav-chevron-right">‹</div>
      </div>
    </nav>
  );
};

export default Navigation;

