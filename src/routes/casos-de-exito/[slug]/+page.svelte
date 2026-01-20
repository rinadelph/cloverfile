<script lang="ts">
  import { page } from '$app/stores';
  import { getCaseStudyBySlug, getRelatedArticles, formatDate, getCaseStudies } from '$lib/cms/articles';
  import ArticleContent from '$lib/components/ArticleContent.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import RelatedArticles from '$lib/components/RelatedArticles.svelte';
  import type { CaseStudy } from '$lib/cms/types';

  let slug = $derived($page.params.slug);
  let caseStudy = $derived(getCaseStudyBySlug(slug));

  // Get related case studies (only other case studies)
  let relatedCaseStudies = $derived(() => {
    if (!caseStudy) return [];
    const allCaseStudies = getCaseStudies();
    return allCaseStudies
      .filter(cs => cs.id !== caseStudy.id)
      .slice(0, 3);
  });

  const locale = 'es';
</script>

<svelte:head>
  {#if caseStudy}
    <title>{caseStudy.title[locale]} | Casos de Exito | Clover Venezuela</title>
    <meta name="description" content={caseStudy.excerpt[locale]} />
    <meta property="og:title" content={caseStudy.title[locale]} />
    <meta property="og:description" content={caseStudy.excerpt[locale]} />
    <meta property="og:image" content={caseStudy.featuredImage} />
    <meta property="og:type" content="article" />
  {:else}
    <title>Caso de Exito no encontrado | Clover Venezuela</title>
  {/if}
</svelte:head>

{#if caseStudy}
  <!-- Hero Section -->
  <section class="case-hero">
    <div class="hero-bg" style="background-image: url({caseStudy.featuredImage})"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <a href="/casos-de-exito" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Volver a casos de exito
      </a>

      <div class="case-meta">
        {#if caseStudy.industry}
          <span class="industry-badge">{caseStudy.industry}</span>
        {/if}
        {#if caseStudy.client}
          <span class="client-name">{caseStudy.client}</span>
        {/if}
      </div>

      <h1>{caseStudy.title[locale]}</h1>
      <p class="case-excerpt">{caseStudy.excerpt[locale]}</p>

      {#if caseStudy.results}
        <div class="hero-results">
          <span class="results-label">Resultados destacados:</span>
          <span class="results-value">{caseStudy.results[locale]}</span>
        </div>
      {/if}
    </div>
  </section>

  <!-- Quick Facts -->
  <section class="quick-facts">
    <div class="container">
      <div class="facts-grid">
        {#if caseStudy.client}
          <div class="fact-item">
            <span class="fact-label">Cliente</span>
            <span class="fact-value">{caseStudy.client}</span>
          </div>
        {/if}
        {#if caseStudy.industry}
          <div class="fact-item">
            <span class="fact-label">Industria</span>
            <span class="fact-value">{caseStudy.industry}</span>
          </div>
        {/if}
        {#if caseStudy.duration}
          <div class="fact-item">
            <span class="fact-label">Duracion</span>
            <span class="fact-value">{caseStudy.duration}</span>
          </div>
        {/if}
        {#if caseStudy.services && caseStudy.services.length > 0}
          <div class="fact-item">
            <span class="fact-label">Servicios</span>
            <span class="fact-value">{caseStudy.services.join(', ')}</span>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <article class="case-main section">
    <div class="container">
      <div class="case-layout">
        <!-- Content -->
        <div class="case-body">
          <ArticleContent content={caseStudy.content[locale]} />
        </div>

        <!-- Sidebar -->
        <aside class="case-sidebar">
          <!-- Share -->
          <div class="sidebar-section">
            <h4>Compartir</h4>
            <ShareButtons
              title={caseStudy.title[locale]}
              description={caseStudy.excerpt[locale]}
            />
          </div>

          <!-- Services Used -->
          {#if caseStudy.services && caseStudy.services.length > 0}
            <div class="sidebar-section">
              <h4>Servicios utilizados</h4>
              <ul class="services-list">
                {#each caseStudy.services as service}
                  <li>{service}</li>
                {/each}
              </ul>
            </div>
          {/if}

          <!-- Tags -->
          {#if caseStudy.tags.length > 0}
            <div class="sidebar-section">
              <h4>Etiquetas</h4>
              <div class="tags-list">
                {#each caseStudy.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            </div>
          {/if}

          <!-- Publication Date -->
          <div class="sidebar-section">
            <h4>Publicado</h4>
            <time datetime={caseStudy.publishedAt}>{formatDate(caseStudy.publishedAt, locale)}</time>
          </div>
        </aside>
      </div>
    </div>
  </article>

  <!-- Gallery Section -->
  {#if caseStudy.images && caseStudy.images.length > 1}
    <section class="gallery-section section section--gray">
      <div class="container">
        <h2>Galeria del proyecto</h2>
        <div class="gallery-grid">
          {#each caseStudy.images as image, index}
            <div class="gallery-item" class:large={index === 0}>
              <img src={image} alt="Imagen del proyecto {index + 1}" loading="lazy" />
            </div>
          {/each}
        </div>
      </div>
    </section>
  {/if}

  <!-- Testimonial Section -->
  <section class="testimonial-section section">
    <div class="container">
      <div class="testimonial-content">
        <svg class="quote-icon" width="64" height="64" viewBox="0 0 24 24" fill="none">
          <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <blockquote>
          "La experiencia de trabajar con Clover ha sido excepcional. Su equipo entendio nuestras necesidades y nos proporciono soluciones que superaron nuestras expectativas."
        </blockquote>
        <div class="testimonial-author">
          <span class="author-name">Director de Operaciones</span>
          {#if caseStudy.client}
            <span class="author-company">{caseStudy.client}</span>
          {/if}
        </div>
      </div>
    </div>
  </section>

  <!-- Related Case Studies -->
  {#if relatedCaseStudies().length > 0}
    <RelatedArticles
      articles={relatedCaseStudies()}
      title="Mas Casos de Exito"
      {locale}
      variant="case-study"
    />
  {/if}

  <!-- CTA Section -->
  <section class="cta-section section section--dark">
    <div class="container">
      <div class="cta-content">
        <h2>¿Quieres resultados similares?</h2>
        <p>Contactanos y descubre como podemos ayudarte a transformar tu logistica.</p>
        <div class="cta-buttons">
          <a href="/contacto" class="btn btn--primary">Solicitar consultoria gratuita</a>
          <a href="/casos-de-exito" class="btn btn--white">Ver mas casos de exito</a>
        </div>
      </div>
    </div>
  </section>

{:else}
  <!-- Not Found -->
  <section class="not-found section">
    <div class="container">
      <div class="not-found-content">
        <h1>Caso de exito no encontrado</h1>
        <p>El caso de exito que buscas no existe o ha sido eliminado.</p>
        <a href="/casos-de-exito" class="btn btn--primary">Ver todos los casos de exito</a>
      </div>
    </div>
  </section>
{/if}

<style>
  /* Hero Section */
  .case-hero {
    position: relative;
    padding: calc(72px + var(--space-4xl)) 0 var(--space-4xl);
    min-height: 550px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.7) 40%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 900px;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
    padding: var(--space-sm) var(--space-md);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--white);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-full);
    transition: background var(--transition-fast);
  }

  .back-link:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .case-meta {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
    flex-wrap: wrap;
  }

  .industry-badge {
    padding: var(--space-xs) var(--space-md);
    background: var(--clover-green);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-full);
  }

  .client-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-300);
  }

  .hero-content h1 {
    margin-bottom: var(--space-lg);
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.2;
  }

  .case-excerpt {
    margin-bottom: var(--space-xl);
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--gray-300);
  }

  .hero-results {
    display: inline-flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md) var(--space-lg);
    background: rgba(0, 166, 81, 0.15);
    border: 1px solid var(--clover-green);
    border-radius: var(--radius-md);
  }

  .results-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gray-400);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .results-value {
    font-size: 1rem;
    font-weight: 600;
    color: var(--clover-green);
  }

  /* Quick Facts */
  .quick-facts {
    padding: var(--space-2xl) 0;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
  }

  .facts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
  }

  @media (min-width: 768px) {
    .facts-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .fact-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .fact-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .fact-value {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--gray-800);
  }

  /* Main Content Layout */
  .case-main {
    padding-top: var(--space-3xl);
    padding-bottom: var(--space-4xl);
  }

  .case-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  @media (min-width: 1024px) {
    .case-layout {
      grid-template-columns: 1fr 320px;
    }
  }

  .case-body {
    max-width: 800px;
  }

  /* Sidebar */
  .case-sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  @media (min-width: 1024px) {
    .case-sidebar {
      position: sticky;
      top: calc(72px + var(--space-xl));
      height: fit-content;
    }
  }

  .sidebar-section {
    padding: var(--space-lg);
    background: var(--gray-50);
    border-radius: var(--radius-md);
  }

  .sidebar-section h4 {
    margin-bottom: var(--space-md);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--gray-700);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .services-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .services-list li {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.9375rem;
    color: var(--gray-700);
  }

  .services-list li::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background: var(--clover-green);
    border-radius: var(--radius-full);
  }

  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  .tag {
    padding: var(--space-xs) var(--space-sm);
    background: var(--white);
    color: var(--gray-600);
    font-size: 0.8125rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--gray-200);
  }

  .sidebar-section time {
    font-size: 0.9375rem;
    color: var(--gray-700);
  }

  /* Gallery Section */
  .gallery-section h2 {
    margin-bottom: var(--space-2xl);
    font-size: 1.75rem;
    text-align: center;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }

  @media (min-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .gallery-item {
    border-radius: var(--radius-md);
    overflow: hidden;
    aspect-ratio: 4 / 3;
  }

  .gallery-item.large {
    grid-column: span 2;
    aspect-ratio: 16 / 9;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  .gallery-item:hover img {
    transform: scale(1.05);
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

  /* Not Found */
  .not-found {
    min-height: 60vh;
    display: flex;
    align-items: center;
    padding-top: 72px;
  }

  .not-found-content {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  .not-found-content h1 {
    margin-bottom: var(--space-md);
    font-size: 2rem;
  }

  .not-found-content p {
    margin-bottom: var(--space-xl);
    color: var(--gray-600);
  }
</style>
