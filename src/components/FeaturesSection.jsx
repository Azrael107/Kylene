import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '❤️',
      title: 'Heart-Centered',
      description: 'Approaching therapy with genuine compassion and emotional attunement'
    },
    {
      icon: '🧠',
      title: 'Evidence-Based',
      description: 'Grounding treatment in research-supported methodologies and clinical expertise'
    },
    {
      icon: '✨',
      title: 'Spirit-Inclusive',
      description: 'Honoring the spiritual dimensions of healing and personal growth'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

