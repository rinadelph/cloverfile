<script lang="ts">
  import { cmsStore } from '$lib/stores/cms';
  import { onMount } from 'svelte';

  let stats = $state({
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
    caseStudies: 0,
    blogPosts: 0,
    news: 0,
    stories: 0,
    totalMedia: 0
  });

  let recentArticles = $state<typeof cmsStore.articles>([]);
  let mounted = $state(false);

  onMount(() => {
    cmsStore.init();
    stats = cmsStore.getStats();
    recentArticles = cmsStore.getRecentArticles(5);
    mounted = true;
  });

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'case-study': 'Case Study',
      'blog': 'Blog',
      'news': 'News',
      'story': 'Story'
    };
    return labels[category] || category;
  }
</script>

<svelte:head>
  <title>Dashboard - Clover CMS</title>
</svelte:head>

<div class="dashboard">
  <header class="page-header">
    <h1>Dashboard</h1>
    <p class="subtitle">Welcome to Clover CMS. Manage your content from here.</p>
  </header>

  <!-- Stats Grid -->
  <section class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon articles">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      </div>
      <div class="stat-content">
        <span class="stat-value">{stats.totalArticles}</span>
        <span class="stat-label">Total Articles</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon published">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      </div>
      <div class="stat-content">
        <span class="stat-value">{stats.publishedArticles}</span>
        <span class="stat-label">Published</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon drafts">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </div>
      <div class="stat-content">
        <span class="stat-value">{stats.draftArticles}</span>
        <span class="stat-label">Drafts</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon media">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <div class="stat-content">
        <span class="stat-value">{stats.totalMedia}</span>
        <span class="stat-label">Media Files</span>
      </div>
    </div>
  </section>

  <!-- Content Breakdown -->
  <section class="content-section">
    <div class="section-header">
      <h2>Content Breakdown</h2>
    </div>
    <div class="breakdown-grid">
      <a href="/admin/articles?category=case-study" class="breakdown-card">
        <span class="breakdown-count">{stats.caseStudies}</span>
        <span class="breakdown-label">Case Studies</span>
      </a>
      <a href="/admin/articles?category=blog" class="breakdown-card">
        <span class="breakdown-count">{stats.blogPosts}</span>
        <span class="breakdown-label">Blog Posts</span>
      </a>
      <a href="/admin/articles?category=news" class="breakdown-card">
        <span class="breakdown-count">{stats.news}</span>
        <span class="breakdown-label">News</span>
      </a>
      <a href="/admin/articles?category=story" class="breakdown-card">
        <span class="breakdown-count">{stats.stories}</span>
        <span class="breakdown-label">Stories</span>
      </a>
    </div>
  </section>

  <!-- Quick Actions & Recent Content -->
  <div class="dashboard-grid">
    <!-- Quick Actions -->
    <section class="content-section">
      <div class="section-header">
        <h2>Quick Actions</h2>
      </div>
      <div class="quick-actions">
        <a href="/admin/articles/new" class="action-btn primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          New Article
        </a>
        <a href="/admin/media" class="action-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
          Upload Media
        </a>
        <a href="/admin/articles" class="action-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6" />
          </svg>
          View All Articles
        </a>
      </div>
    </section>

    <!-- Recent Content -->
    <section class="content-section recent">
      <div class="section-header">
        <h2>Recent Content</h2>
        <a href="/admin/articles" class="view-all">View all</a>
      </div>
      {#if mounted && recentArticles.length > 0}
        <ul class="recent-list">
          {#each recentArticles as article}
            <li class="recent-item">
              <a href="/admin/articles/{article.slug}" class="recent-link">
                <div class="recent-info">
                  <span class="recent-title">{article.title.es}</span>
                  <span class="recent-meta">
                    <span class="category-badge" data-category={article.category}>
                      {getCategoryLabel(article.category)}
                    </span>
                    <span class="date">{formatDate(article.updatedAt)}</span>
                  </span>
                </div>
                <span class="status-badge" class:published={article.published}>
                  {article.published ? 'Published' : 'Draft'}
                </span>
              </a>
            </li>
          {/each}
        </ul>
      {:else if mounted}
        <p class="empty-state">No articles yet. Create your first article!</p>
      {:else}
        <p class="loading">Loading...</p>
      {/if}
    </section>
  </div>
</div>

<style>
  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .page-header {
    margin-bottom: 0.5rem;
  }

  .page-header h1 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .stat-card {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .stat-icon svg {
    width: 24px;
    height: 24px;
  }

  .stat-icon.articles {
    background: rgba(99, 102, 241, 0.15);
    color: #818cf8;
  }

  .stat-icon.published {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
  }

  .stat-icon.drafts {
    background: rgba(245, 158, 11, 0.15);
    color: #fbbf24;
  }

  .stat-icon.media {
    background: rgba(236, 72, 153, 0.15);
    color: #f472b6;
  }

  .stat-content {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--admin-text);
    line-height: 1.2;
  }

  .stat-label {
    font-size: 0.8125rem;
    color: var(--admin-text-muted);
  }

  /* Content Sections */
  .content-section {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
    padding: 1.25rem;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .section-header h2 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--admin-text);
  }

  .view-all {
    font-size: 0.8125rem;
    color: var(--admin-accent);
    text-decoration: none;
  }

  .view-all:hover {
    text-decoration: underline;
  }

  /* Breakdown Grid */
  .breakdown-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
  }

  .breakdown-card {
    background: var(--admin-surface-hover);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: all 0.15s ease;
  }

  .breakdown-card:hover {
    background: var(--admin-border);
  }

  .breakdown-count {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--admin-text);
  }

  .breakdown-label {
    font-size: 0.8125rem;
    color: var(--admin-text-muted);
  }

  /* Dashboard Grid */
  .dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1.5rem;
  }

  /* Quick Actions */
  .quick-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    border-radius: 8px;
    background: var(--admin-surface-hover);
    color: var(--admin-text);
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    transition: all 0.15s ease;
  }

  .action-btn:hover {
    background: var(--admin-border);
  }

  .action-btn.primary {
    background: var(--admin-accent);
    color: white;
  }

  .action-btn.primary:hover {
    background: var(--admin-accent-hover);
  }

  .action-btn svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  /* Recent List */
  .recent-list {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .recent-item {
    border-bottom: 1px solid var(--admin-border);
  }

  .recent-item:last-child {
    border-bottom: none;
  }

  .recent-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 0;
    text-decoration: none;
    transition: opacity 0.15s ease;
  }

  .recent-link:hover {
    opacity: 0.8;
  }

  .recent-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .recent-title {
    font-size: 0.9375rem;
    color: var(--admin-text);
    font-weight: 500;
  }

  .recent-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.75rem;
    color: var(--admin-text-muted);
  }

  .category-badge {
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
    font-size: 0.6875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    background: var(--admin-surface-hover);
  }

  .category-badge[data-category="case-study"] {
    background: rgba(99, 102, 241, 0.2);
    color: #818cf8;
  }

  .category-badge[data-category="blog"] {
    background: rgba(16, 185, 129, 0.2);
    color: #34d399;
  }

  .category-badge[data-category="news"] {
    background: rgba(245, 158, 11, 0.2);
    color: #fbbf24;
  }

  .category-badge[data-category="story"] {
    background: rgba(236, 72, 153, 0.2);
    color: #f472b6;
  }

  .status-badge {
    padding: 0.25rem 0.625rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    background: rgba(245, 158, 11, 0.2);
    color: #fbbf24;
  }

  .status-badge.published {
    background: rgba(16, 185, 129, 0.2);
    color: #34d399;
  }

  .empty-state,
  .loading {
    text-align: center;
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
    padding: 2rem 1rem;
  }

  @media (max-width: 1024px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
    }

    .breakdown-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .breakdown-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
