/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, MessageSquare, HeadphonesIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Addons = ({theme}) => {
  const { t } = useTranslation();

  const addons = [
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.addons.items.additionalMessages.title'),
      price: t('pricingpage.addons.items.additionalMessages.price'),
      description: t('pricingpage.addons.items.additionalMessages.description')
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.addons.items.extraUsers.title'),
      price: t('pricingpage.addons.items.extraUsers.price'),
      description: t('pricingpage.addons.items.extraUsers.description')
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.addons.items.bulkSms.title'),
      price: t('pricingpage.addons.items.bulkSms.price'),
      description: t('pricingpage.addons.items.bulkSms.description')
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-green-500" />,
      title: t('pricingpage.addons.items.dedicatedSupport.title'),
      price: t('pricingpage.addons.items.dedicatedSupport.price'),
      description: t('pricingpage.addons.items.dedicatedSupport.description')
    }
  ];

  return (
    <motion.section 
      className="py-16 px-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'} `}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('pricingpage.addons.title')}
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('pricingpage.addons.subtitle')}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-green-100">
                    {addon.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-center mb-2">
                  {addon.title}
                </h3>
              </div>

              <div className="bg-gray-50 p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{addon.price}</div>
                <div className="text-gray-500 text-sm">{addon.description}</div>
              </div>

              <div className="p-4">
                <button className="w-full py-2 border border-green-500 text-green-500 hover:bg-green-50 font-medium rounded-lg transition duration-300">
                  {t('pricingpage.addons.addToPlan')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Addons;