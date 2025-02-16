import React from 'react';
import heroImage from '../assets/images/hero-bg.jpg';  // Import the image
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero" style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`
    }}>
      <div className="hero-content">
        <h1 className="slide-up">Welcome to RescueWave</h1>
        <p className="fade-in">Your guide to natural disaster awareness and emergency response</p>
        <div className="hero-buttons">
          <a href="#disasters" className="primary-button">Explore Disasters</a>
          <a href="#ask-ai" className="secondary-button">Ask Wavi</a>
        </div>
      </div>
    </section>
  );
}

export default Hero; 