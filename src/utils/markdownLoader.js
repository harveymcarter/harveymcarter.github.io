import content from '../config/content';

export async function getAllArticles(language = 'en') {
  try {
    // Get articles for the selected language from the content object
    return content[language]?.articles || content.en.articles;
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug, language = 'en') {
  try {
    // Get articles for the selected language
    const articles = content[language]?.articles || content.en.articles;
    
    // Find the article by slug
    const article = articles.find(article => article.slug === slug);
    
    if (!article) {
      return null;
    }

    return {
      ...article,
      language
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
} 