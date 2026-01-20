<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getBreadcrumbSchema, getWebPageSchema } from '$lib/seo/schemas';
  import { getAllBlogPosts, getAllBlogTags, formatBlogDate, type BlogPostExtended } from '$lib/data/posts';

  // SEO configuration
  const seoTitle = 'Para Ti | Blog de Logistica y Mudanzas | Clover Mudanzas';
  const seoDescription = 'Articulos, guias y noticias sobre logistica, mudanzas internacionales, transporte maritimo y tendencias del sector. Conocimiento que mueve tu negocio.';

  const jsonLd = [
    getWebPageSchema({
      name: seoTitle,
      description: seoDescription,
      url: '/para-ti'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Para Ti', url: '/para-ti' }
    ])
  ];

  // State
  let selectedTag = $state<string | null>(null);
  let visibleCount = $state(6);
  const pageSize = 6;

  // Get all posts and tags
  const allPosts = getAllBlogPosts();
  const allTags = getAllBlogTags();

  // Filtered posts based on selected tag
  let filteredPosts = $derived(
    selectedTag
      ? allPosts.filter(post => post.tags.includes(selectedTag))
      : allPosts
  );

  // Visible posts based on pagination
  let visiblePosts = $derived(filteredPosts.slice(0, visibleCount));

  // Check if there are more posts to load
  let hasMore = $derived(visibleCount < filteredPosts.length);

  function selectTag(tag: string | null) {
    selectedTag = tag;
    visibleCount = pageSize;
  }

  function loadMore() {
    visibleCount += pageSize;
  }

  const locale = 'es';
</script>

<SEO
  title={seoTitle}
  description={seoDescription}
  {jsonLd}
/>

<PageHero
  subtitle="Blog"
  title="+Para Ti"
  description="Noticias, articulos y guias sobre logistica, mudanzas y transporte. Conocimiento que mueve tu negocio."
  dark={true}
/>

<section class="blog-section section">
  <div class="container">
    <!-- Tag Filters -->
    <div class="tag-filters">
      <button
        class="tag-btn"
        class:active={selectedTag === null}
        onclick={() => selectTag(null)}
      >
        Todos
      </button>
      {#each allTags.slice(0, 12) as tag}
        <button
          class="tag-btn"
          class:active={selectedTag === tag}
          onclick={() => selectTag(tag)}
        >
          {tag.replace(/-/g, ' ')}
        </button>
      {/each}
    </div>

    <!-- Results count -->
    <div class="results-info">
      <span>{filteredPosts.length} articulo{filteredPosts.length !== 1 ? 's' : ''}</span>
    </div>

    <!-- Blog Grid -->
    {#if visiblePosts.length > 0}
      <div class="blog-grid">
        {#each visiblePosts as post, index (post.id)}
          <article class="blog-card" class:featured={index === 0 && !selectedTag}>
            <a href="/blog/{post.slug}" class="blog-card-link">
              <div class="blog-card-image">
                <img
                  src={post.featuredImage || '/images/blog-placeholder.jpg'}
                  alt={post.title[locale]}
                  loading="lazy"
                />
                {#if post.readTime}
                  <span class="read-time">{post.readTime} min</span>
                {/if}
              </div>
              <div class="blog-card-content">
                <div class="blog-card-meta">
                  <time datetime={post.publishedAt}>
                    {formatBlogDate(post.publishedAt, locale)}
                  </time>
                  <span class="meta-separator">|</span>
                  <span class="author">{post.author}</span>
                </div>
                <h2 class="blog-card-title">{post.title[locale]}</h2>
                <p class="blog-card-excerpt">{post.excerpt[locale]}</p>
                <div class="blog-card-tags">
                  {#each post.tags.slice(0, 3) as tag}
                    <span class="tag">{tag.replace(/-/g, ' ')}</span>
                  {/each}
                </div>
                <span class="read-more">
                  Leer articulo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </a>
          </article>
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
        <p>No hay articulos con esta etiqueta.</p>
        <button class="btn btn--primary" onclick={() => selectTag(null)}>
          Ver todos los articulos
        </button>
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
      <button class="topic-card" onclick={() => selectTag('mudanza-internacional')}>
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <h3>Mudanza Internacional</h3>
        <p>Requisitos y consejos para emigrar</p>
      </button>
      <button class="topic-card" onclick={() => selectTag('logistica')}>
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
        <h3>Logistica</h3>
        <p>Tendencias y estrategias del sector</p>
      </button>
      <button class="topic-card" onclick={() => selectTag('transporte-maritimo')}>
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 20h20"/>
            <path d="M5 17l-2 3"/>
            <path d="M19 17l2 3"/>
            <path d="M12 3v14"/>
            <path d="M5 8l7-5 7 5"/>
            <path d="M5 17h14"/>
          </svg>
        </div>
        <h3>Transporte Maritimo</h3>
        <p>Buques y comercio internacional</p>
      </button>
      <button class="topic-card" onclick={() => selectTag('tecnologia')}>
        <div class="topic-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3>Tecnologia 4.0</h3>
        <p>Automatizacion e innovacion</p>
      </button>
    </div>
  </div>
</section>

<!-- Newsletter CTA -->
<section class="newsletter-cta section">
  <div class="container">
    <div class="newsletter-content">
      <h2>Mantente Informado</h2>
      <p>Recibe las ultimas noticias y articulos sobre logistica y mudanzas directamente en tu correo.</p>
      <form class="newsletter-form" onsubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Tu correo electronico" required />
        <button type="submit" class="btn btn--primary">Suscribirse</button>
      </form>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section section">
  <div class="container">
    <div class="cta-content">
      <h2>Necesitas asesoramiento para tu mudanza?</h2>
      <p>Nuestro equipo de expertos esta listo para ayudarte con cualquier tipo de mudanza: residencial, corporativa o internacional.</p>
      <div class="cta-buttons">
        <a href="/contacto" class="btn btn--primary">Solicitar cotizacion</a>
        <a href="/mudanzas" class="btn btn--outline-dark">Ver servicios</a>
      </div>
    </div>
  </div>
</section>

<style>
  .blog-section {
    padding-top: var(--space-3xl);
    padding-bottom: var(--space-4xl);
  }

  /* Tag Filters */
  .tag-filters {
    display: flex;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--gray-200);
    flex-wrap: wrap;
    justify-content: center;
  }

  .tag-btn {
    padding: var(--space-xs) var(--space-md);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--gray-600);
    background: transparent;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
    text-transform: capitalize;
    cursor: pointer;
  }

  .tag-btn:hover {
    border-color: var(--gray-400);
    color: var(--gray-800);
  }

  .tag-btn.active {
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

  /* Blog Grid */
  .blog-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  @media (min-width: 640px) {
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .blog-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Blog Card */
  .blog-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform var(--transition-base), box-shadow var(--transition-base);
  }

  .blog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  .blog-card.featured {
    grid-column: span 1;
  }

  @media (min-width: 1024px) {
    .blog-card.featured {
      grid-column: span 2;
    }

    .blog-card.featured .blog-card-link {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .blog-card.featured .blog-card-image {
      aspect-ratio: auto;
      height: 100%;
    }

    .blog-card.featured .blog-card-title {
      font-size: 1.5rem;
    }
  }

  .blog-card-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .blog-card-image {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
    background: var(--gray-200);
  }

  .blog-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }

  .blog-card:hover .blog-card-image img {
    transform: scale(1.05);
  }

  .read-time {
    position: absolute;
    top: var(--space-sm);
    right: var(--space-sm);
    padding: var(--space-xs) var(--space-sm);
    background: rgba(0, 0, 0, 0.7);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: var(--radius-sm);
  }

  .blog-card-content {
    padding: var(--space-lg);
  }

  .blog-card-meta {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
    font-size: 0.8125rem;
    color: var(--gray-500);
  }

  .meta-separator {
    color: var(--gray-300);
  }

  .blog-card-title {
    margin-bottom: var(--space-sm);
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--gray-900);
    transition: color var(--transition-fast);
  }

  .blog-card:hover .blog-card-title {
    color: var(--clover-green);
  }

  .blog-card-excerpt {
    margin-bottom: var(--space-md);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--gray-600);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .blog-card-tags {
    display: flex;
    gap: var(--space-xs);
    flex-wrap: wrap;
    margin-bottom: var(--space-md);
  }

  .tag {
    padding: var(--space-xs) var(--space-sm);
    background: var(--gray-100);
    color: var(--gray-600);
    font-size: 0.75rem;
    border-radius: var(--radius-sm);
    text-transform: capitalize;
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clover-green);
    transition: gap var(--transition-fast);
  }

  .blog-card:hover .read-more {
    gap: var(--space-sm);
  }

  /* Load More */
  .load-more {
    margin-top: var(--space-3xl);
    text-align: center;
  }

  .load-more button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
  }

  /* No Results */
  .no-results {
    padding: var(--space-4xl);
    text-align: center;
  }

  .no-results p {
    margin-bottom: var(--space-lg);
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
    cursor: pointer;
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

  /* CTA Section */
  .cta-section {
    background: var(--gray-100);
  }

  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-content h2 {
    margin-bottom: var(--space-md);
    font-size: 1.75rem;
    color: var(--gray-900);
  }

  .cta-content p {
    margin-bottom: var(--space-xl);
    color: var(--gray-600);
  }

  .cta-buttons {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
