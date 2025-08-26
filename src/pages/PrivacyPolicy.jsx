/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Database, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy({ theme }) {
  return (
    <div className={`min-h-screen pt-24 pb-16 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full mb-8"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className={`text-5xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Privacy Policy
            </h1>
            <p className={`text-xl max-w-3xl mx-auto mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Your privacy is fundamental to us. This comprehensive policy explains how GoWhats collects, uses, protects, and manages your personal information when you use our WhatsApp Business integration platform.
            </p>
            <div className={`text-lg ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              Last updated: January 15, 2025 | Effective Date: January 1, 2025
            </div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Introduction & Scope
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              GoWhats Inc. ("we," "our," "us," or "GoWhats") is committed to protecting and respecting your privacy. This Privacy Policy applies to all users of our WhatsApp Business API integration platform, including our website, mobile applications, APIs, and related services (collectively, the "Services").
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              This policy covers all personal data processing activities conducted by GoWhats, including data collected directly from users, data received from third-party integrations, and data generated through your use of our platform. By using our Services, you acknowledge that you have read, understood, and agree to the collection and use of information in accordance with this policy.
            </p>
            <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              We are committed to compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other regional privacy regulations.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Eye className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Information We Collect
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Personal Information You Provide
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Account Information:</strong> Name, email address, phone number, company name, job title, and billing address when you create an account or subscribe to our services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Profile Data:</strong> Profile pictures, business descriptions, industry information, and other details you choose to add to your account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Communication Preferences:</strong> Language settings, notification preferences, marketing communication choices, and timezone information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Payment Information:</strong> Credit card details, billing addresses, and transaction history (processed securely through our payment partners)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Support Communications:</strong> Messages, attachments, and other information you provide when contacting our support team</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Automatically Collected Information
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Usage Analytics:</strong> Pages visited, features used, time spent on platform, click patterns, and user journey data to improve our services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Technical Information:</strong> IP address, browser type and version, operating system, device identifiers, screen resolution, and referral URLs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Performance Data:</strong> API response times, error logs, system performance metrics, and service availability statistics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Location Data:</strong> General geographic location based on IP address for service optimization and compliance purposes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  WhatsApp Business Integration Data
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Message Content:</strong> Text messages, media files, and documents sent and received through our platform (processed but not stored permanently)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Contact Information:</strong> Phone numbers, names, and profile information of your WhatsApp contacts (with appropriate consent)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Conversation Metadata:</strong> Message timestamps, delivery status, read receipts, and conversation flow analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Business Profile Data:</strong> WhatsApp Business profile information, verification status, and business category details</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Database className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                How We Use Your Information
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Service Provision & Operations
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Provide, maintain, and improve our WhatsApp Business integration platform and related services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Process and deliver your messages, manage conversations, and facilitate communication with your customers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Authenticate users, manage accounts, and provide personalized dashboard experiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Process payments, manage subscriptions, and handle billing inquiries</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Platform Enhancement & Analytics
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Analyze usage patterns to improve platform performance, user experience, and develop new features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Generate insights and analytics to help you understand your messaging performance and customer engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Conduct research and development to enhance our AI-powered automation and chatbot capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Monitor system performance, identify technical issues, and optimize infrastructure</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Communication & Support
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Provide customer support, respond to inquiries, and resolve technical issues</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Send service-related notifications, security alerts, and important account updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Deliver marketing communications, product updates, and educational content (with your consent)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Conduct surveys and gather feedback to improve our services</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Information Sharing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Information Sharing & Disclosure
              </h2>
            </div>
            
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              We do not sell, trade, or rent your personal information to third parties for marketing purposes. We may share your information only in the following circumstances:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Service Providers & Partners
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  We work with trusted third-party service providers who help us operate our platform, including cloud hosting providers (AWS, Google Cloud), payment processors (Stripe, PayPal), analytics services (Google Analytics), and customer support tools. These partners are contractually bound to protect your data and use it only for specified purposes.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  WhatsApp Business API
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Message data is shared with WhatsApp (Meta) as necessary to deliver messages through their Business API. This sharing is governed by WhatsApp's Business API terms and Meta's privacy policies. We ensure compliance with all applicable data transfer requirements.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Legal Requirements
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  We may disclose your information if required by law, legal process, or government request, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or respond to government requests.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Business Transfers
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to the same privacy protections outlined in this policy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Lock className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Data Security & Protection
              </h2>
            </div>
            
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              We implement comprehensive security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Technical Safeguards
                </h3>
                <ul className={`space-y-2 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>End-to-end encryption for all data transmissions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>AES-256 encryption for data at rest</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>SSL/TLS protocols for secure connections</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Multi-factor authentication options</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Operational Security
                </h3>
                <ul className={`space-y-2 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Regular security audits and penetration testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>SOC 2 Type II compliance certification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>24/7 security monitoring and incident response</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Employee security training and background checks</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Globe className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Your Privacy Rights
              </h2>
            </div>
            
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              Depending on your location and applicable laws, you may have the following rights regarding your personal information:
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    Access & Portability
                  </h3>
                  <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    Request access to your personal data and receive a copy in a structured, machine-readable format for portability to other services.
                  </p>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    Correction & Updates
                  </h3>
                  <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    Correct inaccurate personal information and update your account details at any time through your dashboard.
                  </p>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    Deletion & Erasure
                  </h3>
                  <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    Request deletion of your personal data, subject to legal and contractual retention requirements.
                  </p>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    Processing Restrictions
                  </h3>
                  <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    Restrict or object to certain processing activities, including marketing communications and automated decision-making.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Contact Our Privacy Team
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              If you have questions about this Privacy Policy, want to exercise your privacy rights, or need to report a privacy concern, please contact our dedicated privacy team:
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl md:max-w-none">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-[#25D366] mb-3" />
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Email
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  techvaseegrah@gmail.com
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-[#25D366] mb-3" />
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Phone
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  +91 85240 89733
                </p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-[#25D366] mb-3" />
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Address
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-center`}>
                  9, Vijaya Nagar, Reddypalayam Road <br/> Thanjavur-613009
                </p>
              </div>
            </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}