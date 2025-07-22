/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Settings, CreditCard, Users, Zap, Shield, Globe, Phone, Mail } from 'lucide-react';

export default function FAQ({ theme }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(prev => prev === index ? null : index);
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Zap className="h-6 w-6" />,
      questions: [
        {
          question: "What is GoWhats and how does it work?",
          answer: "GoWhats is a comprehensive WhatsApp Business API integration platform that enables businesses to send and receive messages, automate customer interactions, and manage conversations at scale. Our platform connects seamlessly with WhatsApp's official Business API, allowing you to leverage the world's most popular messaging app for business communication. We provide tools for message automation, customer management, analytics, and team collaboration, all through an intuitive dashboard that requires no technical expertise to get started."
        },
        {
          question: "How do I set up my WhatsApp Business account with GoWhats?",
          answer: "Setting up your WhatsApp Business account is straightforward with our guided onboarding process. First, you'll need to create a GoWhats account and choose your subscription plan. Then, we'll help you register for WhatsApp Business API access, which requires business verification and documentation. Our team will assist you through the entire process, including phone number verification, business profile setup, and message template creation. The typical setup time is 24-48 hours after account verification, though WhatsApp's approval process may take 1-3 business days depending on your documentation."
        },
        {
          question: "What are the system requirements and technical prerequisites?",
          answer: "GoWhats is a cloud-based platform that works on any modern web browser, including Chrome, Firefox, Safari, and Edge. You'll need a stable internet connection and a verified WhatsApp Business API account. No additional software installation is required on your end. For API integrations, we provide comprehensive documentation and SDKs for popular programming languages. Our platform is mobile-responsive, so you can manage your WhatsApp communications from any device, anywhere in the world."
        },
        {
          question: "How long does the complete setup process take?",
          answer: "The complete setup process typically takes 2-5 business days from start to finish. Account creation and initial platform setup can be completed within minutes. The main time factor is WhatsApp Business API approval, which depends on your business documentation and compliance with WhatsApp's policies. During this time, our onboarding team will help you prepare message templates, set up automation rules, and configure your dashboard. Enterprise clients with complex integration requirements may need additional setup time, which we'll discuss during the consultation phase."
        },
        {
          question: "Do you offer training and onboarding support?",
          answer: "Yes, we provide comprehensive training and onboarding support for all our clients. This includes live onboarding sessions, video tutorials, detailed documentation, and access to our knowledge base. Business and Enterprise plan subscribers receive dedicated onboarding specialists who will guide you through platform setup, best practices, and advanced features. We also offer regular webinars, advanced training sessions, and ongoing support to help you maximize your WhatsApp marketing and customer service efforts."
        }
      ]
    },
    {
      title: "Features & Functionality",
      icon: <Settings className="h-6 w-6" />,
      questions: [
        {
          question: "What types of messages and content can I send through GoWhats?",
          answer: "GoWhats supports all WhatsApp Business API message types, including text messages, images, documents (PDF, DOC, XLS), videos, audio files, and interactive messages like buttons and lists. You can send rich media content up to 100MB per file. For business-initiated conversations, you'll need approved message templates that comply with WhatsApp's policies. We also support location sharing, contact cards, and catalog messages for e-commerce businesses. All content must adhere to WhatsApp's content policies and local regulations."
        },
        {
          question: "How powerful are the automation and chatbot capabilities?",
          answer: "Our automation platform is highly sophisticated, featuring AI-powered chatbots, natural language processing, and advanced workflow automation. You can create custom automation rules based on keywords, user behavior, time triggers, and business logic. The system supports multi-step conversations, conditional branching, and integration with external databases and CRM systems. Our AI can handle common customer inquiries, qualify leads, schedule appointments, and escalate complex issues to human agents. The automation builder uses a visual drag-and-drop interface, making it accessible to non-technical users while offering advanced scripting options for developers."
        },
        {
          question: "How do I create and manage message templates?",
          answer: "Message templates are created through our intuitive template builder and must be approved by WhatsApp before use. Templates are required for business-initiated conversations and promotional messages. Our platform provides a template library with pre-built options for common use cases like order confirmations, appointment reminders, and promotional campaigns. You can customize templates with dynamic variables, rich media, and interactive buttons. We handle the submission process to WhatsApp and provide real-time approval status tracking. Our team also offers template optimization services to improve approval rates and engagement."
        },
        {
          question: "What CRM and third-party integrations are available?",
          answer: "GoWhats offers extensive integration capabilities with popular CRM systems including Salesforce, HubSpot, Pipedrive, Zoho, and Microsoft Dynamics. We also integrate with e-commerce platforms like Shopify, WooCommerce, and Magento, as well as helpdesk solutions like Zendesk and Freshdesk. Our REST API and webhooks enable custom integrations with virtually any system. Enterprise clients can access advanced integration services, including custom API development and dedicated integration support. All integrations are designed to sync customer data, conversation history, and business metrics seamlessly."
        },
        {
          question: "How comprehensive are the analytics and reporting features?",
          answer: "Our analytics suite provides detailed insights into message performance, customer engagement, conversion rates, and business metrics. You can track delivery rates, read receipts, response times, conversation flows, and customer satisfaction scores. The dashboard includes real-time monitoring, custom report generation, and automated insights powered by machine learning. Advanced features include cohort analysis, A/B testing for message templates, ROI tracking, and predictive analytics. Data can be exported in various formats and integrated with business intelligence tools like Tableau and Power BI."
        }
      ]
    },
    {
      title: "Pricing & Billing",
      icon: <CreditCard className="h-6 w-6" />,
      questions: [
        {
          question: "How is GoWhats pricing calculated and what's included?",
          answer: "Our pricing is transparent and based on two components: monthly subscription fees and message usage charges. Subscription fees cover platform access, features, and support, while message fees are charged based on WhatsApp's official rates, which vary by country and message type. We offer three main plans: Starter ($29/month), Business ($99/month), and Enterprise ($299/month), each with different feature sets and message allowances. All plans include core features like message management, basic automation, and analytics. Higher tiers add advanced automation, API access, priority support, and custom integrations."
        },
        {
          question: "What's included in the free trial and how does it work?",
          answer: "Our 14-day free trial includes full access to all core features, 100 free messages, basic automation tools, template creation, and email support. No credit card is required to start the trial, and you can upgrade to a paid plan at any time. During the trial, you'll have access to our onboarding team, documentation, and training resources. The trial includes WhatsApp Business API setup assistance and guidance on best practices. If you don't upgrade before the trial ends, your account will be paused, but your data will be preserved for 30 days in case you decide to continue."
        },
        {
          question: "Are there any setup fees, hidden charges, or long-term contracts?",
          answer: "There are no setup fees for our Starter and Business plans, and we believe in transparent pricing with no hidden charges. Enterprise clients may have implementation fees depending on custom requirements and integrations, which are clearly outlined in the proposal. We don't require long-term contracts – all plans are month-to-month with the option to upgrade, downgrade, or cancel at any time. WhatsApp message charges are passed through at cost with no markup. Additional services like premium support, custom integrations, and training sessions are clearly priced and optional."
        },
        {
          question: "Can I change my plan anytime and how does billing work?",
          answer: "Yes, you can upgrade or downgrade your plan at any time through your account dashboard. Plan changes take effect immediately, and billing is prorated based on your usage and remaining subscription period. We use secure payment processing through Stripe and PayPal, with automatic monthly billing. You'll receive detailed invoices showing subscription fees, message usage, and any additional services. For annual subscriptions, we offer a 20% discount. Enterprise clients can arrange custom billing terms, including quarterly or annual invoicing."
        },
        {
          question: "What happens if I exceed my plan's message limits?",
          answer: "If you exceed your plan's included message allowance, additional messages are charged at $0.05 per message, which is competitive with industry standards. We'll send notifications when you're approaching your limit (at 80% and 95% usage) so you can upgrade your plan or manage your usage accordingly. There are no overage penalties or service interruptions – messages will continue to be delivered and billed at the standard rate. You can set usage alerts and spending limits in your dashboard to maintain budget control."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      questions: [
        {
          question: "How secure is my data and what security measures do you implement?",
          answer: "We implement enterprise-grade security measures to protect your data at every level. All data transmissions use end-to-end encryption with TLS 1.3 protocols, and data at rest is encrypted using AES-256 encryption. Our infrastructure is hosted on secure, SOC 2 Type II compliant cloud platforms with 24/7 monitoring and intrusion detection. We conduct regular security audits, penetration testing, and vulnerability assessments. Employee access is strictly controlled with multi-factor authentication, role-based permissions, and regular security training. We maintain comprehensive backup and disaster recovery procedures to ensure data availability."
        },
        {
          question: "Are you GDPR compliant and how do you handle data privacy?",
          answer: "Yes, GoWhats is fully GDPR compliant and adheres to international data protection standards including CCPA, PIPEDA, and other regional privacy laws. We provide comprehensive data processing agreements (DPAs), consent management tools, and data subject rights fulfillment. You maintain full control over your customer data with options to export, modify, or delete information at any time. We implement privacy by design principles, conduct regular privacy impact assessments, and have appointed a dedicated Data Protection Officer. Our privacy practices are regularly audited by third-party compliance firms."
        },
        {
          question: "How do you ensure WhatsApp policy compliance and prevent violations?",
          answer: "We actively monitor WhatsApp policy changes and update our platform accordingly to ensure continuous compliance. Our system includes built-in compliance checks that prevent policy violations before messages are sent. We provide comprehensive compliance guidance, template approval assistance, and automated policy enforcement features. Our compliance team reviews high-risk accounts and provides recommendations for best practices. We also offer compliance training, policy update notifications, and dedicated support for businesses in regulated industries. Violation prevention tools include opt-out management, frequency capping, and content filtering."
        },
        {
          question: "What happens to my data if I cancel my subscription?",
          answer: "Upon cancellation, you have a 30-day grace period to export all your data, including contacts, conversation history, templates, and analytics reports. We provide multiple export formats (CSV, JSON, PDF) and can assist with data migration to other platforms. After the 30-day period, all data is permanently deleted from our systems according to our data retention policy and cannot be recovered. For Enterprise clients, we can arrange extended data retention periods or custom data handover procedures. We provide detailed documentation and support throughout the cancellation and data export process."
        },
        {
          question: "How do you handle data breaches and security incidents?",
          answer: "We have a comprehensive incident response plan that includes immediate containment, investigation, and notification procedures. In the unlikely event of a security incident, we'll notify affected customers within 72 hours and provide detailed information about the incident, impact, and remediation steps. Our security team works with leading cybersecurity firms and law enforcement when necessary. We maintain cyber insurance coverage and have established relationships with forensic investigators. All incidents are thoroughly documented, and we implement additional safeguards to prevent similar occurrences."
        }
      ]
    },
    {
      title: "Support & Troubleshooting",
      icon: <Users className="h-6 w-6" />,
      questions: [
        {
          question: "What support options are available and what are the response times?",
          answer: "We offer comprehensive support across multiple channels tailored to your subscription level. All plans include 24/7 email support with response times of 4-8 hours for standard issues. Business plan subscribers get priority email support (2-4 hour response) plus live chat during business hours. Enterprise clients receive 24/7 phone support, dedicated account managers, and 1-hour response times for critical issues. We also provide extensive self-service resources including documentation, video tutorials, webinars, and a community forum. Our support team consists of WhatsApp experts who can help with technical issues, best practices, and strategic guidance."
        },
        {
          question: "Why might my messages not be delivered and how can I troubleshoot?",
          answer: "Message delivery issues can stem from several factors, and our platform provides detailed delivery tracking to help identify problems. Common causes include invalid or blocked phone numbers, WhatsApp policy violations, network connectivity issues, or account limitations. Our dashboard shows real-time delivery status with detailed error codes and explanations. We provide troubleshooting guides for common issues and proactive monitoring that alerts you to delivery problems. For persistent issues, our support team can investigate specific cases, review account health, and provide recommendations for improving delivery rates."
        },
        {
          question: "How do I report bugs, technical issues, or feature requests?",
          answer: "You can report bugs and technical issues through multiple channels: our support portal, email (support@gowhats.com), live chat, or phone (for Enterprise clients). When reporting issues, please include detailed information about the problem, steps to reproduce it, error messages, and screenshots if applicable. We aim to acknowledge all reports within 2 hours and provide regular updates on resolution progress. For feature requests, we have a dedicated product feedback portal where you can submit ideas and vote on existing requests. Our product team regularly reviews feedback and incorporates popular requests into our development roadmap."
        },
        {
          question: "Do you offer training programs and educational resources?",
          answer: "Yes, we provide extensive training and educational resources to help you succeed with WhatsApp Business messaging. This includes live onboarding sessions for new users, regular webinars on advanced features and best practices, a comprehensive knowledge base with step-by-step guides, video tutorials covering all platform features, and downloadable resources like templates and checklists. Enterprise clients receive dedicated training sessions, custom workshops, and ongoing strategic consultation. We also offer certification programs for agencies and resellers, plus access to our partner network for additional services."
        },
        {
          question: "What should I do if my WhatsApp Business account gets restricted or banned?",
          answer: "If your WhatsApp Business account faces restrictions, our support team can help you understand the cause and guide you through the appeal process. We provide detailed analysis of potential policy violations, assistance with documentation for appeals, and recommendations for preventing future issues. Our compliance experts can review your messaging practices and suggest improvements. In severe cases, we can help you set up a new WhatsApp Business account with proper compliance measures. We also offer proactive account health monitoring to identify potential issues before they result in restrictions."
        }
      ]
    },
    {
      title: "Advanced Features & Enterprise",
      icon: <Globe className="h-6 w-6" />,
      questions: [
        {
          question: "What advanced features are available for Enterprise clients?",
          answer: "Enterprise clients get access to our most advanced features including unlimited message volumes, custom API integrations, white-label options, advanced analytics with custom reporting, dedicated infrastructure, priority support with SLA guarantees, and custom automation workflows. Additional features include multi-tenant management, advanced user roles and permissions, custom branding, dedicated account management, and integration with enterprise systems like Active Directory. We also provide custom development services, advanced training programs, and strategic consultation to help optimize your WhatsApp business strategy."
        },
        {
          question: "Can I integrate GoWhats with my existing business systems and workflows?",
          answer: "Absolutely! GoWhats is designed for seamless integration with existing business systems. We offer pre-built integrations with popular CRM, helpdesk, e-commerce, and marketing platforms. Our REST API and webhooks enable custom integrations with virtually any system. Common integration scenarios include syncing customer data with CRMs, triggering messages from e-commerce events, integrating with helpdesk tickets, and connecting with marketing automation platforms. Our integration team can provide custom development services, API consulting, and ongoing technical support for complex integration projects."
        },
        {
          question: "How does multi-team and multi-location management work?",
          answer: "Our platform supports sophisticated multi-team and multi-location management with role-based access controls, department-specific dashboards, and centralized administration. You can create separate workspaces for different teams, assign conversations based on skills or geography, and maintain separate analytics for each department. Features include conversation routing, team performance metrics, supervisor oversight tools, and unified reporting across all locations. Enterprise clients can also set up separate WhatsApp Business numbers for different locations while maintaining centralized management and reporting."
        },
        {
          question: "What API capabilities and developer resources do you provide?",
          answer: "Our comprehensive API provides full programmatic access to all platform features including message sending, contact management, conversation handling, template management, and analytics retrieval. We offer SDKs for popular programming languages (Python, Node.js, PHP, Java), detailed API documentation with code examples, webhook support for real-time events, and sandbox environments for testing. Developer resources include API rate limiting information, best practices guides, sample applications, and dedicated developer support. Enterprise clients get access to advanced API features and custom endpoint development."
        },
        {
          question: "Do you offer white-label or reseller partnership opportunities?",
          answer: "Yes, we offer white-label solutions and reseller partnership programs for agencies, software vendors, and service providers. White-label options include custom branding, domain customization, and co-branded interfaces. Our partner program provides competitive pricing, marketing support, technical training, and dedicated partner success managers. Partners get access to our API for building custom solutions, comprehensive documentation, and ongoing technical support. We also offer revenue sharing models and co-marketing opportunities for qualified partners."
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full mb-8"
            >
              <HelpCircle className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className={`text-5xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Frequently Asked Questions
            </h1>
            <p className={`text-xl max-w-4xl mx-auto mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Find comprehensive answers to common questions about GoWhats, our WhatsApp Business integration services, features, pricing, and support. Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className={`text-lg ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              Last updated: January 15, 2025
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full mr-4">
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openItem === globalIndex;
                    
                    return (
                      <div key={itemIndex} className={`border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}>
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className={`w-full text-left py-6 hover:opacity-80 transition-opacity ${
                            theme === 'light' ? 'text-black' : 'text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-semibold pr-4">
                              {item.question}
                            </span>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp className="h-6 w-6 text-[#25D366]" />
                              ) : (
                                <ChevronDown className="h-6 w-6 text-gray-400" />
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
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6">
                                <p className={`text-lg leading-relaxed ${
                                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
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
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <MessageSquare className="h-16 w-16 text-[#25D366] mx-auto mb-6" />
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Still Have Questions?
            </h2>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              Our expert support team is here to help you get the most out of GoWhats. Whether you need technical assistance, strategic guidance, or just want to learn more about our features, we're ready to assist.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center">
                <Mail className="h-10 w-10 text-[#25D366] mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Email Support
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-3`}>
                  Get detailed help via email
                </p>
                <a 
                  href="mailto:support@gowhats.com"
                  className="text-[#25D366] hover:underline font-medium"
                >
                  support@gowhats.com
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <Phone className="h-10 w-10 text-[#25D366] mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Phone Support
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-3`}>
                  Speak directly with our team
                </p>
                <a 
                  href="tel:+15551234567"
                  className="text-[#25D366] hover:underline font-medium"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <MessageSquare className="h-10 w-10 text-[#25D366] mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                  Live Chat
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-3`}>
                  Instant help when you need it
                </p>
                <button className="text-[#25D366] hover:underline font-medium">
                  Start Chat
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book-demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#22c55e] transition-colors font-semibold"
              >
                Book a Demo
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 rounded-lg border-2 transition-colors font-semibold ${
                  theme === 'light' 
                    ? 'border-gray-300 text-black hover:bg-gray-50' 
                    : 'border-gray-600 text-white hover:bg-gray-800'
                }`}
              >
                Contact Sales
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}