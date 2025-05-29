/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MessageSquare, ShoppingCart, Shield, HelpCircle, Zap, ChevronDown, Users, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FAQ = ({ theme }) => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  const faqs = [
    {
      icon: <MessageSquare className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: t('Homepage.faq.questions.official_api.question'),
      answer: t('Homepage.faq.questions.official_api.answer')
    },
    {
      icon: <ShoppingCart className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: t('Homepage.faq.questions.ecommerce_integration.question'),
      answer: t('Homepage.faq.questions.ecommerce_integration.answer')
    },
    {
      icon: <Zap className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: t('Homepage.faq.questions.free_trial.question'),
      answer: t('Homepage.faq.questions.free_trial.answer')
    },
    {
      icon: <Shield className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: t('Homepage.faq.questions.data_security.question'),
      answer: t('Homepage.faq.questions.data_security.answer')
    },
    {
      icon: <Users className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: t('Homepage.faq.questions.team_access.question'),
      answer: t('Homepage.faq.questions.team_access.answer')
    },
    {
      icon: <Settings className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: t('Homepage.faq.questions.technical_support.question'),
      answer: t('Homepage.faq.questions.technical_support.answer')
    }
  ];

  return (
    <section className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            {t('Homepage.faq.title')}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('Homepage.faq.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index < 3 ? -50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="group"
            >
              <motion.div
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer
                  ${theme === 'light' 
                    ? 'bg-gray-50 hover:bg-gray-100 border border-gray-200' 
                    : 'bg-gray-900 hover:bg-gray-800 border border-gray-800'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
                    }`}>
                      {faq.icon}
                    </div>
                    <h3 className={`text-xl font-semibold ${
                      theme === 'light' ? 'text-black' : 'text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${
                      theme === 'light' ? 'text-green-600' : 'text-green-500'
                    }`} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={`mt-4 pl-16 leading-relaxed ${
                        theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            to="/book-demo" 
            className={`inline-flex items-center gap-2 font-medium transition-colors ${
              theme === 'light' 
                ? 'text-green-600 hover:text-green-700' 
                : 'text-green-500 hover:text-green-400'
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            {t('Homepage.faq.contact_support')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;