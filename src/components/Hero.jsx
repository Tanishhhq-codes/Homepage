import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Emergency Response</span>
          <br />At Your Fingertips
        </h1>
        <p className="hero-subtitle">
          Your comprehensive guide to natural disaster awareness and emergency preparedness
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Emergency Contacts</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Resources</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50k+</span>
            <span className="stat-label">Users Helped</span>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>
      </div>
    </section>
  );
}

export default Hero; 