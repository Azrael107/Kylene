import React from 'react';
import ProfileImage from '../common/ProfileImage';
import SectionTitle from '../common/SectionTitle';
import { introContent } from '../../constants/content';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <SectionTitle>{introContent.title}</SectionTitle>
        <div className="intro-content">
          <ProfileImage src="/assets/images/placeholder psychologist.avif" alt="Dr. Kylene Halliday" />
          {introContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="intro-paragraph">
              {paragraph}
            </p>
          ))}
          
          <div className="what-i-do-different">
            <h3 className="different-title">{introContent.whatIDoDifferent.title}</h3>
            <ul className="different-list">
              {introContent.whatIDoDifferent.items.map((item, index) => {
                // Highlight "your" with emphasis
                const parts = item.split(/\b(your|Your)\b/);
                return (
                  <li key={index}>
                    {parts.map((part, i) => 
                      part.toLowerCase() === 'your' ? <em key={i}>{part}</em> : part
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

