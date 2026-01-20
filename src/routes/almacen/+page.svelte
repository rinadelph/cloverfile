<script lang="ts">
  import PageHero from '$lib/components/PageHero.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '$lib/seo/schemas';
  import { pageSEO, serviceFAQs } from '$lib/seo/keywords';

  const seo = pageSEO['almacen'];
  const faqs = serviceFAQs['almacen'];

  const jsonLd = [
    getServiceSchema({
      name: 'Almacenamiento Logístico',
      description: seo.description,
      url: '/almacen',
      image: '/images/logistica-interior.jpg'
    }),
    getBreadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Almacén', url: '/almacen' }
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
  subtitle="Almacén"
  title="+Custodiamos realidades"
  description="Aseguramos tu mercancía en condiciones óptimas con más de 70,000 m² de infraestructura de almacenamiento en Venezuela."
  image="/images/logistica-interior.jpg"
/>

<!-- Stats Bar - Prominent capacity display -->
<section class="stats-section">
  <div class="container">
    <div class="stats-bar stats-bar--highlight">
      <div class="stat">
        <span class="stat__number stat__number--green">70,000+</span>
        <span class="stat__label">m² de capacidad</span>
      </div>
      <div class="stat">
        <span class="stat__number">24/7</span>
        <span class="stat__label">Seguridad y monitoreo</span>
      </div>
      <div class="stat">
        <span class="stat__number">WMS</span>
        <span class="stat__label">Gestión inteligente</span>
      </div>
      <div class="stat">
        <span class="stat__number">60+</span>
        <span class="stat__label">Años de experiencia</span>
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
          <span class="section-label">Infraestructura de clase mundial</span>
          <h2 class="section-title">Servicios de almacén <span>en Venezuela</span></h2>
          <p class="section-description">
            Con más de 70,000 m² de instalaciones estratégicamente ubicadas, ofrecemos soluciones integrales de almacenamiento para todo tipo de mercancía. Desde productos refrigerados hasta documentos sensibles, nuestra infraestructura está diseñada para proteger y gestionar sus activos con la máxima eficiencia.
          </p>
        </div>
        <ul class="feature-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Control de inventario en tiempo real
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Sistemas WMS avanzados
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Seguridad perimetral 24/7
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Cadena de frío certificada
          </li>
        </ul>
      </div>
      <div class="intro-image">
        <img src="/images/Clover+almacen.png" alt="Almacén Clover Venezuela - 70,000 m² de capacidad" />
      </div>
    </div>
  </div>
</section>

<!-- Technology Section -->
<section class="section section--dark">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Tecnología y seguridad</span>
      <h2 class="section-title" style="color: var(--white);">Control total de <span>su inventario</span></h2>
      <p class="section-description" style="color: rgba(255,255,255,0.7);">
        Nuestro sistema WMS (Warehouse Management System) le permite monitorear su mercancía en tiempo real, mientras nuestra infraestructura de seguridad protege sus activos las 24 horas.
      </p>
    </div>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3>Sistema WMS</h3>
        <p>Gestión de almacén inteligente con trazabilidad completa de cada producto desde el ingreso hasta la salida.</p>
      </div>
      <div class="tech-card">
        <div class="tech-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3>Seguridad 24/7</h3>
        <p>Vigilancia permanente, CCTV, control de acceso biométrico y monitoreo en tiempo real de todas las instalaciones.</p>
      </div>
      <div class="tech-card">
        <div class="tech-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
        <h3>Reportes en tiempo real</h3>
        <p>Acceso a información actualizada de inventario, movimientos y estado de su mercancía desde cualquier dispositivo.</p>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="section section--gray">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-label">Soluciones integrales</span>
      <h2 class="section-title">Servicios de <span>almacenamiento</span></h2>
      <p class="section-description">
        Adaptamos nuestras capacidades a tus necesidades de manera inteligente y personalizada.
      </p>
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
        <h3 class="card__title">Picking & Packing</h3>
        <p class="card__text">Selección y empaque de productos con precisión para optimizar su distribución y reducir tiempos de entrega.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            <path d="M12 8v8"/>
            <path d="M8 12h8"/>
          </svg>
        </div>
        <h3 class="card__title">Cross Docking</h3>
        <p class="card__text">Consolidación y desconsolidación de carga para distribución directa sin almacenamiento prolongado.</p>
      </div>

      <div class="card card--highlight cold-chain-card">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
          </svg>
        </div>
        <span class="card-badge">Certificado</span>
        <h3 class="card__title">Cadena de Frío</h3>
        <p class="card__text">Almacenamiento refrigerado y congelado con monitoreo constante de temperatura para productos sensibles.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"/>
            <path d="M6 9.01V9"/>
            <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/>
          </svg>
        </div>
        <h3 class="card__title">Maquilas</h3>
        <p class="card__text">Servicios de etiquetado, re-empaque y preparación de productos según especificaciones del cliente.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h3 class="card__title">Gestión de Inventarios</h3>
        <p class="card__text">Control y administración de inventarios en tiempo real con tecnología WMS de última generación.</p>
      </div>

      <div class="card card--highlight">
        <div class="card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h3 class="card__title">Custodia Segura</h3>
        <p class="card__text">Almacenamiento de documentos y mercancía de alto valor con sistemas de vigilancia 24/7 y control de acceso.</p>
      </div>
    </div>
  </div>
</section>

<!-- Cold Chain Highlight -->
<section class="section">
  <div class="container">
    <div class="cold-chain-section">
      <div class="cold-chain-content">
        <div class="section-header">
          <span class="section-label">Cadena de frío</span>
          <h2 class="section-title">Productos que requieren <span>temperatura controlada</span></h2>
          <p class="section-description">
            Nuestra infraestructura de cadena de frío garantiza la integridad de productos farmacéuticos, alimentos perecederos y cualquier mercancía que requiera condiciones de temperatura específicas.
          </p>
        </div>
        <div class="cold-chain-features">
          <div class="cold-feature">
            <div class="cold-feature__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
              </svg>
            </div>
            <div>
              <h4>Refrigerado</h4>
              <p>2°C a 8°C para productos sensibles</p>
            </div>
          </div>
          <div class="cold-feature">
            <div class="cold-feature__icon cold-feature__icon--frozen">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="12" y1="2" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/>
              </svg>
            </div>
            <div>
              <h4>Congelado</h4>
              <p>-18°C a -25°C para alimentos y más</p>
            </div>
          </div>
          <div class="cold-feature">
            <div class="cold-feature__icon cold-feature__icon--monitor">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <h4>Monitoreo 24/7</h4>
              <p>Control de temperatura en tiempo real</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cold-chain-visual">
        <div class="temp-display">
          <span class="temp-value">-18°C</span>
          <span class="temp-label">Cámaras de congelación</span>
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
      <a href="/logistica-transporte-terrestre" class="card card--highlight related-link">
        <img src="/images/transporte-terrestre_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-icon" />
        <h3 class="card__title">Transporte Terrestre</h3>
        <p class="card__text">Distribución nacional de su mercancía con seguridad y puntualidad.</p>
      </a>
      <a href="/aduana" class="card card--highlight related-link">
        <img src="/images/aduana_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-icon" />
        <h3 class="card__title">Aduana</h3>
        <p class="card__text">Gestión aduanera experta para sus importaciones y exportaciones.</p>
      </a>
      <a href="/impot" class="card card--highlight related-link">
        <img src="/images/carga+internacional_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" alt="" class="related-icon" />
        <h3 class="card__title">Carga Internacional</h3>
        <p class="card__text">Importación y exportación vía marítima y aérea a nivel global.</p>
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-banner">
  <div class="container">
    <h2 class="cta-banner__title">¿Necesita almacenamiento para su mercancía?</h2>
    <p class="cta-banner__text">Contáctenos y conozca cómo nuestros 70,000+ m² pueden trabajar para usted.</p>
    <a href="/contacto" class="btn btn--white">Solicitar cotización</a>
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
  }

  .stats-bar--highlight .stat__number {
    color: var(--white);
    font-size: 2.5rem;
  }

  .stats-bar--highlight .stat__number--green {
    color: var(--clover-green);
  }

  .stats-bar--highlight .stat__label {
    color: rgba(255, 255, 255, 0.6);
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
  }

  .intro-image img {
    width: 100%;
    height: auto;
  }

  /* Technology Section */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
    margin-top: var(--space-2xl);
  }

  .tech-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    transition: all var(--transition-base);
  }

  .tech-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 166, 81, 0.3);
  }

  .tech-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: rgba(0, 166, 81, 0.15);
    border-radius: var(--radius-md);
    color: var(--clover-green);
    margin-bottom: var(--space-lg);
  }

  .tech-card h3 {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
  }

  .tech-card p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  /* Cold Chain Card Badge */
  .cold-chain-card {
    position: relative;
  }

  .card-badge {
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

  /* Cold Chain Section */
  .cold-chain-section {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
  }

  @media (min-width: 768px) {
    .cold-chain-section {
      grid-template-columns: 1.2fr 0.8fr;
    }
  }

  .cold-chain-features {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    margin-top: var(--space-xl);
  }

  .cold-feature {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
  }

  .cold-feature__icon {
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

  .cold-feature__icon--frozen {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }

  .cold-feature__icon--monitor {
    background: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
  }

  .cold-feature h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.25rem;
  }

  .cold-feature p {
    font-size: 0.875rem;
    color: var(--gray-600);
  }

  .cold-chain-visual {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .temp-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #1e3a5f 0%, #0f2847 100%);
    border-radius: 50%;
    border: 4px solid rgba(59, 130, 246, 0.3);
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.2);
  }

  .temp-value {
    font-size: 3rem;
    font-weight: 700;
    color: #60a5fa;
    line-height: 1;
  }

  .temp-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: var(--space-sm);
    text-align: center;
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

  /* Responsive */
  @media (max-width: 767px) {
    .stats-bar--highlight {
      flex-direction: column;
      gap: var(--space-lg);
      text-align: center;
    }

    .temp-display {
      width: 160px;
      height: 160px;
    }

    .temp-value {
      font-size: 2.5rem;
    }
  }
</style>
