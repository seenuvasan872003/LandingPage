/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Clock, UserCheck, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Enterprise = ({ theme }) => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Code className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.Enterprise.features.apiSupport.title'),
      description: t('pricingpage.Enterprise.features.apiSupport.description')
    },
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.Enterprise.features.uptime.title'),
      description: t('pricingpage.Enterprise.features.uptime.description')
    },
    {
      icon: <UserCheck className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.Enterprise.features.accountManager.title'),
      description: t('pricingpage.Enterprise.features.accountManager.description')
    },
    {
      icon: <Layers className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.Enterprise.features.integrations.title'),
      description: t('pricingpage.Enterprise.features.integrations.description')
    }
  ];

  return (
    <motion.section 
      className="py-16 px-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`rounded-2xl overflow-hidden shadow-xl backdrop-blur-lg bg-gradient-to-r from-green-500/10 to-green-700/10 border border-green-500/20 ${
        theme === 'light' ? 'bg-white/80' : 'bg-black/80'
      }`}>
        <div className="px-8 py-12 md:p-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-7/12">
              <motion.h2 
                className={`text-3xl font-bold mb-6 ${
                  theme === 'light' ? 'text-black' : 'text-white'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t('pricingpage.Enterprise.title')}
              </motion.h2>
              
              <motion.p 
                className={`mb-8 text-lg ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('pricingpage.Enterprise.description')}
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <div className={`p-2 rounded ${
                      theme === 'light' ? 'bg-black/5' : 'bg-white/5'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-medium ${
                        theme === 'light' ? 'text-black' : 'text-white'
                      }`}>{feature.title}</h3>
                      <p className={
                        theme === 'light' ? 'text-gray-600 text-sm' : 'text-gray-400 text-sm'
                      }>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="mt-10 md:mt-0 md:w-4/12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={`rounded-xl p-6 backdrop-blur-sm ${
                theme === 'light' 
                  ? 'bg-black/5 border border-green-500/20' 
                  : 'bg-white/5 border border-green-500/20'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'light' ? 'text-black' : 'text-white'
                }`}>{t('pricingpage.Enterprise.contactCard.title')}</h3>
                <p className={`mb-6 ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>{t('pricingpage.Enterprise.contactCard.description')}</p>
                <button className={`w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition duration-300`}>
                  {t('pricingpage.Enterprise.contactCard.button')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Enterprise;