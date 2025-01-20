import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { HiMail, HiGlobeAlt } from 'react-icons/hi';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.articles'), path: '/articles' },
    { name: t('speaking.title'), path: '/speaking' },
    { name: t('press.title'), path: '/press' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Email', icon: <HiMail className="w-5 h-5" />, href: 'mailto:contact@example.com' },
    { name: 'Website', icon: <HiGlobeAlt className="w-5 h-5" />, href: 'https://example.com' },
  ];

  return (
    <footer className="bg-white border-t border-media-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <span className="font-heading text-xl text-media-ink font-bold tracking-tight">
                Harvey M. Carter
              </span>
            </Link>
            <p className="text-sm text-media-muted">
              Media Professional & Digital Storyteller
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold text-media-ink uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-media-muted hover:text-media-ink transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold text-media-ink uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-sm text-media-muted hover:text-media-ink transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language & Copyright */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold text-media-ink uppercase tracking-wider">
              Languages
            </h3>
            <p className="text-sm text-media-muted">
              Available in English, Turkish, Russian, Croatian, and Bosnian
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-media-border">
          <p className="text-sm text-center text-media-muted">
            © {currentYear} Harvey M. Carter. All rights reserved.
          </p>
          <p className="mt-2">
              Made with passion in Ljubuški, Bosnia and Herzegovina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 