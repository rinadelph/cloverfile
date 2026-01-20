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
  image="/images/1.jpg"
  {jsonLd}
/>

<PageHero
  subtitle="Sobre Nosotros"
  title="Somos expertos en logística capaces de construir realidades a tu medida"
  description="Más de 60 años moviendo la industria venezolana. Tres generaciones de una familia comprometida con la excelencia logística en los sectores más exigentes."
  image="/images/1.jpg"
/>

<!-- Stats Bar -->
<section class="stats-section section--dark">
  <div class="container">
    <div class="stats-bar stats-bar--dark stats-bar--centered">
      <div class="stat">
        <span class="stat__number stat__number--green">+60</span>
        <span class="stat__label">Años de experiencia</span>
      </div>
      <div class="stat">
        <span class="stat__number stat__number--green">70,000</span>
        <span class="stat__label">m² de infraestructura</span>
      </div>
      <div class="stat">
        <span class="stat__number stat__number--green">6</span>
        <span class="stat__label">Países con presencia</span>
      </div>
      <div class="stat">
        <span class="stat__number stat__number--green">3</span>
        <span class="stat__label">Generaciones familiares</span>
      </div>
    </div>
  </div>
</section>

<!-- Our Story -->
<section class="section">
  <div class="container">
    <div class="story-grid">
      <div class="story-content">
        <div class="section-header">
          <span class="section-label">Nuestra Historia</span>
          <h2 class="section-title">Tres generaciones <span>construyendo confianza</span></h2>
          <p class="section-description">
            Desde 1964, Clover ha sido sinónimo de logística confiable en Venezuela. Lo que comenzó como una empresa familiar de agentes de carga se ha transformado en un líder regional en soluciones logísticas integrales 3PL.
          </p>
        </div>
        <div class="story-text">
          <p>
            Nuestra historia es la historia de una familia comprometida con el desarrollo industrial de Venezuela. Tres generaciones han dedicado su esfuerzo a perfeccionar cada aspecto de la cadena logística, entendiendo que detrás de cada contenedor hay un negocio que confía en nosotros.
          </p>
          <p>
            Hoy, con más de 60 años de trayectoria, 70,000 m² de infraestructura y presencia en 6 países, seguimos operando con los mismos valores que nos fundaron: compromiso, integridad y excelencia operativa.
          </p>
        </div>
      </div>
      <div class="story-timeline">
        <div class="timeline-card">
          <span class="timeline-year">1964</span>
          <h4>Primera Generación</h4>
          <p>Fundación como agentes de carga internacional. Establecemos las bases de servicio y confianza.</p>
        </div>
        <div class="timeline-card">
          <span class="timeline-year">1985</span>
          <h4>Segunda Generación</h4>
          <p>Expansión a transporte terrestre y almacenamiento. Inicio de operaciones con sector petrolero.</p>
        </div>
        <div class="timeline-card">
          <span class="timeline-year">2005</span>
          <h4>Tercera Generación</h4>
          <p>Modernización tecnológica y expansión regional. Consolidación como líder 3PL en Venezuela.</p>
        </div>
        <div class="timeline-card timeline-card--current">
          <span class="timeline-year">Hoy</span>
          <h4>Visión de Futuro</h4>
          <p>70,000 m² de infraestructura, presencia en 6 países y compromiso renovado con la industria.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Industry Expertise -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Sectores que Servimos</span>
      <h2 class="section-title">Especialistas en industrias <span>de alta exigencia</span></h2>
      <p class="section-description">
        Más de seis décadas trabajando con los sectores más demandantes nos han convertido en expertos en logística especializada.
      </p>
    </div>

    <div class="grid grid--4">
      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3 class="card__title">Petróleo y Gas</h3>
        <p class="card__text">Logística especializada para la industria petrolera venezolana. Manejo de equipos, químicos y materiales críticos con los más altos estándares de seguridad.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <h3 class="card__title">Energía</h3>
        <p class="card__text">Soluciones logísticas para el sector energético. Transporte de equipos de generación, transformadores y componentes de infraestructura eléctrica.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
            <path d="M12 8v8"/>
            <path d="M8 12h8"/>
          </svg>
        </div>
        <h3 class="card__title">Farmacéutica</h3>
        <p class="card__text">Cadena de frío certificada y almacenamiento controlado para productos farmacéuticos. Cumplimiento de normativas sanitarias y trazabilidad completa.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
          </svg>
        </div>
        <h3 class="card__title">Industrial</h3>
        <p class="card__text">Logística para manufactura y proyectos industriales. Manejo de carga sobredimensionada, maquinaria pesada y líneas de producción.</p>
      </div>
    </div>
  </div>
</section>

<!-- Values -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestros Valores</span>
      <h2 class="section-title">Los principios que <span>guían cada operación</span></h2>
      <p class="section-description">
        Después de 60 años, estos valores siguen siendo el fundamento de cada decisión que tomamos.
      </p>
    </div>

    <div class="grid grid--4">
      <div class="value-item">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <h3>Compromiso</h3>
        <p>Cada promesa es un contrato. Nos comprometemos con resultados, no con excusas.</p>
      </div>

      <div class="value-item">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3>Familia</h3>
        <p>Tres generaciones construyendo relaciones duraderas con clientes y colaboradores.</p>
      </div>

      <div class="value-item">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <path d="m22 4-10 10-3-3"/>
          </svg>
        </div>
        <h3>Integridad</h3>
        <p>Transparencia en cada operación. Su carga es nuestra responsabilidad.</p>
      </div>

      <div class="value-item">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h3>Puntualidad</h3>
        <p>Entendemos que el tiempo es dinero. Cumplimos porque su operación no espera.</p>
      </div>
    </div>
  </div>
</section>

<!-- Infrastructure -->
<section class="section section--dark">
  <div class="container">
    <div class="infrastructure-grid">
      <div class="infrastructure-content">
        <div class="section-header">
          <span class="section-label">Infraestructura</span>
          <h2 class="section-title section-title--white">70,000 m² <span>a su servicio</span></h2>
          <p class="section-description section-description--light">
            Contamos con la infraestructura más completa del país para garantizar que su carga esté siempre en las mejores condiciones.
          </p>
        </div>
        <ul class="infrastructure-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Almacenes fiscales y generales
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Cámaras de frío certificadas
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Patios para carga sobredimensionada
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Sistemas de seguridad 24/7
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 12 2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Ubicaciones estratégicas en todo el país
          </li>
        </ul>
      </div>
      <div class="infrastructure-stats">
        <div class="infra-stat">
          <span class="infra-stat__number">70,000</span>
          <span class="infra-stat__label">m² de almacenes</span>
        </div>
        <div class="infra-stat">
          <span class="infra-stat__number">6</span>
          <span class="infra-stat__label">Países con operación</span>
        </div>
        <div class="infra-stat">
          <span class="infra-stat__number">+100</span>
          <span class="infra-stat__label">Unidades de transporte</span>
        </div>
        <div class="infra-stat">
          <span class="infra-stat__number">24/7</span>
          <span class="infra-stat__label">Monitoreo y soporte</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services Overview -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Nuestros Servicios</span>
      <h2 class="section-title">Soluciones logísticas <span>integrales</span></h2>
      <p class="section-description">
        Cada servicio diseñado para maximizar la eficiencia de su cadena de suministro.
      </p>
    </div>

    <div class="services-grid">
      <a href="/logistica-integral-venezuela" class="service-card">
        <img src="/images/logistica-integral_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Logística Integral" />
        <h3>Logística Integral</h3>
        <p>Soluciones 3PL completas para su cadena de suministro.</p>
      </a>
      <a href="/aduana" class="service-card">
        <img src="/images/aduana_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Aduana" />
        <h3>Aduana</h3>
        <p>Gestión aduanera experta y asesoría especializada.</p>
      </a>
      <a href="/almacen" class="service-card">
        <img src="/images/almacen_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Almacén" />
        <h3>Almacén</h3>
        <p>70,000 m² de almacenamiento y gestión de inventarios.</p>
      </a>
      <a href="/logistica-transporte-terrestre" class="service-card">
        <img src="/images/transporte-terrestre_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Transporte Terrestre" />
        <h3>Transporte Terrestre</h3>
        <p>Distribución nacional segura y eficiente.</p>
      </a>
      <a href="/impot" class="service-card">
        <img src="/images/carga+internacional_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="Carga Internacional" />
        <h3>Carga Internacional</h3>
        <p>Importación y exportación vía marítima y aérea.</p>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">Construyamos realidades juntos</h2>
    <p class="cta-banner__text">60 años de experiencia respaldan cada solución que diseñamos para su negocio.</p>
    <a href="/contacto" class="btn btn--white">Solicitar cotización</a>
  </div>
</section>

<style>
  /* Stats Section */
  .stats-section {
    padding: var(--space-2xl) 0;
  }

  .stats-bar--centered {
    justify-content: center;
    gap: 4rem;
    border-top: none;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    .stats-bar--centered {
      gap: 2rem;
      justify-content: space-between;
    }
  }

  /* Story Section */
  .story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  @media (max-width: 900px) {
    .story-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .story-content .section-header {
    margin-bottom: 2rem;
  }

  .story-text p {
    color: var(--gray-600);
    line-height: 1.8;
    margin-bottom: 1.25rem;
  }

  .story-text p:last-child {
    margin-bottom: 0;
  }

  .story-timeline {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .timeline-card {
    padding: 1.5rem;
    background: var(--gray-50);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--gray-300);
    transition: all 0.2s ease;
  }

  .timeline-card:hover {
    border-left-color: var(--clover-green);
    background: var(--white);
    box-shadow: var(--shadow-sm);
  }

  .timeline-card--current {
    border-left-color: var(--clover-green);
    background: rgba(0, 166, 81, 0.05);
  }

  .timeline-year {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--clover-green);
    color: var(--white);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .timeline-card h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
  }

  .timeline-card p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* Values */
  .value-item {
    text-align: center;
    padding: 1.5rem;
  }

  .value-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin: 0 auto 1.25rem;
    background: var(--gray-50);
    border-radius: var(--radius-md);
    color: var(--clover-green);
  }

  .value-item h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
  }

  .value-item p {
    font-size: 0.9375rem;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* Infrastructure */
  .infrastructure-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  @media (max-width: 900px) {
    .infrastructure-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .section-title--white {
    color: var(--white);
  }

  .section-description--light {
    color: rgba(255, 255, 255, 0.7);
  }

  .infrastructure-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  .infrastructure-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .infrastructure-list li svg {
    color: var(--clover-green);
    flex-shrink: 0;
  }

  .infrastructure-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .infra-stat {
    text-align: center;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .infra-stat__number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--clover-green);
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .infra-stat__label {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Services */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .service-card {
    padding: 2rem;
    background: var(--gray-50);
    border-radius: var(--radius-md);
    text-align: center;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }

  .service-card:hover {
    background: var(--white);
    border-color: var(--gray-200);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .service-card img {
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
  }

  .service-card h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
  }

  .service-card p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }
</style>
