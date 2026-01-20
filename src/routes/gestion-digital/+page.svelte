<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['gestion-digital'];
  const faqs = serviceFAQs['gestion-digital'];

  const jsonLd = [
    getServiceSchema({
      name: 'Gestion Digital de Documentos',
      description: seo.description,
      url: '/gestion-digital',
      image: '/images/aaut.png'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Gestion Digital', url: '/gestion-digital' }
    ]),
    getFAQSchema(faqs)
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  image="/images/aaut.png"
  {jsonLd}
/>

<PageHero
  subtitle="Gestion Digital"
  title="+Digitalizamos tu informacion"
  description="Transformamos tus archivos fisicos en documentos digitales accesibles, seguros y organizados para optimizar la gestion de tu empresa."
/>

<!-- Stats Bar -->
<section class="stats-section">
  <div class="container">
    <div class="stats-bar stats-bar--highlight">
      <div class="stat">
        <span class="stat__number stat__number--green">24/7</span>
        <span class="stat__label">Acceso a documentos</span>
      </div>
      <div class="stat">
        <span class="stat__number">99.9%</span>
        <span class="stat__label">Disponibilidad en nube</span>
      </div>
      <div class="stat">
        <span class="stat__number">OCR</span>
        <span class="stat__label">Reconocimiento de texto</span>
      </div>
      <div class="stat">
        <span class="stat__number">60+</span>
        <span class="stat__label">Anos de experiencia</span>
      </div>
    </div>
  </div>
</section>

<!-- Intro Section -->
<section class="section">
  <div class="container">
    <div class="intro-grid">
      <div class="intro-content">
        <div class="section-header">
          <span class="section-label">Transformacion digital</span>
          <h2 class="section-title">Gestion Digital <span>de Documentos</span></h2>
          <p class="section-description">
            La Gestion Digital de Informacion, en complemento con la automatizacion de los procesos, proporciona ventajas competitivas, ayuda a la toma de decisiones, identifica nuevas oportunidades y proporciona ahorros reales e inmediatos de costos y tiempo para tu organizacion.
          </p>
        </div>
        <ul class="feature-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Digitalizacion de alta calidad
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Software de gestion documental
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Automatizacion de workflows
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Almacenamiento seguro en nube
          </li>
        </ul>
      </div>
      <div class="intro-image">
        <img src="/images/aaut.png" alt="Gestion Digital de Documentos - Clover File Venezuela" />
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Servicios digitales</span>
      <h2 class="section-title">Nuestras <span>soluciones</span></h2>
      <p class="section-description">
        Ofrecemos un ecosistema completo de servicios digitales para transformar la gestion documental de tu empresa.
      </p>
    </div>

    <div class="grid grid--2">
      <!-- Escaneo de Documentos -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="9" y1="10" x2="15" y2="10"/>
            <line x1="9" y1="14" x2="15" y2="14"/>
            <line x1="9" y1="6" x2="15" y2="6"/>
          </svg>
        </div>
        <h3 class="service-card__title">Escaneo de Documentos, Planos y Libros</h3>
        <p class="service-card__text">
          Contamos con equipos de alta gama, manejados por profesionales que promueven altos estandares de calidad durante todo el proceso de conversion de archivos fisicos a digitales.
        </p>
        <ul class="service-card__features">
          <li>Escaneo de documentos de cualquier tamano</li>
          <li>Digitalizacion de planos y mapas</li>
          <li>Conversion de libros y expedientes</li>
          <li>Servicio in-house o en nuestras instalaciones</li>
        </ul>
      </div>

      <!-- Software de Gestion Documental -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3 class="service-card__title">Software de Gestion Documental</h3>
        <p class="service-card__text">
          Ponemos a tu disposicion plataformas integrales de gestion documental, disenadas para trabajar en entornos de alta exigencia, flexibles y parametrizables.
        </p>
        <ul class="service-card__features">
          <li>Centralizacion de informacion</li>
          <li>Accesos predefinidos por perfiles</li>
          <li>Busqueda avanzada con OCR</li>
          <li>Control de versiones y auditoria</li>
        </ul>
      </div>

      <!-- Automatizacion de Flujos -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v4"/>
            <path d="M12 18v4"/>
            <path d="M4.93 4.93l2.83 2.83"/>
            <path d="M16.24 16.24l2.83 2.83"/>
            <path d="M2 12h4"/>
            <path d="M18 12h4"/>
            <path d="M4.93 19.07l2.83-2.83"/>
            <path d="M16.24 7.76l2.83-2.83"/>
          </svg>
        </div>
        <h3 class="service-card__title">Automatizacion de Flujos de Trabajo</h3>
        <p class="service-card__text">
          Implementamos flujos de trabajo disenados a la medida, con tecnologias innovadoras, que permiten reducir el trabajo manual y evitar errores humanos.
        </p>
        <ul class="service-card__features">
          <li>Diseno de workflows personalizados</li>
          <li>Aprobaciones automaticas</li>
          <li>Notificaciones y alertas</li>
          <li>Integracion con sistemas existentes</li>
        </ul>
      </div>

      <!-- Almacenamiento en Nube -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          </svg>
        </div>
        <h3 class="service-card__title">Almacenamiento en Nube</h3>
        <p class="service-card__text">
          Respaldamos tus datos en nuestro servicio de Nube, brindando acceso 24 x 7 a la informacion, con capacidad de almacenamiento adaptada a tus necesidades.
        </p>
        <ul class="service-card__features">
          <li>Acceso 24/7 desde cualquier lugar</li>
          <li>Capacidad escalable</li>
          <li>Costos accesibles</li>
          <li>Acompanamiento en migracion</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="section section--dark">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestro proceso</span>
      <h2 class="section-title" style="color: var(--white);">Como <span>trabajamos</span></h2>
      <p class="section-description" style="color: rgba(255,255,255,0.7);">
        Un proceso estructurado para garantizar la calidad y seguridad de tu informacion.
      </p>
    </div>

    <div class="process-grid">
      <div class="process-step">
        <span class="process-number">01</span>
        <h3>Diagnostico</h3>
        <p>Evaluamos tu archivo actual, volumen de documentos y necesidades especificas.</p>
      </div>
      <div class="process-step">
        <span class="process-number">02</span>
        <h3>Preparacion</h3>
        <p>Clasificamos y organizamos los documentos para el proceso de digitalizacion.</p>
      </div>
      <div class="process-step">
        <span class="process-number">03</span>
        <h3>Digitalizacion</h3>
        <p>Escaneamos con equipos de alta resolucion y aplicamos OCR cuando es necesario.</p>
      </div>
      <div class="process-step">
        <span class="process-number">04</span>
        <h3>Control de Calidad</h3>
        <p>Verificamos cada documento digitalizado para garantizar legibilidad y precision.</p>
      </div>
      <div class="process-step">
        <span class="process-number">05</span>
        <h3>Indexacion</h3>
        <p>Catalogamos cada documento con metadatos para facilitar su busqueda.</p>
      </div>
      <div class="process-step">
        <span class="process-number">06</span>
        <h3>Entrega</h3>
        <p>Cargamos los documentos en tu plataforma o los entregamos en el formato acordado.</p>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Ventajas</span>
      <h2 class="section-title">Beneficios de la <span>gestion digital</span></h2>
    </div>

    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h4>Ahorro de tiempo</h4>
        <p>Encuentra cualquier documento en segundos, no en horas.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h4>Mayor seguridad</h4>
        <p>Control de acceso y trazabilidad de quien consulta cada documento.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h4>Espacio liberado</h4>
        <p>Reduce o elimina la necesidad de archivadores fisicos.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h4>Trabajo colaborativo</h4>
        <p>Multiples usuarios pueden acceder simultaneamente a la informacion.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        <h4>Reduccion de costos</h4>
        <p>Menos gastos en papel, almacenamiento fisico y busqueda manual.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <h4>Continuidad de negocio</h4>
        <p>Respaldos automaticos protegen tu informacion ante cualquier eventualidad.</p>
      </div>
    </div>
  </div>
</section>

<!-- Related Services -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Servicios complementarios</span>
      <h2 class="section-title">Soluciones <span>relacionadas</span></h2>
    </div>
    <div class="grid grid--3">
      <a href="/gestion-fisica" class="card card--highlight related-link">
        <div class="related-icon-container">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </div>
        <h3 class="card__title">Gestion Fisica</h3>
        <p class="card__text">Almacenamiento y custodia de documentos fisicos en instalaciones seguras.</p>
      </a>
      <a href="/almacen" class="card card--highlight related-link">
        <img src="/images/almanen.png" alt="" class="related-icon" />
        <h3 class="card__title">Almacen</h3>
        <p class="card__text">Mas de 70,000 m2 para almacenamiento de mercancias y documentos.</p>
      </a>
      <a href="/contacto" class="card card--highlight related-link">
        <div class="related-icon-container">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h3 class="card__title">Contacto</h3>
        <p class="card__text">Solicita una cotizacion personalizada para tu proyecto.</p>
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">Transforma tu gestion documental hoy</h2>
    <p class="cta-banner__text">Contactanos y descubre como la digitalizacion puede optimizar tu empresa.</p>
    <a href="/contacto" class="btn btn--white">Solicitar cotizacion</a>
  </div>
</section>

<style>
  /* Stats Section */
  .stats-section {
    background: var(--gray-900);
    padding: var(--space-xl) 0;
  }

  .stats-bar--highlight {
    border-top: none;
    justify-content: space-between;
    padding: var(--space-lg) 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-lg);
  }

  .stat {
    text-align: center;
    flex: 1;
    min-width: 150px;
  }

  .stats-bar--highlight .stat__number {
    color: var(--white);
    font-size: 2.5rem;
    font-weight: 700;
    display: block;
  }

  .stats-bar--highlight .stat__number--green {
    color: var(--clover-green);
  }

  .stats-bar--highlight .stat__label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
    display: block;
    margin-top: var(--space-xs);
  }

  /* Intro Grid */
  .intro-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 768px) {
    .intro-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .intro-image {
    border-radius: var(--radius-md);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-xl);
    background: var(--gray-100);
  }

  .intro-image img {
    max-width: 300px;
    height: auto;
  }

  /* Service Cards */
  .service-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    transition: all var(--transition-base);
  }

  .service-card:hover {
    border-color: var(--clover-green);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  .service-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: rgba(0, 166, 81, 0.1);
    border-radius: var(--radius-md);
    color: var(--clover-green);
    margin-bottom: var(--space-lg);
  }

  .service-card__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-md);
  }

  .service-card__text {
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .service-card__features {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .service-card__features li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--gray-700);
    font-size: 0.9375rem;
  }

  .service-card__features li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 6px;
    height: 6px;
    background: var(--clover-green);
    border-radius: 50%;
  }

  /* Process Section */
  .process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
    margin-top: var(--space-2xl);
  }

  .process-step {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    position: relative;
    transition: all var(--transition-base);
  }

  .process-step:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 166, 81, 0.3);
  }

  .process-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--clover-green);
    opacity: 0.5;
    margin-bottom: var(--space-md);
  }

  .process-step h3 {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
  }

  .process-step p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  /* Benefits Grid */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
    margin-top: var(--space-2xl);
  }

  .benefit-card {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: var(--white);
    border-radius: var(--radius-md);
    border: 1px solid var(--gray-200);
    transition: all var(--transition-base);
  }

  .benefit-card:hover {
    border-color: var(--clover-green);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .benefit-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(0, 166, 81, 0.1);
    border-radius: var(--radius-md);
    color: var(--clover-green);
    flex-shrink: 0;
  }

  .benefit-card h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.25rem;
  }

  .benefit-card p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }

  /* Related Links */
  .related-link {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .related-icon {
    width: 48px;
    height: 48px;
    margin-bottom: var(--space-md);
  }

  .related-icon-container {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 166, 81, 0.1);
    border-radius: var(--radius-md);
    color: var(--clover-green);
    margin-bottom: var(--space-md);
  }

  /* Responsive */
  @media (max-width: 767px) {
    .stats-bar--highlight {
      flex-direction: column;
      text-align: center;
    }

    .process-grid {
      grid-template-columns: 1fr;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
