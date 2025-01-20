import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { HiDownload, HiPhotograph, HiNewspaper, HiMicrophone, HiOutlineNewspaper, HiArrowRight } from 'react-icons/hi';

const PressKit = () => {
  const { t } = useLanguage();

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

  const resources = [
    {
      title: t('press.biography.short'),
      description: t('press.biography.shortDesc'),
      icon: <HiNewspaper className="w-6 h-6" />,
      downloadUrl: '/press/short-bio.pdf'
    },
    {
      title: t('press.biography.full'),
      description: t('press.biography.fullDesc'),
      icon: <HiNewspaper className="w-6 h-6" />,
      downloadUrl: '/press/full-bio.pdf'
    },
    {
      title: t('press.photos.headshots'),
      description: t('press.photos.headshotsDesc'),
      icon: <HiPhotograph className="w-6 h-6" />,
      downloadUrl: '/press/headshots.zip'
    },
    {
      title: t('press.brandAssets'),
      description: t('press.brandAssetsDesc'),
      icon: <HiDownload className="w-6 h-6" />,
      downloadUrl: '/press/brand-assets.zip'
    }
  ];

  const mediaAppearances = [
    {
      title: t('press.recentAppearance1.title'),
      outlet: t('press.recentAppearance1.outlet'),
      date: t('press.recentAppearance1.date'),
      type: 'podcast',
      id: 'digital-journalism-future'
    },
    {
      title: t('press.recentAppearance2.title'),
      outlet: t('press.recentAppearance2.outlet'),
      date: t('press.recentAppearance2.date'),
      type: 'article',
      id: 'media-trends'
    }
  ];

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
            <HiOutlineNewspaper className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">{t('press.subtitle')}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-media-ink font-bold mb-6">
            {t('press.title')}
          </h1>
          <p className="text-xl text-media-muted max-w-2xl mx-auto">
            {t('press.description')}
          </p>
        </motion.div>

        {/* Quick Facts Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="font-heading text-3xl text-media-ink font-bold mb-8">{t('press.quickFacts')}</h2>
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <div className="prose max-w-none text-media-muted">
              <ul className="space-y-4">
                <li>{t('press.facts.experience')}</li>
                <li>{t('press.facts.expertise')}</li>
                <li>{t('press.facts.languages')}</li>
                <li>{t('press.facts.location')}</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Downloadable Resources */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="font-heading text-3xl text-media-ink font-bold mb-8">{t('press.downloads')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-media-paper border border-media-border rounded-xl p-8 group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-media-accent bg-media-quote rounded-lg p-3">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-media-ink font-bold mb-3">{resource.title}</h3>
                    <p className="text-media-muted mb-6">{resource.description}</p>
                    <a
                      href={resource.downloadUrl}
                      className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
                      download
                    >
                      <HiDownload className="w-5 h-5 mr-2" />
                      <span className="mr-2">{t('press.download')}</span>
                      <HiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Media Appearances */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="font-heading text-3xl text-media-ink font-bold mb-8">{t('press.recentAppearances')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaAppearances.map((appearance, index) => (
              <motion.div
                key={index}
                className="bg-media-paper border border-media-border rounded-xl p-8 group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-media-accent bg-media-quote rounded-lg p-3">
                    <HiMicrophone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-media-ink font-bold mb-3">{appearance.title}</h3>
                    <p className="text-media-muted">{appearance.outlet}</p>
                    <p className="text-media-muted text-sm mb-6">{appearance.date}</p>
                    <Link
                      to={`/press/appearance/${appearance.id}`}
                      className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
                    >
                      <span className="mr-2">{t('press.viewAppearance')}</span>
                      <HiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact for Press */}
        <motion.section variants={itemVariants} className="text-center">
          <div className="bg-media-paper border border-media-border rounded-xl p-12">
            <h2 className="font-heading text-3xl text-media-ink font-bold mb-4">{t('press.contactTitle')}</h2>
            <p className="text-media-muted mb-8 max-w-2xl mx-auto">{t('press.contactDescription')}</p>
            <a
              href="mailto:press@example.com"
              className="media-button bg-media-accent text-white hover:bg-media-accent/90"
            >
              {t('press.contactButton')}
            </a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PressKit; 