import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimationContainer from './AnimationContainer.jsx';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow grid md:grid-cols-2 grid-cols-1 bg-black py-20">
      {/* Left Column - Text Content */}
      <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-16 bg-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Automate your
          <br />
          business with
          <br />
          WhatsApp API!
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-lg">
          Engage customers, streamline support, and boost sales with our powerful WhatsApp Business API integration platform.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition z-10" onClick={() => navigate('/book-demo')}>
            Book a demo
          </button>
          
          <button className="px-6 py-2 z-10 border bg-white text-black rounded-full hover:bg-black hover:text-white hover:border-white transition">
            Start for free
          </button>
        </div>
      </div>
      {/* Right Column - Animation */}
      <div className="bg-black relative flex items-center justify-center">
        <AnimationContainer />
      </div>
    </div>
  );
};

export default Hero;