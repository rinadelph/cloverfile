<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getOrganizationSchema, getAboutPageSchema, getBreadcrumbSchema } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO['nosotros'];

  const jsonLd = [
    getOrganizationSchema(),
    getAboutPageSchema(),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Nosotros', url: '/nosotros' }
    ])
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  {jsonLd}
/>

<PageHero
  subtitle="Clover Mudanzas"
  title="Comprometidos con Venezuela"
  description="Desde el ano 1964, cuando inicia operaciones en Venezuela, Clover Group se posiciono como empresa pionera en servicios logisticos integrados."
  dark={true}
/>

<!-- Introduction Section -->
<section class="section">
  <div class="container">
    <div class="intro-grid">
      <div class="intro-content">
        <div class="section-header">
          <span class="section-label">Nuestra Historia</span>
          <h2 class="section-title">Pioneros en servicios <span>logisticos integrados</span></h2>
        </div>
        <div class="intro-text">
          <p>
            Desde el ano 1964, cuando inicia operaciones en Venezuela, Clover Group se posiciono como empresa pionera en servicios logisticos integrados. Sus inicios como una empresa dedicada al transporte de mudanzas nacionales e internacionales, fomento una evolucion natural hasta lo que es hoy el grupo logistico mas importante del pais.
          </p>
          <p>
            Clover Mudanzas es una unidad de negocios con identidad y estructura propia perteneciente al Grupo Clover, que evoluciono para convertirse en un Centro de Soluciones en las que las mudanzas siguen siendo un servicio por el que nos reconocen ampliamente.
          </p>
        </div>
      </div>
      <div class="intro-image">
        <div class="image-wrapper">
          <img src="/images/clover-mudanzas-team.jpg" alt="Equipo Clover Mudanzas" />
          <div class="image-badge">
            <span class="badge-number">+60</span>
            <span class="badge-text">Anos de experiencia</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="section section--dark stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">60+</span>
        <span class="stat-label">Anos innovando y mejorando</span>
        <div class="stat-bar">
          <div class="stat-bar-fill" style="width: 100%;"></div>
        </div>
      </div>
      <div class="stat-item">
        <span class="stat-number">100%</span>
        <span class="stat-label">Personal especializado y con experiencia</span>
        <div class="stat-bar">
          <div class="stat-bar-fill" style="width: 100%;"></div>
        </div>
      </div>
      <div class="stat-item">
        <span class="stat-number">Global</span>
        <span class="stat-label">Presencia nacional y global</span>
        <div class="stat-bar">
          <div class="stat-bar-fill" style="width: 100%;"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Evolution Section -->
<section class="section">
  <div class="container">
    <div class="evolution-grid">
      <div class="evolution-content">
        <div class="section-header">
          <span class="section-label">Centro de Soluciones</span>
          <h2 class="section-title">Evolucionamos para <span>atender tus necesidades</span></h2>
        </div>
        <div class="evolution-text">
          <p>
            Nuestro constante deseo de mejorar y atender las necesidades de nuestros clientes, nos impulso ampliar nuestra oferta de servicios ofreciendo alternativas de ventas productos y donaciones de articulos que merecen una segunda oportunidad, almacenamiento de enseres, limpieza y sanitizacion de espacios, mantenimiento correctivo y preventivo en hogares, oficinas y vehiculos.
          </p>
          <p>
            Todos servicios con el sello de calidad CLOVER.
          </p>
          <p class="highlight-text">
            Tenemos casi 60 anos innovando y mejorando, nos encanta lo que hacemos y el impacto positivo que tiene en la vida de las personas. Cada dia es un comienzo, nos esforzamos para mejorar y ofrecer muchas soluciones.
          </p>
        </div>
        <a href="/contactenos" class="btn btn--primary">
          Contactanos
        </a>
      </div>
      <div class="evolution-image">
        <img src="/images/clover-mudanzas-service.jpg" alt="Servicios Clover Mudanzas" />
      </div>
    </div>
  </div>
</section>

<!-- Video Section -->
<section class="section section--gray">
  <div class="container">
    <div class="video-grid">
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/cpOtKP_BVQg"
          title="Brochure Mudanzas Animado 2022"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-content">
        <h2 class="section-title">Brochure Mudanzas</h2>
        <p>
          Conoce mas sobre nuestros servicios de mudanzas y todo lo que podemos hacer por ti. En Clover Mudanzas, tu tranquilidad es nuestra prioridad.
        </p>
        <div class="video-features">
          <div class="feature-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span>Embalaje profesional</span>
          </div>
          <div class="feature-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span>Transporte seguro</span>
          </div>
          <div class="feature-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span>Cobertura nacional e internacional</span>
          </div>
          <div class="feature-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span>Servicio integral de principio a fin</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quality Section -->
<section class="section">
  <div class="container">
    <div class="quality-grid">
      <div class="quality-image">
        <img src="/images/clover-quality.jpg" alt="Sello de Calidad Clover" />
      </div>
      <div class="quality-content">
        <div class="section-header">
          <span class="section-label">Nuestra Promesa</span>
          <h2 class="section-title">Todos servicios con el <span>sello de calidad Clover</span></h2>
        </div>
        <p class="quality-tagline">Deja la Mudanza en nuestras manos</p>
        <div class="quality-points">
          <div class="quality-point">
            <div class="point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div class="point-content">
              <h4>Seguridad Garantizada</h4>
              <p>Tus pertenencias estan protegidas con los mas altos estandares de seguridad.</p>
            </div>
          </div>
          <div class="quality-point">
            <div class="point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="point-content">
              <h4>Puntualidad</h4>
              <p>Cumplimos con los tiempos acordados porque valoramos tu tiempo.</p>
            </div>
          </div>
          <div class="quality-point">
            <div class="point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div class="point-content">
              <h4>Personal Capacitado</h4>
              <p>Nuestro equipo esta altamente entrenado para manejar todo tipo de mudanzas.</p>
            </div>
          </div>
          <div class="quality-point">
            <div class="point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div class="point-content">
              <h4>Experiencia Comprobada</h4>
              <p>Mas de 60 anos moviendo familias venezolanas con excelencia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services Overview -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestros Servicios</span>
      <h2 class="section-title">Soluciones integrales para <span>cada necesidad</span></h2>
    </div>

    <div class="services-overview">
      <a href="/mudanzas" class="service-card">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="1" y="3" width="15" height="13" rx="2"/>
            <path d="M16 8h4l3 4v5h-7V8z"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
        <h3>Mudanzas</h3>
        <p>Nacionales e internacionales con cobertura global</p>
      </a>

      <a href="/clover-pack" class="service-card">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </div>
        <h3>Clover Pack</h3>
        <p>Embalaje profesional con materiales de alta calidad</p>
      </a>

      <a href="/clover-solutions" class="service-card">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <h3>Soluciones Residenciales y Comerciales</h3>
        <p>Servicios integrales para hogares y empresas</p>
      </a>
    </div>
  </div>
</section>

<!-- Clover Group Section -->
<section class="section section--dark clover-group-section">
  <div class="container">
    <div class="group-content">
      <div class="section-header">
        <span class="section-label section-label--light">Parte del Grupo</span>
        <h2 class="section-title section-title--white">Clover Mudanzas es una unidad de <span>Clover Internacional</span></h2>
      </div>
      <p class="group-description">
        Nuestro equipo conoce de principio a fin los detalles sobre lo que necesitas para avanzar +seguro y +tranquilo. Contamos con el respaldo del grupo logistico mas importante de Venezuela.
      </p>
      <div class="group-links">
        <a href="https://www.cloverve.com/" target="_blank" rel="noopener noreferrer" class="btn btn--white">
          Conocer Clover Venezuela
        </a>
        <a href="https://clover-track.com/" target="_blank" rel="noopener noreferrer" class="btn btn--outline-white">
          Clover Track
        </a>
      </div>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">Contigo donde vayas</h2>
    <p class="cta-banner__text">
      +60 anos moviendo familias venezolanas. Confie en nuestra experiencia para su proxima mudanza.
    </p>
    <a href="/contactenos" class="btn btn--white">Solicitar cotizacion</a>
  </div>
</section>

<style>
  /* Introduction Grid */
  .intro-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 992px) {
    .intro-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  .intro-content .section-header {
    margin-bottom: 1.5rem;
  }

  .intro-text p {
    color: var(--gray-600);
    line-height: 1.8;
    margin-bottom: 1.25rem;
    font-size: 1.0625rem;
  }

  .intro-text p:last-child {
    margin-bottom: 0;
  }

  .intro-image {
    position: relative;
  }

  .image-wrapper {
    position: relative;
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .image-badge {
    position: absolute;
    bottom: -1rem;
    right: 2rem;
    background: #84bd3f;
    color: white;
    padding: 1.5rem 2rem;
    border-radius: var(--radius-md);
    text-align: center;
    box-shadow: var(--shadow-lg);
  }

  .badge-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
  }

  .badge-text {
    display: block;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  /* Stats Section */
  .stats-section {
    background: #14427B;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .stat-item {
    text-align: center;
    padding: 2rem;
  }

  .stat-number {
    display: block;
    font-size: 3rem;
    font-weight: 700;
    color: #84bd3f;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    display: block;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .stat-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }

  .stat-bar-fill {
    height: 100%;
    background: #e52421;
    border-radius: 4px;
  }

  /* Evolution Grid */
  .evolution-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 992px) {
    .evolution-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  .evolution-content .section-header {
    margin-bottom: 1.5rem;
  }

  .evolution-text p {
    color: var(--gray-600);
    line-height: 1.8;
    margin-bottom: 1.25rem;
  }

  .highlight-text {
    font-style: italic;
    color: #14427B !important;
    font-weight: 500;
    border-left: 4px solid #84bd3f;
    padding-left: 1rem;
  }

  .evolution-image img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: var(--radius-md);
  }

  .btn--primary {
    background: #84bd3f;
    border-color: #84bd3f;
    margin-top: 1.5rem;
  }

  .btn--primary:hover {
    background: #6b9a32;
    border-color: #6b9a32;
  }

  /* Video Section */
  .video-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 992px) {
    .video-grid {
      grid-template-columns: 1.2fr 1fr;
      gap: 4rem;
    }
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .video-content .section-title {
    margin-bottom: 1rem;
  }

  .video-content p {
    color: var(--gray-600);
    margin-bottom: 1.5rem;
  }

  .video-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--gray-700);
  }

  .feature-item svg {
    color: #84bd3f;
    flex-shrink: 0;
  }

  /* Quality Section */
  .quality-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 992px) {
    .quality-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  .quality-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: var(--radius-md);
  }

  .quality-tagline {
    font-size: 1.25rem;
    font-weight: 500;
    color: #14427B;
    margin-bottom: 2rem;
  }

  .quality-points {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .quality-point {
    display: flex;
    gap: 1rem;
  }

  .point-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(132, 189, 63, 0.1);
    border-radius: var(--radius-sm);
    color: #84bd3f;
    flex-shrink: 0;
  }

  .point-content h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.25rem;
  }

  .point-content p {
    color: var(--gray-600);
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  /* Services Overview */
  .services-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .service-card {
    padding: 2rem;
    background: var(--white);
    border-radius: var(--radius-md);
    text-align: center;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }

  .service-card:hover {
    border-color: var(--gray-200);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
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
    margin-bottom: 1.25rem;
  }

  .service-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.5rem;
  }

  .service-card p {
    color: var(--gray-600);
    font-size: 0.9375rem;
  }

  /* Clover Group Section */
  .clover-group-section {
    background: linear-gradient(135deg, #14427B 0%, #0d2e54 100%);
  }

  .group-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .section-label--light {
    color: #84bd3f;
  }

  .section-title--white {
    color: var(--white);
  }

  .section-title--white span {
    color: #84bd3f;
  }

  .group-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .group-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn--white {
    background: var(--white);
    color: #14427B;
  }

  .btn--outline-white {
    border: 2px solid var(--white);
    color: var(--white);
    background: transparent;
  }

  .btn--outline-white:hover {
    background: var(--white);
    color: #14427B;
  }

  /* CTA Banner */
  .cta-banner {
    background: #84bd3f;
    padding: var(--space-4xl) 0;
    text-align: center;
  }

  .cta-banner__title {
    color: var(--white);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .cta-banner__text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto var(--space-xl);
  }
</style>
