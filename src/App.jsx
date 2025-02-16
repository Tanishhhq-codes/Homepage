import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AskAI from './components/AskAI';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
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