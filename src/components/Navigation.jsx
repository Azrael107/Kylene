import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'therapy-modalities', label: 'Therapy Modalities', href: '#therapy-modalities' },
    { id: 'groups', label: 'Groups', href: '#groups' },
    { id: 'forms', label: 'Forms', href: '#forms' },
  ];

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={activeLink === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

