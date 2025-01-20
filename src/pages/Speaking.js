import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { HiCalendar, HiLocationMarker, HiGlobe, HiMicrophone } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Speaking = () => {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const upcomingEvents = [
    {
      title: t('speaking.event1.title'),
      date: t('speaking.event1.date'),
      location: t('speaking.event1.location'),
      type: t('speaking.event1.type'),
      description: t('speaking.event1.description'),
      link: '#'
    },
    {
      title: t('speaking.event2.title'),
      date: t('speaking.event2.date'),
      location: t('speaking.event2.location'),
      type: t('speaking.event2.type'),
      description: t('speaking.event2.description'),
      link: '#'
    }
  ];

  const pastEvents = [
    {
      id: 'media-innovation-conference',
      title: t('speaking.pastEvent1.title'),
      date: t('speaking.pastEvent1.date'),
      location: t('speaking.pastEvent1.location'),
      type: t('speaking.pastEvent1.type'),
      description: t('speaking.pastEvent1.description')
    }
  ];

  const speakingTopics = [
    {
      title: t('speaking.topic1.title'),
      description: t('speaking.topic1.description'),
      icon: <HiGlobe className="w-6 h-6" />
    },
    {
      title: t('speaking.topic2.title'),
      description: t('speaking.topic2.description'),
      icon: <HiMicrophone className="w-6 h-6" />
    }
  ];

  return (
    <motion.div
      className="min-h-screen pt-24 pb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-media-ink font-bold leading-tight mb-6">
            {t('speaking.title')}
          </h1>
          <p className="font-body text-xl text-media-muted max-w-3xl mx-auto leading-relaxed">
            {t('speaking.description')}
          </p>
        </motion.div>

        {/* Speaking Topics */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="font-heading text-3xl text-media-ink font-bold mb-8">
            {t('speaking.topicsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakingTopics.map((topic, index) => (
              <motion.div
                key={index}
                className="bg-media-paper border border-media-border rounded-xl p-8"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-media-accent">{topic.icon}</div>
                  <div>
                    <h3 className="font-heading text-xl text-media-ink font-bold mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-media-muted leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Events Calendar */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="font-heading text-3xl text-media-ink font-bold mb-4 md:mb-0">
              {t('speaking.eventsTitle')}
            </h2>
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedTab === 'upcoming'
                    ? 'bg-media-accent text-white'
                    : 'bg-media-quote text-media-muted hover:text-media-ink'
                }`}
                onClick={() => setSelectedTab('upcoming')}
              >
                {t('speaking.upcomingEvents')}
              </button>
              <button
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedTab === 'past'
                    ? 'bg-media-accent text-white'
                    : 'bg-media-quote text-media-muted hover:text-media-ink'
                }`}
                onClick={() => setSelectedTab('past')}
              >
                {t('speaking.pastEvents')}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {(selectedTab === 'upcoming' ? upcomingEvents : pastEvents).map((event, index) => (
              <motion.div
                key={index}
                className="bg-media-paper border border-media-border rounded-xl p-8"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="font-heading text-xl text-media-ink font-bold mb-4">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-media-muted">
                      <span className="flex items-center">
                        <HiCalendar className="w-5 h-5 mr-2" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <HiLocationMarker className="w-5 h-5 mr-2" />
                        {event.location}
                      </span>
                      <span className="flex items-center">
                        <HiMicrophone className="w-5 h-5 mr-2" />
                        {event.type}
                      </span>
                    </div>
                    <p className="text-media-muted mt-4 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {selectedTab === 'upcoming' ? (
                      <a
                        href={event.link}
                        className="media-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('speaking.registerNow')}
                      </a>
                    ) : (
                      <Link
                        to={`/speaking/recording/${event.id}`}
                        className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
                      >
                        <span className="mr-2">{t('speaking.recording.watchFullRecording')}</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Booking Information */}
        <motion.section variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <h2 className="font-heading text-3xl text-media-ink font-bold mb-4">
              {t('speaking.bookingTitle')}
            </h2>
            <p className="text-media-muted mb-8 leading-relaxed">
              {t('speaking.bookingDescription')}
            </p>
            <a href="mailto:speaking@example.com" className="media-button">
              {t('speaking.bookNow')}
            </a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Speaking; 