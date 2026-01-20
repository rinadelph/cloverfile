<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['gestion-fisica'];
  const faqs = serviceFAQs['gestion-fisica'];

  const jsonLd = [
    getServiceSchema({
      name: 'Gestion Fisica de Documentos',
      description: seo.description,
      url: '/gestion-fisica',
      image: '/images/cajas.png'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Gestion Fisica', url: '/gestion-fisica' }
    ]),
    getFAQSchema(faqs)
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  image="/images/cajas.png"
  {jsonLd}
/>

<PageHero
  subtitle="Gestion Fisica"
  title="+Custodiamos tu informacion"
  description="Almacenamiento seguro de documentos fisicos con acceso inmediato cuando lo necesites. Liberamos tu espacio y protegemos tu patrimonio documental."
/>

<!-- Stats Bar -->
<section class="stats-section">
  <div class="container">
    <div class="stats-bar stats-bar--highlight">
      <div class="stat">
        <span class="stat__number stat__number--green">24h</span>
        <span class="stat__label">Acceso a documentos</span>
      </div>
      <div class="stat">
        <span class="stat__number">CCTV</span>
        <span class="stat__label">Vigilancia permanente</span>
      </div>
      <div class="stat">
        <span class="stat__number">10+</span>
        <span class="stat__label">Anos vida util cajas</span>
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
          <span class="section-label">Almacenamiento especializado</span>
          <h2 class="section-title">Gestion Fisica <span>de Documentos</span></h2>
          <p class="section-description">
            Permite la clasificacion, organizacion y gestion de las actividades de tu empresa, que requieren mantener en soporte fisico, sin limitar tu espacio y garantizando la recuperacion inmediata de tu informacion.
          </p>
        </div>
        <ul class="feature-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Almacenes climatizados y seguros
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Sistema de inventario computarizado
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Prestamo y devolucion eficiente
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Boveda para medios magneticos
          </li>
        </ul>
      </div>
      <div class="intro-image">
        <img src="/images/cajas.png" alt="Gestion Fisica de Documentos - Clover File Venezuela" />
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Servicios de custodia</span>
      <h2 class="section-title">Nuestras <span>soluciones</span></h2>
      <p class="section-description">
        Ofrecemos un ecosistema completo para la gestion y custodia de tus documentos fisicos.
      </p>
    </div>

    <div class="grid grid--3">
      <!-- Cajas -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <h3 class="service-card__title">Cajas de Archivo</h3>
        <p class="service-card__text">
          Fabricadas con carton corrugado doble pared de alta calidad. Protegen contra cambios de temperatura, humedad y contaminantes externos.
        </p>
        <ul class="service-card__features">
          <li>Dimensiones: 41cm x 25cm x 32cm</li>
          <li>Soportan hasta 25kg de peso</li>
          <li>Apilamiento maximo de 5 cajas</li>
          <li>Vida util estimada de 10 anos</li>
        </ul>
      </div>

      <!-- Almacenes -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <h3 class="service-card__title">Almacenes Especializados</h3>
        <p class="service-card__text">
          Garantizamos confidencialidad, seguridad, integridad y custodia de tus archivos fisicos con sistema computarizado de consulta 24 horas.
        </p>
        <ul class="service-card__features">
          <li>Control de humedad y temperatura</li>
          <li>Sistema contra incendio</li>
          <li>CCTV y vigilancia 24/7</li>
          <li>Fumigacion periodica preventiva</li>
        </ul>
      </div>

      <!-- Organizacion e Inventario -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h3 class="service-card__title">Organizacion e Inventario</h3>
        <p class="service-card__text">
          Personal experto para asesoria en Gestion Documental, Inventarios e Indexacion de tus archivos, garantizando tiempos y confidencialidad.
        </p>
        <ul class="service-card__features">
          <li>Levantamiento de inventarios</li>
          <li>Formularios detallados y agiles</li>
          <li>Recuperacion de archivos contaminados</li>
          <li>Servicio in-house disponible</li>
        </ul>
      </div>

      <!-- Traslado de Documentos -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
        <h3 class="service-card__title">Traslado de Documentos</h3>
        <p class="service-card__text">
          Trasladamos tu patrimonio documental con protocolo que garantiza la seguridad, organizacion y registros de origen y destino.
        </p>
        <ul class="service-card__features">
          <li>Vehiculos propios con GPS</li>
          <li>Adaptados al tipo de material</li>
          <li>Alcance nacional</li>
          <li>Tiempos flexibles</li>
        </ul>
      </div>

      <!-- Prestamos y Reingresos -->
      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="17 1 21 5 17 9"/>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
            <polyline points="7 23 3 19 7 15"/>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
          </svg>
        </div>
        <h3 class="service-card__title">Prestamos y Reingresos</h3>
        <p class="service-card__text">
          Recupera tu informacion en tiempo record. Sistema de etiquetado por codigo de barras para ubicacion inmediata de documentos.
        </p>
        <ul class="service-card__features">
          <li>Consulta digital o fisica</li>
          <li>Criterios de urgencia personalizados</li>
          <li>Procesos de confidencialidad</li>
          <li>Solo personal autorizado</li>
        </ul>
      </div>

      <!-- Boveda de Medios Magneticos -->
      <div class="service-card service-card--featured">
        <span class="service-badge">Especializado</span>
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <h3 class="service-card__title">Boveda de Medios Magneticos</h3>
        <p class="service-card__text">
          Bovedas especializadas con las mejores practicas de almacenaje, protegidas por sistemas de seguridad biometricos.
        </p>
        <ul class="service-card__features">
          <li>Sistema CCTV y contra incendio</li>
          <li>Control de inventario computarizado</li>
          <li>Acceso biometrico restringido</li>
          <li>Climatizacion controlada</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Security Section -->
<section class="section section--dark">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Infraestructura</span>
      <h2 class="section-title" style="color: var(--white);">Seguridad <span>garantizada</span></h2>
      <p class="section-description" style="color: rgba(255,255,255,0.7);">
        Nuestras instalaciones cumplen con los mas altos estandares de seguridad y preservacion documental.
      </p>
    </div>

    <div class="security-grid">
      <div class="security-card">
        <div class="security-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        </div>
        <h3>CCTV 24/7</h3>
        <p>Circuito cerrado de television con monitoreo permanente de todas las areas.</p>
      </div>
      <div class="security-card">
        <div class="security-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3>Cerco Electrico</h3>
        <p>Perimetro protegido con sistema de cerco electrico y alarmas.</p>
      </div>
      <div class="security-card">
        <div class="security-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
          </svg>
        </div>
        <h3>Control Climatico</h3>
        <p>Humedad y temperatura controladas para preservar documentos.</p>
      </div>
      <div class="security-card">
        <div class="security-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <h3>Sistema Contra Incendio</h3>
        <p>Iluminacion que evita igniciones y sistemas de extincion automaticos.</p>
      </div>
      <div class="security-card">
        <div class="security-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h3>Acceso Biometrico</h3>
        <p>Control de acceso restringido con tecnologia biometrica.</p>
      </div>
      <div class="security-card">
        <div class="security-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <h3>Fumigacion Periodica</h3>
        <p>Tratamientos preventivos contra agentes que puedan deteriorar documentos.</p>
      </div>
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestro proceso</span>
      <h2 class="section-title">Como <span>funciona</span></h2>
    </div>

    <div class="process-timeline">
      <div class="timeline-item">
        <div class="timeline-marker">1</div>
        <div class="timeline-content">
          <h3>Recoleccion</h3>
          <p>Recogemos tus documentos en tus instalaciones con vehiculos especializados y personal capacitado.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker">2</div>
        <div class="timeline-content">
          <h3>Inventario</h3>
          <p>Catalogamos cada caja y documento con codigo de barras para ubicacion inmediata.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker">3</div>
        <div class="timeline-content">
          <h3>Almacenamiento</h3>
          <p>Ubicamos tus documentos en estanterias disenadas bajo estandares internacionales.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker">4</div>
        <div class="timeline-content">
          <h3>Acceso</h3>
          <p>Cuando necesites un documento, lo ubicamos y entregamos en tiempo record.</p>
        </div>
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
      <a href="/gestion-digital" class="card card--highlight related-link">
        <div class="related-icon-container">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3 class="card__title">Gestion Digital</h3>
        <p class="card__text">Digitalizacion de documentos y software de gestion documental.</p>
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
    <h2 class="cta-banner__title">Libera espacio, gana productividad</h2>
    <p class="cta-banner__text">Contactanos y descubre como podemos custodiar tu patrimonio documental.</p>
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
    max-width: 200px;
    height: auto;
  }

  /* Service Cards */
  .service-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    transition: all var(--transition-base);
    position: relative;
  }

  .service-card:hover {
    border-color: var(--clover-green);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  .service-card--featured {
    border-color: var(--clover-green);
    background: linear-gradient(135deg, rgba(0, 166, 81, 0.03) 0%, var(--white) 100%);
  }

  .service-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 166, 81, 0.1);
    color: var(--clover-green);
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
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

  /* Security Grid */
  .security-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
    margin-top: var(--space-2xl);
  }

  .security-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    text-align: center;
    transition: all var(--transition-base);
  }

  .security-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 166, 81, 0.3);
  }

  .security-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: rgba(0, 166, 81, 0.15);
    border-radius: var(--radius-md);
    color: var(--clover-green);
    margin: 0 auto var(--space-lg);
  }

  .security-card h3 {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
  }

  .security-card p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  /* Process Timeline */
  .process-timeline {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    margin-top: var(--space-2xl);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .timeline-item {
    display: flex;
    gap: var(--space-lg);
    align-items: flex-start;
  }

  .timeline-marker {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--clover-green);
    color: var(--white);
    border-radius: 50%;
    font-size: 1.25rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .timeline-content {
    flex: 1;
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--gray-200);
  }

  .timeline-item:last-child .timeline-content {
    border-bottom: none;
  }

  .timeline-content h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.25rem;
  }

  .timeline-content p {
    color: var(--gray-600);
    line-height: 1.6;
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

    .security-grid {
      grid-template-columns: 1fr;
    }

    .timeline-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
