/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Settings, CreditCard, Users, Zap, Shield } from 'lucide-react';

export default function FAQ({ theme }) {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Zap className="h-5 w-5" />,
      questions: [
        {
          question: "What is GoWhats and how does it work?",
          answer: "GoWhats is a WhatsApp Business API integration platform that allows businesses to send and receive messages, automate customer interactions, and manage conversations at scale. It connects your business systems with WhatsApp through official APIs."
        },
        {
          question: "How do I set up my WhatsApp Business account?",
          answer: "First, you'll need a WhatsApp Business API account. We can help you set this up through our onboarding process. You'll need to verify your business, provide necessary documentation, and configure your messaging templates."
        },
        {
          question: "What are the system requirements?",
          answer: "GoWhats is a web-based platform that works on any modern browser. You'll need a stable internet connection and a verified WhatsApp Business API account. No additional software installation is required."
        },
        {
          question: "How long does the setup process take?",
          answer: "The initial setup typically takes 24-48 hours after account verification. WhatsApp Business API approval can take 1-3 business days depending on your business documentation and compliance requirements."
        }
      ]
    },
    {
      title: "Features & Functionality",
      icon: <Settings className="h-5 w-5" />,
      questions: [
        {
          question: "What types of messages can I send?",
          answer: "You can send text messages, images, documents, videos, and interactive messages like buttons and lists. All messages must comply with WhatsApp's messaging policies and use approved templates for promotional content."
        },
        {
          question: "Can I automate customer responses?",
          answer: "Yes, GoWhats includes powerful automation features including auto-replies, chatbots, workflow triggers, and integration with CRM systems. You can create custom automation rules based on keywords, user behavior, and business logic."
        },
        {
          question: "How do I create message templates?",
          answer: "Message templates can be created through our dashboard and must be approved by WhatsApp before use. Templates are required for business-initiated conversations and promotional messages. We provide template management tools and approval tracking."
        },
        {
          question: "Can I integrate with my existing CRM?",
          answer: "Yes, GoWhats offers APIs and webhooks for integration with popular CRM systems like Salesforce, HubSpot, and Pipedrive. We also provide custom integration options for enterprise clients."
        }
      ]
    },
    {
      title: "Pricing & Billing",
      icon: <CreditCard className="h-5 w-5" />,
      questions: [
        {
          question: "How is pricing calculated?",
          answer: "Pricing is based on the number of messages sent and received, with different rates for various message types. We offer tiered pricing plans with volume discounts. WhatsApp charges are separate and passed through at cost."
        },
        {
          question: "What's included in the free trial?",
          answer: "Our free trial includes 100 messages, access to all core features, basic automation tools, and email support. No credit card required to start. The trial lasts for 14 days."
        },
        {
          question: "Are there any setup fees?",
          answer: "There are no setup fees for our standard plans. Enterprise clients may have implementation fees depending on custom requirements and integrations. All pricing is transparent with no hidden charges."
        },
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time through your account dashboard. Changes take effect immediately, and billing is prorated based on your usage."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          question: "How secure is my data?",
          answer: "We implement enterprise-grade security measures including end-to-end encryption, SSL/TLS protocols, regular security audits, and compliance with SOC 2 Type II standards. Your data is stored in secure, geo-redundant data centers."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Yes, GoWhats is fully GDPR compliant. We provide data processing agreements, consent management tools, and data export/deletion capabilities. You maintain full control over your customer data."
        },
        {
          question: "How do you handle WhatsApp policy compliance?",
          answer: "We monitor WhatsApp policy changes and update our platform accordingly. We provide compliance guidance, template approval assistance, and automatic policy enforcement to help you avoid violations."
        },
        {
          question: "What happens to my data if I cancel?",
          answer: "You can export all your data before cancellation. We provide a 30-day grace period for data retrieval, after which data is permanently deleted according to our data retention policy."
        }
      ]
    },
    {
      title: "Support & Troubleshooting",
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          question: "What support options are available?",
          answer: "We offer 24/7 email support for all plans, live chat for Business plans, and phone support for Enterprise clients. We also provide comprehensive documentation, video tutorials, and webinar training sessions."
        },
        {
          question: "Why are my messages not being delivered?",
          answer: "Message delivery issues can be caused by invalid phone numbers, WhatsApp policy violations, network issues, or account limitations. Check your message logs and contact support for detailed troubleshooting."
        },
        {
          question: "How do I report a bug or issue?",
          answer: "You can report bugs through our support portal, email, or live chat. Please include detailed information about the issue, steps to reproduce it, and any error messages. We aim to respond within 2 hours."
        },
        {
          question: "Do you offer training for new users?",
          answer: "Yes, we provide onboarding training, video tutorials, documentation, and regular webinars. Enterprise clients receive dedicated training sessions and account management support."
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'}`}>
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
              <HelpCircle className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Frequently Asked Questions
            </h1>
            <p className={`text-lg ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
              Find answers to common questions about GoWhats and our WhatsApp Business integration services.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className={`${theme === 'light' ? 'bg-white' : 'bg-black'} rounded-lg shadow-lg overflow-hidden`}
              >
                {/* Category Header */}
                <div className="bg-[#25D366] px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-white">
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-200 dark:divide-gray-900">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openItems[globalIndex];
                    
                    return (
                      <div key={itemIndex}>
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className={`w-full text-left px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors ${
                            theme === 'light' ? 'text-gray-900' : 'text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-medium pr-4">
                              {item.question}
                            </span>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-[#25D366]" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4">
                                <p className={`text-lg leading-relaxed ${
                                  theme === 'light' ? 'text-black' : 'text-gray-300'
                                }`}>
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`${theme === 'light' ? 'bg-white' : 'bg-black'} rounded-lg shadow-lg p-8 mt-12 text-center`}
          >
            <MessageSquare className="h-12 w-12 text-[#25D366] mx-auto mb-4" />
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Still have questions?
            </h3>
            <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>
              Our support team is here to help you get the most out of GoWhats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@gowhats.com"
                className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#22c55e] transition-colors"
              >
                Email Support
              </a>
              <a
                href="/book-demo"
                className={`inline-flex items-center px-6 py-3 rounded-lg border transition-colors ${
                  theme === 'light' 
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                    : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}