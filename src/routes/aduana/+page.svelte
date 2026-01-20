<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['aduana'];
  const faqs = serviceFAQs['aduana'];

  const jsonLd = [
    getServiceSchema({
      name: 'Servicios Aduaneros',
      description: seo.description,
      url: '/aduana',
      image: '/images/asesoria3.jpg'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Servicios Aduaneros', url: '/aduana' }
    ]),
    getFAQSchema(faqs)
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  image="/images/asesoria3.jpg"
  {jsonLd}
/>

<PageHero
  subtitle="Servicios Aduaneros"
  title="<span>+</span>Soluciones aduaneras"
  description="Te ayudamos con tus gestiones de aduana para que sigas enfocado en tus prioridades."
  image="/images/asesoria3.jpg"
/>

<section class="intro section">
  <div class="container">
    <div class="intro-grid">
      <div class="intro-content">
        <div class="section-header">
          <span class="section-label">Nuestra Experiencia</span>
          <h2 class="section-title"><span>+</span>Cerca <span>+</span>Gestiones efectivas</h2>
        </div>
        <p class="lead">
          Gestionamos tus procesos aduaneros de forma expedita y eficiente; de manera que tu mercancía pueda continuar por las etapas de la cadena de suministros sin contratiempos ni gastos adicionales.
        </p>
        <p class="section-description">
          Somos expertos en regímenes aduaneros capaces de resolver tus necesidades mediante soluciones <strong>+innovadoras e integrales</strong> que resulten en una nacionalización expedita.
        </p>
        <ul class="feature-list">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Nacionalización rápida
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Regímenes especiales
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Asesoría integral
          </li>
        </ul>
      </div>
      <div class="intro-stats">
        <div class="stat-card stat-card--highlight">
          <span class="stat-number">+60</span>
          <span class="stat-label">Años de experiencia</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">100%</span>
          <span class="stat-label">Cumplimiento normativo</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">24h</span>
          <span class="stat-label">Respuesta garantizada</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="services section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestros Servicios</span>
      <h2 class="section-title">Servicios Aduaneros <span>+</span>Completos</h2>
      <p class="section-description">Ofrecemos una gama completa de servicios para facilitar sus operaciones de comercio exterior con la máxima eficiencia.</p>
    </div>

    <div class="services-grid">
      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <h3 class="card__title">Clasificación Arancelaria</h3>
        <p class="card__text">Determinamos correctamente la partida arancelaria de su mercancía para evitar contingencias fiscales y optimizar costos de importación.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 1v4M12 19v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M1 12h4M19 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        </div>
        <h3 class="card__title">Valoración Aduanera</h3>
        <p class="card__text">Calculamos el valor en aduana de su mercancía de acuerdo a las normas vigentes, asegurando transparencia y cumplimiento.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h3 class="card__title">Regímenes Especiales</h3>
        <p class="card__text">Solicitud y tramitación de regímenes de liberación, suspensión y otros regímenes aduaneros especiales según su necesidad operativa.</p>
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
        <h3 class="card__title">Representación ante Aduana</h3>
        <p class="card__text">Representamos sus intereses y resolvemos discrepancias ante las autoridades aduaneras con profesionalismo y experiencia comprobada.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </div>
        <h3 class="card__title">Consultoría Aduanera</h3>
        <p class="card__text">Asesoría experta en importación, exportación, tránsito y regulación aduanera vigente en Venezuela para optimizar sus operaciones.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        </div>
        <h3 class="card__title">Arancel de Aduanas</h3>
        <p class="card__text">Aplicación correcta del arancel de aduanas y demás leyes aplicables en materia aduanera para su operación comercial.</p>
      </div>
    </div>
  </div>
</section>

<section class="expertise section section--dark">
  <div class="container">
    <div class="expertise-grid">
      <div class="expertise-content">
        <div class="section-header">
          <span class="section-label">Especialistas en Regímenes</span>
          <h2 class="section-title section-title--white"><span>+</span>Expertos en regímenes aduaneros especiales</h2>
        </div>
        <p class="expertise-description">
          Nuestra amplia experiencia nos permite identificar las mejores opciones para su operación, optimizando tiempos de nacionalización y reduciendo costos operativos sin comprometer el cumplimiento normativo.
        </p>
        <div class="expertise-benefits">
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="benefit-text">
              <h4>Nacionalización Expedita</h4>
              <p>Reducimos los tiempos de desaduanamiento para que su mercancía llegue rápido a destino.</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div class="benefit-text">
              <h4>Cumplimiento Garantizado</h4>
              <p>Aseguramos el cumplimiento de todas las normativas aduaneras vigentes.</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div class="benefit-text">
              <h4>Optimización de Costos</h4>
              <p>Identificamos oportunidades para reducir sus costos operativos aduaneros.</p>
            </div>
          </div>
        </div>
        <a href="/contacto" class="btn btn--primary">Consultar ahora</a>
      </div>
      <div class="expertise-visual">
        <div class="visual-card">
          <span class="visual-label">Tiempo promedio</span>
          <span class="visual-number">48h</span>
          <span class="visual-desc">Nacionalización de mercancía</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="process section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Proceso</span>
      <h2 class="section-title">Cómo <span>+</span>Trabajamos</h2>
      <p class="section-description">Un proceso claro y eficiente para gestionar sus operaciones aduaneras.</p>
    </div>

    <div class="process-grid">
      <div class="process-step">
        <span class="step-number">01</span>
        <h4>Análisis</h4>
        <p>Evaluamos su mercancía y requerimientos específicos.</p>
      </div>
      <div class="process-step">
        <span class="step-number">02</span>
        <h4>Clasificación</h4>
        <p>Determinamos la partida arancelaria correcta.</p>
      </div>
      <div class="process-step">
        <span class="step-number">03</span>
        <h4>Documentación</h4>
        <p>Preparamos y revisamos toda la documentación necesaria.</p>
      </div>
      <div class="process-step">
        <span class="step-number">04</span>
        <h4>Gestión</h4>
        <p>Tramitamos ante las autoridades aduaneras.</p>
      </div>
      <div class="process-step">
        <span class="step-number">05</span>
        <h4>Entrega</h4>
        <p>Liberamos su mercancía para continuar en la cadena.</p>
      </div>
    </div>
  </div>
</section>

<section class="other-services section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Más Servicios</span>
      <h2 class="section-title">Servicios <span>+</span>Relacionados</h2>
    </div>
    <div class="related-grid">
      <a href="/impot" class="related-card">
        <img src="/images/carga+internacional_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Carga Internacional" />
        <h3>Carga Internacional</h3>
        <p>Servicios de importación y exportación vía marítima y aérea.</p>
      </a>
      <a href="/almacen" class="related-card">
        <img src="/images/almacen_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Almacén" />
        <h3>Almacén</h3>
        <p>Almacenamiento y custodia de mercancía nacionalizada.</p>
      </a>
      <a href="/logistica-transporte-terrestre" class="related-card">
        <img src="/images/transporte-terrestre_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Transporte Terrestre" />
        <h3>Transporte Terrestre</h3>
        <p>Distribución nacional de su mercancía.</p>
      </a>
    </div>
  </div>
</section>

<section class="cta section">
  <div class="container">
    <div class="cta-content">
      <h2>¿Necesita gestionar sus operaciones aduaneras?</h2>
      <p>Contáctenos y obtenga asesoría personalizada de nuestros expertos.</p>
      <a href="/contacto" class="btn btn--primary">Solicitar asesoría</a>
    </div>
  </div>
</section>

<style>
  /* Intro Section */
  .intro-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: start;
  }

  @media (min-width: 768px) {
    .intro-grid {
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
    }
  }

  .intro-content .section-header {
    margin-bottom: var(--space-xl);
  }

  .lead {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--gray-700);
    margin-bottom: var(--space-lg);
  }

  .intro-content .section-description {
    margin-bottom: var(--space-xl);
  }

  .intro-stats {
    display: grid;
    gap: var(--space-lg);
  }

  .stat-card {
    padding: var(--space-xl);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    text-align: center;
    transition: all var(--transition-base);
  }

  .stat-card:hover {
    border-color: var(--gray-300);
    box-shadow: var(--shadow-md);
  }

  .stat-card--highlight {
    background: var(--clover-green);
    border-color: var(--clover-green);
  }

  .stat-card--highlight .stat-number,
  .stat-card--highlight .stat-label {
    color: var(--white);
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
    font-weight: 500;
  }

  /* Services Grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
  }

  /* Expertise Section */
  .expertise-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 768px) {
    .expertise-grid {
      grid-template-columns: 1.5fr 1fr;
    }
  }

  .expertise-content .section-header {
    margin-bottom: var(--space-xl);
  }

  .section-title--white {
    color: var(--white);
  }

  .expertise-description {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: var(--gray-400);
    margin-bottom: var(--space-2xl);
  }

  .expertise-benefits {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
  }

  .benefit-item {
    display: flex;
    gap: var(--space-lg);
    align-items: flex-start;
  }

  .benefit-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(0, 166, 81, 0.15);
    border-radius: var(--radius-md);
    color: var(--clover-green);
  }

  .benefit-text h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: var(--space-xs);
  }

  .benefit-text p {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }

  .expertise-visual {
    display: flex;
    justify-content: center;
  }

  .visual-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    background: rgba(0, 166, 81, 0.1);
    border: 2px solid var(--clover-green);
    border-radius: var(--radius-lg);
    text-align: center;
  }

  .visual-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--clover-green);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-sm);
  }

  .visual-number {
    font-size: 4rem;
    font-weight: 700;
    color: var(--white);
    line-height: 1;
    margin-bottom: var(--space-sm);
  }

  .visual-desc {
    font-size: 0.875rem;
    color: var(--gray-400);
    max-width: 150px;
  }

  /* Process */
  .process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-lg);
  }

  .process-step {
    text-align: center;
    padding: var(--space-xl);
    background: var(--gray-50);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }

  .process-step:hover {
    background: var(--white);
    box-shadow: var(--shadow-md);
  }

  .step-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--clover-green);
    margin-bottom: var(--space-md);
  }

  .process-step h4 {
    margin-bottom: var(--space-sm);
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .process-step p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }

  /* Related Services */
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
  }

  .related-card {
    padding: var(--space-xl);
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    text-align: center;
    transition: all var(--transition-base);
  }

  .related-card:hover {
    border-color: var(--clover-green);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .related-card img {
    width: 56px;
    height: 56px;
    margin: 0 auto var(--space-lg);
  }

  .related-card h3 {
    margin-bottom: var(--space-sm);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .related-card p {
    font-size: 0.9375rem;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* CTA */
  .cta-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .cta-content h2 {
    margin-bottom: var(--space-md);
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  .cta-content p {
    margin-bottom: var(--space-xl);
    color: var(--gray-600);
    font-size: 1.0625rem;
  }
</style>
