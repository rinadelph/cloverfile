/**
 * CMS Type Definitions
 * File-based CMS for Clover logistics website
 */

export type ArticleCategory = 'case-study' | 'blog' | 'story' | 'news';

export type Locale = 'es' | 'en';

export interface LocalizedString {
  es: string;
  en: string;
}

export interface Article {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  featuredImage: string;
  images: string[];
  category: ArticleCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  published: boolean;
}

export interface CaseStudy extends Article {
  category: 'case-study';
  client?: string;
  industry?: string;
  results?: LocalizedString;
  duration?: string;
  services?: string[];
}

export interface BlogPost extends Article {
  category: 'blog';
  readTime?: number;
}

export interface Story extends Article {
  category: 'story' | 'news';
  highlight?: boolean;
}

export interface ArticleFilter {
  category?: ArticleCategory;
  tags?: string[];
  published?: boolean;
  author?: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CMSConfig {
  defaultLocale: Locale;
  supportedLocales: Locale[];
  contentPath: string;
}

// Type guards
export function isCaseStudy(article: Article): article is CaseStudy {
  return article.category === 'case-study';
}

export function isBlogPost(article: Article): article is BlogPost {
  return article.category === 'blog';
}

export function isStory(article: Article): article is Story {
  return article.category === 'story' || article.category === 'news';
}
