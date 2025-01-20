import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { HiPlay, HiArrowLeft } from 'react-icons/hi';

const EventRecording = () => {
  const { eventId } = useParams();
  const { t } = useLanguage();

  // This would typically come from your content management system or API
  const getEventData = (id) => {
    const events = {
      'media-innovation-conference': {
        title: t('speaking.pastEvent1.title'),
        date: t('speaking.pastEvent1.date'),
        location: t('speaking.pastEvent1.location'),
        type: t('speaking.pastEvent1.type'),
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1',
        description: t('speaking.pastEvent1.description')
      },
      // Add more past events here as needed
    };
    return events[id];
  };

  const eventData = getEventData(eventId);

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

  if (!eventData) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-media-paper to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl text-media-ink">{t('common.notFound')}</h1>
            <Link 
              to="/speaking" 
              className="inline-flex items-center text-media-accent hover:text-media-ink mt-4"
            >
              <HiArrowLeft className="mr-2" />
              {t('speaking.backToEvents')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            <HiPlay className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">{t('speaking.recording.subtitle')}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-media-ink font-bold mb-6">
            {eventData.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-media-muted">
            <span>{eventData.date}</span>
            <span>•</span>
            <span>{eventData.location}</span>
            <span>•</span>
            <span>{eventData.type}</span>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-media-paper border border-media-border">
            <iframe
              src={eventData.videoUrl}
              title={eventData.title}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Event Description */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <h2 className="font-heading text-2xl text-media-ink font-bold mb-4">
              {t('speaking.recording.aboutEvent')}
            </h2>
            <p className="text-media-muted leading-relaxed mb-8">
              {eventData.description}
            </p>
            <Link
              to="/speaking"
              className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
            >
              <HiArrowLeft className="mr-2" />
              {t('speaking.backToEvents')}
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventRecording; 