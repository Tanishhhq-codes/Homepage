import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AskAI from './components/AskAI';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="content">
          <Hero />
          <AskAI />
          {/* Add other components here */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 