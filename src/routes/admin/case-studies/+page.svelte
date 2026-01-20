<script lang="ts">
  import { cmsStore } from '$lib/stores/cms';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import type { Article } from '$lib/cms/types';

  let mounted = $state(false);
  let caseStudies = $state<Article[]>([]);
  let searchQuery = $state('');
  let filteredStudies = $state<Article[]>([]);
  let showDeleteModal = $state(false);
  let studyToDelete = $state<Article | null>(null);

  onMount(() => {
    cmsStore.init();
    caseStudies = cmsStore.getArticlesByCategory('case-study');
    filteredStudies = caseStudies;
    mounted = true;
  });

  $effect(() => {
    if (mounted) {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredStudies = caseStudies.filter(s =>
          s.title.es.toLowerCase().includes(query) ||
          s.title.en.toLowerCase().includes(query) ||
          s.tags.some(t => t.toLowerCase().includes(query))
        );
      } else {
        filteredStudies = caseStudies;
      }
    }
  });

  function handleSearch(e: Event) {
    searchQuery = (e.target as HTMLInputElement).value;
  }

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function confirmDelete(study: Article) {
    studyToDelete = study;
    showDeleteModal = true;
  }

  function cancelDelete() {
    showDeleteModal = false;
    studyToDelete = null;
  }

  function deleteStudy() {
    if (studyToDelete) {
      cmsStore.deleteArticle(studyToDelete.id);
      caseStudies = cmsStore.getArticlesByCategory('case-study');
      filteredStudies = caseStudies;
      showDeleteModal = false;
      studyToDelete = null;
    }
  }
</script>

<svelte:head>
  <title>Case Studies - Clover CMS</title>
</svelte:head>

<div class="case-studies-page">
  <header class="page-header">
    <div class="header-content">
      <h1>Case Studies</h1>
      <p class="subtitle">Showcase your success stories</p>
    </div>
    <a href="/admin/articles/new?category=case-study" class="btn-primary">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14" />
      </svg>
      New Case Study
    </a>
  </header>

  <!-- Search -->
  <div class="filters">
    <div class="search-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search case studies..."
        value={searchQuery}
        oninput={handleSearch}
      />
    </div>
  </div>

  {#if mounted}
    {#if filteredStudies.length > 0}
      <div class="studies-grid">
        {#each filteredStudies as study}
          <div class="study-card">
            <div class="study-image">
              {#if study.featuredImage}
                <img
                  src={study.featuredImage}
                  alt={study.title.es}
                  onerror={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                  }}
                />
              {/if}
              <div class="study-status" class:published={study.published}>
                {study.published ? 'Published' : 'Draft'}
              </div>
            </div>
            <div class="study-content">
              <h3 class="study-title">{study.title.es}</h3>
              <p class="study-excerpt">{study.excerpt.es || 'No excerpt available'}</p>
              <div class="study-meta">
                <span class="study-date">{formatDate(study.updatedAt)}</span>
                {#if study.tags.length > 0}
                  <div class="study-tags">
                    {#each study.tags.slice(0, 3) as tag}
                      <span class="tag">{tag}</span>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
            <div class="study-actions">
              <a href="/admin/articles/{study.slug}" class="action-btn" title="Edit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit
              </a>
              <button
                class="action-btn delete"
                title="Delete"
                onclick={() => confirmDelete(study)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
        <h3>No case studies found</h3>
        <p>
          {#if searchQuery}
            Try adjusting your search query.
          {:else}
            Create your first case study to showcase your success stories.
          {/if}
        </p>
        <a href="/admin/articles/new?category=case-study" class="btn-primary">
          Create Case Study
        </a>
      </div>
    {/if}
  {:else}
    <div class="loading">Loading case studies...</div>
  {/if}
</div>

<!-- Delete Confirmation Modal -->
{#if showDeleteModal && studyToDelete}
  <div class="modal-overlay" role="dialog" aria-modal="true" onclick={cancelDelete} onkeydown={(e) => e.key === 'Escape' && cancelDelete()}>
    <div class="modal" role="document" onclick={(e) => e.stopPropagation()}>
      <h3>Delete Case Study</h3>
      <p>Are you sure you want to delete "{studyToDelete.title.es}"? This action cannot be undone.</p>
      <div class="modal-actions">
        <button class="btn-secondary" onclick={cancelDelete}>Cancel</button>
        <button class="btn-danger" onclick={deleteStudy}>Delete</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .case-studies-page {
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

  /* Studies Grid */
  .studies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.5rem;
  }

  .study-card {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.15s ease;
  }

  .study-card:hover {
    border-color: var(--admin-accent);
  }

  .study-image {
    position: relative;
    aspect-ratio: 16/9;
    background: var(--admin-bg);
    overflow: hidden;
  }

  .study-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .study-status {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.25rem 0.625rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    background: rgba(245, 158, 11, 0.9);
    color: white;
  }

  .study-status.published {
    background: rgba(16, 185, 129, 0.9);
  }

  .study-content {
    padding: 1.25rem;
  }

  .study-title {
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .study-excerpt {
    font-size: 0.875rem;
    color: var(--admin-text-muted);
    line-height: 1.5;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .study-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .study-date {
    font-size: 0.75rem;
    color: var(--admin-text-muted);
  }

  .study-tags {
    display: flex;
    gap: 0.375rem;
  }

  .tag {
    padding: 0.125rem 0.5rem;
    background: var(--admin-surface-hover);
    border-radius: 4px;
    font-size: 0.6875rem;
    color: var(--admin-text-muted);
  }

  .study-actions {
    display: flex;
    border-top: 1px solid var(--admin-border);
  }

  .action-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem;
    background: transparent;
    border: none;
    color: var(--admin-text-muted);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .action-btn:hover {
    background: var(--admin-surface-hover);
    color: var(--admin-text);
  }

  .action-btn.delete:hover {
    background: rgba(239, 68, 68, 0.1);
    color: var(--admin-danger);
  }

  .action-btn + .action-btn {
    border-left: 1px solid var(--admin-border);
  }

  .action-btn svg {
    width: 16px;
    height: 16px;
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

    .studies-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
