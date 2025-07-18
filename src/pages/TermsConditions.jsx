/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, Users, Shield, Zap } from 'lucide-react';

export default function TermsConditions({ theme }) {
  const sections = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using GoWhats, you accept and agree to be bound by these Terms and Conditions",
        "If you do not agree to these terms, please do not use our services",
        "These terms constitute a legally binding agreement between you and GoWhats",
        "We may update these terms from time to time, and continued use constitutes acceptance of changes"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Service Description",
      content: [
        "GoWhats provides WhatsApp Business API integration services",
        "Our platform enables businesses to send and receive messages through WhatsApp Business",
        "We offer tools for message automation, customer management, and analytics",
        "Service availability is subject to WhatsApp Business API terms and limitations",
        "Features and functionality may vary based on your subscription plan"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "User Responsibilities",
      content: [
        "You must provide accurate and complete information when creating an account",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You must comply with all applicable laws and regulations when using our services",
        "You agree not to use our services for spam, harassment, or illegal activities",
        "You must respect WhatsApp's terms of service and messaging policies",
        "You are responsible for all content sent through our platform"
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Prohibited Activities",
      content: [
        "Sending unsolicited messages or spam to WhatsApp users",
        "Using our services to harass, threaten, or abuse others",
        "Attempting to hack, disrupt, or damage our systems",
        "Sharing your account access with unauthorized parties",
        "Using our services for fraudulent or illegal activities",
        "Violating WhatsApp Business API policies and guidelines"
      ]
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Limitation of Liability",
      content: [
        "GoWhats provides services on an 'as is' and 'as available' basis",
        "We do not guarantee uninterrupted or error-free service",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount you paid for our services",
        "We are not responsible for WhatsApp Business API downtime or changes",
        "You use our services at your own risk"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Protection",
      content: [
        "We implement security measures to protect your data",
        "You retain ownership of your content and customer data",
        "We may process your data as necessary to provide our services",
        "Data backup and recovery procedures are in place",
        "We comply with applicable data protection regulations",
        "You can request data deletion upon account termination"
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
              <FileText className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Terms & Conditions
            </h1>
            <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Please read these terms carefully before using our WhatsApp Business integration services.
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
              Agreement Overview
            </h2>
            <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              These Terms and Conditions ("Terms") govern your use of GoWhats' WhatsApp Business integration platform and related services. By using our services, you agree to comply with and be bound by these terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Termination Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-lg p-8 mt-8`}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Account Termination
            </h3>
            <p className={`text-lg leading-relaxed mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              Either party may terminate this agreement at any time. Upon termination:
            </p>
            <ul className="space-y-2">
              <li className={`flex items-start ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Your access to our services will be immediately suspended</span>
              </li>
              <li className={`flex items-start ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>You may export your data within 30 days of termination</span>
              </li>
              <li className={`flex items-start ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>No refunds will be provided for unused subscription periods</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-lg p-8 mt-8`}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Contact Information
            </h3>
            <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              If you have questions about these Terms and Conditions, please contact us:
            </p>
            <div className={`mt-4 space-y-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              <div>Email: legal@gowhats.com</div>
              <div>Phone: +1 (555) 123-4567</div>
              <div>Address: 123 Legal Street, Terms City, TC 12345</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}