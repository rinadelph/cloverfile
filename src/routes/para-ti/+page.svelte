<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getArticles, categoryLabels } from '$lib/cms/articles';
  import { getBreadcrumbSchema, getWebPageSchema } from '$lib/seo/schemas';
  import type { ArticleCategory } from '$lib/cms/types';

  const seo = {
    title: 'Para Ti | Blog CloverFile Venezuela - Gestion Documental y Tecnologia',
    description: 'Articulos, noticias y consejos sobre gestion documental, digitalizacion, seguridad en la nube y soluciones tecnologicas para empresas venezolanas.'
  };

  const jsonLd = [
    getWebPageSchema({
      name: seo.title,
      description: seo.description,
      url: '/para-ti'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Para Ti', url: '/para-ti' }
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
  title="Para Ti"
  description="Noticias, articulos y recursos sobre gestion documental, digitalizacion y tecnologia empresarial en Venezuela."
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

<!-- Featured Topics Section -->
<section class="topics-section section section--gray">
  <div class="container">
    <div class="topics-header">
      <h2>Temas Destacados</h2>
      <p>Explora nuestros articulos por tema de interes</p>
    </div>
    <div class="topics-grid">
      <a href="/para-ti?tag=digitalizacion" class="topic-card">
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h3>Digitalizacion</h3>
        <p>Transformacion digital de documentos</p>
      </a>
      <a href="/para-ti?tag=seguridad" class="topic-card">
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3>Seguridad</h3>
        <p>Proteccion de datos y ciberseguridad</p>
      </a>
      <a href="/para-ti?tag=nube" class="topic-card">
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          </svg>
        </div>
        <h3>Cloud</h3>
        <p>Soluciones de almacenamiento en la nube</p>
      </a>
      <a href="/para-ti?tag=logistica" class="topic-card">
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
        <h3>Logistica</h3>
        <p>Gestion y optimizacion de procesos</p>
      </a>
    </div>
  </div>
</section>

<!-- Newsletter CTA -->
<section class="newsletter-cta section">
  <div class="container">
    <div class="newsletter-content">
      <h2>Mantente Informado</h2>
      <p>Recibe las ultimas noticias y articulos sobre gestion documental directamente en tu correo.</p>
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
    cursor: pointer;
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

  /* Topics Section */
  .topics-section {
    padding: var(--space-4xl) 0;
  }

  .topics-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }

  .topics-header h2 {
    margin-bottom: var(--space-sm);
    font-size: 1.75rem;
  }

  .topics-header p {
    color: var(--gray-600);
  }

  .topics-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }

  @media (min-width: 768px) {
    .topics-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .topic-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-xl);
    background: var(--white);
    border-radius: var(--radius-lg);
    text-align: center;
    text-decoration: none;
    transition: all var(--transition-base);
    border: 1px solid var(--gray-200);
  }

  .topic-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--clover-green);
  }

  .topic-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin-bottom: var(--space-md);
    background: var(--clover-green-light, #e8f5e9);
    border-radius: var(--radius-full);
    color: var(--clover-green);
  }

  .topic-card h3 {
    margin-bottom: var(--space-xs);
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .topic-card p {
    font-size: 0.8125rem;
    color: var(--gray-500);
    margin: 0;
  }

  /* Newsletter CTA */
  .newsletter-cta {
    background: var(--black);
    color: var(--white);
  }

  .newsletter-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .newsletter-content h2 {
    margin-bottom: var(--space-md);
    font-size: 1.75rem;
    color: var(--white);
  }

  .newsletter-content p {
    margin-bottom: var(--space-xl);
    color: var(--gray-400);
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
    border: 1px solid var(--gray-600);
    border-radius: var(--radius-sm);
    background: var(--gray-900);
    color: var(--white);
    transition: border-color var(--transition-fast);
  }

  .newsletter-form input::placeholder {
    color: var(--gray-500);
  }

  .newsletter-form input:focus {
    outline: none;
    border-color: var(--clover-green);
  }

  .newsletter-form button {
    white-space: nowrap;
  }
</style>
