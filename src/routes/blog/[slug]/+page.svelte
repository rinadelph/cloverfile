<script lang="ts">
  import { page } from '$app/stores';
  import { getArticleBySlug, getRelatedArticles, formatDate } from '$lib/cms/articles';
  import ArticleContent from '$lib/components/ArticleContent.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import RelatedArticles from '$lib/components/RelatedArticles.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getArticleSchema, getBreadcrumbSchema } from '$lib/seo/schemas';
  import type { Article, BlogPost } from '$lib/cms/types';
  import { isBlogPost } from '$lib/cms/types';

  let slug = $derived($page.params.slug);
  let article = $derived(getArticleBySlug(slug));
  let relatedArticles = $derived(article ? getRelatedArticles(article, 3) : []);

  // Type guard for blog post specific fields
  let blogPost = $derived(article && isBlogPost(article) ? article as BlogPost : null);

  // Get locale (default to Spanish)
  const locale = 'es';

  // Generate JSON-LD for article
  let jsonLd = $derived(article ? [
    getArticleSchema({
      headline: article.title[locale],
      description: article.excerpt[locale],
      url: `/blog/${slug}`,
      image: article.featuredImage,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      author: article.author,
      section: article.category
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: article.title[locale], url: `/blog/${slug}` }
    ])
  ] : []);
</script>

{#if article}
  <SEO
    title="{article.title[locale]} | Clover Venezuela"
    description={article.excerpt[locale]}
    image={article.featuredImage}
    type="article"
    article={{
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      author: article.author,
      section: article.category,
      tags: article.tags
    }}
    {jsonLd}
  />
{:else}
  <SEO
    title="Artículo no encontrado | Clover Venezuela"
    description="El artículo que buscas no existe o ha sido eliminado."
    noindex={true}
  />
{/if}

{#if article}
  <!-- Hero Section with Featured Image -->
  <section class="article-hero">
    <div class="hero-bg" style="background-image: url({article.featuredImage})"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <a href="/blog" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Volver al blog
      </a>
      <div class="article-meta-top">
        <span class="article-category">{article.category === 'blog' ? 'Blog' : article.category === 'news' ? 'Noticias' : 'Historia'}</span>
        {#if blogPost?.readTime}
          <span class="read-time">{blogPost.readTime} min de lectura</span>
        {/if}
      </div>
      <h1>{article.title[locale]}</h1>
      <p class="article-excerpt">{article.excerpt[locale]}</p>
    </div>
  </section>

  <!-- Article Content -->
  <article class="article-main section">
    <div class="container">
      <div class="article-layout">
        <!-- Sidebar with author and share -->
        <aside class="article-sidebar">
          <div class="author-card">
            <div class="author-avatar">
              <span>{article.author.charAt(0)}</span>
            </div>
            <div class="author-info">
              <span class="author-label">Escrito por</span>
              <span class="author-name">{article.author}</span>
            </div>
          </div>

          <div class="article-date">
            <span class="date-label">Publicado</span>
            <time datetime={article.publishedAt}>{formatDate(article.publishedAt, locale)}</time>
          </div>

          <div class="sidebar-share">
            <ShareButtons
              title={article.title[locale]}
              description={article.excerpt[locale]}
            />
          </div>

          {#if article.tags.length > 0}
            <div class="article-tags">
              <span class="tags-label">Etiquetas</span>
              <div class="tags-list">
                {#each article.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            </div>
          {/if}
        </aside>

        <!-- Main Content -->
        <div class="article-body">
          <ArticleContent content={article.content[locale]} />
        </div>
      </div>

      <!-- Bottom Share Buttons (mobile) -->
      <div class="mobile-share">
        <ShareButtons
          title={article.title[locale]}
          description={article.excerpt[locale]}
        />
      </div>
    </div>
  </article>

  <!-- Related Articles -->
  <RelatedArticles
    articles={relatedArticles}
    title="Articulos Relacionados"
    {locale}
  />

  <!-- CTA Section -->
  <section class="cta-section section">
    <div class="container">
      <div class="cta-content">
        <h2>¿Necesitas soluciones logisticas?</h2>
        <p>Contactanos y descubre como podemos ayudarte a optimizar tu cadena de suministro.</p>
        <a href="/contacto" class="btn btn--primary">Contactar ahora</a>
      </div>
    </div>
  </section>

{:else}
  <!-- Article Not Found -->
  <section class="not-found section">
    <div class="container">
      <div class="not-found-content">
        <h1>Articulo no encontrado</h1>
        <p>El articulo que buscas no existe o ha sido eliminado.</p>
        <a href="/blog" class="btn btn--primary">Volver al blog</a>
      </div>
    </div>
  </section>
{/if}

<style>
  /* Hero Section */
  .article-hero {
    position: relative;
    padding: calc(72px + var(--space-4xl)) 0 var(--space-4xl);
    min-height: 500px;
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
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 800px;
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

  .article-meta-top {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .article-category {
    padding: var(--space-xs) var(--space-md);
    background: var(--clover-green);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-full);
  }

  .read-time {
    font-size: 0.875rem;
    color: var(--gray-300);
  }

  .hero-content h1 {
    margin-bottom: var(--space-lg);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.2;
  }

  .article-excerpt {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--gray-300);
  }

  /* Article Layout */
  .article-main {
    padding-top: var(--space-3xl);
    padding-bottom: var(--space-4xl);
  }

  .article-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  @media (min-width: 1024px) {
    .article-layout {
      grid-template-columns: 280px 1fr;
    }
  }

  /* Sidebar */
  .article-sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  @media (min-width: 1024px) {
    .article-sidebar {
      position: sticky;
      top: calc(72px + var(--space-xl));
      height: fit-content;
    }
  }

  .author-card {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .author-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--clover-green);
    color: var(--white);
    font-weight: 600;
    font-size: 1.125rem;
    border-radius: var(--radius-full);
  }

  .author-info {
    display: flex;
    flex-direction: column;
  }

  .author-label {
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .author-name {
    font-weight: 600;
    color: var(--gray-900);
  }

  .article-date {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .date-label {
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .article-date time {
    font-weight: 500;
    color: var(--gray-700);
  }

  .sidebar-share {
    display: none;
  }

  @media (min-width: 1024px) {
    .sidebar-share {
      display: block;
    }
  }

  .article-tags {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .tags-label {
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  .tag {
    padding: var(--space-xs) var(--space-sm);
    background: var(--gray-100);
    color: var(--gray-600);
    font-size: 0.8125rem;
    border-radius: var(--radius-sm);
  }

  /* Article Body */
  .article-body {
    max-width: 720px;
  }

  /* Mobile Share */
  .mobile-share {
    margin-top: var(--space-3xl);
    padding-top: var(--space-xl);
    border-top: 1px solid var(--gray-200);
  }

  @media (min-width: 1024px) {
    .mobile-share {
      display: none;
    }
  }

  /* CTA Section */
  .cta-section {
    background: var(--black);
    color: var(--white);
  }

  .cta-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-content h2 {
    margin-bottom: var(--space-md);
    font-size: 1.75rem;
    color: var(--white);
  }

  .cta-content p {
    margin-bottom: var(--space-xl);
    color: var(--gray-400);
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
