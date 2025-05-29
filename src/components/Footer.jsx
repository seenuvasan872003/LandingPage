/* eslint-disable no-unused-vars */
import { MessageSquare, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Footer({ theme = 'dark' }) {
  const { t } = useTranslation();

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

  const quickLinksItems = [
    { key: 'aboutUs', label: t('footer.aboutUs') },
    { key: 'features', label: t('footer.features') },
    { key: 'pricing', label: t('footer.pricing') },
    { key: 'blog', label: t('footer.blog') },
    { key: 'contact', label: t('footer.contact') }
  ];

  const resourcesItems = [
    { key: 'documentation', label: t('footer.documentation') },
    { key: 'apiReference', label: t('footer.apiReference') },
    { key: 'tutorials', label: t('footer.tutorials') },
    { key: 'caseStudies', label: t('footer.caseStudies') },
    { key: 'support', label: t('footer.support') }
  ];

  return (
    <footer className={`${theme === 'light' ? 'bg-white' : 'bg-black'} ${theme === 'light' ? 'text-black' : 'text-white'} py-16`}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-[#25D366]" />
              <span className="text-2xl font-bold">GoWhats</span>
            </div>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#25D366]`}>
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#25D366]`}>
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#25D366]`}>
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#25D366]`}>
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinksItems.map((item) => (
                <motion.li 
                  key={item.key}
                  whileHover={{ x: 5 }}
                  className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#25D366] cursor-pointer`}
                >
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {resourcesItems.map((item) => (
                <motion.li 
                  key={item.key}
                  whileHover={{ x: 5 }}
                  className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#25D366] cursor-pointer`}
                >
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.newsletter')}</h3>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              {t('footer.newsletterDescription')}
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className={`flex-1 p-2 rounded border ${theme === 'light' ? 'border-green-400' : 'border-green-400'} focus:outline-none focus:ring-2 focus:ring-green-500 ${theme === 'light' ? 'text-black' : 'text-black'}`}
                aria-label="Email"
              />
              <button className="p-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className={`mt-12 pt-8 text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
        >
          <p>&copy; {new Date().getFullYear()} GoWhats. {t('footer.copyright')}</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}