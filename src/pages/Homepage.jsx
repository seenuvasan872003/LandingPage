import React from 'react';
import Hero from '../components/homepage/Hero.jsx';
import Imagesection from '../components/homepage/Imagesection.jsx';
import LogoShowcase from '../components/homepage/LogoShowcase.jsx';
import TestimonialSection from '../components/homepage/TestimonialSection.jsx';
import Features from '../components/homepage/Features.jsx';
import AIChatDemo from '../components/homepage/AIChatDemo.jsx';
import FAQ from '../components/homepage/FAQ.jsx';
import CTA from '../components/CTA.jsx';

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
        <FAQ theme={theme} setTheme={setTheme} />
        <CTA theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
};

export default Homepage;