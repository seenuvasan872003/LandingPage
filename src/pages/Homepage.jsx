import React from 'react';
import Hero from '../components/Hero.jsx';
import Imagesection from '../components/Imagesection.jsx';
import LogoShowcase from '../components/LogoShowcase.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import Features from '../components/Features.jsx';
import AIChatDemo from '../components/AIChatDemo.jsx';

const Homepage = ({ theme, setTheme }) => {
  return (
    <>
      <div className={`${theme === 'light' ? 'bg-white' : 'bg-black'} transition-colors duration-300`}>
        <Hero theme={theme} setTheme={setTheme} />
        <Imagesection theme={theme} setTheme={setTheme} />
        <LogoShowcase theme={theme} setTheme={setTheme} />
        <Features theme={theme} setTheme={setTheme} />
        <AIChatDemo theme={theme} setTheme={setTheme} />
        <TestimonialSection theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
};

export default Homepage;