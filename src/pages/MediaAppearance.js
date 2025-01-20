import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { HiArrowLeft, HiCalendar, HiGlobeAlt, HiPlay } from 'react-icons/hi';

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
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Link
        to="/press"
        className="inline-flex items-center text-media-primary hover:text-media-primary-dark mb-6"
      >
        <HiArrowLeft className="mr-2" />
        {t('press.backToPress')}
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-media-border p-6">
        <h1 className="text-3xl font-bold text-media-ink mb-2">{appearance.title}</h1>
        
        <div className="flex flex-wrap gap-4 mb-6 text-media-muted">
          <div className="flex items-center">
            <HiGlobeAlt className="mr-2" />
            {appearance.outlet}
          </div>
          <div className="flex items-center">
            <HiCalendar className="mr-2" />
            {appearance.date}
          </div>
          <div className="flex items-center">
            <HiPlay className="mr-2" />
            {appearance.type}
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src={appearance.videoUrl}
            title={appearance.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-media-ink">{appearance.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaAppearance; 