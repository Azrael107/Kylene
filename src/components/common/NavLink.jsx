import React from 'react';
import './NavLink.css';

const NavLink = ({ href, label, isActive, onClick }) => {
  return (
    <li>
      <a
        href={href}
        className={isActive ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {label}
      </a>
    </li>
  );
};

export default NavLink;

