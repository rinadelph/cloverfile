<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let sectionRef = $state<HTMLElement | null>(null);

  // Security certifications
  const certifications = [
    { name: 'ISO 27001', description: 'Seguridad de la Informacion' },
    { name: 'Custodia Certificada', description: 'Proteccion Documental' },
    { name: 'Confidencialidad', description: 'Protocolos de Acceso' },
  ];

  // Key industries served by CloverFile
  const industries = [
    { name: 'Banca y Finanzas', primary: true },
    { name: 'Seguros', primary: true },
    { name: 'Farmaceutico', primary: true },
    { name: 'Gobierno', primary: true },
    { name: 'Telecomunicaciones', primary: false },
    { name: 'Salud', primary: false },
    { name: 'Legal', primary: false },
    { name: 'Educacion', primary: false }
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
        <span class="section-label">Por que CloverFile</span>
        <h2 class="section-title">
          Protegemos tu informacion<br/>
          <span class="title-accent">con los mas altos estandares</span>
        </h2>
        <p class="section-description">
          Desde 1984, somos lideres en gestion documental en Venezuela.
          Nuestras instalaciones cuentan con la mas alta tecnologia en seguridad
          para proteger la informacion mas sensible de tu empresa.
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
            <img src="/images/almacen.jpg" alt="Almacenes CloverFile" />
            <div class="item-overlay">
              <span class="overlay-text">Almacenes especializados con control ambiental</span>
            </div>
          </div>
          <div class="grid-item">
            <img src="/images/informationsecurity.png" alt="Seguridad de informacion" />
          </div>
          <div class="grid-item">
            <img src="/images/logistica-sample-01.png" alt="Gestion documental" />
          </div>
        </div>
      </div>
    </div>

    <!-- Industries -->
    <div class="industries-section">
      <div class="industries-header">
        <h3>Sectores que confian en nosotros</h3>
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
        <h4>Seguridad total</h4>
        <p>Instalaciones con vigilancia 24/7, sistemas contra incendios, control de humedad y acceso biometrico.</p>
      </div>

      <div class="value-card">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h4>Acceso inmediato</h4>
        <p>Recupera tu informacion cuando la necesites con tiempos de respuesta garantizados y sistema 24/7.</p>
      </div>

      <div class="value-card">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h4>Confidencialidad</h4>
        <p>Protocolos estrictos de seguridad y acceso. Solo personal autorizado puede solicitar documentacion.</p>
      </div>

      <div class="value-card">
        <div class="value-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h4>Gestion profesional</h4>
        <p>Personal experto en archivologia y gestion documental con decadas de experiencia.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .trust {
    padding: clamp(80px, 12vw, 120px) 0;
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
    padding: 0.5rem 1rem;
    background: rgba(0, 67, 135, 0.08);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #004387;
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
    color: #8BB019;
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

  .cert-badge:hover {
    border-color: #004387;
    box-shadow: 0 4px 12px rgba(0, 67, 135, 0.08);
  }

  .cert-name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #004387;
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
    background: var(--gray-100);
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
    background: linear-gradient(to top, rgba(0, 60, 117, 0.85), transparent);
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
    background: rgba(0, 67, 135, 0.08);
    border-color: rgba(0, 67, 135, 0.2);
    color: #004387;
    font-weight: 600;
  }

  .industry-tag:hover {
    border-color: #004387;
    color: #004387;
  }

  /* Values Grid */
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .value-card {
    padding: 2rem;
    background: var(--white);
    border-radius: 12px;
    border: 1px solid var(--gray-200);
    transition: all 0.3s ease;
  }

  .value-card:hover {
    border-color: #004387;
    box-shadow: 0 12px 40px rgba(0, 67, 135, 0.08);
    transform: translateY(-4px);
  }

  .value-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: rgba(139, 176, 25, 0.12);
    border-radius: 12px;
    color: #8BB019;
    margin-bottom: 1.25rem;
  }

  .value-card h4 {
    font-size: 1.125rem;
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
      padding: 60px 0;
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

    .values-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
