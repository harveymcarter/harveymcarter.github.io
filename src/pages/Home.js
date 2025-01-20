import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getAllArticles } from '../utils/markdownLoader';
import { HiArrowRight, HiCalendar, HiDownload, HiOutlineNewspaper, HiLightBulb } from 'react-icons/hi';

const Home = () => {
  const { t, language } = useLanguage();
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [mainArticle, setMainArticle] = useState(null);

  useEffect(() => {
    const loadFeaturedArticles = async () => {
      const articles = await getAllArticles(language);
      setMainArticle(articles[0]);
      setFeaturedArticles(articles.slice(1, 4));
    };
    loadFeaturedArticles();
  }, [language]);

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

  return (
    <motion.div
      className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-media-paper to-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section with Featured Article */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 mb-24"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Introduction */}
          <div className="text-left">
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-media-quote text-media-accent mb-8"
              variants={itemVariants}
            >
              <HiLightBulb className="mr-2 h-5 w-5" />
              <span className="text-sm font-medium tracking-wide">{t('home.latestPublications')}</span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-media-ink font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              {t('home.greeting')}
            </motion.h1>
            
            <motion.p 
              className="font-body text-xl text-media-muted mb-10 leading-relaxed"
              variants={itemVariants}
            >
              {t('home.intro')}{' '}
              <span className="text-media-ink font-semibold">{t('home.role')}</span>{' '}
              {t('home.description')}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link
                to="/projects"
                className="media-button bg-media-accent text-white hover:bg-media-accent/90"
              >
                {t('home.viewWork')}
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg bg-media-quote text-media-muted hover:text-media-ink transition-colors"
              >
                {t('home.getInTouch')}
              </Link>
            </motion.div>
          </div>

          {/* Featured Article Card */}
          {mainArticle && (
            <motion.div
              className="relative group bg-media-paper border border-media-border rounded-xl overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity group-hover:opacity-90 opacity-75" />
              <img 
                src={mainArticle.imageUrl} 
                alt={mainArticle.title}
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="article-meta text-white mb-4 font-medium">
                  <time>{mainArticle.date}</time>
                  <span className="mx-2">·</span>
                  <span>{mainArticle.readTime}</span>
                </div>
                <h2 className="font-heading text-2xl text-white font-bold mb-4">
                  {mainArticle.title}
                </h2>
                <p className="text-white mb-6 line-clamp-2">
                  {mainArticle.excerpt}
                </p>
                <Link
                  to={`/articles/${mainArticle.slug}`}
                  className="inline-flex items-center text-white hover:text-media-accent transition-colors"
                >
                  <span className="mr-2">{t('articles.readMore')}</span>
                  <HiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Featured Articles Grid */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 mb-24"
        variants={itemVariants}
      >
        <h2 className="font-heading text-3xl text-media-ink font-bold text-center mb-16">
          {t('home.featuredArticles')}
        </h2>
        <div className="newspaper-grid">
          {featuredArticles.map((article) => (
            <motion.article
              key={article.id}
              className="bg-media-paper border border-media-border rounded-xl p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {article.imageUrl && (
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="article-meta mb-4 text-media-muted font-medium">
                <time>{article.date}</time>
                <span className="mx-2">·</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="font-heading text-xl text-media-ink font-bold mb-3">{article.title}</h3>
              <p className="text-media-muted mb-4 line-clamp-2 leading-relaxed">{article.excerpt}</p>
              <Link
                to={`/articles/${article.slug}`}
                className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
              >
                <span className="mr-2">{t('articles.readMore')}</span>
                <HiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/articles"
            className="px-4 py-2 rounded-lg bg-media-quote text-media-muted hover:text-media-ink transition-colors"
          >
            {t('home.viewAllArticles')}
          </Link>
        </div>
      </motion.section>

      {/* Media Presence Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 mb-24"
        variants={itemVariants}
      >
        <h2 className="font-heading text-3xl text-media-ink font-bold text-center mb-16">
          {t('home.mediaPresence')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-media-paper border border-media-border rounded-xl p-8"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start space-x-4">
              <div className="text-media-accent">
                <HiCalendar className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl text-media-ink font-bold mb-3">
                  {t('home.speakingEngagements')}
                </h3>
                <p className="text-media-muted mb-6 leading-relaxed">
                  Available for keynotes, panels, and workshops on media and technology.
                </p>
                <Link
                  to="/speaking"
                  className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
                >
                  <span className="mr-2">{t('home.viewSchedule')}</span>
                  <HiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-media-paper border border-media-border rounded-xl p-8"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start space-x-4">
              <div className="text-media-accent">
                <HiDownload className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl text-media-ink font-bold mb-3">
                  {t('home.pressKit')}
                </h3>
                <p className="text-media-muted mb-6 leading-relaxed">
                  Download bio, photos, and brand assets for media coverage.
                </p>
                <Link
                  to="/press"
                  className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
                >
                  <span className="mr-2">{t('home.downloadPressKit')}</span>
                  <HiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div 
        className="max-w-3xl mx-auto px-4 text-center"
        variants={itemVariants}
      >
        <div className="bg-media-paper border border-media-border rounded-xl p-8">
          <h2 className="font-heading text-3xl text-media-ink font-bold mb-4">Ready to Connect?</h2>
          <p className="text-media-muted mb-8 leading-relaxed">
            Let's discuss your media needs or potential collaborations.
          </p>
          <Link 
            to="/contact" 
            className="media-button bg-media-accent text-white hover:bg-media-accent/90"
          >
            {t('home.getInTouch')}
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home; 