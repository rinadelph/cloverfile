<script lang="ts">
  import type { Article, CaseStudy } from '$lib/cms/types';
  import { formatDate, categoryLabels } from '$lib/cms/articles';
  import { isCaseStudy } from '$lib/cms/types';

  interface Props {
    article: Article;
    variant?: 'default' | 'featured' | 'case-study';
    showCategory?: boolean;
    locale?: 'es' | 'en';
  }

  let {
    article,
    variant = 'default',
    showCategory = true,
    locale = 'es'
  }: Props = $props();

  let href = $derived(article.category === 'case-study'
    ? `/casos-de-exito/${article.slug}`
    : `/blog/${article.slug}`);

  let caseStudy = $derived(isCaseStudy(article) ? article as CaseStudy : null);
</script>

<article class="article-card" class:featured={variant === 'featured'} class:case-study={variant === 'case-study'}>
  <a {href} class="card-link">
    <div class="card-image">
      <img src={article.featuredImage} alt={article.title[locale]} loading="lazy" />
      {#if showCategory}
        <span class="card-category">{categoryLabels[article.category][locale]}</span>
      {/if}
    </div>

    <div class="card-content">
      {#if variant === 'case-study' && caseStudy}
        <div class="case-study-meta">
          {#if caseStudy.client}
            <span class="client-name">{caseStudy.client}</span>
          {/if}
          {#if caseStudy.industry}
            <span class="industry-tag">{caseStudy.industry}</span>
          {/if}
        </div>
      {/if}

      <h3 class="card-title">{article.title[locale]}</h3>
      <p class="card-excerpt">{article.excerpt[locale]}</p>

      {#if variant === 'case-study' && caseStudy?.results}
        <div class="case-study-results">
          <span class="results-label">Resultados:</span>
          <span class="results-value">{caseStudy.results[locale]}</span>
        </div>
      {/if}

      <div class="card-footer">
        <time datetime={article.publishedAt}>{formatDate(article.publishedAt, locale)}</time>
        {#if variant === 'case-study' && caseStudy?.services}
          <div class="services-tags">
            {#each caseStudy.services.slice(0, 2) as service}
              <span class="service-tag">{service}</span>
            {/each}
          </div>
        {:else}
          <span class="read-more">Leer mas</span>
        {/if}
      </div>
    </div>
  </a>
</article>

<style>
  .article-card {
    background: var(--white);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
  }

  .article-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .card-link {
    display: block;
    height: 100%;
  }

  .card-image {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  .article-card:hover .card-image img {
    transform: scale(1.05);
  }

  .card-category {
    position: absolute;
    top: var(--space-md);
    left: var(--space-md);
    padding: var(--space-xs) var(--space-sm);
    background: var(--clover-green);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-sm);
  }

  .card-content {
    padding: var(--space-lg);
  }

  .card-title {
    margin-bottom: var(--space-sm);
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    color: var(--gray-900);
  }

  .featured .card-title {
    font-size: 1.5rem;
  }

  .card-excerpt {
    margin-bottom: var(--space-md);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--gray-600);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-md);
    border-top: 1px solid var(--gray-100);
  }

  .card-footer time {
    font-size: 0.8125rem;
    color: var(--gray-500);
  }

  .read-more {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clover-green);
    transition: color var(--transition-fast);
  }

  .article-card:hover .read-more {
    color: var(--clover-green-dark);
  }

  /* Case Study specific styles */
  .case-study-meta {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
    flex-wrap: wrap;
  }

  .client-name {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--gray-700);
  }

  .industry-tag {
    padding: var(--space-xs) var(--space-sm);
    background: var(--gray-100);
    font-size: 0.75rem;
    color: var(--gray-600);
    border-radius: var(--radius-full);
  }

  .case-study-results {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);
    padding: var(--space-md);
    background: var(--gray-50);
    border-radius: var(--radius-sm);
  }

  .results-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .results-value {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clover-green);
  }

  .services-tags {
    display: flex;
    gap: var(--space-xs);
    flex-wrap: wrap;
  }

  .service-tag {
    padding: 2px var(--space-sm);
    background: var(--gray-100);
    font-size: 0.75rem;
    color: var(--gray-600);
    border-radius: var(--radius-sm);
  }
</style>
