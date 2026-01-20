<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getArticles, categoryLabels } from '$lib/cms/articles';
  import { getBreadcrumbSchema, getWebPageSchema } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';
  import type { ArticleCategory } from '$lib/cms/types';

  const seo = pageSEO['blog'];
  const jsonLd = [
    getWebPageSchema({
      name: seo.title,
      description: seo.description,
      url: '/blog'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Blog', url: '/blog' }
    ])
  ];

  // State
  let activeCategory = $state<ArticleCategory | 'all'>('all');
  let visibleCount = $state(9);
  const pageSize = 9;

  // Categories for filter tabs
  const categories: (ArticleCategory | 'all')[] = ['all', 'blog', 'news', 'story', 'case-study'];

  // Filtered articles
  let filteredArticles = $derived(() => {
    const filter = activeCategory === 'all' ? undefined : { category: activeCategory as ArticleCategory };
    return getArticles(filter);
  });

  // Visible articles based on load more
  let visibleArticles = $derived(filteredArticles().slice(0, visibleCount));

  // Check if there are more articles to load
  let hasMore = $derived(visibleCount < filteredArticles().length);

  function setCategory(category: ArticleCategory | 'all') {
    activeCategory = category;
    visibleCount = pageSize; // Reset pagination when changing category
  }

  function loadMore() {
    visibleCount += pageSize;
  }
</script>

<SEO
  title={seo.title}
  description={seo.description}
  {jsonLd}
/>

<PageHero
  subtitle="Blog"
  title="+Para Ti"
  description="Noticias, articulos y casos de exito sobre logistica. Conocimiento que mueve tu negocio."
  dark={true}
/>

<section class="blog-section section">
  <div class="container">
    <!-- Category Filters -->
    <div class="category-tabs">
      {#each categories as category}
        <button
          class="category-tab"
          class:active={activeCategory === category}
          onclick={() => setCategory(category)}
        >
          {categoryLabels[category].es}
        </button>
      {/each}
    </div>

    <!-- Results count -->
    <div class="results-info">
      <span>{filteredArticles().length} articulo{filteredArticles().length !== 1 ? 's' : ''}</span>
    </div>

    <!-- Articles Grid -->
    {#if visibleArticles.length > 0}
      <div class="articles-grid">
        {#each visibleArticles as article, index (article.id)}
          <ArticleCard
            {article}
            variant={index === 0 && activeCategory === 'all' ? 'featured' : 'default'}
            showCategory={activeCategory === 'all'}
          />
        {/each}
      </div>

      <!-- Load More Button -->
      {#if hasMore}
        <div class="load-more">
          <button class="btn btn--outline" onclick={loadMore}>
            Cargar mas articulos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>
      {/if}
    {:else}
      <div class="no-results">
        <p>No hay articulos en esta categoria.</p>
      </div>
    {/if}
  </div>
</section>

<!-- Newsletter CTA -->
<section class="newsletter-cta section section--gray">
  <div class="container">
    <div class="newsletter-content">
      <h2>Mantente informado</h2>
      <p>Recibe las ultimas noticias y articulos sobre logistica directamente en tu correo.</p>
      <form class="newsletter-form" onsubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Tu correo electronico" required />
        <button type="submit" class="btn btn--primary">Suscribirse</button>
      </form>
    </div>
  </div>
</section>

<style>
  .blog-section {
    padding-top: var(--space-3xl);
    padding-bottom: var(--space-4xl);
  }

  /* Category Tabs */
  .category-tabs {
    display: flex;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--gray-200);
    flex-wrap: wrap;
    justify-content: center;
  }

  .category-tab {
    padding: var(--space-sm) var(--space-lg);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-600);
    background: transparent;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .category-tab:hover {
    border-color: var(--gray-400);
    color: var(--gray-800);
  }

  .category-tab.active {
    background: var(--clover-green);
    border-color: var(--clover-green);
    color: var(--white);
  }

  /* Results Info */
  .results-info {
    margin-bottom: var(--space-xl);
    text-align: center;
  }

  .results-info span {
    font-size: 0.875rem;
    color: var(--gray-500);
  }

  /* Articles Grid */
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-xl);
  }

  @media (min-width: 640px) {
    .articles-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .articles-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Featured article spans full width on large screens */
  @media (min-width: 1024px) {
    .articles-grid :global(article:first-child.featured) {
      grid-column: span 2;
    }
  }

  /* Load More */
  .load-more {
    margin-top: var(--space-3xl);
    text-align: center;
  }

  .load-more button {
    gap: var(--space-sm);
  }

  /* No Results */
  .no-results {
    padding: var(--space-4xl);
    text-align: center;
  }

  .no-results p {
    color: var(--gray-500);
    font-size: 1.125rem;
  }

  /* Newsletter CTA */
  .newsletter-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .newsletter-content h2 {
    margin-bottom: var(--space-md);
    font-size: 1.75rem;
  }

  .newsletter-content p {
    margin-bottom: var(--space-xl);
    color: var(--gray-600);
  }

  .newsletter-form {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  .newsletter-form input {
    flex: 1;
    min-width: 250px;
    padding: var(--space-md) var(--space-lg);
    font-size: 1rem;
    border: 1px solid var(--gray-300);
    border-radius: var(--radius-sm);
    transition: border-color var(--transition-fast);
  }

  .newsletter-form input:focus {
    outline: none;
    border-color: var(--clover-green);
  }

  .newsletter-form button {
    white-space: nowrap;
  }
</style>
