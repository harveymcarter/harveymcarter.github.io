import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllArticles } from '../utils/markdownLoader';
import { useLanguage } from '../contexts/LanguageContext';
import { HiSearch, HiFilter, HiSortAscending, HiOutlineNewspaper } from 'react-icons/hi';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const { language, t } = useLanguage();

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

  useEffect(() => {
    let mounted = true;

    async function loadArticles() {
      try {
        const articlesData = await getAllArticles(language);
        if (mounted) {
          setArticles(articlesData);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(t('common.error'));
          setLoading(false);
        }
      }
    }

    loadArticles();
    return () => {
      mounted = false;
    };
  }, [language, t]);

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article =>
        article.tags.includes(selectedCategory)
      );
    }

    // Sort articles
    return filtered.sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });
  }, [articles, searchTerm, selectedCategory, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-media-paper to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-media-muted">{t('common.loading')}</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-media-paper to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-red-500">{error}</div>
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
            <HiOutlineNewspaper className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">{t('articles.subtitle')}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-media-ink font-bold mb-6">
            {t('articles.title')}
          </h1>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative md:col-span-2">
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-media-muted h-5 w-5" />
              <input
                type="text"
                placeholder={t('articles.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-media-border rounded-xl focus:outline-none focus:ring-2 focus:ring-media-accent/20 text-media-ink placeholder-media-muted"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <HiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-media-muted h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-media-border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-media-accent/20 text-media-ink"
                >
                  <option value="all">{t('articles.categories.all')}</option>
                  <option value="development">{t('articles.categories.development')}</option>
                  <option value="design">{t('articles.categories.design')}</option>
                  <option value="technology">{t('articles.categories.technology')}</option>
                </select>
              </div>
              <div className="relative">
                <HiSortAscending className="absolute left-4 top-1/2 transform -translate-y-1/2 text-media-muted h-5 w-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-media-border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-media-accent/20 text-media-ink"
                >
                  <option value="latest">{t('articles.filter.latest')}</option>
                  <option value="oldest">{t('articles.filter.oldest')}</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        {filteredAndSortedArticles.length === 0 ? (
          <motion.div variants={itemVariants} className="text-center py-16">
            <p className="text-media-muted text-lg">{t('articles.noResults')}</p>
          </motion.div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAndSortedArticles.map((article) => (
              <motion.article
                key={article.id}
                className="bg-media-paper border border-media-border rounded-xl overflow-hidden group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {article.imageUrl && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-media-muted mb-4">
                    <time>{article.date}</time>
                    <span className="mx-2">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl text-media-ink font-bold mb-3">
                    {article.title}
                  </h2>
                  <p className="text-media-muted mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center text-media-accent hover:text-media-ink transition-colors"
                  >
                    <span className="mr-2">{t('articles.readMore')}</span>
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
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Articles; 