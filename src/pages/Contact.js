import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { HiMail, HiUser, HiChat, HiPencilAlt } from 'react-icons/hi';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-media-paper to-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-media-quote text-media-accent mb-8">
            <HiMail className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">{t('contact.subtitle')}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-media-ink font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-media-muted max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-media-ink font-medium"
                >
                  {t('contact.form.name')} <span className="text-media-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HiUser className="h-5 w-5 text-media-muted" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-media-border rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-media-accent/20
                             text-media-ink placeholder-media-muted"
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-media-ink font-medium"
                >
                  {t('contact.form.email')} <span className="text-media-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HiMail className="h-5 w-5 text-media-muted" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-media-border rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-media-accent/20
                             text-media-ink placeholder-media-muted"
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block mb-2 text-media-ink font-medium"
                >
                  {t('contact.form.subject')} <span className="text-media-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HiChat className="h-5 w-5 text-media-muted" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-media-border rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-media-accent/20
                             text-media-ink placeholder-media-muted"
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-media-ink font-medium"
                >
                  {t('contact.form.message')} <span className="text-media-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                    <HiPencilAlt className="h-5 w-5 text-media-muted" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows="5"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-media-border rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-media-accent/20
                             text-media-ink placeholder-media-muted"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full media-button bg-media-accent text-white hover:bg-media-accent/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('contact.form.send')}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 