<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['cloverpack'];
  const faqs = serviceFAQs['cloverpack'];

  const jsonLd = [
    getServiceSchema({
      name: 'CloverPack - Embalaje Profesional',
      description: seo.description,
      url: '/cloverpack',
      image: '/images/logistica-interior.jpg'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'CloverPack', url: '/cloverpack' }
    ]),
    getFAQSchema(faqs)
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  image="/images/logistica-interior.jpg"
  {jsonLd}
/>

<PageHero
  subtitle="CloverPack"
  title="+Protección para tus envíos"
  description="Servicio de embalaje profesional con más de 60 años de experiencia protegiendo mercancías de todo tipo."
  image="/images/logistica-interior.jpg"
/>

<!-- Stats Bar -->
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-item__number">60+</span>
        <span class="stat-item__label">Años de Experiencia</span>
      </div>
      <div class="stat-item">
        <span class="stat-item__number">100%</span>
        <span class="stat-item__label">Materiales Certificados</span>
      </div>
      <div class="stat-item">
        <span class="stat-item__number">24/7</span>
        <span class="stat-item__label">Soporte Disponible</span>
      </div>
      <div class="stat-item">
        <span class="stat-item__number">5000+</span>
        <span class="stat-item__label">Envíos Protegidos</span>
      </div>
    </div>
  </div>
</section>

<!-- Introduction -->
<section class="section">
  <div class="container">
    <div class="intro-grid">
      <div class="intro-content">
        <div class="section-header">
          <span class="section-label">Embalaje Profesional</span>
          <h2 class="section-title">Protección integral para <span>cada tipo de carga</span></h2>
          <p class="section-description">
            En CloverPack nos especializamos en el embalaje seguro y profesional de todo tipo de artículos. Desde objetos delicados hasta maquinaria industrial, garantizamos la protección adecuada para cada tipo de mercancía.
          </p>
        </div>
        <ul class="feature-list">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Materiales de primera calidad
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Técnicas especializadas
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Personal capacitado
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Garantía de protección
          </li>
        </ul>
      </div>
      <div class="intro-image">
        <img src="/images/Clover+almacen.png" alt="CloverPack Embalaje Profesional" />
      </div>
    </div>
  </div>
</section>

<!-- Services -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestros Servicios</span>
      <h2 class="section-title">Soluciones de embalaje <span>profesional</span></h2>
      <p class="section-description">Protección personalizada para cada tipo de envío, desde artículos delicados hasta maquinaria industrial.</p>
    </div>

    <div class="grid grid--3">
      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <h3 class="card__title">Embalaje Estándar</h3>
        <p class="card__text">Protección básica para artículos generales con cajas de cartón de alta resistencia y materiales de relleno profesional.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3 class="card__title">Embalaje Especializado</h3>
        <p class="card__text">Para objetos frágiles, antigüedades, obras de arte y artículos de alto valor que requieren protección especial.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
        </div>
        <h3 class="card__title">Embalaje Industrial</h3>
        <p class="card__text">Soluciones para maquinaria, equipos pesados y mercancía industrial con protección reforzada y técnicas especializadas.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <h3 class="card__title">Embalaje para Mudanzas</h3>
        <p class="card__text">Servicio completo de empaque para mudanzas residenciales y comerciales, nacionales e internacionales.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
        <h3 class="card__title">Cajas a Medida</h3>
        <p class="card__text">Fabricación de embalajes personalizados según las dimensiones exactas de su mercancía para máxima protección.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <h3 class="card__title">Verificación y Documentación</h3>
        <p class="card__text">Control de calidad del embalaje con documentación fotográfica completa de todo el proceso.</p>
      </div>
    </div>
  </div>
</section>

<!-- Materials -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Calidad Garantizada</span>
      <h2 class="section-title">Materiales de <span>primera calidad</span></h2>
      <p class="section-description">Utilizamos únicamente materiales certificados para garantizar la máxima protección de su mercancía.</p>
    </div>

    <div class="materials-grid">
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Cartón corrugado de alta resistencia</span>
      </div>
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Plástico burbuja multicapa</span>
      </div>
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Espuma de polietileno</span>
      </div>
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Esquineros protectores</span>
      </div>
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Stretch film industrial</span>
      </div>
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Cintas de seguridad</span>
      </div>
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Madera tratada para exportación</span>
      </div>
      <div class="material-item">
        <span class="material-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>Indicadores de impacto</span>
      </div>
    </div>
  </div>
</section>

<!-- Cargo Types -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Versatilidad</span>
      <h2 class="section-title">Protección para <span>todo tipo de carga</span></h2>
      <p class="section-description">Experiencia comprobada en el embalaje de mercancías de diversas industrias y sectores.</p>
    </div>

    <div class="industry-tags">
      <span class="industry-tag industry-tag--primary">Maquinaria Industrial</span>
      <span class="industry-tag">Equipos Electrónicos</span>
      <span class="industry-tag">Obras de Arte</span>
      <span class="industry-tag">Antigüedades</span>
      <span class="industry-tag industry-tag--primary">Mobiliario</span>
      <span class="industry-tag">Equipos Médicos</span>
      <span class="industry-tag">Cristalería</span>
      <span class="industry-tag industry-tag--primary">Autopartes</span>
      <span class="industry-tag">Instrumentos Musicales</span>
      <span class="industry-tag">Equipos de Laboratorio</span>
    </div>
  </div>
</section>

<!-- Why Choose Us -->
<section class="section section--dark">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestra Diferencia</span>
      <h2 class="section-title" style="color: var(--white);">Por qué elegir <span>CloverPack</span></h2>
    </div>

    <div class="benefits-grid">
      <div class="benefit-card">
        <span class="benefit-number">01</span>
        <h4>Experiencia Comprobada</h4>
        <p>Más de 60 años de experiencia en el manejo y protección de todo tipo de mercancías a nivel nacional e internacional.</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-number">02</span>
        <h4>Personal Capacitado</h4>
        <p>Equipo especializado en técnicas de embalaje profesional y manejo de carga delicada con certificaciones vigentes.</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-number">03</span>
        <h4>Servicio Integral</h4>
        <p>Combinamos embalaje con almacenamiento y transporte para una solución logística completa bajo un solo proveedor.</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-number">04</span>
        <h4>Garantía Total</h4>
        <p>Respaldamos nuestro trabajo con garantía de satisfacción y cobertura de seguro en cada servicio realizado.</p>
      </div>
    </div>
  </div>
</section>

<!-- Process -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Metodología</span>
      <h2 class="section-title">Nuestro <span>proceso</span></h2>
      <p class="section-description">Un enfoque sistemático para garantizar la máxima protección de su mercancía.</p>
    </div>

    <div class="process-grid">
      <div class="process-step">
        <div class="process-step__number">1</div>
        <h4 class="process-step__title">Evaluación</h4>
        <p class="process-step__text">Analizamos las características de su mercancía para determinar el tipo de embalaje óptimo.</p>
      </div>
      <div class="process-step">
        <div class="process-step__number">2</div>
        <h4 class="process-step__title">Planificación</h4>
        <p class="process-step__text">Diseñamos una solución personalizada con los materiales y técnicas adecuadas.</p>
      </div>
      <div class="process-step">
        <div class="process-step__number">3</div>
        <h4 class="process-step__title">Embalaje</h4>
        <p class="process-step__text">Ejecutamos el proceso con personal capacitado siguiendo protocolos estrictos.</p>
      </div>
      <div class="process-step">
        <div class="process-step__number">4</div>
        <h4 class="process-step__title">Verificación</h4>
        <p class="process-step__text">Control de calidad final con documentación fotográfica del proceso completo.</p>
      </div>
    </div>
  </div>
</section>

<!-- Related Services -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Servicios Complementarios</span>
      <h2 class="section-title">Servicios <span>relacionados</span></h2>
    </div>

    <div class="grid grid--3">
      <a href="/almacen" class="card card--highlight related-card">
        <img src="/images/almacen_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-card__icon" />
        <h3 class="card__title">Almacén</h3>
        <p class="card__text">Almacenamiento seguro de su mercancía embalada en instalaciones controladas.</p>
      </a>
      <a href="/logistica-transporte-terrestre" class="card card--highlight related-card">
        <img src="/images/transporte-terrestre_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-card__icon" />
        <h3 class="card__title">Transporte Terrestre</h3>
        <p class="card__text">Distribución nacional segura de su mercancía embalada.</p>
      </a>
      <a href="/impot" class="card card--highlight related-card">
        <img src="/images/carga+internacional_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-card__icon" />
        <h3 class="card__title">Carga Internacional</h3>
        <p class="card__text">Envío internacional de su mercancía con embalaje especializado.</p>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">Necesita embalaje profesional?</h2>
    <p class="cta-banner__text">Contáctenos para una evaluación gratuita de sus necesidades de embalaje.</p>
    <a href="/contacto" class="btn btn--white">Solicitar cotización</a>
  </div>
</section>

<style>
  /* Stats Section */
  .stats-section {
    padding: var(--space-xl) 0;
    background: var(--white);
    border-bottom: 1px solid var(--gray-200);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-xl);
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-lg);
    }
  }

  .stat-item {
    text-align: center;
  }

  .stat-item__number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--clover-green);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .stat-item__label {
    display: block;
    margin-top: var(--space-xs);
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
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

  .intro-content .section-header {
    margin-bottom: var(--space-xl);
  }

  .intro-image {
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .intro-image img {
    width: 100%;
    height: auto;
  }

  /* Materials Grid */
  .materials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-md);
  }

  .material-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    font-size: 0.9375rem;
    color: var(--gray-700);
    transition: all var(--transition-base);
  }

  .material-item:hover {
    border-color: var(--clover-green);
    background: var(--white);
  }

  .material-icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--clover-green);
    color: var(--white);
    border-radius: var(--radius-sm);
  }

  /* Benefits Grid */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-lg);
  }

  .benefit-card {
    padding: var(--space-xl);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }

  .benefit-card:hover {
    border-color: var(--clover-green);
    background: rgba(255, 255, 255, 0.02);
  }

  .benefit-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--clover-green);
    margin-bottom: var(--space-md);
  }

  .benefit-card h4 {
    margin-bottom: var(--space-sm);
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 600;
  }

  .benefit-card p {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
  }

  /* Process Grid */
  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-lg);
  }

  @media (max-width: 900px) {
    .process-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .process-grid {
      grid-template-columns: 1fr;
    }
  }

  .process-step {
    text-align: center;
    padding: var(--space-xl);
  }

  .process-step__number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: var(--space-lg);
    background: var(--clover-green);
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 700;
    border-radius: var(--radius-sm);
  }

  .process-step__title {
    margin-bottom: var(--space-sm);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .process-step__text {
    font-size: 0.9375rem;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* Related Cards */
  .related-card {
    text-align: center;
    display: block;
  }

  .related-card__icon {
    width: 56px;
    height: 56px;
    margin: 0 auto var(--space-lg);
  }
</style>
