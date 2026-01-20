<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['logistica-integral-venezuela'];
  const faqs = serviceFAQs['logistica-integral-venezuela'];

  const jsonLd = [
    getServiceSchema({
      name: 'Logística Integral 3PL',
      description: seo.description,
      url: '/logistica-integral-venezuela',
      image: '/images/1.jpg'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Logística Integral', url: '/logistica-integral-venezuela' }
    ]),
    getFAQSchema(faqs)
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  image="/images/1.jpg"
  {jsonLd}
/>

<PageHero
  subtitle="Logistica Integral"
  title="Control total de tu carga"
  description="Manejamos con sencillez toda la complejidad de tu cadena de suministro. Una sola empresa, un solo punto de contacto, control absoluto desde el origen hasta el destino final."
  image="/images/1.jpg"
/>

<!-- Value Proposition -->
<section class="section">
  <div class="container">
    <div class="value-grid">
      <div class="value-content">
        <div class="section-header">
          <span class="section-label">Por que Clover</span>
          <h2 class="section-title">60 anos garantizando <span>el control de tu carga</span></h2>
          <p class="section-description">
            Desde 1964, hemos construido una operacion logistica que elimina la incertidumbre. Tu mercancia, nuestra responsabilidad completa.
          </p>
        </div>
        <ul class="feature-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Control puerta a puerta sin intermediarios
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Tracking en tiempo real
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Un solo punto de contacto
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Seguro integral de mercancia
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Operacion 100% propia
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Atencion personalizada
          </li>
        </ul>
      </div>
      <div class="value-image">
        <img src="/images/Clover+almacen.png" alt="Almacen Clover Venezuela" />
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="section section--gray">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">60<span class="stat-plus">+</span></span>
        <span class="stat-label">Anos de experiencia</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">5</span>
        <span class="stat-label">Continentes conectados</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">100</span>
        <span class="stat-label">Aliados estrategicos globales</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">24/7</span>
        <span class="stat-label">Monitoreo de carga</span>
      </div>
    </div>
  </div>
</section>

<!-- Global Alliances -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Red Global</span>
      <h2 class="section-title">Alianzas estrategicas <span>en todo el mundo</span></h2>
      <p class="section-description">
        Nuestra red de socios logisticos nos permite ofrecer rutas optimizadas, tiempos competitivos y tarifas preferenciales en cualquier ruta internacional.
      </p>
    </div>
    <div class="grid grid--3">
      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"/>
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2"/>
            <path d="M2 12H22"/>
            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22"/>
          </svg>
        </div>
        <h3 class="card__title">Cobertura Global</h3>
        <p class="card__text">Servicios maritimos, aereos y terrestres desde o hacia cualquier lugar del mundo. FCL, LCL, y carga aerea.</p>
      </div>
      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3 class="card__title">Socios Certificados</h3>
        <p class="card__text">Alianzas con agentes de carga y operadores logisticos certificados en los principales puertos y aeropuertos del mundo.</p>
      </div>
      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 1v22"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        <h3 class="card__title">Tarifas Competitivas</h3>
        <p class="card__text">Volumenes consolidados con nuestros aliados nos permiten ofrecer tarifas preferenciales y condiciones ventajosas.</p>
      </div>
    </div>
  </div>
</section>

<!-- Capabilities -->
<section class="section section--dark">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Capacidades 3PL</span>
      <h2 class="section-title" style="color: var(--white);">Cualquier carga, <span>cualquier destino</span></h2>
      <p class="section-description" style="color: rgba(255,255,255,0.7);">
        Desde paquetes urgentes hasta maquinaria pesada. Tenemos la experiencia y los recursos para mover tu carga con seguridad.
      </p>
    </div>
    <div class="grid grid--3">
      <div class="capability-card">
        <div class="capability-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
            <path d="M2 17L12 22L22 17"/>
            <path d="M2 12L12 17L22 12"/>
          </svg>
        </div>
        <h3>Carga Sobredimensionada</h3>
        <p>Experiencia comprobada en manejo de carga indivisible, extra pesada y de dimensiones especiales. Proyectos industriales y maquinaria pesada.</p>
      </div>
      <div class="capability-card">
        <div class="capability-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3>Carga Peligrosa</h3>
        <p>Certificacion y experiencia en manejo de materiales peligrosos segun normativas internacionales IMO, IATA y ADR.</p>
      </div>
      <div class="capability-card">
        <div class="capability-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
            <polygon points="12 15 17 21 7 21 12 15"/>
          </svg>
        </div>
        <h3>Hand Carrier Aereo</h3>
        <p>Servicio de courier dedicado para envios urgentes y de alto valor. Acompanamiento personal de la mercancia.</p>
      </div>
      <div class="capability-card">
        <div class="capability-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
            <path d="M12 6V12L16 14"/>
          </svg>
        </div>
        <h3>Seguro Puerta a Puerta</h3>
        <p>Proteccion completa de su mercancia durante todo el trayecto. Cobertura integral desde origen hasta destino final.</p>
      </div>
      <div class="capability-card">
        <div class="capability-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3>Tecnologia de Punta</h3>
        <p>Sistemas de tracking y gestion de inventarios en tiempo real. Control total de su cadena de suministro.</p>
      </div>
      <div class="capability-card">
        <div class="capability-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <h3>Almacenamiento 3PL</h3>
        <p>Almacenes propios con sistemas WMS. Picking, packing, etiquetado y preparacion de pedidos.</p>
      </div>
    </div>
  </div>
</section>

<!-- End-to-End Control -->
<section class="section">
  <div class="container">
    <div class="control-grid">
      <div class="control-content">
        <div class="section-header">
          <span class="section-label">Control Integral</span>
          <h2 class="section-title">Del origen al destino, <span>sin perder el control</span></h2>
        </div>
        <p class="control-text">
          Nuestro modelo de logistica integral elimina la fragmentacion de proveedores. Usted trata con un solo equipo que coordina aduana, transporte, almacenamiento y distribucion.
        </p>
        <div class="control-steps">
          <div class="control-step">
            <span class="step-number">01</span>
            <div class="step-content">
              <h4>Origen</h4>
              <p>Recoleccion, consolidacion y documentacion en el pais de origen.</p>
            </div>
          </div>
          <div class="control-step">
            <span class="step-number">02</span>
            <div class="step-content">
              <h4>Transito Internacional</h4>
              <p>Transporte maritimo, aereo o terrestre con seguimiento continuo.</p>
            </div>
          </div>
          <div class="control-step">
            <span class="step-number">03</span>
            <div class="step-content">
              <h4>Aduana</h4>
              <p>Nacionalizacion agil con nuestro equipo de agentes aduanales propios.</p>
            </div>
          </div>
          <div class="control-step">
            <span class="step-number">04</span>
            <div class="step-content">
              <h4>Destino Final</h4>
              <p>Almacenamiento, distribucion y entrega en el punto acordado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services Links -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Servicios Integrados</span>
      <h2 class="section-title">Todo bajo un mismo <span>techo</span></h2>
    </div>
    <div class="grid grid--4">
      <a href="/aduana" class="service-card">
        <div class="service-icon">
          <img src="/images/aduana_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" />
        </div>
        <h3>Aduana</h3>
        <p>Agentes aduanales propios para una nacionalizacion sin complicaciones.</p>
      </a>
      <a href="/logistica-transporte-terrestre" class="service-card">
        <div class="service-icon">
          <img src="/images/transporte-terrestre_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" />
        </div>
        <h3>Transporte Terrestre</h3>
        <p>Flota propia y aliados para cobertura nacional e internacional.</p>
      </a>
      <a href="/impot" class="service-card">
        <div class="service-icon">
          <img src="/images/carga+internacional_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" />
        </div>
        <h3>Carga Internacional</h3>
        <p>Servicios maritimos y aereos desde y hacia cualquier destino.</p>
      </a>
      <a href="/almacen" class="service-card">
        <div class="service-icon">
          <img src="/images/almacen_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" />
        </div>
        <h3>Almacen</h3>
        <p>Almacenamiento con sistemas WMS y servicios de valor agregado.</p>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">Simplifique su logistica hoy</h2>
    <p class="cta-banner__text">Deje la complejidad en nuestras manos. Mas de 60 anos de experiencia respaldan cada operacion.</p>
    <a href="/contacto" class="btn btn--white">Solicitar cotizacion</a>
  </div>
</section>

<style>
  /* Value Grid */
  .value-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 768px) {
    .value-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .value-content .feature-list {
    margin-top: var(--space-xl);
  }

  .value-image {
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .value-image img {
    width: 100%;
    height: auto;
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-xl);
    text-align: center;
  }

  .stat-item {
    padding: var(--space-xl);
  }

  .stat-number {
    display: block;
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--gray-900);
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .stat-plus {
    color: var(--clover-green);
  }

  .stat-label {
    display: block;
    margin-top: var(--space-sm);
    font-size: 0.875rem;
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Capability Cards (Dark Section) */
  .capability-card {
    padding: var(--space-xl);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }

  .capability-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--clover-green);
  }

  .capability-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin-bottom: var(--space-lg);
    background: rgba(0, 166, 81, 0.15);
    border-radius: var(--radius-md);
    color: var(--clover-green);
  }

  .capability-card h3 {
    margin-bottom: var(--space-sm);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--white);
  }

  .capability-card p {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
  }

  /* Control Section */
  .control-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .control-text {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--gray-600);
    margin-bottom: var(--space-2xl);
  }

  .control-steps {
    display: grid;
    gap: var(--space-lg);
  }

  @media (min-width: 768px) {
    .control-steps {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .control-step {
    display: flex;
    gap: var(--space-lg);
    padding: var(--space-lg);
    background: var(--gray-50);
    border-radius: var(--radius-md);
  }

  .step-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--clover-green);
    line-height: 1;
  }

  .step-content h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--space-xs);
    color: var(--gray-900);
  }

  .step-content p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }

  /* Service Cards */
  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-xl);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    text-align: center;
    transition: all var(--transition-base);
  }

  .service-card:hover {
    border-color: var(--clover-green);
    box-shadow: var(--shadow-md);
  }

  .service-icon {
    width: 48px;
    height: 48px;
  }

  .service-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .service-card h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .service-card p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }
</style>
