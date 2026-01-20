/**
 * CMS Utility Functions
 * Helper functions for CRUD operations on content
 */

import type { Article, ArticleCategory, ArticleFilter, Locale, PaginatedResult } from './types';
import articlesData from './content/articles.json';
import { mockArticles } from './mockData';

/**
 * Data source configuration
 * Set to 'json' to use file-based content from articles.json
 * Set to 'mock' to use the mockData.ts (richer content for development)
 * Set to 'both' to merge both sources
 */
export type DataSource = 'json' | 'mock' | 'both';

let currentDataSource: DataSource = 'both';

/**
 * Set the data source for articles
 */
export function setDataSource(source: DataSource): void {
  currentDataSource = source;
}

/**
 * Get the current data source
 */
export function getDataSource(): DataSource {
  return currentDataSource;
}

// Get all articles from the configured data source
function getAllArticles(): Article[] {
  switch (currentDataSource) {
    case 'json':
      return articlesData.articles as Article[];
    case 'mock':
      return mockArticles as Article[];
    case 'both':
    default:
      // Merge both sources, mock data takes precedence for duplicates
      const jsonArticles = articlesData.articles as Article[];
      const mockIds = new Set(mockArticles.map(a => a.id));
      const uniqueJson = jsonArticles.filter(a => !mockIds.has(a.id));
      return [...mockArticles, ...uniqueJson] as Article[];
  }
}

/**
 * Get articles with optional filtering
 * @param locale - Language locale ('es' or 'en')
 * @param category - Optional category filter
 * @param limit - Optional limit on number of results
 * @param offset - Optional offset for pagination
 */
export function getArticles(
  locale: Locale = 'es',
  category?: ArticleCategory,
  limit?: number,
  offset: number = 0
): Article[] {
  let articles = getAllArticles().filter((article) => article.published);

  // Filter by category if provided
  if (category) {
    articles = articles.filter((article) => article.category === category);
  }

  // Sort by publishedAt date (newest first)
  articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // Apply pagination
  if (offset > 0) {
    articles = articles.slice(offset);
  }

  if (limit && limit > 0) {
    articles = articles.slice(0, limit);
  }

  return articles;
}

/**
 * Get paginated articles
 * @param locale - Language locale
 * @param page - Page number (1-indexed)
 * @param pageSize - Items per page
 * @param filter - Optional filters
 */
export function getArticlesPaginated(
  locale: Locale = 'es',
  page: number = 1,
  pageSize: number = 10,
  filter?: ArticleFilter
): PaginatedResult<Article> {
  let articles = getAllArticles();

  // Apply filters
  if (filter?.published !== undefined) {
    articles = articles.filter((a) => a.published === filter.published);
  } else {
    articles = articles.filter((a) => a.published);
  }

  if (filter?.category) {
    articles = articles.filter((a) => a.category === filter.category);
  }

  if (filter?.tags && filter.tags.length > 0) {
    articles = articles.filter((a) => filter.tags!.some((tag) => a.tags.includes(tag)));
  }

  if (filter?.author) {
    articles = articles.filter((a) => a.author === filter.author);
  }

  // Sort by date
  articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const total = articles.length;
  const totalPages = Math.ceil(total / pageSize);
  const offset = (page - 1) * pageSize;
  const items = articles.slice(offset, offset + pageSize);

  return {
    items,
    total,
    page,
    pageSize,
    totalPages
  };
}

/**
 * Get a single article by its slug
 * @param slug - Article slug
 * @param locale - Language locale
 */
export function getArticleBySlug(slug: string, locale: Locale = 'es'): Article | undefined {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug && article.published);
}

/**
 * Get a single article by its ID
 * @param id - Article ID
 */
export function getArticleById(id: string): Article | undefined {
  const articles = getAllArticles();
  return articles.find((article) => article.id === id);
}

/**
 * Get related articles based on category and tags
 * @param article - Reference article
 * @param locale - Language locale
 * @param limit - Maximum number of related articles
 */
export function getRelatedArticles(
  article: Article,
  locale: Locale = 'es',
  limit: number = 3
): Article[] {
  const articles = getAllArticles().filter(
    (a) => a.id !== article.id && a.published
  );

  // Score articles by relevance
  const scoredArticles = articles.map((a) => {
    let score = 0;

    // Same category gets higher score
    if (a.category === article.category) {
      score += 10;
    }

    // Matching tags increase score
    const matchingTags = a.tags.filter((tag) => article.tags.includes(tag));
    score += matchingTags.length * 5;

    return { article: a, score };
  });

  // Sort by score (highest first) then by date
  scoredArticles.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.article.publishedAt).getTime() - new Date(a.article.publishedAt).getTime();
  });

  return scoredArticles.slice(0, limit).map((s) => s.article);
}

/**
 * Search articles by query string
 * @param query - Search query
 * @param locale - Language locale
 * @param limit - Maximum number of results
 */
export function searchArticles(
  query: string,
  locale: Locale = 'es',
  limit?: number
): Article[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  const articles = getAllArticles().filter((a) => a.published);

  // Score articles by search relevance
  const scoredArticles = articles.map((article) => {
    let score = 0;
    const title = article.title[locale].toLowerCase();
    const excerpt = article.excerpt[locale].toLowerCase();
    const content = article.content[locale].toLowerCase();
    const tags = article.tags.join(' ').toLowerCase();

    for (const word of queryWords) {
      // Title matches (highest priority)
      if (title.includes(word)) {
        score += 20;
      }

      // Tag matches
      if (tags.includes(word)) {
        score += 15;
      }

      // Excerpt matches
      if (excerpt.includes(word)) {
        score += 10;
      }

      // Content matches
      if (content.includes(word)) {
        score += 5;
      }
    }

    return { article, score };
  });

  // Filter out non-matching articles and sort by score
  let results = scoredArticles
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.article);

  if (limit && limit > 0) {
    results = results.slice(0, limit);
  }

  return results;
}

/**
 * Get all unique tags from articles
 * @param category - Optional category filter
 */
export function getAllTags(category?: ArticleCategory): string[] {
  let articles = getAllArticles().filter((a) => a.published);

  if (category) {
    articles = articles.filter((a) => a.category === category);
  }

  const tagSet = new Set<string>();
  articles.forEach((article) => {
    article.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * Get all unique authors
 */
export function getAllAuthors(): string[] {
  const articles = getAllArticles().filter((a) => a.published);
  const authorSet = new Set<string>();
  articles.forEach((article) => authorSet.add(article.author));
  return Array.from(authorSet).sort();
}

/**
 * Get articles by tag
 * @param tag - Tag to filter by
 * @param locale - Language locale
 * @param limit - Maximum number of results
 */
export function getArticlesByTag(
  tag: string,
  locale: Locale = 'es',
  limit?: number
): Article[] {
  let articles = getAllArticles()
    .filter((a) => a.published && a.tags.includes(tag))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  if (limit && limit > 0) {
    articles = articles.slice(0, limit);
  }

  return articles;
}

/**
 * Get featured/highlighted articles
 * @param locale - Language locale
 * @param limit - Maximum number of results
 */
export function getFeaturedArticles(locale: Locale = 'es', limit: number = 5): Article[] {
  const articles = getAllArticles().filter((a) => a.published);

  // For stories, check highlight property
  // For others, use most recent as featured
  const featured = articles
    .filter((a) => (a as any).highlight === true)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // If we don't have enough highlighted, add recent articles
  if (featured.length < limit) {
    const remaining = articles
      .filter((a) => !(a as any).highlight)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit - featured.length);

    return [...featured, ...remaining].slice(0, limit);
  }

  return featured.slice(0, limit);
}

/**
 * Get localized content from an article
 * @param article - Article object
 * @param field - Field to get ('title', 'excerpt', 'content')
 * @param locale - Language locale
 */
export function getLocalizedField(
  article: Article,
  field: 'title' | 'excerpt' | 'content',
  locale: Locale = 'es'
): string {
  return article[field][locale] || article[field]['es'];
}

/**
 * Format date for display
 * @param dateString - ISO date string
 * @param locale - Language locale
 */
export function formatDate(dateString: string, locale: Locale = 'es'): string {
  const date = new Date(dateString);
  const localeMap: Record<Locale, string> = {
    es: 'es-ES',
    en: 'en-US'
  };

  return date.toLocaleDateString(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Get category display name
 * @param category - Article category
 * @param locale - Language locale
 */
export function getCategoryName(category: ArticleCategory, locale: Locale = 'es'): string {
  const names: Record<ArticleCategory, Record<Locale, string>> = {
    'case-study': { es: 'Caso de Exito', en: 'Case Study' },
    'blog': { es: 'Blog', en: 'Blog' },
    'story': { es: 'Historia', en: 'Story' },
    'news': { es: 'Noticias', en: 'News' }
  };

  return names[category]?.[locale] || category;
}
