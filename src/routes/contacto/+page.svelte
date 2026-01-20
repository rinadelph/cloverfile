<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getContactPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO['contacto'];

  const jsonLd = [
    getContactPageSchema(),
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Contacto', url: '/contacto' }
    ])
  ];

  let formData = $state({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  let isSubmitting = $state(false);
  let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

  // CloverFile main office
  const mainOffice = {
    name: 'Oficina Principal - El Rosal',
    address: 'Avenida Venezuela, Torre El Saman, Piso 3, Oficina 3-1',
    city: 'Urbanizacion El Rosal, Municipio Chacao',
    region: 'Caracas, Venezuela',
    whatsapp: '+58 414-4708354',
    whatsappLink: 'https://wa.me/584144708354',
    email: 'atc.cloverfile@cloverve.com',
    hours: 'Lunes - Viernes 8 am a 5 pm',
    mapQuery: 'CloverFile el Rosal'
  };

  // 8 Office Locations (CloverFile warehouses and offices)
  const locations = [
    {
      name: 'Almacen Macarao',
      address: 'Urbanizacion Industrial La Fe',
      city: 'Parroquia Macarao, Municipio Libertador',
      region: 'Caracas, Distrito Capital',
      mapQuery: 'Clover Internacional, C.A. Macarao'
    },
    {
      name: 'Almacen Valencia',
      address: 'Urbanizacion Parque Comercio Industrial Castillito',
      city: 'Avenida 65 entre calles 99 y 101, manzana 29, parcela L-26',
      region: 'Municipio San Diego, Estado Carabobo',
      mapQuery: 'Clover, San Diego 2006, Carabobo'
    },
    {
      name: 'Almacen Barcelona',
      address: 'Zona Industrial Los Montones',
      city: 'Calle F, Parcela 45',
      region: 'Barcelona, Estado Anzoategui',
      mapQuery: 'Clover Internacional C.A.'
    },
    {
      name: 'Almacen Maracaibo',
      address: 'Avenida 50, entre 61C y calle 148, local 61C-274',
      city: 'Sector San Javier Almacenes 17 y 18',
      region: 'Parroquia Luis Hurtado Higuera, Municipio Maracaibo, Estado Zulia',
      mapQuery: 'Luis Hurtado Higuera, Maracaibo 4004, Zulia'
    },
    {
      name: 'Almacen La Trinidad',
      badge: 'Sede Corporativa',
      address: 'Calle Paris, Edificio Clover',
      city: 'La Trinidad',
      region: 'Caracas, Venezuela',
      mapQuery: 'La Trinidad, Caracas'
    },
    {
      name: 'Almacen La Yaguara',
      address: 'Zona Industrial La Yaguara',
      city: 'La Yaguara',
      region: 'Caracas, Venezuela',
      mapQuery: 'La Yaguara, Caracas'
    },
    {
      name: 'Almacen Puerto Cabello',
      address: 'Zona Portuaria',
      city: 'Puerto Cabello',
      region: 'Estado Carabobo',
      mapQuery: 'Puerto Cabello, Carabobo'
    },
    {
      name: 'Almacen Maiquetia',
      address: 'Aeropuerto Internacional Simon Bolivar',
      city: 'Maiquetia',
      region: 'Estado Vargas',
      mapQuery: 'Maiquetia, Vargas'
    }
  ];

  async function handleSubmit(e: Event) {
    e.preventDefault();
    isSubmitting = true;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    submitStatus = 'success';
    isSubmitting = false;

    // Reset form
    formData = {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    };
  }
</script>

<SEO
  title={seo.title}
  description={seo.description}
  {jsonLd}
/>

<PageHero
  subtitle="Contacto"
  title="Contactanos"
  description="Estamos aqui para ayudarte. Comunicate con nosotros para conocer nuestras soluciones de gestion documental."
  dark={true}
/>

<!-- Contact Form Section -->
<section class="section">
  <div class="container">
    <div class="contact-grid">
      <!-- Left Column: Map and Info -->
      <div class="contact-info">
        <div class="map-embed">
          <iframe
            src="https://maps.google.com/maps?q={encodeURIComponent(mainOffice.mapQuery)}&t=m&z=11&output=embed&iwloc=near"
            title={mainOffice.name}
            aria-label={mainOffice.name}
            loading="lazy"
          ></iframe>
        </div>

        <div class="office-details">
          <h3 class="office-name">{mainOffice.name}</h3>
          <p class="office-address">{mainOffice.address}</p>
          <p class="office-city">{mainOffice.city}</p>
          <p class="office-region">{mainOffice.region}</p>

          <div class="divider"></div>

          <div class="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <div>
              <span class="contact-label">Whatsapp</span>
              <a href={mainOffice.whatsappLink} target="_blank" rel="noopener noreferrer" class="contact-link">{mainOffice.whatsapp}</a>
            </div>
          </div>

          <div class="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <div>
              <span class="contact-label">Email</span>
              <a href="mailto:{mainOffice.email}" class="contact-link">{mainOffice.email}</a>
            </div>
          </div>

          <div class="divider"></div>

          <div class="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <div>
              <span class="contact-label">Horarios</span>
              <span class="contact-value">{mainOffice.hours}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Form -->
      <div class="contact-form-wrapper">
        {#if submitStatus === 'success'}
          <div class="success-message">
            <div class="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Mensaje enviado exitosamente</h3>
            <p>Gracias por contactarnos. Uno de nuestros asesores se comunicara con usted a la brevedad.</p>
            <button class="btn btn--outline" onclick={() => submitStatus = 'idle'}>Enviar otro mensaje</button>
          </div>
        {:else}
          <form class="contact-form" onsubmit={handleSubmit}>
            <div class="form-group">
              <label for="nombre">Nombre <span class="required">*</span></label>
              <input type="text" id="nombre" bind:value={formData.nombre} placeholder="Su nombre completo" required />
            </div>

            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input type="email" id="email" bind:value={formData.email} placeholder="correo@empresa.com" required />
            </div>

            <div class="form-group">
              <label for="asunto">Asunto <span class="required">*</span></label>
              <input type="text" id="asunto" bind:value={formData.asunto} placeholder="Asunto de su mensaje" required />
            </div>

            <div class="form-group">
              <label for="mensaje">Mensaje (opcional)</label>
              <textarea id="mensaje" rows="5" bind:value={formData.mensaje} placeholder="Cuentenos sobre sus necesidades de gestion documental..."></textarea>
            </div>

            <button type="submit" class="btn btn--primary btn--full" disabled={isSubmitting}>
              {#if isSubmitting}
                <span class="spinner"></span>
                Enviando...
              {:else}
                Enviar
              {/if}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Locations Section -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Cobertura Nacional</span>
      <h2 class="section-title">Nuestras <span>8 Ubicaciones</span> Estrategicas</h2>
      <p class="section-description">
        Con presencia en los principales centros del pais, garantizamos almacenamiento seguro y acceso rapido a sus documentos.
      </p>
    </div>

    <div class="locations-grid">
      {#each locations as location}
        <div class="card location-card">
          <div class="location-map">
            <iframe
              src="https://maps.google.com/maps?q={encodeURIComponent(location.mapQuery)}&t=m&z=10&output=embed&iwloc=near"
              title={location.name}
              aria-label={location.name}
              loading="lazy"
            ></iframe>
          </div>
          <div class="location-content">
            <div class="location-header">
              <h3 class="location-name">{location.name}</h3>
              {#if location.badge}
                <span class="location-badge">{location.badge}</span>
              {/if}
            </div>
            <p class="location-address">{location.address}</p>
            <p class="location-city">{location.city}</p>
            <p class="location-region">{location.region}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Social Section -->
<section class="section">
  <div class="container">
    <div class="social-section">
      <div class="section-header section-header--center">
        <span class="section-label">Conectate</span>
        <h2 class="section-title"><span>Siguenos</span> en redes sociales</h2>
      </div>
      <div class="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100092613104079" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/cloverfilevzla/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Instagram</span>
        </a>
        <a href="https://www.linkedin.com/company/clovervzla/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">Mas de 35 anos en gestion documental</h2>
    <p class="cta-banner__text">
      Confie en la experiencia de CloverFile para la gestion segura de sus documentos.
    </p>
    <a href={mainOffice.whatsappLink} target="_blank" rel="noopener noreferrer" class="btn btn--white">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Contactar por WhatsApp
    </a>
  </div>
</section>

<style>
  /* Contact Grid Layout */
  .contact-grid {
    display: grid;
    gap: var(--space-3xl);
  }

  @media (min-width: 992px) {
    .contact-grid {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }

  /* Map Embed */
  .map-embed {
    width: 100%;
    height: 300px;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid var(--gray-200);
    margin-bottom: var(--space-xl);
  }

  .map-embed iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  /* Office Details */
  .office-details {
    padding: var(--space-xl);
    background: var(--gray-50);
    border-radius: var(--radius-md);
    border: 1px solid var(--gray-100);
  }

  .office-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-md);
  }

  .office-address,
  .office-city {
    font-size: 0.9375rem;
    color: var(--gray-600);
    line-height: 1.5;
    margin-bottom: var(--space-xs);
  }

  .office-region {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--gray-700);
  }

  .divider {
    height: 1px;
    background: var(--gray-200);
    margin: var(--space-lg) 0;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .contact-item:last-child {
    margin-bottom: 0;
  }

  .contact-item svg {
    color: var(--clover-green);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .contact-item div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .contact-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .contact-link {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--clover-green);
    transition: color var(--transition-base);
  }

  .contact-link:hover {
    color: var(--clover-green-dark);
  }

  .contact-value {
    font-size: 0.9375rem;
    color: var(--gray-700);
  }

  /* Form Wrapper */
  .contact-form-wrapper {
    padding: var(--space-2xl);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-700);
  }

  .required {
    color: var(--clover-green);
  }

  .form-group input,
  .form-group textarea {
    padding: var(--space-md);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-sm);
    font-size: 1rem;
    font-family: inherit;
    background: var(--white);
    transition: all var(--transition-base);
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--gray-400);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--clover-green);
    box-shadow: 0 0 0 3px rgba(0, 166, 81, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn--full {
    width: 100%;
    padding: var(--space-md) var(--space-xl);
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: var(--white);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Success Message */
  .success-message {
    text-align: center;
    padding: var(--space-3xl) var(--space-xl);
  }

  .success-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: rgba(0, 166, 81, 0.1);
    border-radius: 50%;
    color: var(--clover-green);
    margin-bottom: var(--space-lg);
  }

  .success-message h3 {
    margin-bottom: var(--space-md);
    font-size: 1.5rem;
    color: var(--gray-900);
  }

  .success-message p {
    margin-bottom: var(--space-xl);
    color: var(--gray-600);
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Locations Grid */
  .locations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
  }

  .location-card {
    padding: 0;
    overflow: hidden;
  }

  .location-map {
    width: 100%;
    height: 180px;
  }

  .location-map iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .location-content {
    padding: var(--space-lg);
  }

  .location-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
    margin-bottom: var(--space-sm);
  }

  .location-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .location-badge {
    display: inline-block;
    padding: 2px 8px;
    background: var(--clover-green);
    color: var(--white);
    font-size: 0.6875rem;
    font-weight: 600;
    border-radius: var(--radius-sm);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .location-address {
    font-size: 0.8125rem;
    color: var(--gray-600);
    line-height: 1.4;
    margin-bottom: var(--space-xs);
  }

  .location-city {
    font-size: 0.8125rem;
    color: var(--gray-500);
    line-height: 1.4;
    margin-bottom: var(--space-xs);
  }

  .location-region {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--gray-700);
    line-height: 1.4;
  }

  /* Social Section */
  .social-section {
    text-align: center;
    padding: var(--space-2xl) 0;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
    flex-wrap: wrap;
    margin-top: var(--space-xl);
  }

  .social-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-lg) var(--space-xl);
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    color: var(--gray-600);
    transition: all var(--transition-base);
    text-decoration: none;
    min-width: 120px;
  }

  .social-link:hover {
    background: var(--clover-green);
    border-color: var(--clover-green);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .social-link span {
    font-size: 0.875rem;
    font-weight: 500;
  }

  /* CTA Banner */
  .cta-banner {
    padding: var(--space-4xl) 0;
  }
</style>
