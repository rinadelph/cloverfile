/**
 * CMS Store - localStorage persistence layer
 * Manages articles and media for the admin interface
 */

import { browser } from '$app/environment';
import type { Article, ArticleCategory, CaseStudy, BlogPost, Story } from '$lib/cms/types';

const STORAGE_KEYS = {
  articles: 'cms_articles',
  media: 'cms_media'
};

// Sample data for initial setup
const sampleArticles: Article[] = [
  {
    id: '1',
    slug: 'caso-exito-transporte-refrigerado',
    title: {
      es: 'Caso de Exito: Transporte Refrigerado para Industria Alimentaria',
      en: 'Success Case: Refrigerated Transport for Food Industry'
    },
    excerpt: {
      es: 'Como optimizamos la cadena de frio para un cliente del sector alimentario.',
      en: 'How we optimized the cold chain for a food sector client.'
    },
    content: {
      es: '## El Desafio\n\nNuestro cliente, una empresa lider en distribucion de alimentos, enfrentaba desafios significativos...\n\n## La Solucion\n\nImplementamos un sistema integral de transporte refrigerado...\n\n## Resultados\n\n- 30% reduccion en perdidas\n- 99.8% cumplimiento de temperatura\n- Expansion a 5 nuevas rutas',
      en: '## The Challenge\n\nOur client, a leading food distribution company, faced significant challenges...\n\n## The Solution\n\nWe implemented a comprehensive refrigerated transport system...\n\n## Results\n\n- 30% reduction in losses\n- 99.8% temperature compliance\n- Expansion to 5 new routes'
    },
    featuredImage: '/images/case-studies/refrigerated-transport.jpg',
    images: [],
    category: 'case-study',
    tags: ['transporte', 'refrigerado', 'alimentos'],
    author: 'Clover Team',
    publishedAt: '2024-12-15T10:00:00Z',
    updatedAt: '2024-12-15T10:00:00Z',
    published: true
  },
  {
    id: '2',
    slug: 'tendencias-logistica-2025',
    title: {
      es: 'Tendencias en Logistica para 2025',
      en: 'Logistics Trends for 2025'
    },
    excerpt: {
      es: 'Descubre las principales tendencias que transformaran la industria logistica.',
      en: 'Discover the main trends that will transform the logistics industry.'
    },
    content: {
      es: '## Introduccion\n\nEl sector logistico esta en constante evolucion...\n\n## Tendencias Clave\n\n1. **Automatizacion avanzada**\n2. **Sostenibilidad**\n3. **Digitalizacion completa**',
      en: '## Introduction\n\nThe logistics sector is constantly evolving...\n\n## Key Trends\n\n1. **Advanced automation**\n2. **Sustainability**\n3. **Complete digitalization**'
    },
    featuredImage: '/images/blog/logistics-trends.jpg',
    images: [],
    category: 'blog',
    tags: ['tendencias', 'innovacion', '2025'],
    author: 'Clover Team',
    publishedAt: '2024-12-10T09:00:00Z',
    updatedAt: '2024-12-10T09:00:00Z',
    published: true
  },
  {
    id: '3',
    slug: 'nueva-flota-vehiculos',
    title: {
      es: 'Clover Amplia su Flota con Vehiculos Ecologicos',
      en: 'Clover Expands Fleet with Eco-Friendly Vehicles'
    },
    excerpt: {
      es: 'Anunciamos la incorporacion de 15 nuevos vehiculos con tecnologia hibrida.',
      en: 'We announce the addition of 15 new vehicles with hybrid technology.'
    },
    content: {
      es: '## Compromiso con el Medio Ambiente\n\nEn Clover, estamos comprometidos con la sostenibilidad...',
      en: '## Environmental Commitment\n\nAt Clover, we are committed to sustainability...'
    },
    featuredImage: '/images/news/new-fleet.jpg',
    images: [],
    category: 'news',
    tags: ['flota', 'sostenibilidad', 'vehiculos'],
    author: 'Clover Team',
    publishedAt: '2024-12-05T14:00:00Z',
    updatedAt: '2024-12-05T14:00:00Z',
    published: true
  }
];

const sampleMedia: MediaItem[] = [
  { id: '1', filename: 'logistics-warehouse.jpg', path: '/images/logistics-warehouse.jpg', type: 'image', size: 245000, uploadedAt: '2024-12-01T10:00:00Z' },
  { id: '2', filename: 'truck-fleet.jpg', path: '/images/truck-fleet.jpg', type: 'image', size: 312000, uploadedAt: '2024-12-02T11:00:00Z' },
  { id: '3', filename: 'cold-storage.jpg', path: '/images/cold-storage.jpg', type: 'image', size: 198000, uploadedAt: '2024-12-03T09:00:00Z' }
];

export interface MediaItem {
  id: string;
  filename: string;
  path: string;
  type: 'image' | 'document';
  size: number;
  uploadedAt: string;
}

export interface CMSState {
  articles: Article[];
  media: MediaItem[];
}

// Initialize state from localStorage or use sample data
function getInitialState(): CMSState {
  if (!browser) {
    return { articles: [], media: [] };
  }

  const storedArticles = localStorage.getItem(STORAGE_KEYS.articles);
  const storedMedia = localStorage.getItem(STORAGE_KEYS.media);

  return {
    articles: storedArticles ? JSON.parse(storedArticles) : sampleArticles,
    media: storedMedia ? JSON.parse(storedMedia) : sampleMedia
  };
}

function saveToStorage(key: string, data: unknown): void {
  if (browser) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

// Create a reactive store using Svelte 5 runes pattern
class CMSStore {
  private _articles = $state<Article[]>([]);
  private _media = $state<MediaItem[]>([]);
  private _initialized = false;

  constructor() {
    if (browser) {
      this.init();
    }
  }

  init() {
    if (this._initialized) return;
    const state = getInitialState();
    this._articles = state.articles;
    this._media = state.media;
    this._initialized = true;
  }

  get articles(): Article[] {
    return this._articles;
  }

  get media(): MediaItem[] {
    return this._media;
  }

  // Article operations
  getArticle(slug: string): Article | undefined {
    return this._articles.find(a => a.slug === slug);
  }

  getArticleById(id: string): Article | undefined {
    return this._articles.find(a => a.id === id);
  }

  getArticlesByCategory(category: ArticleCategory): Article[] {
    return this._articles.filter(a => a.category === category);
  }

  searchArticles(query: string): Article[] {
    const lowerQuery = query.toLowerCase();
    return this._articles.filter(a =>
      a.title.es.toLowerCase().includes(lowerQuery) ||
      a.title.en.toLowerCase().includes(lowerQuery) ||
      a.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }

  filterArticles(category?: ArticleCategory, query?: string): Article[] {
    let filtered = [...this._articles];

    if (category) {
      filtered = filtered.filter(a => a.category === category);
    }

    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(a =>
        a.title.es.toLowerCase().includes(lowerQuery) ||
        a.title.en.toLowerCase().includes(lowerQuery) ||
        a.tags.some(t => t.toLowerCase().includes(lowerQuery))
      );
    }

    return filtered;
  }

  addArticle(article: Omit<Article, 'id'>): Article {
    const newArticle: Article = {
      ...article,
      id: crypto.randomUUID()
    };
    this._articles = [...this._articles, newArticle];
    saveToStorage(STORAGE_KEYS.articles, this._articles);
    return newArticle;
  }

  updateArticle(id: string, updates: Partial<Article>): Article | null {
    const index = this._articles.findIndex(a => a.id === id);
    if (index === -1) return null;

    const updated = { ...this._articles[index], ...updates, updatedAt: new Date().toISOString() };
    this._articles = [
      ...this._articles.slice(0, index),
      updated,
      ...this._articles.slice(index + 1)
    ];
    saveToStorage(STORAGE_KEYS.articles, this._articles);
    return updated;
  }

  deleteArticle(id: string): boolean {
    const index = this._articles.findIndex(a => a.id === id);
    if (index === -1) return false;

    this._articles = [
      ...this._articles.slice(0, index),
      ...this._articles.slice(index + 1)
    ];
    saveToStorage(STORAGE_KEYS.articles, this._articles);
    return true;
  }

  // Media operations
  getMediaItem(id: string): MediaItem | undefined {
    return this._media.find(m => m.id === id);
  }

  addMedia(item: Omit<MediaItem, 'id'>): MediaItem {
    const newItem: MediaItem = {
      ...item,
      id: crypto.randomUUID()
    };
    this._media = [...this._media, newItem];
    saveToStorage(STORAGE_KEYS.media, this._media);
    return newItem;
  }

  deleteMedia(id: string): boolean {
    const index = this._media.findIndex(m => m.id === id);
    if (index === -1) return false;

    this._media = [
      ...this._media.slice(0, index),
      ...this._media.slice(index + 1)
    ];
    saveToStorage(STORAGE_KEYS.media, this._media);
    return true;
  }

  // Stats
  getStats() {
    return {
      totalArticles: this._articles.length,
      publishedArticles: this._articles.filter(a => a.published).length,
      draftArticles: this._articles.filter(a => !a.published).length,
      caseStudies: this._articles.filter(a => a.category === 'case-study').length,
      blogPosts: this._articles.filter(a => a.category === 'blog').length,
      news: this._articles.filter(a => a.category === 'news').length,
      stories: this._articles.filter(a => a.category === 'story').length,
      totalMedia: this._media.length
    };
  }

  getRecentArticles(limit = 5): Article[] {
    return [...this._articles]
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, limit);
  }
}

export const cmsStore = new CMSStore();
