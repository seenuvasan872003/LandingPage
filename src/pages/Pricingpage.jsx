/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Hero from '../components/pricingpage/Hero';
import PricingSection from '../components/pricingpage/PricingSection';
import FeatureComparison from '../components/pricingpage/FeatureComparison';
import Addons from '../components/pricingpage/Addons';
import Enterprise from '../components/pricingpage/Enterprise';
import FAQ from '../components/pricingpage/FAQ';
import CTA from '../components/CTA';
import TrustBadges from '../components/pricingpage/TrustBadges';

const Pricingpage = ({ theme, setTheme }) => {
  return (
    <>
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-black'} transition-colors duration-300`}>
            <Hero theme={theme} setTheme={setTheme} />
            <PricingSection theme={theme} setTheme={setTheme} />
            <FeatureComparison theme={theme} setTheme={setTheme} />
            <Addons theme={theme} setTheme={setTheme} />
            <Enterprise theme={theme} setTheme={setTheme} />
            <TrustBadges theme={theme} setTheme={setTheme} />
            <FAQ theme={theme} setTheme={setTheme} />
            <CTA theme={theme} setTheme={setTheme} />
        </div>

    </>
  )
}

export default Pricingpage