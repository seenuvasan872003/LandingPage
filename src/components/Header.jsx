/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

export default function Header({ theme, setTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isLegalMenuOpen, setIsLegalMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const navItems = [
    { name: t('nav.resources'), path: '/resources' },
    { name: t('nav.integration'), path: '/integration' },
    { name: t('nav.documentation'), path: '/documentation' },
    { name: t('nav.pricing'), path: '/price' },
  ];

  const legalItems = [
    { name: t('nav.privacy'), path: '/privacy' },
    { name: t('nav.terms'), path: '/terms' },
    { name: t('nav.faq'), path: '/faq' },
  ];

  const languages = [
    { code: 'en', name: t('nav.english') },
    { code: 'ta', name: t('nav.tamil') }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? theme === 'light' 
              ? 'bg-white/80 backdrop-blur-md shadow-lg' 
              : 'bg-black/80 backdrop-blur-md shadow-lg' 
            : theme === 'light'
              ? 'bg-transparent backdrop-blur-sm'
              : 'bg-black/0'
        } ${theme === 'light' ? 'text-black' : ''}`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">

            {/* Brand Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                <MessageSquare className={`h-7 w-7 text-[#25D366]`} />
                <span className={`text-xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>GoWhats</span>
              </div>
            </motion.div>

            {/* Desktop Navigation (Center aligned) */}
            <div className="hidden md:flex items-center space-x-8 mx-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button
                      onClick={() => navigate(item.path)}
                      className={`text-sm font-medium transition-colors hover:text-[#25D366] ${
                        location.pathname === item.path ? 'text-[#25D366]' : 
                        theme === 'light' ? 'text-black' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                    {hoveredItem === item.name && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#25D366]"
                        layoutId="underline"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{ originX: 0.5 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Legal Pages Dropdown - Desktop */}
              <div className="relative">
                <button
                  onClick={() => setIsLegalMenuOpen(!isLegalMenuOpen)}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[#25D366] ${
                    legalItems.some(item => location.pathname === item.path) ? 'text-[#25D366]' : 
                    theme === 'light' ? 'text-black' : 'text-white'
                  }`}
                >
                  <span>Legal</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isLegalMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg ${
                        theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-800 border border-gray-700'
                      } z-50`}
                    >
                      {legalItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            navigate(item.path);
                            setIsLegalMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors hover:text-[#25D366] ${
                            location.pathname === item.path ? 'text-[#25D366]' : 
                            theme === 'light' ? 'text-black hover:bg-gray-50' : 'text-white hover:bg-gray-700'
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side Menu Items */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`md:hidden ${theme === 'light' ? 'text-black' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>


              {/* Theme Toggle - Desktop */}
              <div className="hidden md:block">
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </div>

              {/* Language Dropdown - Desktop */}
              <div className="hidden md:block relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className={`flex items-center space-x-1 ${theme === 'light' ? 'text-black' : 'text-white'} hover:text-[#25D366] cursor-pointer transition-colors`}
                >
                  <Globe className="h-5 w-5" />
                </button>

                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute right-0 top-full mt-2 w-32 rounded-md shadow-lg ${
                        theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-800 border border-gray-700'
                      } z-50`}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => switchLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2 text-sm hover:text-[#25D366] transition-colors ${
                            i18n.language === lang.code ? 'text-[#25D366]' : 
                            theme === 'light' ? 'text-black hover:bg-gray-50' : 'text-white hover:bg-gray-700'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-x-0 top-[72px] z-40 ${
              theme === 'light' ? 'bg-white/80' : 'bg-black/80'
            } backdrop-blur-md shadow-lg md:hidden`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-sm font-medium transition-colors hover:text-[#25D366] ${
                      location.pathname === item.path ? 'text-[#25D366]' : 
                      theme === 'light' ? 'text-black' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Legal Pages in Mobile Menu */}
                <div className="py-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                      Legal
                    </span>
                    <button
                      onClick={() => setIsLegalMenuOpen(!isLegalMenuOpen)}
                      className={`${theme === 'light' ? 'text-black' : 'text-white'} hover:text-[#25D366] cursor-pointer transition-colors`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isLegalMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-2"
                      >
                        {legalItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              navigate(item.path);
                              setIsLegalMenuOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`block text-left text-sm w-full transition-colors hover:text-[#25D366] ${
                              location.pathname === item.path ? 'text-[#25D366]' : 
                              theme === 'light' ? 'text-black' : 'text-white'
                            }`}
                          >
                            {item.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Theme Toggle in Mobile Menu */}
                <div className="flex items-center justify-between py-2">
                  <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    {theme === 'dark' ? t('nav.darkMode') : t('nav.lightMode')}
                  </span>
                  <ThemeToggle theme={theme} setTheme={setTheme} />
                </div>

                {/* Language Selection in Mobile Menu */}
                <div className="py-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                      {languages.find(lang => lang.code === i18n.language)?.name || t('nav.languageChange')}
                    </span>
                    <button
                      onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                      className={`${theme === 'light' ? 'text-black' : 'text-white'} hover:text-[#25D366] cursor-pointer transition-colors`}
                    >
                      <Globe className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isLanguageMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-2"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              switchLanguage(lang.code);
                              setIsLanguageMenuOpen(false);
                            }}
                            className={`block text-left text-sm w-full transition-colors hover:text-[#25D366] ${
                              i18n.language === lang.code ? 'text-[#25D366]' : 
                              theme === 'light' ? 'text-black' : 'text-white'
                            }`}
                          >
                            {lang.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close menus */}
      {(isLanguageMenuOpen || isLegalMenuOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsLanguageMenuOpen(false);
            setIsLegalMenuOpen(false);
          }}
        />
      )}
    </>
  );
}