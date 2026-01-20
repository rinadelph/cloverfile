/**
 * CMS Svelte Stores
 * Reactive stores for managing CMS content with Svelte 5 runes
 */

import type { Article, ArticleCategory, ArticleFilter, Locale, PaginatedResult } from './types';
import {
  getArticles,
  getArticlesPaginated,
  getArticleBySlug,
  getRelatedArticles,
  searchArticles,
  getAllTags,
  getFeaturedArticles
} from './utils';

/**
 * Create a reactive CMS state using Svelte 5 runes
 * This function should be called within a component context
 */
export function createCMSState(initialLocale: Locale = 'es') {
  // Reactive state using $state rune
  let locale = $state<Locale>(initialLocale);
  let currentCategory = $state<ArticleCategory | undefined>(undefined);
  let searchQuery = $state('');
  let currentPage = $state(1);
  let pageSize = $state(10);

  // Derived values using $derived rune
  const articles = $derived(getArticles(locale, currentCategory));

  const paginatedArticles = $derived(
    getArticlesPaginated(locale, currentPage, pageSize, {
      category: currentCategory,
      published: true
    })
  );

  const searchResults = $derived(
    searchQuery.length >= 2 ? searchArticles(searchQuery, locale) : []
  );

  const tags = $derived(getAllTags(currentCategory));

  const featuredArticles = $derived(getFeaturedArticles(locale, 3));

  // Actions
  function setLocale(newLocale: Locale) {
    locale = newLocale;
  }

  function setCategory(category: ArticleCategory | undefined) {
    currentCategory = category;
    currentPage = 1;
  }

  function setSearchQuery(query: string) {
    searchQuery = query;
  }

  function setPage(page: number) {
    currentPage = page;
  }

  function setPageSize(size: number) {
    pageSize = size;
    currentPage = 1;
  }

  function getArticle(slug: string) {
    return getArticleBySlug(slug, locale);
  }

  function getRelated(article: Article, limit: number = 3) {
    return getRelatedArticles(article, locale, limit);
  }

  return {
    // State (getters)
    get locale() { return locale; },
    get currentCategory() { return currentCategory; },
    get searchQuery() { return searchQuery; },
    get currentPage() { return currentPage; },
    get pageSize() { return pageSize; },

    // Derived values
    get articles() { return articles; },
    get paginatedArticles() { return paginatedArticles; },
    get searchResults() { return searchResults; },
    get tags() { return tags; },
    get featuredArticles() { return featuredArticles; },

    // Actions
    setLocale,
    setCategory,
    setSearchQuery,
    setPage,
    setPageSize,
    getArticle,
    getRelated
  };
}

/**
 * Simple reactive article list for components that just need articles
 */
export function createArticleList(
  locale: Locale = 'es',
  category?: ArticleCategory,
  limit?: number
) {
  let currentLocale = $state(locale);
  let currentCategory = $state(category);
  let currentLimit = $state(limit);

  const articles = $derived(getArticles(currentLocale, currentCategory, currentLimit));

  function refresh(newLocale?: Locale, newCategory?: ArticleCategory, newLimit?: number) {
    if (newLocale !== undefined) currentLocale = newLocale;
    if (newCategory !== undefined) currentCategory = newCategory;
    if (newLimit !== undefined) currentLimit = newLimit;
  }

  return {
    get articles() { return articles; },
    get locale() { return currentLocale; },
    get category() { return currentCategory; },
    refresh
  };
}

/**
 * Search state for search components
 */
export function createSearchState(locale: Locale = 'es') {
  let query = $state('');
  let currentLocale = $state(locale);
  let isSearching = $state(false);

  const results = $derived.by(() => {
    if (query.length < 2) return [];
    return searchArticles(query, currentLocale);
  });

  const hasResults = $derived(results.length > 0);
  const hasQuery = $derived(query.length >= 2);

  function search(newQuery: string) {
    query = newQuery;
  }

  function clear() {
    query = '';
  }

  function setLocale(newLocale: Locale) {
    currentLocale = newLocale;
  }

  return {
    get query() { return query; },
    get results() { return results; },
    get hasResults() { return hasResults; },
    get hasQuery() { return hasQuery; },
    get isSearching() { return isSearching; },
    search,
    clear,
    setLocale
  };
}

/**
 * Pagination state helper
 */
export function createPaginationState(
  locale: Locale = 'es',
  initialPageSize: number = 10,
  filter?: ArticleFilter
) {
  let currentPage = $state(1);
  let pageSize = $state(initialPageSize);
  let currentLocale = $state(locale);
  let currentFilter = $state(filter);

  const paginatedResult = $derived(
    getArticlesPaginated(currentLocale, currentPage, pageSize, currentFilter)
  );

  const canGoNext = $derived(currentPage < paginatedResult.totalPages);
  const canGoPrev = $derived(currentPage > 1);

  function nextPage() {
    if (canGoNext) currentPage++;
  }

  function prevPage() {
    if (canGoPrev) currentPage--;
  }

  function goToPage(page: number) {
    if (page >= 1 && page <= paginatedResult.totalPages) {
      currentPage = page;
    }
  }

  function setFilter(newFilter: ArticleFilter | undefined) {
    currentFilter = newFilter;
    currentPage = 1;
  }

  function setPageSize(size: number) {
    pageSize = size;
    currentPage = 1;
  }

  return {
    get currentPage() { return currentPage; },
    get pageSize() { return pageSize; },
    get result() { return paginatedResult; },
    get items() { return paginatedResult.items; },
    get total() { return paginatedResult.total; },
    get totalPages() { return paginatedResult.totalPages; },
    get canGoNext() { return canGoNext; },
    get canGoPrev() { return canGoPrev; },
    nextPage,
    prevPage,
    goToPage,
    setFilter,
    setPageSize
  };
}
