<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let sectionRef = $state<HTMLElement | null>(null);

  // Certifications and accreditations
  const certifications = [
    { name: 'ISO 9001:2015', description: 'Gestión de Calidad' },
    { name: 'BASC', description: 'Seguridad en Comercio' },
    { name: 'OEA', description: 'Operador Económico Autorizado' },
  ];

  // Key industries served - Clover specializes in oil, gas, energy, pharma
  const industries = [
    { name: 'Petróleo y Gas', primary: true },
    { name: 'Energía', primary: true },
    { name: 'Farmacéutico', primary: true },
    { name: 'Alimentos y Bebidas', primary: false },
    { name: 'Retail', primary: false },
    { name: 'Manufactura', primary: false },
    { name: 'Químico', primary: false },
    { name: 'Minería', primary: false }
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

<section class="trust" class:visible={isVisible} bind:this={sectionRef}>
  <div class="trust-container">
    <!-- Why Choose Us -->
    <div class="why-section">
      <div class="why-content">
        <span class="section-label">Nuestra Trayectoria</span>
        <h2 class="section-title">
          Tres generaciones<br/>
          <span class="title-accent">moviendo Venezuela</span>
        </h2>
        <p class="section-description">
          Desde 1964, operamos la infraestructura logística más extensa del país.
          Especializados en petróleo, gas, energía y farmacéutico — los sectores
          que definen la economía venezolana.
        </p>

        <div class="certifications">
          {#each certifications as cert, i}
            <div class="cert-badge" style="--delay: {i * 0.1}s">
              <span class="cert-name">{cert.name}</span>
              <span class="cert-desc">{cert.description}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="why-visual">
        <div class="visual-grid">
          <div class="grid-item large">
            <img src="/images/Clover+almacen.png" alt="Instalaciones Clover" />
            <div class="item-overlay">
              <span class="overlay-text">70,000+ m² de almacenaje</span>
            </div>
          </div>
          <div class="grid-item">
            <img src="/images/14.jpg" alt="Flota Clover" />
          </div>
          <div class="grid-item">
            <img src="/images/1.jpg" alt="Operaciones Clover" />
          </div>
        </div>
      </div>
    </div>

    <!-- Industries -->
    <div class="industries-section">
      <div class="industries-header">
        <h3>Sectores que confían en nosotros</h3>
      </div>
      <div class="industries-list">
        {#each industries as industry, i}
          <span class="industry-tag" class:primary={industry.primary} style="--delay: {i * 0.05}s">{industry.name}</span>
        {/each}
      </div>
    </div>

    <!-- Value Props -->
    <div class="values-grid">
      <div class="value-card">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h4>Seguridad garantizada</h4>
        <p>Instalaciones con vigilancia 24/7, sistemas contra incendios y control de acceso biométrico.</p>
      </div>

      <div class="value-card">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h4>Entregas a tiempo</h4>
        <p>98% de cumplimiento en entregas programadas con rastreo en tiempo real de su mercancía.</p>
      </div>

      <div class="value-card">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h4>Equipo experto</h4>
        <p>Personal capacitado y certificado con décadas de experiencia en logística integral.</p>
      </div>

      <div class="value-card">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <h4>Tecnología integrada</h4>
        <p>Sistema WMS de última generación para visibilidad total de su inventario.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .trust {
    padding: 120px 0;
    background: var(--gray-50);
  }

  .trust-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  /* Why Section */
  .why-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1024px) {
    .why-section {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }

  .section-label {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--clover-green);
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .section-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 600;
    line-height: 1.2;
    color: var(--gray-900);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .title-accent {
    color: var(--clover-green);
  }

  .section-description {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--gray-600);
    margin-bottom: 2rem;
    max-width: 480px;
  }

  /* Certifications */
  .certifications {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .cert-badge {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.25rem;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
    transition-delay: var(--delay);
  }

  .trust.visible .cert-badge {
    opacity: 1;
    transform: translateY(0);
  }

  .cert-name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .cert-desc {
    font-size: 0.75rem;
    color: var(--gray-500);
    margin-top: 0.125rem;
  }

  /* Visual Grid */
  .why-visual {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s ease 0.2s;
  }

  .trust.visible .why-visual {
    opacity: 1;
    transform: translateX(0);
  }

  .visual-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
  }

  .grid-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
  }

  .grid-item.large {
    grid-column: 1 / -1;
  }

  .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .grid-item.large img {
    height: 280px;
  }

  .grid-item:not(.large) img {
    height: 180px;
  }

  .item-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.25rem;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }

  .overlay-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--white);
  }

  /* Industries */
  .industries-section {
    padding: 3rem 0;
    margin-bottom: 4rem;
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
  }

  .industries-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .industries-header h3 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .industries-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .industry-tag {
    padding: 0.75rem 1.5rem;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--gray-700);
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
    transition-delay: var(--delay);
  }

  .trust.visible .industry-tag {
    opacity: 1;
    transform: translateY(0);
  }

  .industry-tag.primary {
    background: rgba(0, 166, 81, 0.08);
    border-color: rgba(0, 166, 81, 0.25);
    color: var(--clover-green);
    font-weight: 600;
  }

  .industry-tag:hover {
    border-color: var(--clover-green);
    color: var(--clover-green);
  }

  /* Values Grid */
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .value-card {
    padding: 2rem;
    background: var(--white);
    border-radius: 6px;
    border: 1px solid var(--gray-200);
    transition: all 0.3s ease;
  }

  .value-card:hover {
    border-color: var(--gray-300);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }

  .value-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: rgba(0, 166, 81, 0.12);
    border-radius: 6px;
    color: var(--clover-green);
    margin-bottom: 1.25rem;
  }

  .value-card h4 {
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.5rem;
  }

  .value-card p {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--gray-600);
  }

  @media (max-width: 768px) {
    .trust {
      padding: 80px 0;
    }

    .why-section {
      gap: 3rem;
    }

    .visual-grid {
      grid-template-columns: 1fr;
    }

    .grid-item:not(.large) {
      display: none;
    }

    .grid-item.large img {
      height: 220px;
    }
  }
</style>
