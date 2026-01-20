<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getLocationBySlug, locationPages } from '$lib/seo/locationData';
  import { getLocalBusinessSchema, getBreadcrumbSchema } from '$lib/seo/schemas';
  import { locationSEO } from '$lib/seo/keywords';

  let slug = $derived($page.params.location);
  let location = $derived(getLocationBySlug(slug));
  let seo = $derived(locationSEO[slug] || {
    title: `Logística en ${location?.name || 'Venezuela'} | Clover Venezuela`,
    description: location?.description || 'Servicios logísticos en Venezuela.',
    keywords: []
  });

  let jsonLd = $derived(location ? [
    getLocalBusinessSchema(location.id === 'caracas' ? 'la-trinidad' : location.id),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Ubicaciones', url: '/contacto' },
      { name: location.name, url: `/ubicaciones/${slug}` }
    ])
  ] : []);

  // If location doesn't exist, this will be handled in the template
  $effect(() => {
    if (!location && slug) {
      goto('/contacto');
    }
  });
</script>

{#if location}
  <SEO
    title={seo.title}
    description={seo.description}
    {jsonLd}
  />

  <PageHero
    subtitle="Ubicación"
    title={location.heroTitle}
    description={location.heroDescription}
    dark={true}
  />

  <!-- Location Info Section -->
  <section class="section">
    <div class="container">
      <div class="location-grid">
        <div class="location-info">
          <div class="section-header">
            <span class="section-label">{location.region}</span>
            <h2 class="section-title">Nuestra presencia en <span>{location.name}</span></h2>
            <p class="section-description">
              {location.description}
            </p>
          </div>

          <!-- Facilities -->
          <div class="facilities-list">
            <h3>Instalaciones</h3>
            <ul>
              {#each location.facilities as facility}
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {facility}
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <div class="contact-card">
          <h3>Información de Contacto</h3>
          <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <span class="contact-label">Dirección</span>
              <p>{location.address.street}</p>
              <p>{location.address.city}, {location.address.state}</p>
            </div>
          </div>
          <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <div>
              <span class="contact-label">Teléfono</span>
              <a href="tel:{location.phone.replace(/-/g, '')}">{location.phone}</a>
            </div>
          </div>
          <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <div>
              <span class="contact-label">Email</span>
              <a href="mailto:{location.email}">{location.email}</a>
            </div>
          </div>
          <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <div>
              <span class="contact-label">Horario</span>
              <p>{location.openingHours}</p>
            </div>
          </div>
          <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--full">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="3 11 22 2 13 21 11 13 3 11"/>
            </svg>
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section section--gray">
    <div class="container">
      <div class="section-header section-header--center">
        <span class="section-label">Servicios en {location.name}</span>
        <h2 class="section-title">Lo que podemos <span>hacer por ti</span></h2>
      </div>
      <div class="services-grid">
        {#each location.services as service}
          <div class="card card--highlight service-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            <span>{service}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Other Locations -->
  <section class="section">
    <div class="container">
      <div class="section-header section-header--center">
        <span class="section-label">Red Nacional</span>
        <h2 class="section-title">Otras <span>ubicaciones</span></h2>
      </div>
      <div class="other-locations">
        {#each locationPages.filter(loc => loc.slug !== slug) as otherLocation}
          <a href="/ubicaciones/{otherLocation.slug}" class="location-link">
            <span class="location-name">{otherLocation.name}</span>
            <span class="location-region">{otherLocation.region}</span>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <div class="container">
      <h2 class="cta-banner__title">¿Necesitas servicios logísticos en {location.name}?</h2>
      <p class="cta-banner__text">Contáctanos y conoce cómo podemos ayudarte con tu operación.</p>
      <a href="/contacto" class="btn btn--white">Contactar ahora</a>
    </div>
  </section>
{/if}

<style>
  .location-grid {
    display: grid;
    gap: var(--space-3xl);
  }

  @media (min-width: 992px) {
    .location-grid {
      grid-template-columns: 1.5fr 1fr;
      align-items: start;
    }
  }

  .facilities-list {
    margin-top: var(--space-2xl);
  }

  .facilities-list h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-md);
  }

  .facilities-list ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .facilities-list li {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    font-size: 0.9375rem;
    color: var(--gray-700);
  }

  .facilities-list li svg {
    color: var(--clover-green);
    flex-shrink: 0;
  }

  .contact-card {
    padding: var(--space-2xl);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }

  .contact-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--gray-100);
  }

  .contact-item {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
  }

  .contact-item svg {
    color: var(--clover-green);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .contact-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-xs);
  }

  .contact-item p {
    color: var(--gray-700);
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  .contact-item a {
    color: var(--clover-green);
    font-weight: 500;
    font-size: 0.9375rem;
  }

  .contact-item a:hover {
    color: var(--clover-green-dark);
  }

  .btn--full {
    width: 100%;
    margin-top: var(--space-lg);
    justify-content: center;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-md);
  }

  .service-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg);
  }

  .service-item svg {
    color: var(--clover-green);
    flex-shrink: 0;
  }

  .service-item span {
    font-weight: 500;
    color: var(--gray-800);
  }

  .other-locations {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
  }

  .location-link {
    display: flex;
    flex-direction: column;
    padding: var(--space-lg);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }

  .location-link:hover {
    border-color: var(--clover-green);
    box-shadow: var(--shadow-md);
  }

  .location-name {
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-xs);
  }

  .location-region {
    font-size: 0.875rem;
    color: var(--gray-500);
  }
</style>
