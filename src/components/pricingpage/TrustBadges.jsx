/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, Wifi, Users, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrustBadges = ({ theme = 'light' }) => {
  const { t } = useTranslation();

  const badges = [
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: t('pricingpage.TrustBadges.badges.gdprCompliant')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: t('pricingpage.TrustBadges.badges.isoCertified')
    },
    {
      icon: <Lock className="h-8 w-8 text-green-500" />,
      title: t('pricingpage.TrustBadges.badges.encryption')
    },
    {
      icon: <Wifi className="h-8 w-8 text-green-500" />,
      title: t('pricingpage.TrustBadges.badges.uptime')
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: t('pricingpage.TrustBadges.badges.trustedBy')
    },
    {
      icon: <Database className="h-8 w-8 text-green-500" />,
      title: t('pricingpage.TrustBadges.badges.dataSafety')
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
    
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
    
  return (
    <section className={`py-16 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-2xl font-bold text-center mb-12 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('pricingpage.TrustBadges.title')}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3  gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md'
              }`}
              variants={item}
            >
              <div className="mb-3">
                {badge.icon}
              </div>
              <p className={`text-sm font-medium text-center ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-200'
              }`}>
                {badge.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default TrustBadges;