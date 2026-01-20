/**
 * CMS Article utilities
 * Functions for fetching and filtering articles
 */

import type { Article, ArticleCategory, CaseStudy, PaginatedResult, ArticleFilter } from './types';
import { mockArticles, mockCaseStudies, mockBlogPosts, mockStories } from './mockData';

/**
 * Get all articles, optionally filtered
 */
export function getArticles(filter?: ArticleFilter): Article[] {
  let articles = [...mockArticles];

  if (filter) {
    if (filter.category) {
      articles = articles.filter(a => a.category === filter.category);
    }
    if (filter.tags && filter.tags.length > 0) {
      articles = articles.filter(a =>
        filter.tags!.some(tag => a.tags.includes(tag))
      );
    }
    if (filter.published !== undefined) {
      articles = articles.filter(a => a.published === filter.published);
    }
    if (filter.author) {
      articles = articles.filter(a => a.author === filter.author);
    }
  }

  // Sort by publish date, newest first
  articles.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return articles;
}

/**
 * Get paginated articles
 */
export function getPaginatedArticles(
  page: number = 1,
  pageSize: number = 9,
  filter?: ArticleFilter
): PaginatedResult<Article> {
  const articles = getArticles(filter);
  const total = articles.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const items = articles.slice(start, start + pageSize);

  return {
    items,
    total,
    page,
    pageSize,
    totalPages
  };
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find(a => a.slug === slug);
}

/**
 * Get case study by slug
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return mockCaseStudies.find(cs => cs.slug === slug);
}

/**
 * Get all case studies
 */
export function getCaseStudies(): CaseStudy[] {
  return [...mockCaseStudies].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get all blog posts (excluding case studies)
 */
export function getBlogPosts(): Article[] {
  return getArticles().filter(a => a.category !== 'case-study');
}

/**
 * Get related articles based on tags and category
 */
export function getRelatedArticles(article: Article, limit: number = 3): Article[] {
  const related = mockArticles
    .filter(a => a.id !== article.id)
    .map(a => {
      let score = 0;
      // Same category gets points
      if (a.category === article.category) score += 2;
      // Shared tags get points
      a.tags.forEach(tag => {
        if (article.tags.includes(tag)) score += 1;
      });
      return { article: a, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(r => r.article);

  // If not enough related articles, fill with recent ones
  if (related.length < limit) {
    const remaining = mockArticles
      .filter(a => a.id !== article.id && !related.includes(a))
      .slice(0, limit - related.length);
    related.push(...remaining);
  }

  return related;
}

/**
 * Get all unique tags from articles
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  mockArticles.forEach(a => a.tags.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
}

/**
 * Get articles by category with type-safe returns
 */
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getArticles({ category });
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, locale: 'es' | 'en' = 'es'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Category labels
 */
export const categoryLabels: Record<ArticleCategory | 'all', { es: string; en: string }> = {
  'all': { es: 'Todos', en: 'All' },
  'case-study': { es: 'Casos de Exito', en: 'Case Studies' },
  'blog': { es: 'Blog', en: 'Blog' },
  'story': { es: 'Historias', en: 'Stories' },
  'news': { es: 'Noticias', en: 'News' }
};
