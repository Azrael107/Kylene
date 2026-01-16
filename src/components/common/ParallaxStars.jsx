import React, { useEffect, useRef } from 'react';
import './ParallaxStars.css';

const ParallaxStars = () => {
  const lettersRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lettersRef.current) {
        const scrolled = window.pageYOffset;
        // Parallax effect - letters move much slower, making foreground appear faster
        lettersRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate random letters - distributed across taller height for parallax
  const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = [];
    for (let i = 0; i < 300; i++) {
      letters.push({
        id: i,
        letter: alphabet[Math.floor(Math.random() * alphabet.length)],
        x: Math.random() * 100,
        y: Math.random() * 400, // Spread across 400vh
        size: Math.random() * 20 + 15,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * 360,
      });
    }
    return letters;
  };

  const letters = generateLetters();

  return (
    <div className="parallax-letters-container" ref={lettersRef}>
      {letters.map((item) => (
        <div
          key={item.id}
          className="random-letter"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          {item.letter}
        </div>
      ))}
    </div>
  );
};

export default ParallaxStars;

