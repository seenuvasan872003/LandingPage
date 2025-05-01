import React from 'react'
import HeroSection from '../components/flotinghero/parallax-floating-demo'
import { SmoothScrollHero } from '/src/components/SmoothScrollHero.jsx';
import LogoShowcase from '../components/LogoShowcase.jsx'
import TestimonialSection from '../components/TestimonialSection.jsx';

const Homepage = () => {
  return (
    <>
        <HeroSection />
        <SmoothScrollHero />
        <LogoShowcase />
        <TestimonialSection />
    </>
  )
}

export default Homepage