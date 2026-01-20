<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let sectionRef = $state<HTMLElement | null>(null);

  const services = [
    {
      number: '01',
      title: 'Logística Integral',
      description: 'Manejamos con sencillez toda la complejidad de tu carga a través de una sola empresa. Garantizamos el control desde el origen hasta el destino final.',
      features: ['Cadena de suministro completa', 'Control de inventario', 'Distribución nacional e internacional'],
      href: '/logistica-integral-venezuela'
    },
    {
      number: '02',
      title: 'Almacenamiento',
      description: 'Más de 70,000 m² de instalaciones propias. Custodiamos tu mercancía en condiciones óptimas con tecnología de última generación.',
      features: ['Almacén seco y refrigerado', 'Sistema WMS', 'Seguridad 24/7'],
      href: '/almacen'
    },
    {
      number: '03',
      title: 'Transporte Terrestre',
      description: 'Flota propia con cobertura nacional. Seguimiento GPS en tiempo real y entregas garantizadas en los tiempos acordados.',
      features: ['Flota propia', 'Rastreo GPS', 'Cobertura nacional'],
      href: '/logistica-transporte-terrestre'
    },
    {
      number: '04',
      title: 'Servicios Aduaneros',
      description: 'Gestionamos tus procesos aduaneros de forma expedita y eficiente. Somos expertos en regímenes aduaneros con soluciones innovadoras.',
      features: ['Agenciamiento aduanal', 'Clasificación arancelaria', 'Regímenes especiales'],
      href: '/aduana'
    },
    {
      number: '05',
      title: 'Carga Internacional',
      description: 'Servicios marítimos, aéreos y terrestres desde o hacia cualquier lugar del mundo. Alianzas estratégicas con empresas de logística mundial.',
      features: ['Carga marítima FCL/LCL', 'Carga aérea', 'Carga sobredimensionada'],
      href: '/impot'
    }
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section class="services" class:visible={isVisible} bind:this={sectionRef} id="servicios">
  <div class="services-container">
    <!-- Section Header -->
    <div class="services-header">
      <div class="header-content">
        <span class="section-label">+Soluciones</span>
        <h2 class="section-title">
          Somos expertos en logística<br/>
          <span class="title-accent">capaces de construir realidades a tu medida</span>
        </h2>
      </div>
      <p class="section-description">
        Más de 60 años de operaciones en Venezuela ofreciendo servicios de calidad
        y personalizados según tus necesidades. Nos adaptamos de manera integral
        con alcance mundial.
      </p>
    </div>

    <!-- Services List -->
    <div class="services-list">
      {#each services as service, i}
        <a
          href={service.href}
          class="service-item"
          style="--delay: {i * 0.1}s"
        >
          <div class="service-number">{service.number}</div>

          <div class="service-content">
            <h3 class="service-title">{service.title}</h3>
            <p class="service-description">{service.description}</p>

            <ul class="service-features">
              {#each service.features as feature}
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>

          <div class="service-action">
            <span class="action-text">Ver servicio</span>
            <span class="action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Additional Services -->
<section class="additional-services">
  <div class="additional-container">
    <div class="additional-header">
      <h2>Servicios Especializados</h2>
      <p>Soluciones complementarias para necesidades específicas</p>
    </div>

    <div class="additional-grid">
      <a href="https://www.clovermudanzas.com" target="_blank" rel="noopener" class="additional-card">
        <div class="card-icon">
          <img src="/images/mudanza100x100-01.png" alt="" />
        </div>
        <div class="card-content">
          <h3>Clover Mudanzas</h3>
          <p>Servicios de mudanza residencial y corporativa con el cuidado que sus pertenencias merecen.</p>
        </div>
        <svg class="card-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
      </a>

      <a href="https://www.cloverfileve.com" target="_blank" rel="noopener" class="additional-card">
        <div class="card-icon">
          <img src="/images/cloverfile100x100-01.png" alt="" />
        </div>
        <div class="card-content">
          <h3>CloverFile</h3>
          <p>Digitalización y almacenamiento seguro de documentos. Gestión documental en la nube.</p>
        </div>
        <svg class="card-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
      </a>

      <a href="/cloverpack" class="additional-card">
        <div class="card-icon">
          <img src="/images/cloverpack100x100-01.png" alt="" />
        </div>
        <div class="card-content">
          <h3>CloverPack</h3>
          <p>Soluciones de embalaje profesional para proteger su mercancía durante el transporte.</p>
        </div>
        <svg class="card-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  /* Main Services Section */
  .services {
    padding: clamp(80px, 12vw, 140px) 0;
    background: var(--white);
  }

  .services-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  /* Header */
  .services-header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3.5rem;
    padding-bottom: 3.5rem;
    border-bottom: 1px solid var(--gray-200);
  }

  @media (min-width: 768px) {
    .services-header {
      grid-template-columns: 1.2fr 1fr;
      align-items: end;
    }
  }

  .section-label {
    display: inline-block;
    margin-bottom: 1.25rem;
    font-size: 0.6875rem;
    font-weight: 600;
    color: var(--clover-green);
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  .section-title {
    font-size: clamp(2.25rem, 5vw, 3.25rem);
    font-weight: 600;
    line-height: 1.1;
    color: var(--gray-900);
    letter-spacing: -0.03em;
  }

  .title-light {
    font-weight: 400;
    color: var(--gray-500);
  }

  .title-accent {
    color: var(--clover-green);
  }

  .section-description {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: var(--gray-600);
    max-width: 420px;
  }

  @media (min-width: 768px) {
    .section-description {
      margin-left: auto;
    }
  }

  /* Services List */
  .services-list {
    display: flex;
    flex-direction: column;
  }

  .service-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2.5rem;
    align-items: start;
    padding: 2.75rem 0;
    border-bottom: 1px solid var(--gray-150, #eaeaea);
    text-decoration: none;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .service-item:hover {
    background: linear-gradient(135deg, var(--gray-50) 0%, rgba(0, 166, 81, 0.02) 100%);
    margin: 0 -2.5rem;
    padding: 2.75rem 2.5rem;
    border-radius: 16px;
    border-color: transparent;
  }

  .service-item:last-child {
    border-bottom: none;
  }

  /* Service Number - Made prominent as design element */
  .service-number {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--clover-green);
    padding-top: 0.25rem;
    min-width: 3rem;
    font-variant-numeric: tabular-nums;
    opacity: 0.6;
  }

  /* Service Content */
  .service-content {
    max-width: 580px;
  }

  .service-title {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.875rem;
    transition: color 0.3s ease;
    letter-spacing: -0.01em;
  }

  .service-item:hover .service-title {
    color: var(--clover-green);
  }

  .service-description {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--gray-500);
    margin-bottom: 1.5rem;
  }

  .service-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .service-features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--gray-600);
  }

  .service-features svg {
    color: var(--clover-green);
    flex-shrink: 0;
  }

  /* Service Action - Always visible for B2B clarity */
  .service-action {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 0.375rem;
    opacity: 1;
    transition: all 0.35s ease;
  }

  .action-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--clover-green);
    white-space: nowrap;
  }

  .action-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: var(--clover-green);
    color: var(--white);
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 166, 81, 0.25);
  }

  .service-item:hover .action-icon {
    transform: translateX(4px);
    box-shadow: 0 6px 16px rgba(0, 166, 81, 0.3);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .services {
      padding: 60px 0;
    }

    .services-header {
      margin-bottom: 3rem;
      padding-bottom: 3rem;
    }

    .service-item {
      grid-template-columns: 1fr;
      gap: 0.75rem;
      padding: 2rem 0;
    }

    .service-number {
      font-size: 0.6875rem;
      padding-top: 0;
      margin-bottom: 0.5rem;
    }

    .service-action {
      opacity: 1;
      transform: translateX(0);
      margin-top: 1.25rem;
    }

    .service-item:hover {
      margin: 0;
      padding: 2rem 0;
      background: transparent;
    }
  }

  /* Additional Services */
  .additional-services {
    padding: clamp(60px, 10vw, 100px) 0 clamp(80px, 12vw, 140px);
    background: var(--gray-50);
  }

  .additional-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  .additional-header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .additional-header h2 {
    font-size: clamp(1.5rem, 3vw, 1.875rem);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.625rem;
    letter-spacing: -0.02em;
  }

  .additional-header p {
    font-size: 1rem;
    color: var(--gray-500);
  }

  .additional-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.25rem;
  }

  .additional-card {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.75rem 2rem;
    background: var(--white);
    border-radius: 6px;
    border: 1px solid var(--gray-200);
    text-decoration: none;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .additional-card:hover {
    border-color: var(--clover-green);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
    transform: translateY(-3px);
  }

  .card-icon {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
  }

  .card-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .card-content {
    flex: 1;
    min-width: 0;
  }

  .card-content h3 {
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.375rem;
    transition: color 0.25s ease;
  }

  .additional-card:hover .card-content h3 {
    color: var(--clover-green);
  }

  .card-content p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--gray-500);
  }

  .card-arrow {
    flex-shrink: 0;
    color: var(--gray-300);
    transition: all 0.3s ease;
    margin-top: 0.25rem;
  }

  .additional-card:hover .card-arrow {
    color: var(--clover-green);
    transform: translate(3px, -3px);
  }
</style>
