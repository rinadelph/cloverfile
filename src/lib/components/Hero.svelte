<script lang="ts">
  // CloverFile Hero - Document Management Services
</script>

<section class="hero">
  <!-- Background -->
  <div class="hero-media">
    <div class="hero-pattern"></div>
    <div class="hero-overlay"></div>
  </div>

  <div class="hero-content">
    <div class="hero-container">
      <!-- Logo Display -->
      <div class="hero-logo">
        <img src="/images/1502852123.png" alt="CloverFile" />
      </div>

      <!-- Main Message -->
      <h1 class="hero-headline">
        Seguridad, Tiempo, Espacio<br/>
        <span class="headline-accent">en el manejo de tu informacion</span>
      </h1>

      <p class="hero-description">
        Gestion documental integral para empresas. <strong>Digitalizacion, software de gestion,
        automatizacion de procesos y almacenamiento en la nube.</strong> Custodia fisica segura
        con +40 anos de experiencia protegiendo la informacion de Venezuela.
      </p>

      <!-- CTA Row -->
      <div class="hero-cta">
        <a href="/contacto" class="cta-primary">
          Solicitar cotizacion
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="https://servicioscloverfile.com/" class="cta-secondary" target="_blank">
          Portal de solicitudes
        </a>
      </div>

      <!-- Service Categories -->
      <div class="hero-services">
        <div class="service-category">
          <span class="category-label">Gestion Digital</span>
          <div class="category-items">
            <span class="category-item">Digitalizacion</span>
            <span class="category-item">Software</span>
            <span class="category-item">Automatizacion</span>
            <span class="category-item">Nube</span>
          </div>
        </div>
        <div class="service-category">
          <span class="category-label">Gestion Fisica</span>
          <div class="category-items">
            <span class="category-item">Cajas</span>
            <span class="category-item">Almacenes</span>
            <span class="category-item">Inventario</span>
            <span class="category-item">Traslado</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats Bar -->
  <div class="hero-stats">
    <div class="stats-container">
      <div class="stat-item">
        <span class="stat-number">40+</span>
        <span class="stat-label">Anos de experiencia</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">24/7</span>
        <span class="stat-label">Acceso a informacion</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">100%</span>
        <span class="stat-label">Confidencialidad</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">ISO</span>
        <span class="stat-label">Estandares de calidad</span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #003C75 0%, #004387 50%, #0066CC 100%);
    overflow: hidden;
  }

  /* Background Pattern */
  .hero-media {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .hero-pattern {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 80%, rgba(136, 176, 39, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 60, 117, 0.3) 0%,
      rgba(0, 67, 135, 0.5) 100%
    );
  }

  /* Content */
  .hero-content {
    position: relative;
    z-index: 10;
    flex: 1;
    display: flex;
    align-items: center;
    padding-top: 120px;
  }

  .hero-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    animation: fadeUp 0.8s ease-out;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Logo */
  .hero-logo {
    margin-bottom: 2rem;
  }

  .hero-logo img {
    height: 70px;
    width: auto;
  }

  @media (min-width: 768px) {
    .hero-logo img {
      height: 90px;
    }
  }

  /* Headline */
  .hero-headline {
    font-size: clamp(2.25rem, 7vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
  }

  .headline-accent {
    color: #8BB019;
  }

  /* Description */
  .hero-description {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    max-width: 620px;
    margin-bottom: 2.5rem;
  }

  .hero-description strong {
    color: #ffffff;
    font-weight: 600;
  }

  /* CTA */
  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #8BB019;
    color: #ffffff;
    font-size: 0.9375rem;
    font-weight: 600;
    border-radius: 5px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .cta-primary:hover {
    background: #7A9C16;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(139, 176, 25, 0.4);
  }

  .cta-primary svg {
    transition: transform 0.3s ease;
  }

  .cta-primary:hover svg {
    transform: translateX(4px);
  }

  .cta-secondary {
    display: inline-flex;
    align-items: center;
    padding: 1rem 2rem;
    background: transparent;
    color: #ffffff;
    font-size: 0.9375rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .cta-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  /* Service Categories */
  .hero-services {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .hero-services {
      flex-direction: row;
      gap: 3rem;
    }
  }

  .service-category {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .category-label {
    font-size: 0.6875rem;
    font-weight: 600;
    color: #8BB019;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .category-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .category-item {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    transition: all 0.2s ease;
  }

  .category-item:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
  }

  /* Stats Bar */
  .hero-stats {
    position: relative;
    z-index: 10;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    animation: fadeUp 0.8s ease-out 0.3s both;
  }

  .stats-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-number {
    font-size: 1.75rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .stat-label {
    font-size: 0.6875rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    align-self: center;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .stat-divider {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .hero {
      min-height: auto;
      padding-bottom: 2rem;
    }

    .hero-content {
      padding-top: 100px;
      padding-bottom: 2rem;
    }

    .hero-cta {
      flex-direction: column;
    }

    .cta-primary,
    .cta-secondary {
      width: 100%;
      justify-content: center;
    }

    .stats-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
</style>
