// TestimonialCard.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({
  quote,
  name,
  company,
  profileImage,
  rating,
  index,
  theme = 'dark'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`${theme === 'light' ? 'bg-white border-gray-200' : 'bg-zinc-900 border-zinc-800'} rounded-2xl p-8 border hover:border-green-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5`}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        className="flex gap-1 mb-6"
      >
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-green-500 fill-green-500' : theme === 'light' ? 'text-gray-300' : 'text-zinc-700'}`}
          />
        ))}
      </motion.div>
      
      <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-8 text-lg leading-relaxed`}>{quote}</p>
      
      <motion.div 
        className="flex items-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        <img 
          src={profileImage} 
          alt={`${name}'s profile`} 
          className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-green-500/20"
        />
        <div>
          <h4 className={`font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{name}</h4>
          <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>{company}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;