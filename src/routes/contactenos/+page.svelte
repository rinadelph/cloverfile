<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getContactPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO['contactenos'];

  const jsonLd = [
    getContactPageSchema(),
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Contactenos', url: '/contactenos' }
    ])
  ];

  let formData = $state({
    nombre: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    mensaje: ''
  });

  let isSubmitting = $state(false);
  let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

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
      telefono: '',
      tipoServicio: '',
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
  subtitle="Contactenos"
  title="Contacto"
  description="Estamos listos para ayudarte con tu mudanza. Nuestro equipo conoce de principio a fin los detalles sobre lo que necesitas para avanzar +seguro y +tranquilo."
  dark={true}
/>

<!-- Contact Info Section -->
<section class="section">
  <div class="container">
    <div class="contact-info-grid">
      <div class="info-card">
        <div class="info-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <h3>Direccion</h3>
        <p>Av. Luis de Camoens, Centro Clover, P.3</p>
        <p>La Trinidad, Caracas, Venezuela</p>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h3>Telefono</h3>
        <p><a href="tel:+582128191100">+58-212-8191100</a></p>
        <p><a href="tel:05002568374">0500-CLOVERG (0500-2568374)</a></p>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h3>Horario de Atencion</h3>
        <p>Lunes - Viernes</p>
        <p>8:00 AM - 5:00 PM</p>
      </div>
    </div>
  </div>
</section>

<!-- Map and Form Section -->
<section class="section section--gray">
  <div class="container">
    <div class="contact-grid">
      <!-- Map Column -->
      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.822839418267!2d-66.8680137852022!3d10.435628992553323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af6372e20ec6d%3A0xebad0a20b8ea65be!2sClover%20Venezuela!5e0!3m2!1sen!2sar!4v1657049465651!5m2!1sen!2sar"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicacion de Clover Mudanzas"
        ></iframe>
      </div>

      <!-- Form Column -->
      <div class="contact-form-wrapper">
        <h2 class="form-title">Escribenos</h2>
        <p class="form-subtitle">Dejanos tus datos y te contactaremos a la brevedad</p>

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
              <input
                type="text"
                id="nombre"
                bind:value={formData.nombre}
                placeholder="Nombre*"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                placeholder="Email*"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <input
                type="tel"
                id="telefono"
                bind:value={formData.telefono}
                placeholder="Telefono"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <select id="tipoServicio" bind:value={formData.tipoServicio} class="form-input">
                <option value="">Tipo de servicio</option>
                <option value="mudanza-nacional">Mudanza Nacional</option>
                <option value="mudanza-internacional">Mudanza Internacional</option>
                <option value="almacenamiento">Almacenamiento</option>
                <option value="embalaje">Embalaje y Empaque</option>
                <option value="limpieza">Limpieza y Sanitizacion</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="otro">Otro servicio</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                id="mensaje"
                rows="5"
                bind:value={formData.mensaje}
                placeholder="Mensaje"
                class="form-input"
              ></textarea>
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

<!-- Services We Offer Section -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestros Servicios</span>
      <h2 class="section-title">Todos servicios con el <span>sello de calidad Clover</span></h2>
      <p class="section-description">
        Deja la mudanza en nuestras manos. Mas de 60 anos de experiencia nos respaldan.
      </p>
    </div>

    <div class="services-grid">
      <div class="service-item">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="1" y="3" width="15" height="13" rx="2"/>
            <path d="M16 8h4l3 4v5h-7V8z"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
        <h3>Mudanzas Nacionales e Internacionales</h3>
        <p>Trasladamos tus pertenencias de forma segura a cualquier destino nacional o internacional.</p>
      </div>

      <div class="service-item">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <h3>Embalaje Profesional</h3>
        <p>Empacamos tus objetos con materiales de alta calidad para garantizar su proteccion.</p>
      </div>

      <div class="service-item">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <h3>Almacenamiento</h3>
        <p>Guardamos tus enseres en instalaciones seguras y climatizadas.</p>
      </div>

      <div class="service-item">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3>Mantenimiento</h3>
        <p>Servicios de mantenimiento correctivo y preventivo en hogares, oficinas y vehiculos.</p>
      </div>

      <div class="service-item">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
            <path d="M13 13l6 6"/>
          </svg>
        </div>
        <h3>Limpieza y Sanitizacion</h3>
        <p>Dejamos tus espacios impecables antes o despues de tu mudanza.</p>
      </div>

      <div class="service-item">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
        </div>
        <h3>Ventas y Donaciones</h3>
        <p>Alternativas de venta de productos y donaciones de articulos que merecen una segunda oportunidad.</p>
      </div>
    </div>
  </div>
</section>

<!-- WhatsApp CTA -->
<section class="cta-whatsapp">
  <div class="container">
    <div class="whatsapp-content">
      <div class="whatsapp-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
      <div class="whatsapp-text">
        <h3>Contactanos por WhatsApp</h3>
        <p>Escribenos directamente para una atencion mas rapida</p>
      </div>
      <a href="https://wa.me/582129031399" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp">
        Iniciar Chat
      </a>
    </div>
  </div>
</section>

<!-- Social Media -->
<section class="section social-section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Siguenos</span>
      <h2 class="section-title">Conecta con nosotros</h2>
    </div>

    <div class="social-links">
      <a href="https://www.instagram.com/clovermudanzasve/" target="_blank" rel="noopener noreferrer" class="social-link social-link--instagram">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span>@clovermudanzasve</span>
      </a>
      <a href="https://www.facebook.com/clovermudanzasve" target="_blank" rel="noopener noreferrer" class="social-link social-link--facebook">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span>Clover Mudanzas</span>
      </a>
      <a href="https://linktr.ee/cloverinternacionalca" target="_blank" rel="noopener noreferrer" class="social-link social-link--linktree">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.5 21v-9H3l9-9 9 9h-4.5v9h-9z"/>
        </svg>
        <span>Linktree</span>
      </a>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">+60 anos moviendo familias venezolanas</h2>
    <p class="cta-banner__text">
      Clover Mudanzas es una unidad de Clover Internacional. Confie en nuestra experiencia para su proxima mudanza.
    </p>
    <a href="tel:+582128191100" class="btn btn--white">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      Llamar ahora
    </a>
  </div>
</section>

<style>
  /* Contact Info Grid */
  .contact-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-xl);
  }

  .info-card {
    text-align: center;
    padding: var(--space-2xl);
    background: var(--white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
  }

  .info-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }

  .info-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    background: rgba(132, 189, 63, 0.1);
    border-radius: 50%;
    color: #84bd3f;
    margin-bottom: var(--space-lg);
  }

  .info-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-md);
  }

  .info-card p {
    color: var(--gray-600);
    margin-bottom: var(--space-xs);
    line-height: 1.6;
  }

  .info-card a {
    color: #84bd3f;
    font-weight: 500;
    transition: color var(--transition-base);
  }

  .info-card a:hover {
    color: #6b9a32;
  }

  /* Contact Grid */
  .contact-grid {
    display: grid;
    gap: var(--space-2xl);
  }

  @media (min-width: 992px) {
    .contact-grid {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }

  .map-wrapper {
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-md);
  }

  .map-wrapper iframe {
    display: block;
  }

  /* Contact Form */
  .contact-form-wrapper {
    padding: var(--space-2xl);
    background: var(--white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }

  .form-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-sm);
  }

  .form-subtitle {
    color: var(--gray-600);
    margin-bottom: var(--space-xl);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .form-group {
    width: 100%;
  }

  .form-input {
    width: 100%;
    padding: var(--space-md);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-sm);
    font-size: 1rem;
    font-family: inherit;
    background: var(--white);
    transition: all var(--transition-base);
  }

  .form-input::placeholder {
    color: var(--gray-400);
  }

  .form-input:focus {
    outline: none;
    border-color: #84bd3f;
    box-shadow: 0 0 0 3px rgba(132, 189, 63, 0.1);
  }

  .form-input textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn--full {
    width: 100%;
    padding: var(--space-md) var(--space-xl);
  }

  .btn--primary {
    background: #84bd3f;
    border-color: #84bd3f;
  }

  .btn--primary:hover {
    background: #6b9a32;
    border-color: #6b9a32;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: var(--white);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-right: var(--space-sm);
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Success Message */
  .success-message {
    text-align: center;
    padding: var(--space-2xl);
  }

  .success-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: rgba(132, 189, 63, 0.1);
    border-radius: 50%;
    color: #84bd3f;
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
  }

  /* Services Grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
  }

  .service-item {
    text-align: center;
    padding: var(--space-xl);
    background: var(--gray-50);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }

  .service-item:hover {
    background: var(--white);
    box-shadow: var(--shadow-md);
  }

  .service-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: rgba(132, 189, 63, 0.1);
    border-radius: var(--radius-md);
    color: #84bd3f;
    margin-bottom: var(--space-lg);
  }

  .service-item h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-sm);
  }

  .service-item p {
    color: var(--gray-600);
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  /* WhatsApp CTA */
  .cta-whatsapp {
    background: #25d366;
    padding: var(--space-xl) 0;
  }

  .whatsapp-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    flex-wrap: wrap;
  }

  .whatsapp-icon {
    color: var(--white);
  }

  .whatsapp-text {
    text-align: left;
  }

  .whatsapp-text h3 {
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-xs);
  }

  .whatsapp-text p {
    color: rgba(255, 255, 255, 0.9);
  }

  .btn--whatsapp {
    background: var(--white);
    color: #25d366;
    font-weight: 600;
    padding: var(--space-md) var(--space-xl);
    border-radius: var(--radius-sm);
    transition: all var(--transition-base);
  }

  .btn--whatsapp:hover {
    background: var(--gray-100);
    transform: translateY(-2px);
  }

  /* Social Section */
  .social-section {
    background: var(--gray-50);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: var(--space-xl);
    flex-wrap: wrap;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg) var(--space-xl);
    background: var(--white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
  }

  .social-link:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  .social-link span {
    font-weight: 500;
    color: var(--gray-700);
  }

  .social-link--instagram {
    color: #E1306C;
  }

  .social-link--facebook {
    color: #1877F2;
  }

  .social-link--linktree {
    color: #43E660;
  }

  /* CTA Banner overrides */
  .cta-banner {
    background: linear-gradient(135deg, #14427B 0%, #0d2e54 100%);
    padding: var(--space-4xl) 0;
  }

  .btn--outline {
    border: 2px solid #84bd3f;
    color: #84bd3f;
    background: transparent;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-sm);
    font-weight: 500;
    transition: all var(--transition-base);
  }

  .btn--outline:hover {
    background: #84bd3f;
    color: var(--white);
  }
</style>
