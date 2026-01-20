<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';

  // Gallery images organized by category
  const galleries = [
    {
      title: 'Instalaciones',
      description: 'Nuestras modernas instalaciones en Venezuela',
      images: [
        { src: '/images/Clover+almacen.png', alt: 'Almacén Clover' },
        { src: '/images/logistica-interior.jpg', alt: 'Interior de instalaciones' },
        { src: '/images/1.jpg', alt: 'Instalaciones Clover' },
        { src: '/images/2.jpg', alt: 'Centro de distribución' },
      ]
    },
    {
      title: 'Servicios',
      description: 'Nuestros servicios de logística integral',
      images: [
        { src: '/images/logistica-integral_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png', alt: 'Logística Integral' },
        { src: '/images/aduana_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png', alt: 'Servicios Aduanales' },
        { src: '/images/almacen_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png', alt: 'Almacenamiento' },
        { src: '/images/transporte-terrestre_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png', alt: 'Transporte Terrestre' },
        { src: '/images/carga+internacional_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png', alt: 'Carga Internacional' },
      ]
    },
    {
      title: 'Flota',
      description: 'Nuestra flota de vehículos de transporte',
      images: [
        { src: '/images/3.jpg', alt: 'Flota de camiones' },
        { src: '/images/4.jpg', alt: 'Vehículos de transporte' },
      ]
    }
  ];

  let selectedImage = $state<{src: string, alt: string} | null>(null);

  function openLightbox(image: {src: string, alt: string}) {
    selectedImage = image;
  }

  function closeLightbox() {
    selectedImage = null;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && selectedImage) {
      closeLightbox();
    }
  }
</script>

<svelte:head>
  <title>Galería de Imágenes | Clover Venezuela</title>
  <meta name="description" content="Galería de imágenes de Clover Internacional. Conozca nuestras instalaciones, flota y servicios de logística en Venezuela." />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<PageHero
  subtitle="Galería"
  title="Nuestras Imágenes"
  description="Conozca nuestras instalaciones, equipos y servicios a través de nuestra galería."
  image="/images/1.jpg"
/>

<section class="gallery section">
  <div class="container">
    {#each galleries as gallery}
      <div class="gallery-section">
        <div class="gallery-header">
          <h2>{gallery.title}</h2>
          <p>{gallery.description}</p>
        </div>

        <div class="gallery-grid">
          {#each gallery.images as image}
            <button
              class="gallery-item"
              onclick={() => openLightbox(image)}
              aria-label="Ver imagen: {image.alt}"
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div class="gallery-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <path d="M11 8v6"/>
                  <path d="M8 11h6"/>
                </svg>
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Lightbox -->
{#if selectedImage}
  <div
    class="lightbox"
    onclick={closeLightbox}
    onkeydown={(e) => e.key === 'Escape' && closeLightbox()}
    role="dialog"
    aria-modal="true"
    aria-label="Visor de imagen"
    tabindex="-1"
  >
    <button class="lightbox-close" onclick={closeLightbox} aria-label="Cerrar">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>
    <div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
      <img src={selectedImage.src} alt={selectedImage.alt} />
      <p class="lightbox-caption">{selectedImage.alt}</p>
    </div>
  </div>
{/if}

<section class="cta section section--gray">
  <div class="container">
    <div class="cta-content">
      <h2>¿Quiere conocer más?</h2>
      <p>Contáctenos para programar una visita a nuestras instalaciones.</p>
      <a href="/contacto" class="btn btn--primary">Contactar</a>
    </div>
  </div>
</section>

<style>
  .gallery-section {
    margin-bottom: var(--space-4xl);
  }

  .gallery-section:last-child {
    margin-bottom: 0;
  }

  .gallery-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto var(--space-2xl);
  }

  .gallery-header h2 {
    margin-bottom: var(--space-sm);
    font-size: 1.75rem;
  }

  .gallery-header p {
    color: var(--gray-600);
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-md);
  }

  .gallery-item {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    border-radius: var(--radius-md);
    cursor: pointer;
    border: none;
    padding: 0;
    background: var(--gray-100);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .gallery-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity var(--transition-base);
    color: var(--white);
  }

  .gallery-item:hover .gallery-overlay,
  .gallery-item:focus .gallery-overlay {
    opacity: 1;
  }

  /* Lightbox */
  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.95);
    padding: var(--space-xl);
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .lightbox-close {
    position: absolute;
    top: var(--space-xl);
    right: var(--space-xl);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: var(--radius-full);
    color: var(--white);
    cursor: pointer;
    transition: background var(--transition-fast);
  }

  .lightbox-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .lightbox-content {
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--radius-md);
  }

  .lightbox-caption {
    margin-top: var(--space-md);
    color: var(--gray-300);
    text-align: center;
  }

  /* CTA */
  .cta-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .cta-content h2 {
    margin-bottom: var(--space-md);
  }

  .cta-content p {
    margin-bottom: var(--space-xl);
    color: var(--gray-600);
  }
</style>
