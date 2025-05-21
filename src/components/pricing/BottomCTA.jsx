/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const BottomCTA = () => {
  return (
    <motion.section
      className="py-24 bg-gradient-to-r from-green-500 to-green-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to automate your customer communication?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/90 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get started with our 90-day free trial today and experience the power of WhatsApp API integration.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="px-8 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition duration-300">
              Talk to Sales
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BottomCTA;