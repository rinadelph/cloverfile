<script lang="ts">
  import type { Article } from '$lib/cms/types';
  import ArticleCard from './ArticleCard.svelte';

  interface Props {
    articles: Article[];
    title?: string;
    locale?: 'es' | 'en';
    variant?: 'default' | 'case-study';
  }

  let {
    articles,
    title = 'Articulos Relacionados',
    locale = 'es',
    variant = 'default'
  }: Props = $props();
</script>

{#if articles.length > 0}
  <section class="related-articles">
    <div class="related-header">
      <h2>{title}</h2>
    </div>

    <div class="related-grid">
      {#each articles as article (article.id)}
        <ArticleCard
          {article}
          {locale}
          variant={variant === 'case-study' ? 'case-study' : 'default'}
          showCategory={true}
        />
      {/each}
    </div>
  </section>
{/if}

<style>
  .related-articles {
    padding: var(--space-4xl) 0;
    background: var(--gray-50);
  }

  .related-header {
    margin-bottom: var(--space-2xl);
    text-align: center;
  }

  .related-header h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-xl);
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
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
</style>
