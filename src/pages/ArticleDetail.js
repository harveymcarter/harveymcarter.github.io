import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../utils/markdownLoader';
import { useLanguage } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';

function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    async function loadArticle() {
      try {
        const articleData = await getArticleBySlug(slug, language);
        if (!articleData) {
          setError(t('common.notFound'));
        } else {
          setArticle(articleData);
        }
        setLoading(false);
      } catch (err) {
        setError(t('common.error'));
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug, language, t]);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <div className="text-nier-dark">{t('common.loading')}</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-nier-dark">{t('common.notFound')}</h1>
        <Link to="/articles" className="text-nier-accent hover:text-nier-accent-hover">
          {t('articles.backToArticles')}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/articles" className="text-nier-accent hover:text-nier-accent-hover mb-8 inline-block">
        {t('articles.backToArticles')}
      </Link>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center justify-between mb-8 text-gray-600">
          <div className="flex items-center">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">{article.author.name}</p>
              <p className="text-sm">{article.author.bio}</p>
            </div>
          </div>
          <div className="text-right">
            <p>{article.date}</p>
            <p className="text-sm">{article.readTime}</p>
          </div>
        </div>

        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}

        <div className="markdown-content">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">{t('articles.tags')}</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ArticleDetail; 