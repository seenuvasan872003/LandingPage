/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Unlimited Broadcast', freeTrial: true, basic: true, custom: true },
  { name: 'Website Interaction', freeTrial: true, basic: true, custom: true },
  { name: 'F3 Engine', freeTrial: true, basic: true, custom: true },
  { name: 'Inventory Management', freeTrial: true, basic: true, custom: true },
  { name: 'Order Automation', freeTrial: false, basic: true, custom: true },
  { name: 'Appointment Booking', freeTrial: false, basic: true, custom: true },
  { name: 'Printing & Tracking', freeTrial: false, basic: true, custom: true },
  { name: 'Auto Correction', freeTrial: false, basic: true, custom: true },
  { name: 'Custom Integrations', freeTrial: false, basic: false, custom: true },
  { name: 'Priority Support', freeTrial: false, basic: false, custom: true }
];

const FeatureComparison = () => {
  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Feature Comparison
      </motion.h2>
      
      <motion.div 
        className="overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="py-6 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Feature
              </th>
              <th scope="col" className="py-6 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Free Trial
              </th>
              <th scope="col" className="py-6 px-6 text-center text-sm font-semibold text-blue-700 uppercase tracking-wider bg-blue-50">
                Basic Plan
              </th>
              <th scope="col" className="py-6 px-6 text-center text-sm font-semibold text-purple-700 uppercase tracking-wider">
                Custom Plan
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  {feature.name}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.freeTrial ? (
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <X className="h-4 w-4 text-red-600" />
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-center bg-blue-50">
                  {feature.basic ? (
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <Check className="h-4 w-4 text-blue-600" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <X className="h-4 w-4 text-red-600" />
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.custom ? (
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100">
                      <Check className="h-4 w-4 text-purple-600" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <X className="h-4 w-4 text-red-600" />
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default FeatureComparison;