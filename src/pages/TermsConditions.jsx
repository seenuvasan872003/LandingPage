/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, Users, Shield, Zap, CreditCard, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsConditions({ theme }) {
  return (
    <div className={`min-h-screen pt-24 pb-16 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full mb-8"
            >
              <FileText className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className={`text-5xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Terms & Conditions
            </h1>
            <p className={`text-xl max-w-3xl mx-auto mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              These comprehensive terms govern your use of GoWhats' WhatsApp Business integration platform and related services. Please read carefully before using our services.
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
              Agreement Overview
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              These Terms and Conditions ("Terms," "Agreement") constitute a legally binding agreement between you ("User," "Customer," "you") and GoWhats Inc. ("GoWhats," "we," "us," "our") regarding your use of our WhatsApp Business integration platform, APIs, mobile applications, and related services (collectively, the "Services").
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              By accessing, using, or registering for our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
            <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              These Terms apply to all users of our Services, including free trial users, paid subscribers, and API developers. We reserve the right to modify these Terms at any time, with notice provided through our platform or via email.
            </p>
          </motion.div>

          {/* Acceptance of Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Acceptance & Eligibility
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Agreement Acceptance
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>By creating an account, accessing our platform, or using any of our Services, you expressly agree to be bound by these Terms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>If you do not agree to these Terms, you must immediately discontinue use of our Services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Continued use of our Services after any modifications to these Terms constitutes acceptance of the updated Terms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>These Terms supersede any prior agreements or understandings between you and GoWhats</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Eligibility Requirements
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>You must be at least 18 years old or the age of majority in your jurisdiction to use our Services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>You must have the legal capacity to enter into binding contracts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Business users must have a valid WhatsApp Business account and comply with WhatsApp's Business API terms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>You must not be prohibited from using our Services under applicable laws or regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Service Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Zap className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Service Description & Features
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Core Services
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>WhatsApp Business API Integration:</strong> Seamless connection to WhatsApp's official Business API for sending and receiving messages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Message Management:</strong> Tools for creating, scheduling, and managing message campaigns and customer conversations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Automation Platform:</strong> AI-powered chatbots, auto-responses, and workflow automation capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Analytics & Reporting:</strong> Comprehensive insights into message performance, customer engagement, and business metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Team Collaboration:</strong> Multi-user access, role-based permissions, and conversation assignment features</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Service Availability & Limitations
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Services are provided on a subscription basis with different feature tiers and usage limits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Service availability is subject to WhatsApp Business API terms, policies, and technical limitations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>We may modify, suspend, or discontinue features with reasonable notice to users</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Message delivery rates and timing may vary based on WhatsApp's infrastructure and policies</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                User Responsibilities & Obligations
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Account Management
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Provide accurate, complete, and up-to-date information when creating and maintaining your account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Maintain the confidentiality and security of your account credentials, API keys, and access tokens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Immediately notify us of any unauthorized access or security breaches related to your account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>You are responsible for all activities that occur under your account, including actions by team members</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Compliance & Legal Requirements
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Comply with all applicable laws, regulations, and industry standards in your jurisdiction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Adhere to WhatsApp's Business API terms, policies, and messaging guidelines at all times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Obtain proper consent from recipients before sending marketing or promotional messages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Respect data protection and privacy laws, including GDPR, CCPA, and other applicable regulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Maintain appropriate records and documentation for compliance and audit purposes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Content & Communication Standards
                </h3>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Ensure all content sent through our platform is accurate, appropriate, and non-misleading</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>You retain full responsibility for all content, messages, and communications sent through our Services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Respect intellectual property rights and obtain necessary permissions for copyrighted content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Maintain professional communication standards and respect recipient preferences</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Prohibited Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <AlertTriangle className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Prohibited Activities & Restrictions
              </h2>
            </div>
            
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              The following activities are strictly prohibited when using our Services. Violation of these restrictions may result in immediate account suspension or termination:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Messaging Violations
                </h3>
                <ul className={`space-y-2 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Sending unsolicited messages, spam, or bulk communications without consent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Harassment, threats, or abusive communications toward any individual</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Distributing malware, viruses, or malicious content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Impersonating others or misrepresenting your identity</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Platform Misuse
                </h3>
                <ul className={`space-y-2 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Attempting to hack, disrupt, or compromise our systems or security</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Reverse engineering, decompiling, or attempting to extract source code</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Sharing account access with unauthorized parties or reselling services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Exceeding rate limits or attempting to circumvent usage restrictions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Illegal Activities
                </h3>
                <ul className={`space-y-2 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Fraudulent activities, scams, or deceptive business practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Money laundering, terrorist financing, or other financial crimes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Distribution of illegal content or promotion of illegal activities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Violation of export controls or international sanctions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Content Restrictions
                </h3>
                <ul className={`space-y-2 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Adult content, gambling, or age-restricted materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Hate speech, discrimination, or content promoting violence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Copyright infringement or unauthorized use of intellectual property</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>False or misleading information that could cause harm</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <CreditCard className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Payment Terms & Billing
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Subscription & Fees
                </h3>
                <p className={`text-lg leading-relaxed mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Our Services are provided on a subscription basis with various pricing tiers. All fees are clearly displayed on our pricing page and are subject to change with 30 days' notice.
                </p>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Subscription fees are billed in advance on a monthly or annual basis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Usage-based charges (message fees) are billed monthly in arrears</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>All fees are non-refundable except as required by law or our refund policy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Taxes and applicable fees will be added to your invoice as required</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Payment Processing & Late Fees
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Payments are processed automatically through our secure payment partners. Late payments may result in service suspension and additional fees as outlined in your subscription agreement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Scale className="h-8 w-8 text-[#25D366] mr-4" />
              <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Limitation of Liability & Disclaimers
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Service Disclaimers
                </h3>
                <p className={`text-lg leading-relaxed mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Our Services are provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, or availability of our Services.
                </p>
                <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>We do not guarantee uninterrupted, error-free, or secure service operation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Message delivery depends on WhatsApp's infrastructure and is not guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>We are not responsible for third-party service interruptions or policy changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Service availability may be affected by maintenance, updates, or technical issues</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Liability Limitations
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  To the maximum extent permitted by law, our total liability for any claims arising from or related to our Services is limited to the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Account Termination & Data Retention
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              Either party may terminate this agreement at any time. Upon termination, the following provisions apply:
            </p>
            <ul className={`space-y-3 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Your access to our Services will be immediately suspended or terminated</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>You may export your data within 30 days of termination notice</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>No refunds will be provided for unused subscription periods</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Data will be deleted according to our data retention policy after the grace period</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center"
          >
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Legal Contact Information
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              For questions about these Terms and Conditions, legal matters, or compliance issues, please contact our legal team:
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
                  9, Vijaya Nagar, Reddypalayam Road
                  Thanjavur-613009
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}