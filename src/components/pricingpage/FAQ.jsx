/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = ({ theme }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: t('pricingpage.FAQ.questions.messageLimitExceed.question'),
      answer: t('pricingpage.FAQ.questions.messageLimitExceed.answer')
    },
    {
      question: t('pricingpage.FAQ.questions.whatsappBusiness.question'),
      answer: t('pricingpage.FAQ.questions.whatsappBusiness.answer')
    },
    {
      question: t('pricingpage.FAQ.questions.cancelSwitch.question'),
      answer: t('pricingpage.FAQ.questions.cancelSwitch.answer')
    },
    {
      question: t('pricingpage.FAQ.questions.freeTrial.question'),
      answer: t('pricingpage.FAQ.questions.freeTrial.answer')
    },
    {
      question: t('pricingpage.FAQ.questions.discounts.question'),
      answer: t('pricingpage.FAQ.questions.discounts.answer')
    }
  ];
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className={`text-3xl font-bold text-center mb-12 ${theme === 'light' ? 'text-black' : 'text-white'} `}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('pricingpage.FAQ.title')}
      </motion.h2>
      
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            <button
              className={`w-full text-left p-6 rounded-lg flex justify-between items-center ${
                activeIndex === index 
                  ? 'bg-blue-50 text-green-700' 
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              } border transition-colors duration-200 shadow-sm`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-white border border-t-0 rounded-b-lg">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQ;