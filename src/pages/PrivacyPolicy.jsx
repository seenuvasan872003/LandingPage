/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

export default function PrivacyPolicy({ theme }) {
  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Usage data and analytics to improve our services",
        "Communication preferences and settings",
        "Technical information about your device and browser",
        "WhatsApp Business API integration data"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our WhatsApp Business integration services",
        "Process and deliver your messages and communications",
        "Improve our platform and develop new features",
        "Send you service-related notifications and updates",
        "Provide customer support and respond to inquiries",
        "Ensure security and prevent fraud"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share data with trusted service providers who help us operate our platform",
        "Information may be disclosed if required by law or legal process",
        "Anonymous, aggregated data may be used for research and analytics",
        "WhatsApp Business API data is shared only as necessary for service delivery"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmissions are encrypted using SSL/TLS protocols",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication measures for our systems",
        "Secure data centers with physical and digital protection",
        "Regular backup and disaster recovery procedures"
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Access your personal information and request corrections",
        "Delete your account and associated data",
        "Export your data in a portable format",
        "Opt-out of marketing communications",
        "Restrict processing of your personal information",
        "File complaints with relevant data protection authorities"
      ]
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full mb-6"
            >
              <Shield className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Privacy Policy
            </h1>
            <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className={`mt-4 text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              Last updated: January 2025
            </div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-lg p-8 mb-8`}
          >
            <h2 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Introduction
            </h2>
            <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              GoWhats ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our WhatsApp Business integration platform and related services.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-lg p-8`}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full mr-4">
                    <div className="text-white">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className={`flex items-start ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      <div className="w-2 h-2 bg-[#25D366] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-lg p-8 mt-8`}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Contact Us
            </h3>
            <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className={`mt-4 space-y-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              <div>Email: privacy@gowhats.com</div>
              <div>Phone: +1 (555) 123-4567</div>
              <div>Address: 123 Privacy Street, Data City, DC 12345</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}