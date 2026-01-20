<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['impot'];
  const faqs = serviceFAQs['impot'];

  const jsonLd = [
    getServiceSchema({
      name: 'Carga Internacional',
      description: seo.description,
      url: '/impot',
      image: '/images/carga-internacional.jpg'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Carga Internacional', url: '/impot' }
    ]),
    getFAQSchema(faqs)
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  image="/images/carga-internacional.jpg"
  {jsonLd}
/>

<PageHero
  subtitle="Carga Internacional"
  title="+Conexiones globales"
  description="Transportamos mercancía de cualquier tamaño por aire, mar o tierra desde y hacia todo el mundo."
  image="/images/carga-internacional.jpg"
/>

<!-- Stats Bar -->
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-item__number">+60</span>
        <span class="stat-item__label">Años de experiencia</span>
      </div>
      <div class="stat-item">
        <span class="stat-item__number">6</span>
        <span class="stat-item__label">Países con presencia</span>
      </div>
      <div class="stat-item">
        <span class="stat-item__number">+50</span>
        <span class="stat-item__label">Alianzas globales</span>
      </div>
      <div class="stat-item">
        <span class="stat-item__number">24/7</span>
        <span class="stat-item__label">Seguimiento en tiempo real</span>
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
          <span class="section-label">Experiencia Global</span>
          <h2 class="section-title">Conectamos Venezuela <span>con el mundo</span></h2>
        </div>
        <p class="intro-lead">
          Para mercancía de cualquier tipo, tamaño o peso, brindamos toda una gama de servicios marítimos (FCL y LCL), aéreos y terrestres, desde o hacia cualquier lugar del mundo.
        </p>
        <p class="intro-text">
          Con más de 60 años de trayectoria y presencia en 6 países, hemos desarrollado alianzas estratégicas con las principales empresas de logística mundial. Esto nos permite brindar una excelente relación costo-beneficio e itinerarios acordes a sus necesidades específicas.
        </p>
        <ul class="feature-list">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Cobertura en 6 países
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Alianzas globales estratégicas
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Tarifas competitivas
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Itinerarios flexibles
          </li>
        </ul>
      </div>
      <div class="intro-image">
        <img src="/images/Clover+almacen.png" alt="Carga Internacional Clover" />
      </div>
    </div>
  </div>
</section>

<!-- Maritime Services - FCL/LCL Highlight -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Transporte Marítimo</span>
      <h2 class="section-title">Carga Marítima <span>FCL y LCL</span></h2>
      <p class="section-description">
        Soluciones marítimas completas para cualquier volumen de carga. Contenedor completo o consolidado según sus necesidades.
      </p>
    </div>

    <div class="maritime-grid">
      <div class="card card--highlight maritime-card">
        <div class="maritime-badge">Recomendado para grandes volúmenes</div>
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </div>
        <h3 class="card__title">FCL - Full Container Load</h3>
        <p class="card__text">Contenedor completo exclusivo para su mercancía. Máximo control, seguridad y flexibilidad en el manejo de su carga.</p>
        <ul class="service-features">
          <li>Contenedores 20' Standard</li>
          <li>Contenedores 40' Standard</li>
          <li>40' High Cube (mayor altura)</li>
          <li>Contenedores refrigerados (Reefer)</li>
          <li>Open Top y Flat Rack disponibles</li>
          <li>Control total de la carga</li>
        </ul>
      </div>

      <div class="card card--highlight maritime-card">
        <div class="maritime-badge maritime-badge--secondary">Ideal para volúmenes menores</div>
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <line x1="3.27" y1="6.96" x2="12" y2="12.01"/>
            <line x1="12" y1="12.01" x2="20.73" y2="6.96"/>
          </svg>
        </div>
        <h3 class="card__title">LCL - Less than Container Load</h3>
        <p class="card__text">Consolidación de carga para volúmenes menores. Comparta contenedor con otras cargas y optimice costos significativamente.</p>
        <ul class="service-features">
          <li>Sin mínimo de volumen</li>
          <li>Consolidación semanal</li>
          <li>Múltiples destinos globales</li>
          <li>Reducción de costos</li>
          <li>Ideal para muestras y envíos pequeños</li>
          <li>Flexibilidad en frecuencias</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Air Freight Section -->
<section class="section">
  <div class="container">
    <div class="air-freight-grid">
      <div class="air-freight-content">
        <div class="section-header">
          <span class="section-label">Transporte Aéreo</span>
          <h2 class="section-title">Carga Aérea <span>Internacional</span></h2>
        </div>
        <p class="intro-lead">
          Transporte rápido y seguro para envíos urgentes, mercancía de alto valor o productos sensibles al tiempo.
        </p>
        <p class="intro-text">
          Nuestra red de alianzas con las principales aerolíneas de carga nos permite ofrecer rutas directas y conexiones eficientes hacia los principales aeropuertos del mundo.
        </p>

        <div class="air-services-grid">
          <div class="air-service-item">
            <div class="air-service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <h4>Servicio Express</h4>
              <p>Entrega prioritaria en tiempos récord para envíos urgentes.</p>
            </div>
          </div>
          <div class="air-service-item">
            <div class="air-service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </div>
            <div>
              <h4>Carga General</h4>
              <p>Transporte aéreo estándar con excelentes tarifas y tiempos.</p>
            </div>
          </div>
          <div class="air-service-item">
            <div class="air-service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
            </div>
            <div>
              <h4>Hand Carrier</h4>
              <p>Servicio personalizado para documentos y paquetes críticos.</p>
            </div>
          </div>
          <div class="air-service-item">
            <div class="air-service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
              </svg>
            </div>
            <div>
              <h4>Carga Refrigerada</h4>
              <p>Control de temperatura para productos sensibles.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="air-freight-image">
        <div class="air-freight-card">
          <div class="air-freight-card__header">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 2L2 22"/>
              <path d="M5 12H2v10h10v-3"/>
              <path d="M22 2L12 12"/>
              <path d="M15.5 2H22v6.5"/>
            </svg>
            <span>Ventajas del Transporte Aéreo</span>
          </div>
          <ul class="air-freight-benefits">
            <li>Tiempos de tránsito reducidos</li>
            <li>Mayor seguridad de la mercancía</li>
            <li>Ideal para productos de alto valor</li>
            <li>Menor manipulación de carga</li>
            <li>Cobertura global extensiva</li>
            <li>Seguimiento en tiempo real</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Oversized Cargo Section -->
<section class="section section--dark">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Cargas Especiales</span>
      <h2 class="section-title" style="color: var(--white);">Carga <span>Sobredimensionada</span> y Extra Pesada</h2>
      <p class="section-description" style="color: rgba(255,255,255,0.7);">
        Experiencia comprobada en el manejo de proyectos de carga compleja que requieren planificación especializada.
      </p>
    </div>

    <div class="oversized-grid">
      <div class="oversized-item">
        <div class="oversized-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h4>Carga Sobredimensionada</h4>
        <p>Manejo especializado de mercancía que excede las dimensiones estándar de contenedores convencionales.</p>
        <ul>
          <li>Maquinaria industrial</li>
          <li>Equipos de construcción</li>
          <li>Estructuras metálicas</li>
        </ul>
      </div>

      <div class="oversized-item">
        <div class="oversized-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        </div>
        <h4>Carga Extra Pesada</h4>
        <p>Logística integral para mercancías de peso excepcional con equipos y permisos especializados.</p>
        <ul>
          <li>Generadores y turbinas</li>
          <li>Transformadores</li>
          <li>Vehículos pesados</li>
        </ul>
      </div>

      <div class="oversized-item">
        <div class="oversized-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h4>Proyectos Especiales</h4>
        <p>Planificación y ejecución de proyectos logísticos complejos con cargas indivisibles.</p>
        <ul>
          <li>Estudios de ruta</li>
          <li>Permisos especiales</li>
          <li>Escoltas y grúas</li>
        </ul>
      </div>

      <div class="oversized-item">
        <div class="oversized-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h4>Mercancía Peligrosa</h4>
        <p>Certificación y experiencia en manejo de materiales peligrosos según normativas internacionales.</p>
        <ul>
          <li>Clasificación IMO/IATA</li>
          <li>Documentación especializada</li>
          <li>Embalaje certificado</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Global Alliances -->
<section class="section">
  <div class="container">
    <div class="alliances-grid">
      <div class="alliances-content">
        <div class="section-header">
          <span class="section-label">Red Global</span>
          <h2 class="section-title">Alianzas <span>Estratégicas</span> Globales</h2>
        </div>
        <p class="intro-lead">
          Nuestra extensa red de aliados estratégicos en todo el mundo nos permite ofrecer soluciones logísticas integrales con cobertura global.
        </p>
        <p class="intro-text">
          A lo largo de más de 60 años, hemos construido relaciones sólidas con las principales navieras, aerolíneas de carga y operadores logísticos internacionales, garantizando los mejores servicios y tarifas para nuestros clientes.
        </p>

        <div class="alliance-benefits">
          <div class="alliance-benefit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Mejores tiempos de tránsito</span>
          </div>
          <div class="alliance-benefit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span>Tarifas preferenciales</span>
          </div>
          <div class="alliance-benefit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>Cobertura mundial</span>
          </div>
          <div class="alliance-benefit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Mayor seguridad</span>
          </div>
        </div>
      </div>
      <div class="alliances-visual">
        <div class="globe-graphic">
          <div class="globe-ring"></div>
          <div class="globe-ring globe-ring--2"></div>
          <div class="globe-center">
            <span class="globe-number">6</span>
            <span class="globe-label">Países</span>
          </div>
        </div>
        <div class="presence-list">
          <span class="presence-item">Venezuela</span>
          <span class="presence-item">Colombia</span>
          <span class="presence-item">Estados Unidos</span>
          <span class="presence-item">Panama</span>
          <span class="presence-item">Mexico</span>
          <span class="presence-item">Chile</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Process -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Cómo Trabajamos</span>
      <h2 class="section-title">Nuestro <span>Proceso</span></h2>
      <p class="section-description">
        Un proceso estructurado y transparente para garantizar el éxito de cada operación.
      </p>
    </div>

    <div class="process-grid">
      <div class="process-step">
        <span class="step-number">01</span>
        <h4>Cotización</h4>
        <p>Análisis detallado de sus necesidades y propuesta personalizada con las mejores opciones.</p>
      </div>
      <div class="process-step">
        <span class="step-number">02</span>
        <h4>Coordinación</h4>
        <p>Gestión integral de documentos y coordinación con proveedores y aliados estratégicos.</p>
      </div>
      <div class="process-step">
        <span class="step-number">03</span>
        <h4>Embarque</h4>
        <p>Recogida profesional y embarque seguro de su mercancía en origen.</p>
      </div>
      <div class="process-step">
        <span class="step-number">04</span>
        <h4>Seguimiento</h4>
        <p>Monitoreo en tiempo real y comunicación constante durante todo el tránsito.</p>
      </div>
      <div class="process-step">
        <span class="step-number">05</span>
        <h4>Entrega</h4>
        <p>Nacionalización eficiente y entrega puntual en el destino final.</p>
      </div>
    </div>
  </div>
</section>

<!-- Related Services -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Más Servicios</span>
      <h2 class="section-title">Servicios <span>Relacionados</span></h2>
    </div>

    <div class="grid grid--3">
      <a href="/aduana" class="card card--highlight related-card">
        <img src="/images/aduana_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-card__icon" />
        <h3 class="card__title">Aduana</h3>
        <p class="card__text">Gestión aduanera experta para sus importaciones y exportaciones con personal certificado.</p>
        <span class="related-card__link">Conocer más</span>
      </a>
      <a href="/almacen" class="card card--highlight related-card">
        <img src="/images/almacen_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-card__icon" />
        <h3 class="card__title">Almacén</h3>
        <p class="card__text">Almacenamiento y custodia segura de mercancía nacionalizada con control de inventario.</p>
        <span class="related-card__link">Conocer más</span>
      </a>
      <a href="/logistica-transporte-terrestre" class="card card--highlight related-card">
        <img src="/images/transporte-terrestre_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-card__icon" />
        <h3 class="card__title">Transporte Terrestre</h3>
        <p class="card__text">Distribución nacional de su mercancía con flota propia y rastreo satelital.</p>
        <span class="related-card__link">Conocer más</span>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">¿Listo para importar o exportar?</h2>
    <p class="cta-banner__text">Contáctenos y obtenga una cotización personalizada para su carga internacional.</p>
    <a href="/contacto" class="btn btn--white">Solicitar cotización</a>
  </div>
</section>

<style>
  /* Stats Section */
  .stats-section {
    background: var(--gray-900);
    padding: var(--space-xl) 0;
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
    margin-bottom: var(--space-xs);
  }

  .stat-item__label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Intro Section */
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

  .intro-lead {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--gray-700);
    margin-bottom: var(--space-lg);
  }

  .intro-text {
    color: var(--gray-600);
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

  /* Maritime Section */
  .maritime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: var(--space-xl);
  }

  .maritime-card {
    position: relative;
    padding-top: var(--space-3xl);
  }

  .maritime-badge {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--space-sm) var(--space-md);
    background: var(--clover-green);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
    border-radius: var(--radius-md) var(--radius-md) 0 0;
  }

  .maritime-badge--secondary {
    background: var(--gray-700);
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: var(--space-lg) 0 0;
    border-top: 1px solid var(--gray-100);
    padding-top: var(--space-lg);
  }

  .service-features li {
    padding: var(--space-sm) 0;
    font-size: 0.875rem;
    color: var(--gray-700);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .service-features li::before {
    content: '+';
    color: var(--clover-green);
    font-weight: 600;
  }

  /* Air Freight Section */
  .air-freight-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: start;
  }

  @media (min-width: 900px) {
    .air-freight-grid {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .air-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-lg);
    margin-top: var(--space-xl);
  }

  .air-service-item {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: var(--gray-50);
    border-radius: var(--radius-md);
  }

  .air-service-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--white);
    border-radius: var(--radius-md);
    color: var(--clover-green);
  }

  .air-service-item h4 {
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: var(--space-xs);
  }

  .air-service-item p {
    font-size: 0.8125rem;
    color: var(--gray-600);
    line-height: 1.5;
  }

  .air-freight-card {
    background: var(--gray-900);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    color: var(--white);
  }

  .air-freight-card__header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--clover-green);
  }

  .air-freight-card__header span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
  }

  .air-freight-benefits {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .air-freight-benefits li {
    padding: var(--space-sm) 0;
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .air-freight-benefits li::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--clover-green);
    border-radius: 50%;
  }

  /* Oversized Cargo Section */
  .oversized-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
  }

  .oversized-item {
    padding: var(--space-xl);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
  }

  .oversized-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: rgba(0, 166, 81, 0.15);
    border-radius: var(--radius-md);
    color: var(--clover-green);
    margin-bottom: var(--space-lg);
  }

  .oversized-item h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: var(--space-sm);
  }

  .oversized-item > p {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .oversized-item ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: var(--space-md);
  }

  .oversized-item li {
    padding: var(--space-xs) 0;
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .oversized-item li::before {
    content: '+ ';
    color: var(--clover-green);
  }

  /* Alliances Section */
  .alliances-grid {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 900px) {
    .alliances-grid {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .alliance-benefits {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    margin-top: var(--space-xl);
  }

  .alliance-benefit {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: var(--gray-50);
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-700);
  }

  .alliance-benefit svg {
    color: var(--clover-green);
    flex-shrink: 0;
  }

  .alliances-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
  }

  .globe-graphic {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .globe-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--gray-200);
    border-radius: 50%;
  }

  .globe-ring--2 {
    width: 70%;
    height: 70%;
    border-color: var(--clover-green);
    opacity: 0.3;
  }

  .globe-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: var(--clover-green);
    border-radius: 50%;
    color: var(--white);
  }

  .globe-number {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
  }

  .globe-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .presence-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-sm);
  }

  .presence-item {
    padding: var(--space-sm) var(--space-md);
    background: var(--gray-50);
    border-radius: var(--radius-sm);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--gray-700);
  }

  /* Process Section */
  .process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-lg);
  }

  .process-step {
    text-align: center;
    padding: var(--space-lg);
    background: var(--white);
    border-radius: var(--radius-md);
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
  }

  .process-step p {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
  }

  /* Related Cards */
  .related-card {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .related-card__icon {
    width: 48px;
    height: 48px;
    margin: 0 auto var(--space-md);
  }

  .related-card__link {
    margin-top: auto;
    padding-top: var(--space-md);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clover-green);
  }
</style>
