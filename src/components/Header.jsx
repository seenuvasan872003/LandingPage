/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Globe, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header({ theme, setTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Resources", path: '/resources' },
    { name: "Integration", path: '/integration' },
    { name: "Documentation", path: '/documentation' },
    { name: "Blog", path: '/blog' },
    { name: "Pricing", path: '/price' },
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
            </div>

            {/* Right Side Menu Items (Theme Toggle & Language) */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`md:hidden ${theme === 'light' ? 'text-black' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>

              {/* Theme Toggle - Add to RIGHT SIDE before language icon */}
              <div className="hidden md:block">
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </div>

              {/* Language Globe Icon - RIGHT SIDE */}
              <div
                className={`md:flex hidden items-center ${theme === 'light' ? 'text-black' : 'text-white'} hover:text-[#25D366] cursor-pointer`}
                onClick={() => alert("Language selector coming soon!")}
              >
                <Globe className="h-5 w-5" />
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
                    className={`z-50 text-sm font-medium transition-colors hover:text-[#25D366] ${
                      location.pathname === item.path ? 'text-[#25D366]' : 
                      theme === 'light' ? 'text-black' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Theme Toggle in Mobile Menu */}
                <div className="flex items-center justify-between py-2">
                  <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                  <ThemeToggle theme={theme} setTheme={setTheme} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}