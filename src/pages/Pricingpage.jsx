/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Hero from '../components/pricing/Hero';
import PricingSection from '../components/pricing/PricingSection';
import FeatureComparison from '../components/pricing/FeatureComparison';
import Addons from '../components/pricing/Addons';
import Enterprise from '../components/pricing/Enterprise';
import FAQ from '../components/pricing/FAQ';
import BottomCTA from '../components/pricing/BottomCTA';
import TrustBadges from '../components/pricing/TrustBadges';

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
            <BottomCTA theme={theme} setTheme={setTheme} />
        </div>

    </>
  )
}

export default Pricingpage