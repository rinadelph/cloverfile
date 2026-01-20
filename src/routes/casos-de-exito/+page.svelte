<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getCaseStudies } from '$lib/cms/articles';
  import { getBreadcrumbSchema, getWebPageSchema } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO['casos-de-exito'];
  const jsonLd = [
    getWebPageSchema({
      name: seo.title,
      description: seo.description,
      url: '/casos-de-exito'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Casos de Éxito', url: '/casos-de-exito' }
    ])
  ];

  // Get all case studies
  const caseStudies = getCaseStudies();

  // Get unique industries for filtering
  const industries = [...new Set(caseStudies.map(cs => cs.industry).filter(Boolean))] as string[];

  // State
  let activeIndustry = $state<string | 'all'>('all');
  let visibleCount = $state(6);
  const pageSize = 6;

  // Filtered case studies
  let filteredCaseStudies = $derived(() => {
    if (activeIndustry === 'all') return caseStudies;
    return caseStudies.filter(cs => cs.industry === activeIndustry);
  });

  // Visible case studies
  let visibleCaseStudies = $derived(filteredCaseStudies().slice(0, visibleCount));

  // Check if more to load
  let hasMore = $derived(visibleCount < filteredCaseStudies().length);

  function setIndustry(industry: string | 'all') {
    activeIndustry = industry;
    visibleCount = pageSize;
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
  subtitle="Casos de Exito"
  title="Historias de <span class='text-green'>Transformacion</span>"
  description="Descubre como hemos ayudado a empresas de diversos sectores a optimizar su logistica y alcanzar resultados extraordinarios."
  dark={true}
/>

<!-- Stats Section -->
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">+100</span>
        <span class="stat-label">Proyectos completados</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">35%</span>
        <span class="stat-label">Reduccion de costos promedio</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">98%</span>
        <span class="stat-label">Satisfaccion de clientes</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">+15</span>
        <span class="stat-label">Industrias atendidas</span>
      </div>
    </div>
  </div>
</section>

<!-- Case Studies Listing -->
<section class="case-studies-section section">
  <div class="container">
    <!-- Industry Filter -->
    <div class="filter-section">
      <h2>Explora por industria</h2>
      <div class="industry-tabs">
        <button
          class="industry-tab"
          class:active={activeIndustry === 'all'}
          onclick={() => setIndustry('all')}
        >
          Todas
        </button>
        {#each industries as industry}
          <button
            class="industry-tab"
            class:active={activeIndustry === industry}
            onclick={() => setIndustry(industry)}
          >
            {industry}
          </button>
        {/each}
      </div>
    </div>

    <!-- Results count -->
    <div class="results-info">
      <span>{filteredCaseStudies().length} caso{filteredCaseStudies().length !== 1 ? 's' : ''} de exito</span>
    </div>

    <!-- Case Studies Grid -->
    {#if visibleCaseStudies.length > 0}
      <div class="case-studies-grid">
        {#each visibleCaseStudies as caseStudy (caseStudy.id)}
          <ArticleCard
            article={caseStudy}
            variant="case-study"
            showCategory={false}
          />
        {/each}
      </div>

      <!-- Load More -->
      {#if hasMore}
        <div class="load-more">
          <button class="btn btn--outline" onclick={loadMore}>
            Ver mas casos de exito
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>
      {/if}
    {:else}
      <div class="no-results">
        <p>No hay casos de exito en esta industria.</p>
      </div>
    {/if}
  </div>
</section>

<!-- Testimonial Section -->
<section class="testimonial-section section section--gray">
  <div class="container">
    <div class="testimonial-content">
      <svg class="quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <blockquote>
        "Clover ha sido fundamental para el crecimiento de nuestro negocio. Su experiencia en logistica nos permitio expandirnos a nuevos mercados con confianza."
      </blockquote>
      <div class="testimonial-author">
        <span class="author-name">Director de Operaciones</span>
        <span class="author-company">Empresa de Retail Nacional</span>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section section section--dark">
  <div class="container">
    <div class="cta-content">
      <h2>¿Listo para escribir tu historia de exito?</h2>
      <p>Conversemos sobre como podemos ayudarte a optimizar tu logistica y alcanzar tus objetivos.</p>
      <div class="cta-buttons">
        <a href="/contacto" class="btn btn--primary">Solicitar consultoria</a>
        <a href="/logistica-integral-venezuela" class="btn btn--white">Conocer nuestros servicios</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Stats Section */
  .stats-section {
    padding: var(--space-3xl) 0;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
    text-align: center;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .stat-number {
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-weight: 700;
    color: var(--clover-green);
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--gray-600);
  }

  /* Case Studies Section */
  .case-studies-section {
    padding-top: var(--space-3xl);
    padding-bottom: var(--space-4xl);
  }

  /* Filter Section */
  .filter-section {
    text-align: center;
    margin-bottom: var(--space-2xl);
  }

  .filter-section h2 {
    margin-bottom: var(--space-lg);
    font-size: 1.25rem;
    color: var(--gray-700);
  }

  .industry-tabs {
    display: flex;
    gap: var(--space-sm);
    justify-content: center;
    flex-wrap: wrap;
  }

  .industry-tab {
    padding: var(--space-sm) var(--space-lg);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-600);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .industry-tab:hover {
    border-color: var(--gray-400);
    color: var(--gray-800);
  }

  .industry-tab.active {
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

  /* Case Studies Grid */
  .case-studies-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-xl);
  }

  @media (min-width: 768px) {
    .case-studies-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .case-studies-grid {
      grid-template-columns: repeat(3, 1fr);
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

  /* Testimonial Section */
  .testimonial-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .quote-icon {
    margin-bottom: var(--space-lg);
    color: var(--clover-green);
  }

  .testimonial-content blockquote {
    margin-bottom: var(--space-xl);
    font-size: 1.5rem;
    font-weight: 500;
    font-style: italic;
    line-height: 1.6;
    color: var(--gray-800);
  }

  .testimonial-author {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .testimonial-author .author-name {
    font-weight: 600;
    color: var(--gray-900);
  }

  .testimonial-author .author-company {
    font-size: 0.875rem;
    color: var(--gray-500);
  }

  /* CTA Section */
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-content h2 {
    margin-bottom: var(--space-md);
    font-size: 2rem;
    color: var(--white);
  }

  .cta-content p {
    margin-bottom: var(--space-xl);
    font-size: 1.125rem;
    color: var(--gray-400);
  }

  .cta-buttons {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
