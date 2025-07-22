/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Mail, Phone, MapPin, Twitter, Facebook, Linkedin as LinkedIn, Instagram } from 'lucide-react';

export default function Footer({ theme }) {
  const { t } = useTranslation();

  const footerLinks = {
    product: [
      { name: t('footer.links.features'), href: '#' },
      { name: t('footer.links.pricing'), href: '/price' },
      { name: t('footer.links.apiDocs'), href: '#' },
      { name: t('footer.links.integrations'), href: '#' }
    ],
    company: [
      { name: t('footer.links.aboutUs'), href: '#' },
      { name: t('footer.links.careers'), href: '#' },
      { name: t('footer.links.press'), href: '#' },
      { name: t('footer.links.contact'), href: '#' }
    ],
    resources: [
      { name: t('footer.links.helpCenter'), href: '/faq' },
      { name: t('footer.links.blog'), href: '#' },
      { name: t('footer.links.webinars'), href: '#' },
      { name: t('footer.links.caseStudies'), href: '#' }
    ],
    legal: [
      { name: t('footer.links.privacy'), href: '/privacy' },
      { name: t('footer.links.terms'), href: '/terms' },
      { name: t('footer.links.cookies'), href: '#' },
      { name: t('footer.links.gdpr'), href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <LinkedIn className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className={`${theme === 'light' ? 'bg-gray-50 border-t border-gray-200' : 'bg-black border-t border-gray-800'} pt-16 pb-8`}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-8 w-8 text-[#25D366]" />
              <span className={`text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                GoWhats
              </span>
            </div>
            <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                <Mail className="h-4 w-4" />
                <span>{t('footer.contact.email')}</span>
              </div>
              <div className={`flex items-center space-x-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                <Phone className="h-4 w-4" />
                <span>{t('footer.contact.phone')}</span>
              </div>
              <div className={`flex items-center space-x-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                <MapPin className="h-4 w-4" />
                <span>{t('footer.contact.address')}</span>
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {t('footer.sections.product')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className={`hover:text-[#25D366] transition-colors ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {t('footer.sections.company')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className={`hover:text-[#25D366] transition-colors ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {t('footer.sections.resources')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className={`hover:text-[#25D366] transition-colors ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {t('footer.sections.legal')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className={`hover:text-[#25D366] transition-colors ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          variants={itemVariants}
          className={`border-t border-b py-8 mb-8 ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {t('footer.newsletter.title')}
            </h3>
            <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              {t('footer.newsletter.description')}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#25D366] ${
                  theme === 'light' 
                    ? 'bg-white border-gray-300 text-black' 
                    : 'bg-gray-800 border-gray-700 text-white'
                }`}
                aria-label={t('footer.newsletter.emailLabel')}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#22c55e] transition-colors"
              >
                {t('footer.newsletter.subscribe')}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className={`text-sm mb-4 md:mb-0 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} GoWhats. {t('footer.copyright')}
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-colors hover:bg-[#25D366] hover:text-white ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}