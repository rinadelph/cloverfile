<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let sectionRef = $state<HTMLElement | null>(null);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section class="cta" class:visible={isVisible} bind:this={sectionRef}>
  <div class="cta-container">
    <div class="cta-content">
      <span class="cta-label">Empecemos</span>
      <h2 class="cta-title">
        ¿Listo para optimizar<br/>su cadena de suministro?
      </h2>
      <p class="cta-description">
        Nuestro equipo de expertos está listo para diseñar una solución
        logística personalizada para su negocio. Solicite una cotización
        sin compromiso.
      </p>

      <div class="cta-actions">
        <a href="/contacto" class="btn-primary">
          Solicitar cotización
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="tel:+582122638081" class="btn-secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Llamar ahora
        </a>
      </div>

      <div class="cta-contact">
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href="mailto:info@cloverve.com">info@cloverve.com</a>
        </div>
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Caracas, Venezuela</span>
        </div>
      </div>
    </div>

    <div class="cta-visual">
      <div class="visual-card">
        <div class="card-header">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="9" x2="15" y2="9"/>
              <line x1="9" y1="13" x2="15" y2="13"/>
              <line x1="9" y1="17" x2="12" y2="17"/>
            </svg>
          </div>
          <span>Respuesta en 24h</span>
        </div>
        <div class="card-body">
          <div class="card-stat">
            <span class="stat-value">500+</span>
            <span class="stat-label">Cotizaciones este año</span>
          </div>
          <div class="card-progress">
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>
            <span class="progress-label">98% tasa de respuesta</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .cta {
    padding: 120px 0;
    background: var(--white);
  }

  .cta-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .cta-container {
      grid-template-columns: 1fr 400px;
    }
  }

  .cta-content {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cta.visible .cta-content {
    opacity: 1;
    transform: translateY(0);
  }

  .cta-label {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--clover-green);
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .cta-title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 600;
    line-height: 1.15;
    color: var(--gray-900);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .cta-description {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--gray-600);
    margin-bottom: 2rem;
    max-width: 480px;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    padding: 1rem 1.75rem;
    background: var(--clover-green);
    color: var(--white);
    font-size: 0.9375rem;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 4px 14px rgba(0, 166, 81, 0.25);
  }

  .btn-primary:hover {
    background: var(--clover-green-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 166, 81, 0.3);
  }

  .btn-primary svg {
    transition: transform 0.25s ease;
  }

  .btn-primary:hover svg {
    transform: translateX(4px);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    padding: 1rem 1.75rem;
    background: transparent;
    color: var(--gray-700);
    font-size: 0.9375rem;
    font-weight: 600;
    border: 1.5px solid var(--gray-300);
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .btn-secondary:hover {
    border-color: var(--gray-900);
    color: var(--gray-900);
  }

  .cta-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--gray-200);
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 0.9375rem;
    color: var(--gray-600);
  }

  .contact-item svg {
    color: var(--gray-400);
  }

  .contact-item a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .contact-item a:hover {
    color: var(--clover-green);
  }

  /* Visual */
  .cta-visual {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
  }

  .cta.visible .cta-visual {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 1023px) {
    .cta-visual {
      display: none;
    }
  }

  .visual-card {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 16px;
    padding: 2rem;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-200);
  }

  .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(0, 166, 81, 0.1);
    border-radius: 12px;
    color: var(--clover-green);
  }

  .card-header span {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--gray-700);
  }

  .card-stat {
    margin-bottom: 1.5rem;
  }

  .card-stat .stat-value {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--gray-900);
    line-height: 1;
    margin-bottom: 0.25rem;
  }

  .card-stat .stat-label {
    font-size: 0.875rem;
    color: var(--gray-500);
  }

  .card-progress {
    margin-bottom: 0;
  }

  .progress-bar {
    height: 8px;
    background: var(--gray-200);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .progress-fill {
    width: 98%;
    height: 100%;
    background: var(--clover-green);
    border-radius: 4px;
    animation: progressFill 1.5s ease-out 0.5s both;
  }

  @keyframes progressFill {
    from { width: 0; }
    to { width: 98%; }
  }

  .progress-label {
    font-size: 0.8125rem;
    color: var(--gray-500);
  }

  @media (max-width: 768px) {
    .cta {
      padding: 80px 0;
    }

    .cta-actions {
      flex-direction: column;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }
</style>
