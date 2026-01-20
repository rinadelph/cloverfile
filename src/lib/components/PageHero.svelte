<script lang="ts">
  interface Props {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    dark?: boolean;
  }

  let { title, subtitle, description, image, dark = true }: Props = $props();
</script>

<section class="page-hero" class:dark class:has-image={image}>
  {#if image}
    <div class="hero-bg" style="background-image: url({image})"></div>
    <div class="hero-overlay"></div>
  {/if}

  <div class="hero-content container">
    {#if subtitle}
      <span class="hero-subtitle">{subtitle}</span>
    {/if}
    <h1 class="hero-title">{@html title}</h1>
    {#if description}
      <p class="hero-description">{description}</p>
    {/if}
  </div>
</section>

<style>
  .page-hero {
    position: relative;
    padding: calc(72px + var(--space-4xl)) 0 var(--space-4xl);
    background: var(--gray-50);
    overflow: hidden;
  }

  .page-hero.dark {
    background: var(--black);
  }

  .page-hero.has-image {
    min-height: 400px;
    display: flex;
    align-items: center;
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
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 800px;
  }

  .hero-subtitle {
    display: inline-block;
    margin-bottom: var(--space-md);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clover-green);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .dark .hero-subtitle {
    color: var(--clover-green);
  }

  .hero-title {
    margin-bottom: var(--space-lg);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: var(--gray-900);
    line-height: 1.2;
  }

  .dark .hero-title,
  .has-image .hero-title {
    color: var(--white);
  }

  .hero-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--gray-600);
    max-width: 600px;
  }

  .dark .hero-description,
  .has-image .hero-description {
    color: var(--gray-300);
  }
</style>
