<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getContactPageSchema, getAllLocalBusinessSchemas, getBreadcrumbSchema } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO['contacto'];

  const jsonLd = [
    getContactPageSchema(),
    ...getAllLocalBusinessSchemas(),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Contacto', url: '/contacto' }
    ])
  ];

  let formData = $state({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });

  let isSubmitting = $state(false);
  let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

  const locations = [
    {
      name: 'La Trinidad',
      badge: 'Sede Principal',
      address: 'Calle Paris, Edificio Clover',
      city: 'La Trinidad, Caracas',
      phone: '+58-212-8191152'
    },
    {
      name: 'Macarao',
      address: 'Zona Industrial Macarao',
      city: 'Caracas',
      phone: '+58-212-8191152'
    },
    {
      name: 'La Yaguara',
      address: 'Zona Industrial La Yaguara',
      city: 'Caracas',
      phone: '+58-212-8191152'
    },
    {
      name: 'Maiquetia',
      address: 'Aeropuerto Internacional Simon Bolivar',
      city: 'Vargas',
      phone: '+58-212-8191152'
    },
    {
      name: 'Valencia',
      address: 'Zona Industrial Valencia',
      city: 'Estado Carabobo',
      phone: '+58-212-8191152'
    },
    {
      name: 'Puerto Cabello',
      address: 'Zona Portuaria',
      city: 'Estado Carabobo',
      phone: '+58-212-8191152'
    },
    {
      name: 'Barcelona',
      address: 'Zona Industrial Barcelona',
      city: 'Estado Anzoategui',
      phone: '+58-212-8191152'
    },
    {
      name: 'Maracaibo',
      address: 'Zona Industrial Maracaibo',
      city: 'Estado Zulia',
      phone: '+58-212-8191152'
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
      apellido: '',
      email: '',
      telefono: '',
      empresa: '',
      servicio: '',
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
  title="+Conectados contigo"
  description="60 anos conectando Venezuela. Contactanos para recibir atencion personalizada y conocer nuestras soluciones logisticas integrales."
  dark={true}
/>

<!-- Contact Form Section -->
<section class="section">
  <div class="container">
    <div class="contact-grid">
      <!-- Left Column: Info -->
      <div class="contact-info">
        <div class="section-header">
          <span class="section-label">Hablemos</span>
          <h2 class="section-title">Si estas interesado en nuestras soluciones, dejanos tus datos</h2>
          <p class="section-description">
            Complete el formulario y uno de nuestros asesores especializados se pondra en contacto con usted a la brevedad posible.
          </p>
        </div>

        <div class="info-cards">
          <div class="card card--highlight info-card">
            <div class="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="info-card__content">
              <h4 class="card__title">Email Principal</h4>
              <a href="mailto:clover@cloverve.com" class="info-link">clover@cloverve.com</a>
            </div>
          </div>

          <div class="card card--highlight info-card">
            <div class="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="info-card__content">
              <h4 class="card__title">Telefono</h4>
              <a href="tel:+582128191152" class="info-link">+58-212-8191152</a>
            </div>
          </div>

          <div class="card card--highlight info-card">
            <div class="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="info-card__content">
              <h4 class="card__title">Horario de Atencion</h4>
              <p class="card__text">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div class="social-section">
          <h4>Siguenos en redes</h4>
          <div class="social-icons">
            <a href="https://instagram.com/clover.logistica" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092613104079" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/clovervzla/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
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
            <div class="form-row">
              <div class="form-group">
                <label for="nombre">Nombre <span class="required">*</span></label>
                <input type="text" id="nombre" bind:value={formData.nombre} placeholder="Su nombre" required />
              </div>
              <div class="form-group">
                <label for="apellido">Apellido <span class="required">*</span></label>
                <input type="text" id="apellido" bind:value={formData.apellido} placeholder="Su apellido" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Email <span class="required">*</span></label>
                <input type="email" id="email" bind:value={formData.email} placeholder="correo@empresa.com" required />
              </div>
              <div class="form-group">
                <label for="telefono">Telefono</label>
                <input type="tel" id="telefono" bind:value={formData.telefono} placeholder="+58 XXX XXX XXXX" />
              </div>
            </div>

            <div class="form-group">
              <label for="empresa">Empresa</label>
              <input type="text" id="empresa" bind:value={formData.empresa} placeholder="Nombre de su empresa" />
            </div>

            <div class="form-group">
              <label for="servicio">Servicio de interes</label>
              <select id="servicio" bind:value={formData.servicio}>
                <option value="">Seleccione un servicio</option>
                <option value="logistica-integral">Logistica Integral</option>
                <option value="aduana">Agenciamiento Aduanal</option>
                <option value="almacen">Almacenamiento y Distribucion</option>
                <option value="transporte-terrestre">Transporte Terrestre</option>
                <option value="carga-internacional">Carga Internacional</option>
                <option value="courier">Courier y Paqueteria</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div class="form-group">
              <label for="mensaje">Mensaje <span class="required">*</span></label>
              <textarea id="mensaje" rows="5" bind:value={formData.mensaje} placeholder="Cuentenos sobre sus necesidades logisticas..." required></textarea>
            </div>

            <button type="submit" class="btn btn--primary btn--full" disabled={isSubmitting}>
              {#if isSubmitting}
                <span class="spinner"></span>
                Enviando...
              {:else}
                Enviar mensaje
              {/if}
            </button>

            <p class="form-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Sus datos estan seguros. Nunca compartiremos su informacion.
            </p>
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
        Con presencia en los principales centros logisticos del pais, garantizamos cobertura y tiempos de respuesta optimos.
      </p>
    </div>

    <div class="locations-grid">
      {#each locations as location}
        <div class="card location-card">
          <div class="location-header">
            <div class="location-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="location-title">
              <h3>{location.name}</h3>
              {#if location.badge}
                <span class="location-badge">{location.badge}</span>
              {/if}
            </div>
          </div>
          <div class="location-details">
            <p>{location.address}</p>
            <p class="location-city">{location.city}</p>
          </div>
          <div class="location-contact">
            <a href="tel:{location.phone.replace(/-/g, '')}" class="location-phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {location.phone}
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Map Section -->
<section class="section map-section">
  <div class="container">
    <div class="map-content">
      <div class="map-info">
        <div class="section-header">
          <span class="section-label">Sede Principal</span>
          <h2 class="section-title">La Trinidad, Caracas</h2>
          <p class="section-description">
            Nuestra sede principal esta ubicada estrategicamente en La Trinidad, con facil acceso desde las principales vias de Caracas.
          </p>
        </div>
        <div class="map-details">
          <div class="map-detail-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Calle Paris, Edificio Clover, La Trinidad</span>
          </div>
          <div class="map-detail-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+58-212-8191152</span>
          </div>
          <div class="map-detail-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>clover@cloverve.com</span>
          </div>
        </div>
        <a href="https://maps.google.com/?q=La+Trinidad+Caracas+Venezuela" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11"/>
          </svg>
          Ver en Google Maps
        </a>
      </div>
      <div class="map-placeholder">
        <div class="map-visual">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <p>La Trinidad, Caracas</p>
          <span>Venezuela</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">60 anos siendo su aliado logistico</h2>
    <p class="cta-banner__text">
      Confie en la experiencia y solidez de Clover Venezuela para impulsar el exito de su cadena de suministro.
    </p>
    <a href="tel:+582128191152" class="btn btn--white">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      Llamar ahora
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

  /* Contact Info */
  .contact-info .section-header {
    margin-bottom: var(--space-2xl);
  }

  .info-cards {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-2xl);
  }

  .info-card {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    padding: var(--space-lg);
  }

  .info-card__content {
    flex: 1;
  }

  .info-link {
    font-size: 1rem;
    font-weight: 500;
    color: var(--clover-green);
    transition: color var(--transition-base);
  }

  .info-link:hover {
    color: var(--clover-green-dark);
  }

  /* Social Section */
  .social-section h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: var(--space-md);
  }

  .social-icons {
    display: flex;
    gap: var(--space-sm);
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: var(--gray-100);
    border-radius: var(--radius-md);
    color: var(--gray-600);
    transition: all var(--transition-base);
  }

  .social-link:hover {
    background: var(--clover-green);
    color: var(--white);
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

  .form-row {
    display: grid;
    gap: var(--space-lg);
  }

  @media (min-width: 480px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }
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
  .form-group select,
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
  .form-group select:focus,
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

  .form-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    font-size: 0.8125rem;
    color: var(--gray-500);
    text-align: center;
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
    padding: var(--space-xl);
  }

  .location-header {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .location-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(0, 166, 81, 0.1);
    border-radius: var(--radius-sm);
    color: var(--clover-green);
    flex-shrink: 0;
  }

  .location-title h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-xs);
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

  .location-details p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }

  .location-city {
    font-weight: 500;
    color: var(--gray-700) !important;
  }

  .location-contact {
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px solid var(--gray-100);
  }

  .location-phone {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clover-green);
    transition: color var(--transition-base);
  }

  .location-phone:hover {
    color: var(--clover-green-dark);
  }

  /* Map Section */
  .map-section {
    background: var(--white);
  }

  .map-content {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 992px) {
    .map-content {
      grid-template-columns: 1fr 1fr;
    }
  }

  .map-info .section-header {
    margin-bottom: var(--space-xl);
  }

  .map-details {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }

  .map-detail-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    font-size: 0.9375rem;
    color: var(--gray-700);
  }

  .map-detail-item svg {
    color: var(--clover-green);
    flex-shrink: 0;
  }

  .map-placeholder {
    background: var(--gray-100);
    border-radius: var(--radius-md);
    aspect-ratio: 16 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-200);
  }

  .map-visual {
    text-align: center;
    color: var(--gray-500);
  }

  .map-visual svg {
    color: var(--clover-green);
    margin-bottom: var(--space-md);
  }

  .map-visual p {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: var(--space-xs);
  }

  .map-visual span {
    font-size: 0.875rem;
    color: var(--gray-500);
  }

  /* CTA Banner overrides */
  .cta-banner {
    padding: var(--space-4xl) 0;
  }
</style>
