import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-image">
          <img 
            src="" 
            alt="Dr. Kylene Halliday" 
            className="profile-photo"
          />
          {/* Placeholder shown until image is added - replace src with actual image path (e.g., src="/kylene-photo.jpg") */}
        </div>
        <div className="intro-text">
          <h2 className="section-title">Welcome to My Practice</h2>
          <p className="intro-paragraph">
            Welcome. I'm Dr. Kylene Halliday, and in my clinical psychology practice I believe true healing involves not just the mind—but the heart and spirit as well. My work is grounded in compassion, evidence, and a deep respect for each person's unique story. I approach therapy as a collaborative journey where we explore the depths of your experiences, honoring both the challenges you face and the strengths you possess.
          </p>
          <p className="intro-paragraph">
            My therapeutic style blends warmth with professionalism, creating a safe and nurturing space where you can be authentically yourself. Whether you're navigating life transitions, managing anxiety or depression, healing from trauma, or seeking deeper self-understanding, I'm here to walk alongside you with empathy and expertise.
          </p>
          
          <div className="what-i-do-different">
            <h3 className="different-title">What I Do Differently</h3>
            <ul className="different-list">
              <li>
                I craft therapy plans that honor <em>your</em> individuality—no cookie-cutter approaches. Every treatment is tailored to your unique needs, values, and goals.
              </li>
              <li>
                I integrate mindfulness, positive psychology, and spiritual wellness as part of evidence-based treatment, recognizing that healing encompasses the whole person.
              </li>
              <li>
                I foster a warm, collaborative environment where you are the expert of your own life, and I am your guide and support system.
              </li>
              <li>
                I blend traditional therapeutic methods with holistic approaches, ensuring that both your psychological and spiritual well-being are addressed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

