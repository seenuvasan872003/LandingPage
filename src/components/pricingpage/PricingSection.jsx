/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PricingCard from './PricingCard';
import { MessageSquare, Settings, Target } from 'lucide-react';

const PricingSection = ({ theme }) => {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16">
      <motion.h2 
        className={`text-3xl font-bold text-center mb-8 ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('pricingpage.PricingSection.title')}
      </motion.h2>

      <motion.div 
        className="flex justify-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={`inline-flex items-center p-1 rounded-full ${
          theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
        }`}>
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-full transition-colors ${
              billingCycle === 'monthly'
                ? theme === 'light'
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-black text-white shadow-sm'
                : theme === 'light'
                ? 'text-gray-700'
                : 'text-gray-300'
            }`}
          >
            {t('pricingpage.PricingSection.billingCycle.monthly')}
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-full transition-colors ${
              billingCycle === 'yearly'
                ? theme === 'light'
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-black text-white shadow-sm'
                : theme === 'light'
                ? 'text-gray-700'
                : 'text-gray-300'
            }`}
          >
            {t('pricingpage.PricingSection.billingCycle.yearly')}
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3.5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <PricingCard
          title={t('pricingpage.PricingSection.plans.freeTrial.title')}
          price={{ monthly: "$0", yearly: "$0" }}
          period={t('pricingpage.PricingSection.plans.freeTrial.period')}
          description={t('pricingpage.PricingSection.plans.freeTrial.description')}
          icon={<MessageSquare className="h-8 w-8 text-green-500" />}
          features={t('pricingpage.PricingSection.plans.freeTrial.features', { returnObjects: true })}
          ctaText={t('pricingpage.PricingSection.plans.freeTrial.ctaText')}
          ctaColor={`${theme === 'light' ? 'bg-black hover:bg-gray-800 text-white' : 'bg-white hover:bg-gray-100 text-black'}`}
          popular={false}
          theme={theme}
          billingCycle={billingCycle}
        />
        
        <PricingCard
          title={t('pricingpage.PricingSection.plans.basic.title')}
          price={{
            monthly: "₹1,999",
            yearly: "₹19,990"
          }}
          period={billingCycle === 'monthly' 
            ? t('pricingpage.PricingSection.plans.basic.period.monthly') 
            : t('pricingpage.PricingSection.plans.basic.period.yearly')
          }
          description={t('pricingpage.PricingSection.plans.basic.description')}
          icon={<Settings className="h-8 w-8 text-green-500" />}
          features={t('pricingpage.PricingSection.plans.basic.features', { returnObjects: true })}
          ctaText={t('pricingpage.PricingSection.plans.basic.ctaText')}
          ctaColor="bg-green-500 hover:bg-green-600 text-white"
          popular={true}
          theme={theme}
          billingCycle={billingCycle}
        />
        
        <PricingCard
          title={t('pricingpage.PricingSection.plans.custom.title')}
          price={{
            monthly: "Custom",
            yearly: "Custom"
          }}
          period={t('pricingpage.PricingSection.plans.custom.period')}
          description={t('pricingpage.PricingSection.plans.custom.description')}
          icon={<Target className="h-8 w-8 text-green-500" />}
          features={t('pricingpage.PricingSection.plans.custom.features', { returnObjects: true })}
          ctaText={t('pricingpage.PricingSection.plans.custom.ctaText')}
          ctaColor={`${theme === 'light' ? 'bg-black hover:bg-gray-800 text-white' : 'bg-white hover:bg-gray-100 text-black'}`}
          popular={false}
          theme={theme}
          billingCycle={billingCycle}
        />
      </motion.div>
    </section>
  );
};

export default PricingSection;