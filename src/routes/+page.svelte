<script lang="ts">
  import { onMount } from 'svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getOrganizationSchema, getWebSiteSchema, getAllServicesSchemas } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO.home;
  const jsonLd = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    ...getAllServicesSchemas()
  ];

  // Hero section visibility
  let heroVisible = $state(false);
  let servicesVisible = $state(false);
  let statsVisible = $state(false);
  let whyVisible = $state(false);
  let ctaVisible = $state(false);
  let animatedValues = $state([0, 0, 0, 0]);

  // Services data
  const services = [
    {
      icon: 'truck',
      title: 'Mudanzas Nacionales',
      description: 'Brindamos soluciones de embalaje y traslado de bienes personales y corporativos hacia cualquier destino nacional.',
      features: ['Embalaje profesional', 'Transporte seguro', 'Almacenaje temporal', 'Instalacion en sitio'],
      href: '/mudanzas-nacionales',
      image: '/images/como.jpg'
    },
    {
      icon: 'globe',
      title: 'Mudanzas Internacionales',
      description: 'Soluciones de embalaje y traslado de bienes personales y corporativos hacia cualquier destino internacional.',
      features: ['Gestion de aduanas', 'Embalaje de exportacion', 'Seguro a todo riesgo', 'Servicio puerta a puerta'],
      href: '/mudanzas-internacionales',
      image: '/images/inte1r.jpg'
    },
    {
      icon: 'building',
      title: 'Mudanzas de Oficinas',
      description: 'Soluciones de embalaje y traslado de mobiliarios, equipos y todo tipo de bienes corporativos.',
      features: ['Planificacion detallada', 'Minimo impacto operativo', 'Traslado de equipos TI', 'Instalacion en destino'],
      href: '/mudanzas-oficinas',
      image: '/images/gara.jpg'
    },
    {
      icon: 'box',
      title: 'Clover Pack',
      description: 'Servicios de embalaje profesional con materiales de alta calidad para proteger sus pertenencias.',
      features: ['Materiales premium', 'Articulos especiales', 'Normas internacionales', 'Proteccion garantizada'],
      href: '/clover-pack',
      image: '/images/clover.jpg'
    }
  ];

  // Stats data
  const stats = [
    { value: 60, suffix: '+', label: 'Anos de experiencia', sublabel: 'Desde 1964' },
    { value: 6, suffix: '', label: 'Paises de destino', sublabel: 'America, Europa y mas' },
    { value: 1000, suffix: '+', label: 'Mudanzas exitosas', sublabel: 'Clientes satisfechos' },
    { value: 100, suffix: '%', label: 'Profesionalismo', sublabel: 'Equipo certificado' }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: 'shield',
      title: 'Seguridad Garantizada',
      description: 'Seguro a todo riesgo que cubre sus bienes durante todo el proceso de mudanza.'
    },
    {
      icon: 'clock',
      title: 'Puntualidad',
      description: 'Cumplimos con los tiempos acordados. Su mudanza se realiza cuando usted la necesita.'
    },
    {
      icon: 'users',
      title: 'Equipo Experto',
      description: 'Personal capacitado con decadas de experiencia en mudanzas nacionales e internacionales.'
    },
    {
      icon: 'package',
      title: 'Embalaje Profesional',
      description: 'Materiales de primera calidad y tecnicas especializadas para proteger cada pertenencia.'
    }
  ];

  // Certifications
  const certifications = ['ISO 9001:2015', 'FIDI-FAIM', 'IAM', 'LACMA'];

  function animateNumber(index: number, target: number, duration: number = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      animatedValues[index] = Math.floor(start + (target - start) * easeOut);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        animatedValues[index] = target;
      }
    }

    requestAnimationFrame(update);
  }

  function formatNumber(num: number): string {
    if (num >= 1000) {
      return num.toLocaleString('es-ES');
    }
    return num.toString();
  }

  onMount(() => {
    // Animate hero on load
    setTimeout(() => heroVisible = true, 100);

    // Set up intersection observers
    const observerOptions = { threshold: 0.2 };

    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) servicesVisible = true;
      });
    }, observerOptions);

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsVisible) {
          statsVisible = true;
          stats.forEach((stat, i) => {
            setTimeout(() => animateNumber(i, stat.value), i * 150);
          });
        }
      });
    }, { threshold: 0.3 });

    const whyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) whyVisible = true;
      });
    }, observerOptions);

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) ctaVisible = true;
      });
    }, observerOptions);

    // Observe sections
    const servicesSection = document.getElementById('servicios');
    const statsSection = document.getElementById('stats');
    const whySection = document.getElementById('por-que-elegirnos');
    const ctaSection = document.getElementById('contacto');

    if (servicesSection) servicesObserver.observe(servicesSection);
    if (statsSection) statsObserver.observe(statsSection);
    if (whySection) whyObserver.observe(whySection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      servicesObserver.disconnect();
      statsObserver.disconnect();
      whyObserver.disconnect();
      ctaObserver.disconnect();
    };
  });
</script>

<SEO
  title={seo.title}
  description={seo.description}
  {jsonLd}
/>

<!-- Hero Section -->
<section class="hero" class:visible={heroVisible}>
  <div class="hero-media">
    <img
      src="/images/slideaa9a.jpg"
      alt="Clover Mudanzas - Servicios de mudanza profesional"
      class="hero-image"
    />
    <div class="hero-overlay"></div>
  </div>

  <div class="hero-content">
    <div class="hero-container">
      <div class="hero-badge">
        <span>+60 anos de experiencia</span>
      </div>

      <h1 class="hero-headline">
        Avanza <span class="text-accent">+seguro</span><br/>
        <span class="text-accent">+tranquilo</span>
      </h1>

      <p class="hero-description">
        Soluciones de embalaje y traslado de bienes personales y corporativos.
        <strong>Mudanzas nacionales e internacionales</strong> con el respaldo
        de mas de 60 anos de experiencia.
      </p>

      <div class="hero-cta">
        <a href="/contacto" class="btn-primary">
          Solicitar Presupuesto
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="https://clover-track.com/" class="btn-secondary" target="_blank" rel="noopener">
          Rastrear Envio
        </a>
      </div>

      <div class="hero-trust">
        <span class="trust-label">Certificaciones:</span>
        <div class="trust-badges">
          {#each certifications as cert}
            <span class="trust-badge">{cert}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <div class="hero-scroll">
    <a href="#servicios" class="scroll-indicator">
      <span>Descubre nuestros servicios</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </a>
  </div>
</section>

<!-- Services Section -->
<section class="services" id="servicios" class:visible={servicesVisible}>
  <div class="services-container">
    <div class="section-header">
      <span class="section-label">Nuestros Servicios</span>
      <h2 class="section-title">
        Un comienzo,<br/>
        <span class="title-accent">muchas soluciones</span>
      </h2>
      <p class="section-description">
        Hogares y oficinas a nivel local, nacional e internacional.
        Soluciones integrales de embalaje y traslado.
      </p>
    </div>

    <div class="services-grid">
      {#each services as service, i}
        <a href={service.href} class="service-card" style="--delay: {i * 0.1}s">
          <div class="service-image">
            <img src={service.image} alt={service.title} />
            <div class="service-image-overlay"></div>
          </div>
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
            <div class="service-link">
              <span>Conocer mas</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Experience Section -->
<section class="experience">
  <div class="experience-container">
    <div class="experience-content">
      <div class="experience-image">
        <img src="/images/people-21.jpg" alt="Equipo Clover Mudanzas" />
      </div>
      <div class="experience-text">
        <h2>Anos de experiencia y cientos de mudanzas</h2>
        <div class="experience-divider"></div>
        <p>
          Nuestro equipo conoce de principio a fin los detalles sobre lo que necesitas
          para <strong>avanzar +seguro y +tranquilo.</strong>
        </p>
        <ul class="experience-list">
          <li>
            <span class="list-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            Traslado de bienes personales y corporativos
          </li>
          <li>
            <span class="list-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            Servicios puerta a puerta
          </li>
          <li>
            <span class="list-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            Traslados aereos o maritimos
          </li>
          <li>
            <span class="list-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            Contenedores exclusivos o compartidos
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="stats" id="stats" class:visible={statsVisible}>
  <div class="stats-container">
    <div class="stats-header">
      <h2>Numeros que respaldan nuestra experiencia</h2>
    </div>
    <div class="stats-grid">
      {#each stats as stat, i}
        <div class="stat-item" style="--delay: {i * 0.1}s">
          <div class="stat-value">
            <span class="stat-number">{formatNumber(animatedValues[i])}</span>
            <span class="stat-suffix">{stat.suffix}</span>
          </div>
          <div class="stat-label">{stat.label}</div>
          <div class="stat-sublabel">{stat.sublabel}</div>
        </div>
      {/each}
    </div>
  </div>
  <div class="stats-bg">
    <div class="bg-pattern"></div>
  </div>
</section>

<!-- Why Choose Us Section -->
<section class="why-choose" id="por-que-elegirnos" class:visible={whyVisible}>
  <div class="why-container">
    <div class="section-header centered">
      <span class="section-label">Por que elegirnos</span>
      <h2 class="section-title">
        Tres generaciones<br/>
        <span class="title-accent">moviendo familias</span>
      </h2>
    </div>

    <div class="why-grid">
      {#each whyChooseUs as item, i}
        <div class="why-card" style="--delay: {i * 0.1}s">
          <div class="why-icon">
            {#if item.icon === 'shield'}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            {:else if item.icon === 'clock'}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            {:else if item.icon === 'users'}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            {:else}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            {/if}
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      {/each}
    </div>

    <!-- Additional features row -->
    <div class="features-row">
      <div class="feature-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <path d="M16 8h4l3 3v5h-7V8z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
        <span>Flete internacional</span>
      </div>
      <div class="feature-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
        <span>Cobertura de seguro</span>
      </div>
      <div class="feature-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
        <span>Embalaje de exportacion</span>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta" id="contacto" class:visible={ctaVisible}>
  <div class="cta-container">
    <div class="cta-content">
      <span class="cta-label">Empecemos</span>
      <h2 class="cta-title">
        Listo para tu<br/>proxima mudanza?
      </h2>
      <p class="cta-description">
        Nuestro equipo de expertos esta listo para ayudarte en cada paso.
        Solicita un presupuesto sin compromiso.
      </p>

      <div class="cta-actions">
        <a href="/contacto" class="btn-primary">
          Solicitar Presupuesto
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="tel:+582128191152" class="btn-secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Llamar Ahora
        </a>
      </div>

      <div class="cta-contact-info">
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>+58-212-8191152 / 0500-CLOVERG</span>
        </div>
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>La Trinidad, Caracas, Venezuela</span>
        </div>
      </div>
    </div>

    <div class="cta-visual">
      <div class="cta-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.9113748464094!2d-66.86605773255077!3d10.43563610620911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af6372e20ec6d%3A0xebad0a20b8ea65be!2sClover%20Venezuela!5e0!3m2!1sen!2sar!4v1629130240608!5m2!1sen!2sar"
          width="100%"
          height="300"
          style="border:0; border-radius: 12px;"
          allowfullscreen
          loading="lazy"
          title="Ubicacion Clover Mudanzas"
        ></iframe>
      </div>
    </div>
  </div>
</section>

<style>
  /* ===== HERO SECTION ===== */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #0a0a0a;
    overflow: hidden;
  }

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
    opacity: 0.6;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 10;
    flex: 1;
    display: flex;
    align-items: center;
    padding-top: 100px;
  }

  .hero-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero.visible .hero-container {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(132, 189, 63, 0.15);
    border: 1px solid rgba(132, 189, 63, 0.3);
    border-radius: 50px;
    margin-bottom: 1.5rem;
  }

  .hero-badge span {
    font-size: 0.875rem;
    font-weight: 600;
    color: #84bd3f;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .hero-headline {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
  }

  .text-accent {
    color: #84bd3f;
  }

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

  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #84bd3f;
    color: #ffffff;
    font-size: 0.9375rem;
    font-weight: 600;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-primary:hover {
    background: #6da832;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(132, 189, 63, 0.4);
  }

  .btn-primary svg {
    transition: transform 0.3s ease;
  }

  .btn-primary:hover svg {
    transform: translateX(4px);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: transparent;
    color: #ffffff;
    font-size: 0.9375rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }

  .hero-trust {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  .trust-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .trust-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .trust-badge {
    padding: 0.375rem 0.75rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    font-size: 0.6875rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.03em;
  }

  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .scroll-indicator:hover {
    color: #84bd3f;
  }

  .scroll-indicator span {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .scroll-indicator svg {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }

  /* ===== SERVICES SECTION ===== */
  .services {
    padding: clamp(80px, 12vw, 140px) 0;
    background: var(--bg-white, #ffffff);
  }

  .services-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  .section-header {
    max-width: 600px;
    margin-bottom: 4rem;
  }

  .section-header.centered {
    max-width: 800px;
    margin: 0 auto 4rem;
    text-align: center;
  }

  .section-label {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #84bd3f;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 600;
    line-height: 1.2;
    color: var(--gray-900, #212121);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .title-accent {
    color: #84bd3f;
  }

  .section-description {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--gray-600, #757575);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: var(--bg-white, #ffffff);
    border: 1px solid var(--gray-200, #eeeeee);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    opacity: 0;
    transform: translateY(30px);
  }

  .services.visible .service-card {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .service-card:hover {
    border-color: #84bd3f;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
    transform: translateY(-8px);
  }

  .service-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  .service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .service-card:hover .service-image img {
    transform: scale(1.05);
  }

  .service-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.3));
  }

  .service-content {
    padding: 1.5rem;
  }

  .service-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-900, #212121);
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  .service-card:hover .service-title {
    color: #84bd3f;
  }

  .service-description {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--gray-600, #757575);
    margin-bottom: 1rem;
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .service-features li {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.8125rem;
    color: var(--gray-600, #757575);
  }

  .service-features svg {
    color: #84bd3f;
    flex-shrink: 0;
  }

  .service-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #84bd3f;
  }

  .service-link svg {
    transition: transform 0.3s ease;
  }

  .service-card:hover .service-link svg {
    transform: translateX(4px);
  }

  /* ===== EXPERIENCE SECTION ===== */
  .experience {
    padding: clamp(60px, 10vw, 100px) 0;
    background: var(--gray-50, #fafafa);
  }

  .experience-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  .experience-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .experience-content {
      grid-template-columns: 1fr 1fr;
    }
  }

  .experience-image {
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 4/3;
  }

  .experience-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .experience-text h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 600;
    color: var(--gray-900, #212121);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .experience-divider {
    width: 48px;
    height: 4px;
    background: #e52421;
    margin-bottom: 1.5rem;
    border-radius: 2px;
  }

  .experience-text p {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--gray-600, #757575);
    margin-bottom: 2rem;
  }

  .experience-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .experience-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    color: var(--gray-700, #616161);
  }

  .list-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(132, 189, 63, 0.1);
    border-radius: 50%;
    color: #84bd3f;
    flex-shrink: 0;
  }

  .list-icon svg {
    width: 16px;
    height: 16px;
  }

  /* ===== STATS SECTION ===== */
  .stats {
    position: relative;
    padding: 100px 0;
    background: var(--gray-900, #212121);
    overflow: hidden;
  }

  .stats-container {
    position: relative;
    z-index: 10;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  .stats-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .stats-header h2 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: -0.01em;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-item {
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay);
  }

  .stats.visible .stat-item {
    opacity: 1;
    transform: translateY(0);
  }

  .stat-value {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .stat-number {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .stat-suffix {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 600;
    color: #84bd3f;
    margin-left: 0.125rem;
  }

  .stat-label {
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.25rem;
  }

  .stat-sublabel {
    font-size: 0.8125rem;
    color: var(--gray-500, #9e9e9e);
  }

  .stats-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .bg-pattern {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.5;
  }

  /* ===== WHY CHOOSE US SECTION ===== */
  .why-choose {
    padding: clamp(80px, 12vw, 140px) 0;
    background: var(--bg-white, #ffffff);
  }

  .why-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .why-card {
    padding: 2rem;
    background: var(--gray-50, #fafafa);
    border-radius: 12px;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay);
  }

  .why-choose.visible .why-card {
    opacity: 1;
    transform: translateY(0);
  }

  .why-card:hover {
    background: var(--bg-white, #ffffff);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  }

  .why-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: rgba(132, 189, 63, 0.1);
    border-radius: 12px;
    color: #84bd3f;
    margin: 0 auto 1.25rem;
  }

  .why-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900, #212121);
    margin-bottom: 0.75rem;
  }

  .why-card p {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--gray-600, #757575);
    margin: 0;
  }

  .features-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    background: #84bd3f;
    border-radius: 12px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #ffffff;
  }

  .feature-item svg {
    flex-shrink: 0;
  }

  .feature-item span {
    font-size: 0.9375rem;
    font-weight: 500;
  }

  /* ===== CTA SECTION ===== */
  .cta {
    padding: clamp(80px, 12vw, 120px) 0;
    background: var(--gray-50, #fafafa);
  }

  .cta-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .cta-container {
      grid-template-columns: 1fr 1fr;
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
    color: #84bd3f;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .cta-title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 600;
    line-height: 1.15;
    color: var(--gray-900, #212121);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .cta-description {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--gray-600, #757575);
    margin-bottom: 2rem;
    max-width: 480px;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .cta-contact-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-200, #eeeeee);
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 0.9375rem;
    color: var(--gray-600, #757575);
  }

  .contact-item svg {
    color: var(--gray-400, #bdbdbd);
  }

  .cta-visual {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
  }

  .cta.visible .cta-visual {
    opacity: 1;
    transform: translateX(0);
  }

  .cta-map {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    .hero {
      min-height: auto;
      padding-bottom: 100px;
    }

    .hero-cta {
      flex-direction: column;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      justify-content: center;
    }

    .hero-scroll {
      display: none;
    }

    .cta-actions {
      flex-direction: column;
    }

    .cta-actions .btn-primary,
    .cta-actions .btn-secondary {
      width: 100%;
      justify-content: center;
    }

    .features-row {
      gap: 1rem;
    }

    .feature-item {
      width: 100%;
      justify-content: center;
    }
  }
</style>
