<script lang="ts">
  import { page } from '$app/stores';

  interface Props {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      author?: string;
      section?: string;
      tags?: string[];
    };
    noindex?: boolean;
    jsonLd?: object | object[];
  }

  let {
    title,
    description,
    canonical,
    image = '/images/og-default.jpg',
    type = 'website',
    article,
    noindex = false,
    jsonLd
  }: Props = $props();

  const SITE_NAME = 'Clover Mudanzas';
  const SITE_URL = 'https://www.clovermudanzas.com';
  const DEFAULT_LOCALE = 'es_VE';

  // Truncate description to 160 chars
  const truncatedDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  // Build full title with site suffix
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  // Build canonical URL
  let canonicalUrl = $derived(canonical || `${SITE_URL}${$page.url.pathname}`);

  // Build image URL
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  // Generate JSON-LD script - separate closing tag to avoid Svelte parser issues
  const scriptClose = '<' + '/script>';
  const scriptOpen = '<script type="application/ld+json">';

  function generateJsonLd(schema: object | object[]): string {
    if (Array.isArray(schema)) {
      return schema.map(s => JSON.stringify(s)).join(scriptClose + scriptOpen);
    }
    return JSON.stringify(schema);
  }
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{fullTitle}</title>
  <meta name="title" content={fullTitle} />
  <meta name="description" content={truncatedDescription} />
  <link rel="canonical" href={canonicalUrl} />

  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {:else}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  {/if}

  <!-- Geo Meta Tags for Venezuela -->
  <meta name="geo.region" content="VE" />
  <meta name="geo.placename" content="Caracas, Venezuela" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={truncatedDescription} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content={DEFAULT_LOCALE} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={canonicalUrl} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={truncatedDescription} />
  <meta name="twitter:image" content={imageUrl} />

  <!-- Article specific tags -->
  {#if type === 'article' && article}
    {#if article.publishedTime}
      <meta property="article:published_time" content={article.publishedTime} />
    {/if}
    {#if article.modifiedTime}
      <meta property="article:modified_time" content={article.modifiedTime} />
    {/if}
    {#if article.author}
      <meta property="article:author" content={article.author} />
    {/if}
    {#if article.section}
      <meta property="article:section" content={article.section} />
    {/if}
    {#if article.tags}
      {#each article.tags as tag}
        <meta property="article:tag" content={tag} />
      {/each}
    {/if}
  {/if}

  <!-- Hreflang tags -->
  <link rel="alternate" hreflang="es" href={canonicalUrl} />
  <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

  <!-- JSON-LD Structured Data -->
  {#if jsonLd}
    {@html `<script type="application/ld+json">${generateJsonLd(jsonLd)}</script>`}
  {/if}
</svelte:head>
