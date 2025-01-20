import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { projectsEn } from '../config/content/en/projects';
import { projectsTr } from '../config/content/tr/projects';
import { projectsRu } from '../config/content/ru/projects';
import { projectsHr } from '../config/content/hr/projects';
import { projectsBs } from '../config/content/bs/projects';

const projectsByLanguage = {
  en: projectsEn,
  tr: projectsTr,
  ru: projectsRu,
  hr: projectsHr,
  bs: projectsBs
};

const Projects = () => {
  const { language = 'en', t } = useLanguage() || {};
  const projects = projectsByLanguage[language] || projectsByLanguage.en;

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
      opacity: 1
    }
  };

  return (
    <motion.div
      className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="section-title text-center mb-12">
        {t('projects.title')}
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="bg-media-paper shadow-lg rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            {project.imageUrl && (
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-media-accent/80 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            )}
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-heading font-bold text-media-ink">
                  {project.title}
                </h2>
                <span className="text-media-muted text-sm">{project.year}</span>
              </div>
              
              <p className="text-media-ink/80 mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-heading font-semibold text-media-ink mb-3">
                  {t('projects.impact')}
                </h3>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-media-ink/80">
                      <span className="text-media-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-heading font-semibold text-media-ink mb-3">
                  {t('projects.highlights')}
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-media-ink/80">
                      <span className="text-media-accent">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-media-muted text-sm">{project.role}</span>
                <a
                  href={project.link}
                  className="media-button inline-flex items-center gap-2 group"
                >
                  <span>{t('projects.viewDetails')}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 