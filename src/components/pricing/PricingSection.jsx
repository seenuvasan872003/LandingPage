/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import { MessageSquare, Settings, Target } from 'lucide-react';

const PricingSection = ({ theme }) => {
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
        Find the Perfect Plan for Your Business
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
            Monthly
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
            Yearly
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <PricingCard
          title="Free Trial"
          price={{ monthly: "$0", yearly: "$0" }}
          period="90 days"
          description="Perfect for testing our platform"
          icon={<MessageSquare className="h-8 w-8 text-green-500" />}
          features={[
            "Unlimited message broadcasting",
            "Website-wide interaction",
            "F3 Engine support",
            "Inventory management",
            "90-day access"
          ]}
          ctaText="Start Free Trial"
          ctaColor={`${theme === 'light' ? 'bg-black hover:bg-gray-800 text-white' : 'bg-white hover:bg-gray-100 text-black'}`}
          popular={false}
          theme={theme}
          billingCycle={billingCycle}
        />
        
        <PricingCard
          title="Basic Plan"
          price={{
            monthly: "₹1,999",
            yearly: "₹19,990"
          }}
          period={billingCycle === 'monthly' ? 'month' : 'year'}
          description="Essential features for growing businesses"
          icon={<Settings className="h-8 w-8 text-green-500" />}
          features={[
            "Unlimited message broadcasting",
            "Order automation",
            "Appointment booking",
            "Invoice printing",
            "Order tracking",
            "Hold and auto-correction system"
          ]}
          ctaText="Get Started"
          ctaColor="bg-green-500 hover:bg-green-600 text-white"
          popular={true}
          theme={theme}
          billingCycle={billingCycle}
        />
        
        <PricingCard
          title="Custom Plan"
          price={{
            monthly: "Custom",
            yearly: "Custom"
          }}
          period="based on needs"
          description="Tailored solutions for your business"
          icon={<Target className="h-8 w-8 text-green-500" />}
          features={[
            "Tailored features",
            "Full customization",
            "Integration with existing tools",
            "Priority support",
            "Dedicated account manager",
            "Custom API development"
          ]}
          ctaText="Contact Sales"
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