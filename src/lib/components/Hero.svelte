<script lang="ts">
  // Strategic hero for Venezuela's rebuilding moment
</script>

<section class="hero">
  <!-- Background -->
  <div class="hero-media">
    <img
      src="/images/1.jpg"
      alt="Puerto de contenedores Venezuela"
      class="hero-image"
    />
    <div class="hero-overlay"></div>
  </div>

  <div class="hero-content">
    <div class="hero-container">
      <!-- Logo Display -->
      <div class="hero-logo">
        <img src="/images/LOGO_CLOVER_VENEZUELA-04.png" alt="Grupo Clover" />
      </div>

      <!-- Main Message -->
      <h1 class="hero-headline">
        Logística integral<br/>
        <span class="headline-accent">para Venezuela y el mundo</span>
      </h1>

      <p class="hero-description">
        Almacenaje, transporte, aduanas, carga internacional, gestión documental
        y mudanzas corporativas. <strong>70,000 m² de infraestructura</strong> y
        presencia en 6 países al servicio de los sectores más exigentes.
      </p>

      <!-- CTA Row -->
      <div class="hero-cta">
        <a href="/contacto" class="cta-primary">
          Solicitar cotización
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="https://clover-track.com/app/" class="cta-secondary" target="_blank">
          Rastrear envío
        </a>
      </div>

      <!-- Quick Links - The Ecosystem -->
      <div class="hero-ecosystem">
        <span class="ecosystem-label">El ecosistema Clover:</span>
        <div class="ecosystem-links">
          <a href="/logistica-integral-venezuela" class="eco-link">
            <span class="eco-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="1" y="3" width="15" height="13" rx="2"/>
                <path d="M16 8h4l3 3v5h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </span>
            Logística Integral
          </a>
          <a href="https://www.cloverfileve.com" class="eco-link" target="_blank">
            <span class="eco-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </span>
            CloverFile
          </a>
          <a href="https://www.clovermudanzas.com" class="eco-link" target="_blank">
            <span class="eco-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </span>
            Mudanzas
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats Bar -->
  <div class="hero-stats">
    <div class="stats-container">
      <div class="stat-item">
        <span class="stat-number">1964</span>
        <span class="stat-label">Fundación</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">70,000</span>
        <span class="stat-label">m² de infraestructura</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">6</span>
        <span class="stat-label">Países</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">3</span>
        <span class="stat-label">Generaciones</span>
      </div>
    </div>
  </div>

  <!-- Credentials -->
  <div class="hero-creds">
    <span class="creds-label">Certificaciones:</span>
    <div class="creds-list">
      <span class="cred">ISO 9001</span>
      <span class="cred">C-TPAT</span>
      <span class="cred">BASC</span>
      <span class="cred">OEA</span>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #0a0a0a;
    overflow: hidden;
  }

  /* Background */
  .hero-media {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.5;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 0.6) 100%
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
    height: 80px;
    width: auto;
    filter: brightness(0) invert(1);
  }

  @media (min-width: 768px) {
    .hero-logo img {
      height: 100px;
    }
  }

  /* Headline */
  .hero-headline {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
  }

  .headline-accent {
    color: #00A651;
  }

  /* Description */
  .hero-description {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.7);
    max-width: 580px;
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
    background: #00A651;
    color: #ffffff;
    font-size: 0.9375rem;
    font-weight: 600;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .cta-primary:hover {
    background: #008744;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 166, 81, 0.4);
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
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .cta-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }

  /* Ecosystem Links */
  .hero-ecosystem {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (min-width: 640px) {
    .hero-ecosystem {
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
    }
  }

  .ecosystem-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .ecosystem-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .eco-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.2s ease;
  }

  .eco-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }

  .eco-icon {
    display: flex;
    color: #00A651;
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
    border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    align-self: center;
  }

  /* Credentials */
  .hero-creds {
    position: absolute;
    bottom: 2rem;
    right: clamp(1.5rem, 5vw, 4rem);
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: fadeUp 0.8s ease-out 0.5s both;
  }

  .creds-label {
    font-size: 0.625rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .creds-list {
    display: flex;
    gap: 0.375rem;
  }

  .cred {
    padding: 0.25rem 0.625rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    font-size: 0.625rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.03em;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .stat-divider {
      display: none;
    }

    .hero-creds {
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
