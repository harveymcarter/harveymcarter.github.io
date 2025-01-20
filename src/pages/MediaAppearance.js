import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { HiArrowLeft, HiCalendar, HiGlobeAlt, HiPlay, HiOutlineNewspaper } from 'react-icons/hi';

const MediaAppearance = () => {
  const { appearanceId } = useParams();
  const { t } = useLanguage();

  const getAppearanceData = (id) => {
    const appearances = {
      'digital-journalism-future': {
        title: t('press.recentAppearance1.title'),
        outlet: t('press.recentAppearance1.outlet'),
        date: t('press.recentAppearance1.date'),
        videoUrl: t('press.appearance1.videoUrl'),
        description: t('press.appearance1.description'),
        type: t('press.appearance1.type')
      },
      'media-trends': {
        title: t('press.recentAppearance2.title'),
        outlet: t('press.recentAppearance2.outlet'),
        date: t('press.recentAppearance2.date'),
        videoUrl: t('press.appearance2.videoUrl'),
        description: t('press.appearance2.description'),
        type: t('press.appearance2.type')
      }
    };
    return appearances[id];
  };

  const appearance = getAppearanceData(appearanceId);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!appearance) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-media-ink mb-4">{t('common.notFound')}</h1>
        <Link to="/press" className="text-media-primary hover:text-media-primary-dark">
          ← {t('press.backToPress')}
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-media-paper to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/press"
          className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors mb-8"
        >
          <HiArrowLeft className="mr-2 h-5 w-5" />
          {t('press.backToPress')}
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-media-quote text-media-accent mb-6">
            <HiOutlineNewspaper className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">{t('speaking.recording.subtitle')}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-media-ink font-bold mb-6">
            {appearance.title}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 text-media-muted">
            <div className="flex items-center">
              <HiGlobeAlt className="mr-2 h-5 w-5" />
              {appearance.outlet}
            </div>
            <div className="flex items-center">
              <HiCalendar className="mr-2 h-5 w-5" />
              {appearance.date}
            </div>
            <div className="flex items-center">
              <HiPlay className="mr-2 h-5 w-5" />
              {appearance.type}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={appearance.videoUrl}
              title={appearance.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-media-border p-8">
            <h2 className="font-heading text-2xl text-media-ink font-bold mb-4">
              {t('speaking.recording.aboutEvent')}
            </h2>
            <div className="prose max-w-none text-media-muted">
              <p className="text-lg leading-relaxed">{appearance.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaAppearance; 