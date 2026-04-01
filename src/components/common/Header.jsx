import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../theme/ThemeContext';
import Logo from './Logo';
import TopBar from './TopBar';
import { createPageUrl } from '@/utils';

const navItems = [
  { label: 'Home', path: 'Home' },
  { label: 'About', path: 'About' },
  {
    label: 'Services', path: 'Services',
    dropdown: [
  { label: 'Web Development',      path: 'ServiceDetail?slug=web-development' },
  { label: 'Mobile Apps',          path: 'ServiceDetail?slug=mobile-apps' },
  { label: 'Software Development', path: 'ServiceDetail?slug=software-development' },
  { label: 'Digital Marketing',    path: 'ServiceDetail?slug=digital-marketing' },
  { label: 'UI/UX Design',         path: 'ServiceDetail?slug=ui-ux-design' },
  { label: 'Cloud Services',       path: 'ServiceDetail?slug=cloud-services' },
  { label: 'Cybersecurity',        path: 'ServiceDetail?slug=cybersecurity' },
  { label: 'Support & Maintenance',path: 'ServiceDetail?slug=support-maintenance' },
],
  },
  { label: 'Technologies', path: 'Technologies' },
  { label: 'Portfolio',    path: 'Portfolio' },
  { label: 'Careers',      path: 'Careers' },
  { label: 'Contact',      path: 'Contact' },
];

export default function Header() {
  const { isDark, toggleTheme, colors } = useTheme();
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [isMobileOpen,   setIsMobileOpen]   = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* TopBar slides away on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            key="topbar"
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <TopBar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main navbar */}
      <motion.nav
        className={`transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/20'
              : 'bg-white/95 backdrop-blur-xl shadow-lg'
            : isDark
              ? 'bg-gray-900/80 backdrop-blur-sm'
              : 'bg-white/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">

            <Link to={createPageUrl('Home')} className="flex-shrink-0">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Logo size="md" animated={false} />
              </motion.div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item, i) => (
                <div key={i} className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(i)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={createPageUrl(item.path)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                      isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute top-full left-0 mt-1 py-2 rounded-xl shadow-2xl min-w-[220px] ${
                          isDark
                            ? 'bg-gray-800 border border-gray-700'
                            : 'bg-white border border-gray-100'
                        }`}
                      >
                        {item.dropdown.map((sub, j) => (
                          <Link key={j} to={createPageUrl(sub.path)}
                            className={`block px-4 py-2.5 text-sm transition-all ${
                              isDark
                                ? 'text-gray-300 hover:text-white hover:bg-white/10'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.button onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >
                {isDark
                  ? <Sun  className="w-5 h-5 text-yellow-400" />
                  : <Moon className="w-5 h-5 text-gray-600" />}
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
                <Link to={createPageUrl('Contact')}>
                  <Button className="rounded-full px-6 text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}>
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Call
                  </Button>
                </Link>
              </motion.div>

              <motion.button className="lg:hidden p-2"
                onClick={() => setIsMobileOpen(!isMobileOpen)} whileTap={{ scale: 0.9 }}>
                {isMobileOpen
                  ? <X    className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                  : <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, i) => (
                  <div key={i}>
                    <Link to={createPageUrl(item.path)} onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium ${
                        isDark ? 'text-gray-300 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                      }`}>{item.label}</Link>
                    {item.dropdown && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((sub, j) => (
                          <Link key={j} to={createPageUrl(sub.path)} onClick={() => setIsMobileOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-sm ${
                              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                            }`}>{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to={createPageUrl('Contact')} onClick={() => setIsMobileOpen(false)}>
                  <Button className="w-full mt-4 rounded-full text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}>
                    <Phone className="w-4 h-4 mr-2" />Book a Call
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}