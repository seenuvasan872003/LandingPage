/* eslint-disable no-unused-vars */
import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = ({ theme }) => {
  return (
    <section className={`py-20 relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className={`absolute inset-0 ${theme === 'light' 
        ? 'bg-[radial-gradient(circle_at_30%_50%,_rgba(34,197,94,0.1),_transparent_70%)]' 
        : 'bg-[radial-gradient(circle_at_30%_50%,_rgba(34,197,94,0.1),_transparent_70%)]'}`} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center md:text-left"
            >
              <motion.div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === 'light' 
                  ? 'bg-gray-100 border border-gray-200' 
                  : 'bg-gray-800/50 border border-gray-700'
              } mb-6`}>
                <Sparkles className={theme === 'light' ? 'w-4 h-4 text-green-600' : 'w-4 h-4 text-green-500'} />
                <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  New Features Available
                </span>
              </motion.div>
              
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Ready to Automate Your{' '}
                <span className={theme === 'light' ? 'text-green-600' : 'text-green-500'}>
                  WhatsApp Now?
                </span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-8 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
              >
                Join thousands of businesses that are transforming customer engagement with our powerful WhatsApp API solution.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
              >
                <motion.a 
                  href="https://app.gowhats.in"
                  className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-full ${
                    theme === 'light'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-green-500 text-black hover:bg-green-400'
                  } font-bold text-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">Get Started Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                </motion.a>
                
                <motion.div 
                   
                  className={`group px-8 py-4 rounded-full font-bold text-lg relative overflow-hidden ${
                    theme === 'light'
                      ? 'border-2 border-green-600 text-green-600 hover:bg-green-50'
                      : 'border-2 border-green-500 text-green-500 hover:bg-green-500/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="/book-demo" className="relative z-10">Book Demo</Link>
                </motion.div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={theme === 'light' ? 'mt-6 text-gray-500 font-medium' : 'mt-6 text-gray-500 font-medium'}
              >
                No credit card required • Set up in minutes
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`absolute inset-0 ${
                theme === 'light'
                  ? 'bg-green-500/20'
                  : 'bg-green-500/20'
              } blur-3xl rounded-full`} />
              <div className={`relative p-8 rounded-2xl ${
                theme === 'light'
                  ? 'bg-gray-50 border border-gray-200'
                  : 'bg-gray-900 border border-gray-800'
              }`}>
                <div className="w-64 h-64 flex items-center justify-center">
                  <div className="relative">
                    <div className={`absolute inset-0 ${
                      theme === 'light'
                        ? 'bg-green-500/20'
                        : 'bg-green-500/20'
                    } blur-xl rounded-full`} />
                    <MessageSquare className={`w-32 h-32 ${
                      theme === 'light' ? 'text-green-600' : 'text-green-500'
                    } relative animate-pulse`} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;