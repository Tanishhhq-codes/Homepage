import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDisasterClick = (e) => {
    e.preventDefault();
    window.location.href = 'https://disaster-inky.vercel.app/';
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-left">
          <img src={logo} alt="RescueWave Logo" className="nav-logo" />
          <span className="nav-brand">RescueWave</span>
        </div>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#disasters" onClick={handleDisasterClick}>Disasters</a></li>
          <li><a href="#ask-ai">Ask AI</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 