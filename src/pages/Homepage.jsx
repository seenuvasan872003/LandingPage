import React from 'react'
// import HeroSection from '../components/flotinghero/parallax-floating-demo'
import Hero from '../components/Hero.jsx';
// import { SmoothScrollHero } from '/src/components/SmoothScrollHero.jsx';
import Imagesection from '../components/Imagesection.jsx';
import LogoShowcase from '../components/LogoShowcase.jsx'
import TestimonialSection from '../components/TestimonialSection.jsx';
import Features from '../components/Features.jsx'
import AIChatDemo from '../components/AIChatDemo.jsx';

const Homepage = () => {
  return (
    <>
        <div className='bg-black'>
          <Hero />
          {/* <HeroSection /> */}
          <Imagesection />
          <LogoShowcase />
          <Features />
          <AIChatDemo />
          <TestimonialSection />
        </div>
    </>
  )
}

export default Homepage