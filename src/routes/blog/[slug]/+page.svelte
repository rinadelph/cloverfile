<script lang="ts">
  import { page } from '$app/stores';
  import { getBlogPostBySlug, getRelatedBlogPosts, formatBlogDate, type BlogPostExtended } from '$lib/data/posts';
  import ArticleContent from '$lib/components/ArticleContent.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getArticleSchema, getBreadcrumbSchema } from '$lib/seo/schemas';

  let slug = $derived($page.params.slug);
  let post = $derived(getBlogPostBySlug(slug));
  let relatedPosts = $derived(post ? getRelatedBlogPosts(slug, 3) : []);

  const locale = 'es';

  // Generate JSON-LD for article
  let jsonLd = $derived(post ? [
    getArticleSchema({
      headline: post.title[locale],
      description: post.excerpt[locale],
      url: `/blog/${slug}`,
      image: post.featuredImage,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: post.author,
      section: post.category
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Para Ti', url: '/para-ti' },
      { name: post.title[locale], url: `/blog/${slug}` }
    ])
  ] : []);
</script>

{#if post}
  <SEO
    title="{post.metaTitle?.[locale] || post.title[locale]} | Clover Mudanzas"
    description={post.metaDescription?.[locale] || post.excerpt[locale]}
    image={post.featuredImage}
    type="article"
    article={{
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      author: post.author,
      section: post.category,
      tags: post.tags
    }}
    {jsonLd}
  />
{:else}
  <SEO
    title="Articulo no encontrado | Clover Mudanzas"
    description="El articulo que buscas no existe o ha sido eliminado."
    noindex={true}
  />
{/if}

{#if post}
  <!-- Hero Section with Featured Image -->
  <section class="article-hero">
    <div class="hero-bg" style="background-image: url({post.featuredImage})"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <a href="/para-ti" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Volver al blog
      </a>
      <div class="article-meta-top">
        <span class="article-category">Blog</span>
        {#if post.readTime}
          <span class="read-time">{post.readTime} min de lectura</span>
        {/if}
      </div>
      <h1>{post.title[locale]}</h1>
      <p class="article-excerpt">{post.excerpt[locale]}</p>
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
              <span>{post.author.charAt(0)}</span>
            </div>
            <div class="author-info">
              <span class="author-label">Escrito por</span>
              <span class="author-name">{post.author}</span>
            </div>
          </div>

          <div class="article-date">
            <span class="date-label">Publicado</span>
            <time datetime={post.publishedAt}>{formatBlogDate(post.publishedAt, locale)}</time>
          </div>

          <div class="sidebar-share">
            <ShareButtons
              title={post.title[locale]}
              description={post.excerpt[locale]}
            />
          </div>

          {#if post.tags.length > 0}
            <div class="article-tags">
              <span class="tags-label">Etiquetas</span>
              <div class="tags-list">
                {#each post.tags as tag}
                  <a href="/para-ti?tag={tag}" class="tag">{tag.replace(/-/g, ' ')}</a>
                {/each}
              </div>
            </div>
          {/if}
        </aside>

        <!-- Main Content -->
        <div class="article-body">
          <ArticleContent content={post.content[locale]} />
        </div>
      </div>

      <!-- Bottom Share Buttons (mobile) -->
      <div class="mobile-share">
        <ShareButtons
          title={post.title[locale]}
          description={post.excerpt[locale]}
        />
      </div>
    </div>
  </article>

  <!-- Related Articles -->
  {#if relatedPosts.length > 0}
    <section class="related-section section section--gray">
      <div class="container">
        <h2 class="related-title">Articulos Relacionados</h2>
        <div class="related-grid">
          {#each relatedPosts as relatedPost (relatedPost.id)}
            <article class="related-card">
              <a href="/blog/{relatedPost.slug}" class="related-link">
                <div class="related-image">
                  <img
                    src={relatedPost.featuredImage || '/images/blog-placeholder.jpg'}
                    alt={relatedPost.title[locale]}
                    loading="lazy"
                  />
                </div>
                <div class="related-content">
                  <time datetime={relatedPost.publishedAt}>
                    {formatBlogDate(relatedPost.publishedAt, locale)}
                  </time>
                  <h3>{relatedPost.title[locale]}</h3>
                  <p>{relatedPost.excerpt[locale]}</p>
                </div>
              </a>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/if}

  <!-- CTA Section -->
  <section class="cta-section section">
    <div class="container">
      <div class="cta-content">
        <h2>Necesitas soluciones logisticas?</h2>
        <p>Contactanos y descubre como podemos ayudarte con mudanzas, transporte y almacenamiento.</p>
        <div class="cta-buttons">
          <a href="/contacto" class="btn btn--primary">Contactar ahora</a>
          <a href="/mudanzas" class="btn btn--outline">Ver servicios</a>
        </div>
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
        <a href="/para-ti" class="btn btn--primary">Volver al blog</a>
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
    background-color: var(--gray-800);
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
    text-transform: capitalize;
    text-decoration: none;
    transition: all var(--transition-fast);
  }

  .tag:hover {
    background: var(--clover-green);
    color: var(--white);
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

  /* Related Section */
  .related-section {
    padding: var(--space-4xl) 0;
  }

  .related-title {
    margin-bottom: var(--space-2xl);
    font-size: 1.5rem;
    text-align: center;
  }

  .related-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  @media (min-width: 640px) {
    .related-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .related-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .related-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform var(--transition-base), box-shadow var(--transition-base);
  }

  .related-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  .related-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .related-image {
    aspect-ratio: 16/10;
    overflow: hidden;
    background: var(--gray-200);
  }

  .related-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }

  .related-card:hover .related-image img {
    transform: scale(1.05);
  }

  .related-content {
    padding: var(--space-lg);
  }

  .related-content time {
    display: block;
    margin-bottom: var(--space-sm);
    font-size: 0.8125rem;
    color: var(--gray-500);
  }

  .related-content h3 {
    margin-bottom: var(--space-sm);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--gray-900);
    transition: color var(--transition-fast);
  }

  .related-card:hover .related-content h3 {
    color: var(--clover-green);
  }

  .related-content p {
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--gray-600);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
