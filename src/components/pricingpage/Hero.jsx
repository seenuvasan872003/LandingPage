/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = ({ theme }) => {
  const { t } = useTranslation();

  return (
    <motion.section 
      className={`py-20 text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex justify-center mb-6"
      >
        <div className="bg-green-500 p-4 rounded-full">
          <MessageSquare size={40} className="text-white" />
        </div>
      </motion.div>
      
      <motion.h1 
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t('pricingpage.hero.title')}
      </motion.h1>
      
      <motion.p 
        className={`text-xl max-w-2xl mx-auto mb-10 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {t('pricingpage.hero.subtitle')}
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button onClick={() => window.open('https://app.gowhats.in', '_blank')} className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-lg transition duration-300">
          {t('pricingpage.hero.startTrial')}
        </button>
        <Link
          to="/book-demo"
          className={`px-8 py-3 ${
            theme === 'light' 
            ? 'bg-white hover:bg-gray-100 text-black border border-gray-200' 
            : 'bg-black hover:bg-gray-900 text-white border border-gray-800'
          } font-medium rounded-lg shadow-lg transition duration-300`}>
          {t('pricingpage.hero.scheduleDemo')}
        </Link>
      </motion.div>
      
      
    </motion.section>
  );
};

export default Hero;