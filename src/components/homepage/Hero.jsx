import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimationContainer from './AnimationContainer.jsx';
import { useTranslation } from 'react-i18next';

const Hero = ({ theme }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  return (
    <div className={`flex-grow grid md:grid-cols-2 grid-cols-1 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} py-20 justify-center items-center`}>
      {/* Left Column - Text Content */}
      <div className={`flex flex-col w-full justify-center px-6 md:px-10 lg:px-16 py-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} text-center md:text-left`}>
        <h1 className={`w-full font-bold ${theme === 'light' ? 'text-black' : 'text-white'} ${ i18n.language === 'ta'  ? 'text-xl md:text-3xl lg:text-4xl pr-2'  : 'text-4xl md:text-5xl lg:text-6xl'} leading-tight mb-6`}>
          <span className={`mr-2 ${ i18n.language === 'ta'  ? 'block'  : 'md:block inline '} `}>{t('Homepage.hero.title1')}</span>
          <span className={`px-1 ${ i18n.language === 'ta'  ? 'block'  : 'md:block inline '}`}>{t('Homepage.hero.title2')}</span>
          <span className={`bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent ml-2 ${ i18n.language === 'ta'  ? 'block'  : 'md:block inline '}`}>{t('Homepage.hero.title3')}</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-lg text-center md:text-left">
          {t('Homepage.hero.description')}
        </p>
        <div className=" block lg:flex space-x-4 justify-center md:justify-start">
          <button 
            className={` max-[1024px]:w-full px-6 py-2 max-[1024px]:mb-3.5 border ${theme === 'light' ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'} rounded-full transition z-10`} 
            onClick={() => navigate('/book-demo')}
          >
            {t('Homepage.hero.bookDemo')}
          </button>
          
          <button 
            onClick={() => window.open('https://app.gowhats.in', '_blank')}
            className={`max-[1024px]:w-full px-6 py-2 z-10 border ${theme === 'light' ? 'bg-black text-white hover:bg-white hover:text-black hover:border-black' : 'bg-white text-black hover:bg-black hover:text-white hover:border-white'} rounded-full transition`}
          >
            {t('Homepage.hero.startFree')}
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