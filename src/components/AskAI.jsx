import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mascotImage from '../assets/wavi-mascot.png'; // Add your mascot image to assets folder
import '../styles/AskAI.css';

function AskAI() {
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: "Hello! I'm Wavi, your disaster preparedness and safety assistant. I can help you with:\n\n• Emergency procedures\n• Disaster preparedness tips\n• Safety guidelines\n• Emergency contact information\n• First aid advice\n\nHow can I assist you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});

      const prompt = `
        You are Wavi, a professional disaster awareness and emergency response assistant.
        Provide a detailed, accurate, and helpful response to: ${input}
        
        Follow these guidelines:
        1. Focus on safety and practical advice
        2. Include specific steps or procedures when relevant
        3. Reference official emergency management guidelines
        4. Be clear and concise, but thorough
        5. If medical advice is requested, recommend consulting professionals
        6. Use bullet points for steps or lists
        7. Include relevant emergency numbers if applicable
        
        Format the response with proper spacing and organization.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const botMessage = {
        type: 'bot',
        text: text
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "I apologize, but I'm experiencing technical difficulties. For immediate emergency assistance, please call your local emergency services."
      }]);
    }

    setIsLoading(false);
  };

  return (
    <section id="ask-ai" className="ai-section">
      <div className="mascot-container">
        <div className="ai-title-wrapper">
          <h2 className="ai-title">Ask Our</h2>
          <h2 className="ai-bot-text">AI Assistant</h2>
          <div className="ai-decoration">✧</div>
        </div>
        <img src={mascotImage} alt="Wavi - AI Assistant" className="mascot-image" />
      </div>
      
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
          {isLoading && (
            <div className="message bot loading">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about disaster preparedness, safety procedures, or emergency response..."
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className={`send-button ${isLoading ? 'loading' : ''}`}
          >
            {isLoading ? 'Processing...' : 'Send'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AskAI; 