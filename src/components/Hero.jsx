import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimationContainer from './AnimationContainer.jsx';

const Hero = ({ theme }) => {
  const navigate = useNavigate();
  
  return (
    <div className={`flex-grow grid md:grid-cols-2 grid-cols-1 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} py-20 justify-center items-center`}>
      {/* Left Column - Text Content */}
      <div className={`flex flex-col justify-center px-6 md:px-10 lg:px-16 py-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} text-center md:text-left`}>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'} leading-tight mb-6`}>
          <span className="md:block inline">Automate your</span>
          <span className="md:block inline">business with</span>
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent inline md:block">WhatsApp API!</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-lg text-center md:text-left">
          Engage customers, streamline support, and boost sales with our powerful WhatsApp Business API integration platform.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <button 
            className={`px-6 py-2 border ${theme === 'light' ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'} rounded-full transition z-10`} 
            onClick={() => navigate('/book-demo')}
          >
            Book a demo
          </button>
          
          <button 
            className={`px-6 py-2 z-10 border ${theme === 'light' ? 'bg-black text-white hover:bg-white hover:text-black hover:border-black' : 'bg-white text-black hover:bg-black hover:text-white hover:border-white'} rounded-full transition`}
          >
            Start for free
          </button>
        </div>
      </div>
      {/* Right Column - Animation */}
      <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-black'} relative flex items-center justify-center`}>
        <AnimationContainer theme={theme} />
      </div>
    </div>
  );
};

export default Hero;