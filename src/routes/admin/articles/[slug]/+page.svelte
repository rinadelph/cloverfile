<script lang="ts">
  import { cmsStore } from '$lib/stores/cms';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import type { Article, ArticleCategory } from '$lib/cms/types';

  let mounted = $state(false);
  let isNew = $derived($page.params.slug === 'new');
  let saving = $state(false);
  let error = $state('');

  // Form data
  let formData = $state({
    slug: '',
    titleEs: '',
    titleEn: '',
    excerptEs: '',
    excerptEn: '',
    contentEs: '',
    contentEn: '',
    featuredImage: '',
    category: 'blog' as ArticleCategory,
    tags: '',
    published: false
  });

  let existingArticle = $state<Article | null>(null);

  const categories: { value: ArticleCategory; label: string }[] = [
    { value: 'blog', label: 'Blog Post' },
    { value: 'case-study', label: 'Case Study' },
    { value: 'news', label: 'News' },
    { value: 'story', label: 'Story' }
  ];

  onMount(() => {
    cmsStore.init();

    if (!isNew) {
      const article = cmsStore.getArticle($page.params.slug);
      if (article) {
        existingArticle = article;
        formData = {
          slug: article.slug,
          titleEs: article.title.es,
          titleEn: article.title.en,
          excerptEs: article.excerpt.es,
          excerptEn: article.excerpt.en,
          contentEs: article.content.es,
          contentEn: article.content.en,
          featuredImage: article.featuredImage,
          category: article.category,
          tags: article.tags.join(', '),
          published: article.published
        };
      } else {
        error = 'Article not found';
      }
    }

    mounted = true;
  });

  function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-') // Replace multiple dashes with single
      .trim();
  }

  function handleTitleChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    formData.titleEs = value;
    if (isNew && !formData.slug) {
      formData.slug = generateSlug(value);
    }
  }

  function handleSlugChange(e: Event) {
    formData.slug = generateSlug((e.target as HTMLInputElement).value);
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    error = '';

    // Validation
    if (!formData.titleEs.trim()) {
      error = 'Spanish title is required';
      return;
    }

    if (!formData.slug.trim()) {
      error = 'Slug is required';
      return;
    }

    // Check for duplicate slug (only for new articles)
    if (isNew) {
      const existing = cmsStore.getArticle(formData.slug);
      if (existing) {
        error = 'An article with this slug already exists';
        return;
      }
    }

    saving = true;

    try {
      const articleData = {
        slug: formData.slug,
        title: {
          es: formData.titleEs,
          en: formData.titleEn || formData.titleEs
        },
        excerpt: {
          es: formData.excerptEs,
          en: formData.excerptEn || formData.excerptEs
        },
        content: {
          es: formData.contentEs,
          en: formData.contentEn || formData.contentEs
        },
        featuredImage: formData.featuredImage,
        images: [],
        category: formData.category,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        author: 'Clover Team',
        published: formData.published,
        publishedAt: existingArticle?.publishedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (isNew) {
        cmsStore.addArticle(articleData);
      } else if (existingArticle) {
        cmsStore.updateArticle(existingArticle.id, articleData);
      }

      // Navigate back to articles list
      goto('/admin/articles');
    } catch (err) {
      error = 'Failed to save article';
      console.error(err);
    } finally {
      saving = false;
    }
  }

  function handleCancel() {
    goto('/admin/articles');
  }
</script>

<svelte:head>
  <title>{isNew ? 'New Article' : 'Edit Article'} - Clover CMS</title>
</svelte:head>

<div class="editor-page">
  <header class="page-header">
    <div class="header-content">
      <a href="/admin/articles" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Articles
      </a>
      <h1>{isNew ? 'New Article' : 'Edit Article'}</h1>
    </div>
  </header>

  {#if error}
    <div class="error-message">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {error}
    </div>
  {/if}

  {#if mounted}
    <form class="editor-form" onsubmit={handleSubmit}>
      <div class="form-grid">
        <!-- Main Content -->
        <div class="main-column">
          <!-- Basic Info -->
          <section class="form-section">
            <h2>Basic Information</h2>

            <div class="form-group">
              <label for="slug">URL Slug</label>
              <div class="slug-input">
                <span class="slug-prefix">/articulos/</span>
                <input
                  type="text"
                  id="slug"
                  value={formData.slug}
                  oninput={handleSlugChange}
                  placeholder="my-article-slug"
                />
              </div>
            </div>
          </section>

          <!-- Spanish Content -->
          <section class="form-section">
            <h2>Spanish Content (ES)</h2>

            <div class="form-group">
              <label for="titleEs">Title (ES) *</label>
              <input
                type="text"
                id="titleEs"
                value={formData.titleEs}
                oninput={handleTitleChange}
                placeholder="Enter article title in Spanish"
                required
              />
            </div>

            <div class="form-group">
              <label for="excerptEs">Excerpt (ES)</label>
              <textarea
                id="excerptEs"
                rows="2"
                bind:value={formData.excerptEs}
                placeholder="Brief description in Spanish"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="contentEs">Content (ES) - Markdown</label>
              <textarea
                id="contentEs"
                rows="12"
                bind:value={formData.contentEs}
                placeholder="Write your article content in Markdown..."
                class="content-editor"
              ></textarea>
              <span class="hint">Supports Markdown: **bold**, *italic*, ## headings, - lists</span>
            </div>
          </section>

          <!-- English Content -->
          <section class="form-section">
            <h2>English Content (EN)</h2>

            <div class="form-group">
              <label for="titleEn">Title (EN)</label>
              <input
                type="text"
                id="titleEn"
                bind:value={formData.titleEn}
                placeholder="Enter article title in English (optional)"
              />
            </div>

            <div class="form-group">
              <label for="excerptEn">Excerpt (EN)</label>
              <textarea
                id="excerptEn"
                rows="2"
                bind:value={formData.excerptEn}
                placeholder="Brief description in English (optional)"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="contentEn">Content (EN) - Markdown</label>
              <textarea
                id="contentEn"
                rows="12"
                bind:value={formData.contentEn}
                placeholder="Write your article content in English Markdown (optional)..."
                class="content-editor"
              ></textarea>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="sidebar-column">
          <!-- Publish Settings -->
          <section class="form-section">
            <h2>Publish</h2>

            <div class="form-group toggle-group">
              <label class="toggle-label">
                <input
                  type="checkbox"
                  bind:checked={formData.published}
                />
                <span class="toggle-switch"></span>
                <span class="toggle-text">Published</span>
              </label>
              <p class="hint">
                {formData.published ? 'Article is visible on the website' : 'Article is saved as draft'}
              </p>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary" disabled={saving}>
                {#if saving}
                  <span class="spinner"></span>
                  Saving...
                {:else}
                  Save Article
                {/if}
              </button>
              <button type="button" class="btn-secondary" onclick={handleCancel}>
                Cancel
              </button>
            </div>
          </section>

          <!-- Category -->
          <section class="form-section">
            <h2>Category</h2>

            <div class="form-group">
              <select bind:value={formData.category}>
                {#each categories as cat}
                  <option value={cat.value}>{cat.label}</option>
                {/each}
              </select>
            </div>
          </section>

          <!-- Featured Image -->
          <section class="form-section">
            <h2>Featured Image</h2>

            <div class="form-group">
              <input
                type="text"
                bind:value={formData.featuredImage}
                placeholder="/images/my-image.jpg"
              />
              <span class="hint">Enter the image path or URL</span>
            </div>

            {#if formData.featuredImage}
              <div class="image-preview">
                <img src={formData.featuredImage} alt="Preview" onerror={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              </div>
            {/if}
          </section>

          <!-- Tags -->
          <section class="form-section">
            <h2>Tags</h2>

            <div class="form-group">
              <input
                type="text"
                bind:value={formData.tags}
                placeholder="tag1, tag2, tag3"
              />
              <span class="hint">Separate tags with commas</span>
            </div>

            {#if formData.tags}
              <div class="tags-preview">
                {#each formData.tags.split(',').map(t => t.trim()).filter(Boolean) as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            {/if}
          </section>
        </div>
      </div>
    </form>
  {:else}
    <div class="loading">Loading...</div>
  {/if}
</div>

<style>
  .editor-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .page-header {
    margin-bottom: 0.5rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--admin-text-muted);
    text-decoration: none;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    transition: color 0.15s ease;
  }

  .back-link:hover {
    color: var(--admin-accent);
  }

  .back-link svg {
    width: 16px;
    height: 16px;
  }

  .header-content h1 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--admin-text);
  }

  .error-message {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 8px;
    color: #fca5a5;
    font-size: 0.9375rem;
  }

  .error-message svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 1.5rem;
    align-items: start;
  }

  .main-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .sidebar-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: sticky;
    top: 2rem;
  }

  .form-section {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
    padding: 1.25rem;
  }

  .form-section h2 {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--admin-border);
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-group label {
    display: block;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--admin-text);
    margin-bottom: 0.5rem;
  }

  .form-group input[type="text"],
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 0.75rem;
    background: var(--admin-bg);
    border: 1px solid var(--admin-border);
    border-radius: 6px;
    color: var(--admin-text);
    font-size: 0.9375rem;
    font-family: inherit;
    transition: border-color 0.15s ease;
  }

  .form-group input[type="text"]:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: var(--admin-accent);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 80px;
  }

  .content-editor {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .hint {
    display: block;
    font-size: 0.75rem;
    color: var(--admin-text-muted);
    margin-top: 0.375rem;
  }

  .slug-input {
    display: flex;
    align-items: center;
    background: var(--admin-bg);
    border: 1px solid var(--admin-border);
    border-radius: 6px;
    overflow: hidden;
  }

  .slug-prefix {
    padding: 0.75rem;
    background: var(--admin-surface-hover);
    color: var(--admin-text-muted);
    font-size: 0.875rem;
    border-right: 1px solid var(--admin-border);
  }

  .slug-input input {
    border: none;
    border-radius: 0;
    background: transparent;
  }

  .slug-input input:focus {
    border: none;
  }

  /* Toggle */
  .toggle-group {
    padding: 0.5rem 0;
  }

  .toggle-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }

  .toggle-label input {
    display: none;
  }

  .toggle-switch {
    width: 44px;
    height: 24px;
    background: var(--admin-border);
    border-radius: 12px;
    position: relative;
    transition: background 0.2s ease;
  }

  .toggle-switch::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: transform 0.2s ease;
  }

  .toggle-label input:checked + .toggle-switch {
    background: var(--admin-accent);
  }

  .toggle-label input:checked + .toggle-switch::after {
    transform: translateX(20px);
  }

  .toggle-text {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--admin-text);
  }

  /* Form Actions */
  .form-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--admin-border);
  }

  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: var(--admin-accent);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .btn-primary:hover:not(:disabled) {
    background: var(--admin-accent-hover);
  }

  .btn-primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .btn-secondary {
    width: 100%;
    padding: 0.75rem 1rem;
    background: transparent;
    color: var(--admin-text-muted);
    border: 1px solid var(--admin-border);
    border-radius: 6px;
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .btn-secondary:hover {
    background: var(--admin-surface-hover);
    color: var(--admin-text);
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Image Preview */
  .image-preview {
    margin-top: 0.75rem;
    border-radius: 6px;
    overflow: hidden;
    background: var(--admin-bg);
  }

  .image-preview img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Tags Preview */
  .tags-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-top: 0.75rem;
  }

  .tag {
    padding: 0.25rem 0.625rem;
    background: var(--admin-surface-hover);
    border-radius: 4px;
    font-size: 0.75rem;
    color: var(--admin-text-muted);
  }

  .loading {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--admin-text-muted);
  }

  @media (max-width: 1024px) {
    .form-grid {
      grid-template-columns: 1fr;
    }

    .sidebar-column {
      position: static;
    }
  }
</style>
