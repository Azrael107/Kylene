import React from 'react';
import ParallaxStars from './components/common/ParallaxStars';
import Header from './components/layout/Header';
import IntroSection from './components/sections/IntroSection';
import ReviewsSection from './components/sections/ReviewsSection';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParallaxStars />
      <Header />
      <main className="main-content">
        <IntroSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

