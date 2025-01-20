import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.articles'), path: '/articles' },
    { name: t('speaking.title'), path: '/speaking' },
    { name: t('press.title'), path: '/press' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm border-b border-media-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="font-heading text-2xl text-media-ink font-bold tracking-tight">
              Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans text-sm tracking-wide relative group py-1
                          ${isActivePath(item.path) 
                            ? 'text-media-ink font-medium' 
                            : 'text-media-muted hover:text-media-ink'} 
                          transition-colors duration-200`}
              >
                <span className={`absolute left-0 bottom-0 h-0.5 bg-media-accent
                                transition-all duration-300
                                ${isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
                {item.name}
              </Link>
            ))}
            <div className="border-l border-media-border pl-8">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="border-l border-media-border pl-4">
              <LanguageSwitcher />
            </div>
            <button
              className="text-media-ink p-2 hover:bg-media-quote rounded-sm transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden bg-white border-t border-media-border"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-4 font-sans text-sm tracking-wide
                       ${isActivePath(item.path)
                         ? 'text-media-ink bg-media-quote font-medium'
                         : 'text-media-muted hover:text-media-ink hover:bg-media-quote'}
                       transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 