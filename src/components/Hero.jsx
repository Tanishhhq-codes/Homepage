import React from 'react';
import heroImage from '../assets/hero-bg.jpg'; // Add your background image to assets folder
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">RescueWave</span>
        </h1>
        <p className="hero-subtitle">
          Your guide to natural disaster awareness and emergency response
        </p>
        <div className="hero-buttons">
          <button className="hero-btn glass-btn">Explore Disasters</button>
          <button className="hero-btn solid-btn">Ask AI</button>
        </div>
      </div>
    </section>
  );
}

export default Hero; 