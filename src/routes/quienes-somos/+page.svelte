<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getOrganizationSchema, getAboutPageSchema, getBreadcrumbSchema } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO['quienes-somos'];

  const jsonLd = [
    getOrganizationSchema(),
    getAboutPageSchema(),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Quienes Somos', url: '/quienes-somos' }
    ])
  ];

  const timeline = [
    {
      year: '1986',
      title: 'Inicio de Operaciones',
      description: 'CloverFile inicia operaciones el 14 de febrero en los almacenes de Macarao, Caracas, ofreciendo sistemas de almacenaje de archivos y registros magneticos.'
    },
    {
      year: '1990s',
      title: 'Expansion de Servicios',
      description: 'Ampliacion del portafolio de servicios incluyendo consultoria y asesoria tecnica en gestion documental.'
    },
    {
      year: '2000s',
      title: 'Modernizacion Tecnologica',
      description: 'Implementacion de tecnologia avanzada para automatizacion de flujos de trabajo y gestion de informacion.'
    },
    {
      year: 'Hoy',
      title: 'Lider en Gestion Documental',
      description: 'Mas de 35 anos ofreciendo soluciones integrales en gestion documental, con infraestructura propia, certificaciones de calidad y tecnologia de vanguardia.'
    }
  ];

  const services = [
    {
      icon: 'archive',
      title: 'Gestion Documental Integral',
      description: 'Administracion completa de documentos fisicos y digitales con los mas altos estandares de seguridad y confidencialidad.'
    },
    {
      icon: 'workflow',
      title: 'Automatizacion de Flujos',
      description: 'Optimizacion de procesos documentales mediante tecnologia avanzada que mejora la eficiencia operativa.'
    },
    {
      icon: 'storage',
      title: 'Almacenaje de Archivos',
      description: 'Instalaciones de almacenamiento seguro para documentos fisicos con control de acceso y monitoreo 24/7.'
    },
    {
      icon: 'consulting',
      title: 'Consultoria y Asesoria',
      description: 'Expertos en gestion de informacion que le ayudan a disenar soluciones personalizadas para su empresa.'
    }
  ];

  const cloverUnits = [
    {
      name: 'CloverFile',
      logo: '/images/logo.png',
      description: 'Gestion Documental Integral',
      url: '/'
    },
    {
      name: 'Clover Mudanzas',
      logo: '/images/clover-mudanzas.png',
      description: 'Servicios de mudanzas corporativas y residenciales',
      url: 'https://www.cloverve.com/mudanzas'
    },
    {
      name: 'Clover Logistica',
      logo: '/images/clover-logistica.png',
      description: 'Logistica integral y cadena de suministro',
      url: 'https://www.cloverve.com/'
    }
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  {jsonLd}
/>

<PageHero
  subtitle="Quienes Somos"
  title="Clover, mas de 60 anos a tu lado"
  description="Somos soluciones para ti. Una de las unidades de negocio de Clover Internacional, lider en gestion documental en Venezuela."
  dark={true}
/>

<!-- Introduction Section -->
<section class="section">
  <div class="container">
    <div class="intro-grid">
      <div class="intro-content">
        <div class="section-header">
          <span class="section-label">Nuestra Historia</span>
          <h2 class="section-title">Mas de 35 anos de <span>experiencia</span></h2>
        </div>
        <div class="intro-text">
          <p>
            <strong>CloverFile</strong> es una de las Unidades de Negocio de Clover que inicia sus operaciones el 14 de febrero de 1986 en los almacenes de Macarao en Caracas, con el objeto de brindar a sus clientes: sistemas, almacenaje de archivo, registros magneticos, consultoria y asesoria tecnica.
          </p>
          <p>
            En la actualidad, CloverFile ofrece un amplio portafolio en Gestion Documental Integral, Automatizacion de Flujos de Trabajo, Gestion de Informacion y mucho mas. Contamos con personal capacitado, infraestructura propia, certificaciones que avalan nuestra calidad y tecnologia avanzada para brindar soluciones para ti.
          </p>
          <p>
            <strong>Clover Internacional, C.A.</strong>, con una trayectoria de mas de 60 anos, pone a tu disposicion sus servicios desde sus unidades de negocio.
          </p>
        </div>
      </div>
      <div class="intro-stats">
        <div class="stat-card">
          <span class="stat-number">+60</span>
          <span class="stat-label">Anos de experiencia</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">+35</span>
          <span class="stat-label">Anos en gestion documental</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">4</span>
          <span class="stat-label">Almacenes en Venezuela</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">24/7</span>
          <span class="stat-label">Seguridad y monitoreo</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Timeline Section -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestra Trayectoria</span>
      <h2 class="section-title">Hitos <span>importantes</span></h2>
      <p class="section-description">
        Una historia de compromiso, innovacion y excelencia en el servicio al cliente.
      </p>
    </div>

    <div class="timeline">
      {#each timeline as item, index}
        <div class="timeline-item" class:timeline-item--right={index % 2 === 1}>
          <div class="timeline-content">
            <span class="timeline-year">{item.year}</span>
            <h3 class="timeline-title">{item.title}</h3>
            <p class="timeline-description">{item.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestros Servicios</span>
      <h2 class="section-title">Soluciones <span>integrales</span></h2>
      <p class="section-description">
        Ofrecemos un portafolio completo de servicios en gestion documental y automatizacion de procesos.
      </p>
    </div>

    <div class="grid grid--4">
      {#each services as service}
        <div class="card card--highlight">
          <div class="card__icon">
            {#if service.icon === 'archive'}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 8v13H3V8"/>
                <path d="M1 3h22v5H1z"/>
                <path d="M10 12h4"/>
              </svg>
            {:else if service.icon === 'workflow'}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="18" cy="18" r="3"/>
                <circle cx="6" cy="6" r="3"/>
                <path d="M6 21V9a9 9 0 0 0 9 9"/>
              </svg>
            {:else if service.icon === 'storage'}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 12H2"/>
                <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>
                <line x1="6" y1="16" x2="6.01" y2="16"/>
                <line x1="10" y1="16" x2="10.01" y2="16"/>
              </svg>
            {:else}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            {/if}
          </div>
          <h3 class="card__title">{service.title}</h3>
          <p class="card__text">{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="section section--dark">
  <div class="container">
    <div class="values-grid">
      <div class="values-content">
        <div class="section-header">
          <span class="section-label">Nuestros Valores</span>
          <h2 class="section-title section-title--white">Principios que nos <span>definen</span></h2>
          <p class="section-description section-description--light">
            En CloverFile, cada accion esta guiada por valores solidos que garantizan la excelencia en nuestros servicios.
          </p>
        </div>
        <ul class="values-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <div>
              <strong>Confidencialidad</strong>
              <span>Protegemos su informacion con los mas altos estandares de seguridad.</span>
            </div>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <div>
              <strong>Compromiso</strong>
              <span>Cumplimos nuestras promesas y superamos las expectativas de nuestros clientes.</span>
            </div>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <div>
              <strong>Innovacion</strong>
              <span>Implementamos tecnologia de vanguardia para optimizar sus procesos.</span>
            </div>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <div>
              <strong>Calidad</strong>
              <span>Certificaciones que avalan nuestros procesos y servicios.</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="values-stats">
        <div class="value-stat">
          <span class="value-stat__number">100%</span>
          <span class="value-stat__label">Compromiso con la calidad</span>
        </div>
        <div class="value-stat">
          <span class="value-stat__number">+500</span>
          <span class="value-stat__label">Clientes satisfechos</span>
        </div>
        <div class="value-stat">
          <span class="value-stat__number">ISO</span>
          <span class="value-stat__label">Certificaciones de calidad</span>
        </div>
        <div class="value-stat">
          <span class="value-stat__number">24/7</span>
          <span class="value-stat__label">Disponibilidad de servicio</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Clover Units Section -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Clover Internacional</span>
      <h2 class="section-title">Conoce nuestras <span>unidades de negocio</span></h2>
      <p class="section-description">
        Clover Internacional, C.A. ofrece multiples servicios a traves de sus unidades especializadas.
      </p>
    </div>

    <div class="units-grid">
      {#each cloverUnits as unit}
        <a href={unit.url} class="unit-card" target={unit.url.startsWith('http') ? '_blank' : '_self'} rel={unit.url.startsWith('http') ? 'noopener noreferrer' : ''}>
          <div class="unit-logo">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="unit-name">{unit.name}</h3>
          <p class="unit-description">{unit.description}</p>
          <span class="unit-link">
            Conocer mas
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">Somos soluciones para ti</h2>
    <p class="cta-banner__text">
      Mas de 35 anos de experiencia en gestion documental nos respaldan. Contactanos para conocer como podemos ayudarte.
    </p>
    <a href="/contacto" class="btn btn--white">Contactanos</a>
  </div>
</section>

<style>
  /* Intro Section */
  .intro-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: start;
  }

  @media (min-width: 992px) {
    .intro-grid {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .intro-content .section-header {
    margin-bottom: var(--space-xl);
  }

  .intro-text p {
    color: var(--gray-600);
    line-height: 1.8;
    margin-bottom: var(--space-lg);
  }

  .intro-text p:last-child {
    margin-bottom: 0;
  }

  .intro-text strong {
    color: var(--gray-900);
  }

  .intro-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }

  .stat-card {
    padding: var(--space-xl);
    background: var(--gray-50);
    border-radius: var(--radius-md);
    text-align: center;
    border: 1px solid var(--gray-100);
    transition: all var(--transition-base);
  }

  .stat-card:hover {
    background: var(--white);
    border-color: var(--clover-green);
    box-shadow: var(--shadow-md);
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--clover-green);
    line-height: 1;
    margin-bottom: var(--space-sm);
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.4;
  }

  /* Timeline Section */
  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: var(--space-xl) 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--gray-200);
  }

  @media (max-width: 768px) {
    .timeline::before {
      left: 20px;
    }
  }

  .timeline-item {
    position: relative;
    margin-bottom: var(--space-2xl);
    width: 50%;
    padding-right: var(--space-2xl);
  }

  .timeline-item--right {
    margin-left: 50%;
    padding-right: 0;
    padding-left: var(--space-2xl);
  }

  @media (max-width: 768px) {
    .timeline-item,
    .timeline-item--right {
      width: 100%;
      margin-left: 0;
      padding-left: calc(40px + var(--space-lg));
      padding-right: 0;
    }
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    right: -8px;
    top: 0;
    width: 16px;
    height: 16px;
    background: var(--clover-green);
    border-radius: 50%;
    border: 3px solid var(--white);
    box-shadow: 0 0 0 3px var(--clover-green-light);
  }

  .timeline-item--right::before {
    left: -8px;
    right: auto;
  }

  @media (max-width: 768px) {
    .timeline-item::before,
    .timeline-item--right::before {
      left: 12px;
      right: auto;
    }
  }

  .timeline-content {
    padding: var(--space-xl);
    background: var(--white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-100);
  }

  .timeline-year {
    display: inline-block;
    padding: var(--space-xs) var(--space-md);
    background: var(--clover-green);
    color: var(--white);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-md);
  }

  .timeline-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-sm);
  }

  .timeline-description {
    font-size: 0.9375rem;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* Values Section */
  .values-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 992px) {
    .values-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .section-title--white {
    color: var(--white);
  }

  .section-description--light {
    color: rgba(255, 255, 255, 0.7);
  }

  .values-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    margin-top: var(--space-xl);
  }

  .values-list li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
  }

  .values-list li svg {
    color: var(--clover-green);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .values-list li div {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .values-list li strong {
    color: var(--white);
    font-size: 1rem;
  }

  .values-list li span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  .values-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }

  .value-stat {
    text-align: center;
    padding: var(--space-xl);
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .value-stat__number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--clover-green);
    margin-bottom: var(--space-sm);
    line-height: 1;
  }

  .value-stat__label {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Units Section */
  .units-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-xl);
  }

  .unit-card {
    padding: var(--space-2xl);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    text-align: center;
    transition: all var(--transition-base);
    text-decoration: none;
  }

  .unit-card:hover {
    border-color: var(--clover-green);
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .unit-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-lg);
    background: var(--gray-50);
    border-radius: var(--radius-md);
    color: var(--clover-green);
  }

  .unit-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-sm);
  }

  .unit-description {
    font-size: 0.9375rem;
    color: var(--gray-600);
    line-height: 1.5;
    margin-bottom: var(--space-lg);
  }

  .unit-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clover-green);
    transition: gap var(--transition-base);
  }

  .unit-card:hover .unit-link {
    gap: var(--space-md);
  }

  /* CTA Banner */
  .cta-banner {
    padding: var(--space-4xl) 0;
  }
</style>
