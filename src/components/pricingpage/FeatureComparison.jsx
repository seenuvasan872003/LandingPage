/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, X } from 'lucide-react';

const FeatureComparison = ({theme}) => {
  const { t } = useTranslation();

  const features = [
    { key: 'unlimitedBroadcast', freeTrial: true, basic: true, custom: true },
    { key: 'websiteInteraction', freeTrial: true, basic: true, custom: true },
    { key: 'f3Engine', freeTrial: true, basic: true, custom: true },
    { key: 'inventoryManagement', freeTrial: true, basic: true, custom: true },
    { key: 'orderAutomation', freeTrial: false, basic: true, custom: true },
    { key: 'appointmentBooking', freeTrial: false, basic: true, custom: true },
    { key: 'printingTracking', freeTrial: false, basic: true, custom: true },
    { key: 'autoCorrection', freeTrial: false, basic: true, custom: true },
    { key: 'customIntegrations', freeTrial: false, basic: false, custom: true },
    { key: 'prioritySupport', freeTrial: false, basic: false, custom: true }
  ];

  return (
    <motion.section 
      className="py-16 px-5"
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
        {t('pricingpage.FeatureComparison.title')}
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
                {t('pricingpage.FeatureComparison.tableHeaders.feature')}
              </th>
              <th scope="col" className="py-6 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                {t('pricingpage.FeatureComparison.tableHeaders.freeTrial')}
              </th>
              <th scope="col" className="py-6 px-6 text-center text-sm font-semibold text-blue-700 uppercase tracking-wider bg-blue-50">
                {t('pricingpage.FeatureComparison.tableHeaders.basicPlan')}
              </th>
              <th scope="col" className="py-6 px-6 text-center text-sm font-semibold text-purple-700 uppercase tracking-wider">
                {t('pricingpage.FeatureComparison.tableHeaders.customPlan')}
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
                  {t(`pricingpage.FeatureComparison.features.${feature.key}`)}
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