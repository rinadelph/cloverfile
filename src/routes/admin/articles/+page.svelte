<script lang="ts">
  import { cmsStore } from '$lib/stores/cms';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import type { Article, ArticleCategory } from '$lib/cms/types';

  let mounted = $state(false);
  let articles = $state<Article[]>([]);
  let filteredArticles = $state<Article[]>([]);

  let searchQuery = $state('');
  let selectedCategory = $state<ArticleCategory | ''>('');
  let showDeleteModal = $state(false);
  let articleToDelete = $state<Article | null>(null);

  const categories: { value: ArticleCategory | ''; label: string }[] = [
    { value: '', label: 'All Categories' },
    { value: 'blog', label: 'Blog' },
    { value: 'case-study', label: 'Case Study' },
    { value: 'news', label: 'News' },
    { value: 'story', label: 'Story' }
  ];

  onMount(() => {
    cmsStore.init();
    articles = cmsStore.articles;

    // Check for URL params
    const urlCategory = $page.url.searchParams.get('category');
    if (urlCategory && ['blog', 'case-study', 'news', 'story'].includes(urlCategory)) {
      selectedCategory = urlCategory as ArticleCategory;
    }

    filterArticles();
    mounted = true;
  });

  function filterArticles() {
    filteredArticles = cmsStore.filterArticles(
      selectedCategory || undefined,
      searchQuery || undefined
    );
  }

  $effect(() => {
    if (mounted) {
      filterArticles();
    }
  });

  function handleSearch(e: Event) {
    searchQuery = (e.target as HTMLInputElement).value;
  }

  function handleCategoryChange(e: Event) {
    selectedCategory = (e.target as HTMLSelectElement).value as ArticleCategory | '';
  }

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

  function confirmDelete(article: Article) {
    articleToDelete = article;
    showDeleteModal = true;
  }

  function cancelDelete() {
    showDeleteModal = false;
    articleToDelete = null;
  }

  function deleteArticle() {
    if (articleToDelete) {
      cmsStore.deleteArticle(articleToDelete.id);
      articles = cmsStore.articles;
      filterArticles();
      showDeleteModal = false;
      articleToDelete = null;
    }
  }
</script>

<svelte:head>
  <title>Articles - Clover CMS</title>
</svelte:head>

<div class="articles-page">
  <header class="page-header">
    <div class="header-content">
      <h1>Articles</h1>
      <p class="subtitle">Manage all your content in one place</p>
    </div>
    <a href="/admin/articles/new" class="btn-primary">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14" />
      </svg>
      New Article
    </a>
  </header>

  <!-- Filters -->
  <div class="filters">
    <div class="search-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        oninput={handleSearch}
      />
    </div>
    <select class="category-filter" value={selectedCategory} onchange={handleCategoryChange}>
      {#each categories as cat}
        <option value={cat.value}>{cat.label}</option>
      {/each}
    </select>
  </div>

  <!-- Articles Table -->
  {#if mounted}
    {#if filteredArticles.length > 0}
      <div class="table-container">
        <table class="articles-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredArticles as article}
              <tr>
                <td class="title-cell">
                  <a href="/admin/articles/{article.slug}" class="article-title">
                    {article.title.es}
                  </a>
                  <span class="article-slug">/{article.slug}</span>
                </td>
                <td>
                  <span class="category-badge" data-category={article.category}>
                    {getCategoryLabel(article.category)}
                  </span>
                </td>
                <td>
                  <span class="status-badge" class:published={article.published}>
                    {article.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td class="date-cell">
                  {formatDate(article.updatedAt)}
                </td>
                <td class="actions-cell">
                  <a href="/admin/articles/{article.slug}" class="action-btn edit" title="Edit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </a>
                  <button
                    class="action-btn delete"
                    title="Delete"
                    onclick={() => confirmDelete(article)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {:else}
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
        <h3>No articles found</h3>
        <p>
          {#if searchQuery || selectedCategory}
            Try adjusting your filters or search query.
          {:else}
            Get started by creating your first article.
          {/if}
        </p>
        <a href="/admin/articles/new" class="btn-primary">Create Article</a>
      </div>
    {/if}
  {:else}
    <div class="loading">Loading articles...</div>
  {/if}
</div>

<!-- Delete Confirmation Modal -->
{#if showDeleteModal && articleToDelete}
  <div class="modal-overlay" role="dialog" aria-modal="true" onclick={cancelDelete} onkeydown={(e) => e.key === 'Escape' && cancelDelete()}>
    <div class="modal" role="document" onclick={(e) => e.stopPropagation()}>
      <h3>Delete Article</h3>
      <p>Are you sure you want to delete "{articleToDelete.title.es}"? This action cannot be undone.</p>
      <div class="modal-actions">
        <button class="btn-secondary" onclick={cancelDelete}>Cancel</button>
        <button class="btn-danger" onclick={deleteArticle}>Delete</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .articles-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .page-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .header-content h1 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: var(--admin-accent);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .btn-primary:hover {
    background: var(--admin-accent-hover);
  }

  .btn-primary svg {
    width: 18px;
    height: 18px;
  }

  /* Filters */
  .filters {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .search-box {
    flex: 1;
    max-width: 400px;
    position: relative;
  }

  .search-box svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: var(--admin-text-muted);
  }

  .search-box input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 8px;
    color: var(--admin-text);
    font-size: 0.9375rem;
  }

  .search-box input::placeholder {
    color: var(--admin-text-muted);
  }

  .search-box input:focus {
    outline: none;
    border-color: var(--admin-accent);
  }

  .category-filter {
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 8px;
    color: var(--admin-text);
    font-size: 0.9375rem;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
  }

  .category-filter:focus {
    outline: none;
    border-color: var(--admin-accent);
  }

  /* Table */
  .table-container {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
    overflow: hidden;
  }

  .articles-table {
    width: 100%;
    border-collapse: collapse;
  }

  .articles-table th {
    text-align: left;
    padding: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--admin-text-muted);
    background: var(--admin-surface-hover);
    border-bottom: 1px solid var(--admin-border);
  }

  .articles-table td {
    padding: 1rem;
    border-bottom: 1px solid var(--admin-border);
    vertical-align: middle;
  }

  .articles-table tr:last-child td {
    border-bottom: none;
  }

  .articles-table tr:hover td {
    background: var(--admin-surface-hover);
  }

  .title-cell {
    max-width: 400px;
  }

  .article-title {
    display: block;
    color: var(--admin-text);
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .article-title:hover {
    color: var(--admin-accent);
  }

  .article-slug {
    font-size: 0.75rem;
    color: var(--admin-text-muted);
  }

  .category-badge {
    display: inline-block;
    padding: 0.25rem 0.625rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
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
    display: inline-block;
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

  .date-cell {
    font-size: 0.875rem;
    color: var(--admin-text-muted);
    white-space: nowrap;
  }

  .actions-cell {
    white-space: nowrap;
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: transparent;
    border: none;
    color: var(--admin-text-muted);
    cursor: pointer;
    transition: all 0.15s ease;
    text-decoration: none;
  }

  .action-btn:hover {
    background: var(--admin-surface-hover);
    color: var(--admin-text);
  }

  .action-btn.delete:hover {
    background: rgba(239, 68, 68, 0.15);
    color: var(--admin-danger);
  }

  .action-btn svg {
    width: 18px;
    height: 18px;
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
  }

  .empty-state svg {
    width: 64px;
    height: 64px;
    color: var(--admin-text-muted);
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  .empty-state h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 0.5rem;
  }

  .empty-state p {
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
    margin-bottom: 1.5rem;
  }

  .loading {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--admin-text-muted);
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }

  .modal {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
    padding: 1.5rem;
    max-width: 420px;
    width: 100%;
  }

  .modal h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 0.75rem;
  }

  .modal p {
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .modal-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  .btn-secondary {
    padding: 0.625rem 1rem;
    background: var(--admin-surface-hover);
    color: var(--admin-text);
    border: 1px solid var(--admin-border);
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .btn-secondary:hover {
    background: var(--admin-border);
  }

  .btn-danger {
    padding: 0.625rem 1rem;
    background: var(--admin-danger);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .btn-danger:hover {
    background: #dc2626;
  }

  @media (max-width: 768px) {
    .page-header {
      flex-direction: column;
      align-items: stretch;
    }

    .filters {
      flex-direction: column;
    }

    .search-box {
      max-width: none;
    }

    .table-container {
      overflow-x: auto;
    }

    .articles-table {
      min-width: 600px;
    }
  }
</style>
