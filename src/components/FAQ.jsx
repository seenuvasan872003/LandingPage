/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MessageSquare, ShoppingCart, Shield, HelpCircle, Zap, ChevronDown, Users, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQ = ({ theme }) => {
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
      question: "Is this WhatsApp API official?",
      answer: "Yes, our solution is built on the official WhatsApp Business API. We're an authorized WhatsApp Business Solution Provider, ensuring you get a compliant and reliable service that follows all of Meta's guidelines and policies."
    },
    {
      icon: <ShoppingCart className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: "Can I integrate with my e-commerce store?",
      answer: "Absolutely! Our API seamlessly integrates with all major e-commerce platforms including Shopify, WooCommerce, Magento, and custom solutions. You can automate order updates, shipping notifications, and even create interactive shopping experiences directly in WhatsApp."
    },
    {
      icon: <Zap className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: "What's included in the free trial?",
      answer: "Our 14-day free trial includes full access to all API features, up to 1,000 messages, custom template creation, basic analytics, and dedicated support. You'll get everything you need to test the platform thoroughly before committing to a paid plan."
    },
    {
      icon: <Shield className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: "How secure is customer data?",
      answer: "Security is our top priority. We implement end-to-end encryption, comply with GDPR and other global privacy regulations, and host on SOC 2 certified infrastructure. Your data and your customers' information are always protected with enterprise-grade security measures."
    },
    {
      icon: <Users className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: "Can multiple team members use the same account?",
      answer: "Yes, we support multi-user access with customizable roles and permissions. You can add team members, assign specific responsibilities, and track individual performance. Our collaborative features make it easy to manage customer communications as a team."
    },
    {
      icon: <Settings className={`w-6 h-6 ${theme === 'light' ? 'text-green-600' : 'text-green-500'}`} />,
      question: "What kind of technical support do you provide?",
      answer: "We offer comprehensive technical support including 24/7 email support, dedicated account managers for enterprise plans, detailed documentation, API references, and implementation guides. Our technical team is always available to help you maximize the potential of our WhatsApp API."
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
            Frequently Asked Questions
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Everything you need to know about our WhatsApp API solution
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index < 3 ? -50 : 50 }}
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
            Have more questions? Contact our support team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;