import React from 'react';
import './NavLink.css';

const NavLink = ({ href, label, isActive, onClick }) => {
  const letters = label.split('');

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
        {letters.map((letter, index) => (
          <span
            key={index}
            className="nav-letter"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </a>
    </li>
  );
};

export default NavLink;

