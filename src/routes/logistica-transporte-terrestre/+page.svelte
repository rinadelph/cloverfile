<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['logistica-transporte-terrestre'];
  const faqs = serviceFAQs['logistica-transporte-terrestre'];

  const jsonLd = [
    getServiceSchema({
      name: 'Transporte Terrestre',
      description: seo.description,
      url: '/logistica-transporte-terrestre',
      image: '/images/transporte-terrestre.jpg'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Transporte Terrestre', url: '/logistica-transporte-terrestre' }
    ]),
    getFAQSchema(faqs)
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  image="/images/transporte-terrestre.jpg"
  {jsonLd}
/>

<PageHero
  subtitle="Transporte Terrestre"
  title="Flota Propia, Control Total"
  description="Distribución terrestre con nuestra propia flota y monitoreo GPS en tiempo real. +60 años garantizando entregas seguras en toda Venezuela."
  image="/images/transporte-terrestre.jpg"
/>

<!-- Stats Bar -->
<section class="stats-section">
  <div class="container">
    <div class="stats-bar">
      <div class="stat">
        <span class="stat__number stat__number--green">+60</span>
        <span class="stat__label">Años de Experiencia</span>
      </div>
      <div class="stat">
        <span class="stat__number stat__number--green">100%</span>
        <span class="stat__label">Flota Propia</span>
      </div>
      <div class="stat">
        <span class="stat__number stat__number--green">24/7</span>
        <span class="stat__label">Monitoreo GPS</span>
      </div>
      <div class="stat">
        <span class="stat__number stat__number--green">24</span>
        <span class="stat__label">Estados Cubiertos</span>
      </div>
    </div>
  </div>
</section>

<!-- Own Fleet Highlight -->
<section class="section">
  <div class="container">
    <div class="fleet-grid">
      <div class="fleet-content">
        <div class="section-header">
          <span class="section-label">Nuestra Flota</span>
          <h2 class="section-title">Vehículos Propios, <span>Mayor Control</span></h2>
          <p class="section-description">
            A diferencia de otros operadores, Clover cuenta con su propia flota de vehículos. Esto nos permite garantizar estándares de calidad, tiempos de respuesta y seguridad que no dependen de terceros.
          </p>
        </div>
        <ul class="feature-list">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Vehículos en óptimas condiciones
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Conductores capacitados
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Mantenimiento preventivo
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Capacidad variada de carga
          </li>
        </ul>
      </div>
      <div class="fleet-visual">
        <div class="fleet-card">
          <div class="fleet-card__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <h3 class="fleet-card__title">Flota 100% Propia</h3>
          <p class="fleet-card__text">Sin intermediarios ni subcontrataciones. Su carga siempre en nuestras manos.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- GPS Tracking Feature -->
<section class="section section--gray">
  <div class="container">
    <div class="gps-grid">
      <div class="gps-visual">
        <div class="gps-card">
          <div class="gps-card__header">
            <div class="gps-pulse"></div>
            <span>En Tránsito</span>
          </div>
          <div class="gps-card__content">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
            </svg>
            <div class="gps-card__info">
              <span class="gps-card__label">Ubicación Actual</span>
              <span class="gps-card__value">Autopista Regional del Centro</span>
            </div>
          </div>
        </div>
      </div>
      <div class="gps-content">
        <div class="section-header">
          <span class="section-label">Tecnología</span>
          <h2 class="section-title">Rastreo GPS <span>en Tiempo Real</span></h2>
          <p class="section-description">
            Monitoreo satelital las 24 horas del día, los 7 días de la semana. Conozca la ubicación exacta de su mercancía en cualquier momento y reciba alertas automáticas sobre el estado de su envío.
          </p>
        </div>
        <div class="gps-features">
          <div class="gps-feature">
            <div class="gps-feature__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h4>Ubicación Exacta</h4>
              <p>Coordenadas precisas de su carga en todo momento</p>
            </div>
          </div>
          <div class="gps-feature">
            <div class="gps-feature__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <h4>Alertas en Tiempo Real</h4>
              <p>Notificaciones de despacho, tránsito y entrega</p>
            </div>
          </div>
          <div class="gps-feature">
            <div class="gps-feature__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <h4>Seguridad Garantizada</h4>
              <p>Monitoreo continuo para prevenir incidentes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Service Features -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Servicios</span>
      <h2 class="section-title">Transporte Terrestre <span>Integral</span></h2>
      <p class="section-description">
        Soluciones completas de distribución terrestre respaldadas por más de seis décadas de experiencia en logística venezolana.
      </p>
    </div>

    <div class="grid grid--3">
      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h3 class="card__title">Seguridad de Carga</h3>
        <p class="card__text">Sistemas de resguardo especializados y vigilancia continua durante todo el trayecto de su mercancía.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
            <path d="M12 6V12L16 14"/>
          </svg>
        </div>
        <h3 class="card__title">Puntualidad</h3>
        <p class="card__text">Cumplimiento de tiempos de entrega con planificación optimizada de rutas y recursos propios.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3 class="card__title">Seguro de Carga</h3>
        <p class="card__text">Protección completa de su mercancía con cobertura durante todo el trayecto nacional.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3 class="card__title">Logística Integrada</h3>
        <p class="card__text">Coordinación con nuestros servicios de almacén y aduana para una solución completa.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <line x1="20" y1="8" x2="20" y2="14"/>
            <line x1="23" y1="11" x2="17" y2="11"/>
          </svg>
        </div>
        <h3 class="card__title">Personal Experto</h3>
        <p class="card__text">Equipo propio de conductores capacitados con años de experiencia en rutas nacionales.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
            <line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
        </div>
        <h3 class="card__title">Cobertura Total</h3>
        <p class="card__text">Llegamos a los 24 estados del país con nuestra red de distribución terrestre propia.</p>
      </div>
    </div>
  </div>
</section>

<!-- National Coverage -->
<section class="section section--dark">
  <div class="container">
    <div class="coverage-grid">
      <div class="coverage-content">
        <div class="section-header">
          <span class="section-label">Alcance</span>
          <h2 class="section-title" style="color: var(--white);">Cobertura <span>Nacional</span></h2>
          <p class="section-description" style="color: rgba(255,255,255,0.7);">
            Nuestra flota propia nos permite llegar a todos los rincones de Venezuela. Desde las principales ciudades hasta zonas industriales y comerciales en todo el país.
          </p>
        </div>
      </div>
      <div class="coverage-regions">
        <div class="region">
          <span class="region__name">Gran Caracas</span>
          <span class="region__detail">Centro de operaciones principal</span>
        </div>
        <div class="region">
          <span class="region__name">Región Central</span>
          <span class="region__detail">Carabobo, Aragua, Miranda</span>
        </div>
        <div class="region">
          <span class="region__name">Occidente</span>
          <span class="region__detail">Zulia, Lara, Falcón, Táchira</span>
        </div>
        <div class="region">
          <span class="region__name">Oriente</span>
          <span class="region__detail">Anzoátegui, Bolívar, Monagas</span>
        </div>
        <div class="region">
          <span class="region__name">Los Andes</span>
          <span class="region__detail">Mérida, Trujillo, Barinas</span>
        </div>
        <div class="region">
          <span class="region__name">Los Llanos</span>
          <span class="region__detail">Guárico, Apure, Cojedes</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Related Services -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Más Servicios</span>
      <h2 class="section-title">Servicios <span>Relacionados</span></h2>
    </div>
    <div class="grid grid--3">
      <a href="/almacen" class="card card--highlight">
        <img src="/images/almacen_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-icon" />
        <h3 class="card__title">Almacén</h3>
        <p class="card__text">Almacenamiento y custodia de mercancía nacionalizada con control de inventario.</p>
      </a>
      <a href="/aduana" class="card card--highlight">
        <img src="/images/aduana_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-icon" />
        <h3 class="card__title">Aduana</h3>
        <p class="card__text">Gestión aduanera experta para sus importaciones y exportaciones.</p>
      </a>
      <a href="/impot" class="card card--highlight">
        <img src="/images/carga+internacional_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-icon" />
        <h3 class="card__title">Carga Internacional</h3>
        <p class="card__text">Importación y exportación vía marítima y aérea a nivel mundial.</p>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">¿Necesita transportar su mercancía?</h2>
    <p class="cta-banner__text">Contáctenos y obtenga una cotización personalizada para su distribución terrestre con flota propia y rastreo GPS.</p>
    <a href="/contacto" class="btn btn--white">Solicitar Cotización</a>
  </div>
</section>

<style>
  /* Stats Section */
  .stats-section {
    background: var(--white);
    border-bottom: 1px solid var(--gray-200);
  }

  .stats-section .stats-bar {
    justify-content: space-between;
    border-top: none;
    padding: var(--space-xl) 0;
  }

  @media (max-width: 768px) {
    .stats-section .stats-bar {
      justify-content: center;
    }
  }

  /* Fleet Section */
  .fleet-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 768px) {
    .fleet-grid {
      grid-template-columns: 1.5fr 1fr;
    }
  }

  .fleet-visual {
    display: flex;
    justify-content: center;
  }

  .fleet-card {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    padding: var(--space-2xl);
    text-align: center;
    max-width: 280px;
  }

  .fleet-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-lg);
    background: rgba(0, 166, 81, 0.1);
    border-radius: var(--radius-md);
    color: var(--clover-green);
  }

  .fleet-card__title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-sm);
  }

  .fleet-card__text {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* GPS Section */
  .gps-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 768px) {
    .gps-grid {
      grid-template-columns: 1fr 1.5fr;
    }
  }

  .gps-visual {
    display: flex;
    justify-content: center;
  }

  .gps-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    max-width: 300px;
    box-shadow: var(--shadow-md);
  }

  .gps-card__header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--clover-green);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .gps-pulse {
    width: 8px;
    height: 8px;
    background: var(--clover-green);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .gps-card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    color: var(--clover-green);
  }

  .gps-card__info {
    text-align: center;
  }

  .gps-card__label {
    display: block;
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-xs);
  }

  .gps-card__value {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-800);
  }

  .gps-features {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    margin-top: var(--space-xl);
  }

  .gps-feature {
    display: flex;
    gap: var(--space-md);
    align-items: flex-start;
  }

  .gps-feature__icon {
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

  .gps-feature h4 {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-xs);
  }

  .gps-feature p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }

  /* Coverage Section */
  .coverage-grid {
    display: grid;
    gap: var(--space-3xl);
  }

  @media (min-width: 768px) {
    .coverage-grid {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }

  .coverage-regions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }

  @media (min-width: 1024px) {
    .coverage-regions {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .region {
    padding: var(--space-lg);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
  }

  .region__name {
    display: block;
    font-weight: 600;
    color: var(--clover-green);
    margin-bottom: var(--space-xs);
    font-size: 0.9375rem;
  }

  .region__detail {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
  }

  /* Related Services */
  .related-icon {
    width: 48px;
    height: 48px;
    margin-bottom: var(--space-md);
  }
</style>
