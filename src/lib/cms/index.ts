/**
 * Clover CMS - File-based Content Management System
 *
 * A simple, extensible CMS for managing articles, case studies, blog posts, and company stories.
 * Built for Svelte 5 with TypeScript support.
 *
 * @example
 * ```svelte
 * <script>
 *   import { getArticles, parseMarkdown, createCMSState } from '$lib/cms';
 *
 *   // Get articles
 *   const articles = getArticles('es', 'case-study', 5);
 *
 *   // Use reactive state
 *   const cms = createCMSState('es');
 * </script>
 * ```
 */

// Types
export type {
  Article,
  ArticleCategory,
  ArticleFilter,
  BlogPost,
  CaseStudy,
  CMSConfig,
  Locale,
  LocalizedString,
  PaginatedResult,
  Story
} from './types';

export {
  isBlogPost,
  isCaseStudy,
  isStory
} from './types';

// Utility functions from utils.ts
export {
  formatDate,
  getAllAuthors,
  getAllTags,
  getArticleById,
  getArticleBySlug,
  getArticles,
  getArticlesByTag,
  getArticlesPaginated,
  getCategoryName,
  getDataSource,
  getFeaturedArticles,
  getLocalizedField,
  getRelatedArticles,
  searchArticles,
  setDataSource
} from './utils';

export type { DataSource } from './utils';

// Re-export from articles.ts for backward compatibility
export {
  categoryLabels,
  formatDate as formatDateCompat,
  getAllTags as getAllTagsCompat,
  getArticleBySlug as getArticleBySlugCompat,
  getArticles as getArticlesCompat,
  getArticlesByCategory,
  getBlogPosts,
  getCaseStudies,
  getCaseStudyBySlug,
  getPaginatedArticles,
  getRelatedArticles as getRelatedArticlesCompat
} from './articles';

// Mock data exports
export {
  mockArticles,
  mockBlogPosts,
  mockCaseStudies,
  mockStories
} from './mockData';

// Svelte stores
export {
  createArticleList,
  createCMSState,
  createPaginationState,
  createSearchState
} from './store';

// Markdown utilities
export {
  addHeadingIds,
  countWords,
  estimateReadingTime,
  extractHeadings,
  generateTOC,
  getExcerpt,
  parseMarkdown,
  renderMarkdown,
  stripMarkdown
} from './markdown';

export type { MarkdownOptions } from './markdown';
