import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <IntroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

