/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({
  title,
  price,
  period,
  description,
  icon,
  features,
  ctaText,
  ctaColor,
  popular,
  theme,
  billingCycle
}) => {
  const currentPrice = billingCycle === 'monthly' ? price.monthly : price.yearly;
  
  return (
    <motion.div 
      className={`relative rounded-2xl overflow-hidden ${
        theme === 'light'
          ? 'bg-white border-2 border-green-500'
          : 'bg-black border-2 border-green-500'
      } shadow-xl hover:scale-105 transition-transform duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 uppercase tracking-wide">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className={`text-xl font-bold ml-2 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>{title}</h3>
        </div>
        
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className={`text-4xl font-extrabold ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>{currentPrice}</span>
            <span className={`ml-2 ${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}>/{period}</span>
          </div>
          <p className={`mt-2 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>{description}</p>
        </div>
        
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <span className="mr-2 mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-green-500" />
              </span>
              <span className={
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }>{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <button className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 ${ctaColor}`}>
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;