import React from 'react';
import { motion } from 'framer-motion';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import ResumePDF from '../services/PDFGenerator';
import content from '../config/content';
import { useLanguage } from '../contexts/LanguageContext';
import { HiUser, HiDownload, HiAcademicCap, HiOfficeBuilding, HiHeart } from 'react-icons/hi';

const About = () => {
  const [isClient, setIsClient] = React.useState(false);
  const [pdfError, setPdfError] = React.useState(null);
  const { language = 'en', t } = useLanguage() || {};
  const currentResumeData = content[language]?.resume || content.en.resume;

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

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async (blob) => {
    try {
      if (!blob) {
        throw new Error('PDF blob is not available');
      }
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `portfolio-resume-${language}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error.message);
      setPdfError(error.message);
    }
  };

  return (
    <motion.div
      className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-media-paper to-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-media-quote text-media-accent mb-8">
            <HiUser className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">{t('about.subtitle')}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-media-ink font-bold mb-6">
            {t('about.title')}
          </h1>

          {/* Resume Download Button */}
          <div className="mb-12">
            {isClient ? (
              <BlobProvider document={<ResumePDF data={currentResumeData} language={language} />}>
                {({ blob, url, loading, error }) => (
                  <motion.button
                    onClick={() => blob && handleDownload(blob)}
                    className={`media-button bg-media-accent text-white hover:bg-media-accent/90 inline-flex items-center gap-2 ${
                      loading || error ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={loading || error}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">↻</span> 
                        {t('common.loading')}
                      </span>
                    ) : error ? (
                      <span className="flex items-center gap-2 text-red-500">
                        ❌ {error.message || t('common.error')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <HiDownload className="h-5 w-5" />
                        <span>{t('about.downloadResume')}</span>
                      </span>
                    )}
                  </motion.button>
                )}
              </BlobProvider>
            ) : (
              <button 
                className="media-button bg-media-accent/50 text-white cursor-not-allowed"
                disabled
              >
                {t('common.loading')}
              </button>
            )}
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div variants={itemVariants} className="bg-media-paper border border-media-border rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-heading text-2xl text-media-ink font-bold mb-4">{t('about.professionalOverview')}</h2>
              <p className="text-media-muted leading-relaxed mb-6">
                {currentResumeData.about}
              </p>
              <div className="flex gap-4">
                {currentResumeData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-media-accent hover:text-media-ink transition-colors"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-media-muted mb-2">{t('about.contact')}</div>
              <div className="text-media-ink mb-1">{currentResumeData.personalInfo.email}</div>
              <div className="text-media-ink mb-1">{currentResumeData.personalInfo.phone}</div>
              <div className="text-media-ink">{currentResumeData.personalInfo.location}</div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
          {Object.entries(currentResumeData.skills).map(([category, skills], index) => (
            <div key={index} className="bg-media-paper border border-media-border rounded-xl p-8">
              <h3 className="text-sm font-medium text-media-muted mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-media-quote text-media-accent rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={itemVariants} className="bg-media-paper border border-media-border rounded-xl p-8 mb-12">
          <h2 className="font-heading text-2xl text-media-ink font-bold mb-8">{t('about.experience.title')}</h2>
          <div className="space-y-8">
            {currentResumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l border-media-border">
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1 bg-media-accent rounded-full"></div>
                <h3 className="font-heading text-xl text-media-ink font-bold mb-2">{exp.title}</h3>
                <div className="text-sm text-media-muted mb-3">
                  {exp.company} • {exp.period}
                </div>
                <p className="text-media-muted mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-media-muted flex items-start">
                      <span className="text-media-accent mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Publications */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <h2 className="font-heading text-2xl text-media-ink font-bold mb-6">{t('about.awards.title')}</h2>
            <div className="space-y-6">
              {currentResumeData.awards.map((award, index) => (
                <div key={index}>
                  <h3 className="font-heading text-lg text-media-ink font-bold mb-2">{award.name}</h3>
                  <div className="text-sm text-media-muted mb-2">
                    {award.issuer} • {award.date}
                  </div>
                  <p className="text-media-muted">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <h2 className="font-heading text-2xl text-media-ink font-bold mb-6">{t('about.publications.title')}</h2>
            <div className="space-y-6">
              {currentResumeData.publications.map((pub, index) => (
                <div key={index}>
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-lg text-media-ink hover:text-media-accent transition-colors block mb-2"
                  >
                    {pub.title}
                  </a>
                  <div className="text-sm text-media-muted">
                    {pub.publisher} • {pub.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interests, Hobbies & Volunteer Work */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <h2 className="font-heading text-2xl text-media-ink font-bold mb-6">{t('about.interests.title')}</h2>
            <div className="flex flex-wrap gap-2">
              {currentResumeData.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-media-quote text-media-accent rounded-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <h2 className="font-heading text-2xl text-media-ink font-bold mb-6">{t('about.hobbies.title')}</h2>
            <div className="space-y-4">
              {currentResumeData.hobbies.map((hobby, index) => (
                <div key={index} className="group">
                  <h3 className="text-lg text-media-ink font-bold group-hover:text-media-accent transition-colors mb-2">
                    {hobby.name}
                  </h3>
                  <p className="text-media-muted">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-media-paper border border-media-border rounded-xl p-8">
            <h2 className="font-heading text-2xl text-media-ink font-bold mb-6">{t('about.volunteerWork.title')}</h2>
            <div className="space-y-6">
              {currentResumeData.volunteerWork.map((work, index) => (
                <div key={index}>
                  <h3 className="text-lg text-media-ink font-bold mb-2">{work.role}</h3>
                  <div className="text-sm text-media-muted mb-2">
                    {work.organization} • {work.period}
                  </div>
                  <p className="text-media-muted">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 