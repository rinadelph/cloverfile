<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let sectionRef = $state<HTMLElement | null>(null);

  const digitalServices = [
    {
      icon: '/images/ES.png',
      title: 'Digitalizacion',
      subtitle: 'Escaneo de Documentos, Planos y Libros',
      description: 'Contamos con equipos de alta gama manejados por profesionales que promueven altos estandares de calidad durante todo el proceso de conversion de archivos fisicos a digitales.',
      features: ['Escaneo de alta resolucion', 'OCR integrado', 'Formatos multiples']
    },
    {
      icon: '/images/aaut.png',
      title: 'Software de Gestion',
      subtitle: 'Plataformas de Gestion Documental',
      description: 'Ponemos a tu disposicion plataformas integrales de gestion documental, disenadas para trabajar en entornos de alta exigencia, flexibles y parametrizables.',
      features: ['Acceso por perfiles', 'Busqueda avanzada', 'Reportes automaticos']
    },
    {
      icon: '/images/aut.png',
      title: 'Automatizacion',
      subtitle: 'Flujos de Trabajo Digitales',
      description: 'Implementamos flujos de trabajo disenados a la medida con tecnologias innovadoras que permiten reducir el trabajo manual y evitar errores humanos.',
      features: ['Workflows personalizados', 'Integracion con sistemas', 'Alertas automaticas']
    },
    {
      icon: '/images/apng.png',
      title: 'Almacenamiento en Nube',
      subtitle: 'Respaldo y Acceso 24/7',
      description: 'Respaldamos tus datos en nuestro servicio de Nube, brindando acceso 24x7 a la informacion con capacidad de almacenamiento adaptada a tus necesidades.',
      features: ['Acceso desde cualquier lugar', 'Encriptacion segura', 'Backup automatico']
    }
  ];

  const physicalServices = [
    {
      icon: '/images/cajas.png',
      title: 'Cajas',
      subtitle: 'Almacenamiento de Documentos',
      description: 'Cajas fabricadas con carton corrugado doble pared de alta calidad que protegen de manera efectiva contra cambios de temperatura, humedad y polvo.',
      features: ['Carton de alta calidad', 'Vida util de 10 anos', 'Soporta hasta 25kg']
    },
    {
      icon: '/images/almanen.png',
      title: 'Almacenes',
      subtitle: 'Bodegas Especializadas',
      description: 'Garantizamos la confidencialidad, seguridad, integridad y custodia de tus archivos fisicos con sistema computarizado que permite consulta inmediata 24 horas.',
      features: ['Vigilancia 24/7', 'Control de humedad', 'Sistema contra incendios']
    },
    {
      icon: '/images/iventario.png',
      title: 'Inventario y Gestion',
      subtitle: 'Organizacion de Archivos',
      description: 'Nuestro personal experto esta a tu disposicion para brindarte asesoria en Gestion Documental, Inventarios e Indexacion de tus archivos fisicos y digitales.',
      features: ['Inventarios detallados', 'Indexacion profesional', 'Recuperacion de archivos']
    },
    {
      icon: '/images/traslado.png',
      title: 'Traslado',
      subtitle: 'Documentos y Medios Magneticos',
      description: 'Trasladamos tu patrimonio documental y dispositivos de almacenamiento con protocolos que garantizan la seguridad y organizacion de tu informacion.',
      features: ['Vehiculos propios', 'GPS y vigilancia', 'Alcance nacional']
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
  <!-- Digital Services Section -->
  <div class="services-category digital">
    <div class="category-background">
      <div class="bg-pattern"></div>
    </div>
    <div class="services-container">
      <div class="category-header">
        <span class="category-label">Gestion Digital</span>
        <h2 class="category-title">
          Implementamos herramientas digitales<br/>
          <span class="title-accent">de ultima generacion</span>
        </h2>
        <p class="category-description">
          La Gestion Digital de Informacion, en complemento con la automatizacion de los procesos,
          proporciona ventajas competitivas, ayuda a la toma de decisiones e identifica nuevas
          oportunidades para tu organizacion.
        </p>
      </div>

      <div class="services-grid">
        {#each digitalServices as service, i}
          <div class="service-card" style="--delay: {i * 0.1}s">
            <div class="card-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div class="card-content">
              <h3 class="card-title">{service.title}</h3>
              <p class="card-subtitle">{service.subtitle}</p>
              <p class="card-description">{service.description}</p>
              <ul class="card-features">
                {#each service.features as feature}
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Physical Services Section -->
  <div class="services-category physical">
    <div class="services-container">
      <div class="category-header">
        <span class="category-label">Gestion Fisica</span>
        <h2 class="category-title">
          Administramos tu documentacion<br/>
          <span class="title-accent">de forma estandarizada y segura</span>
        </h2>
        <p class="category-description">
          Permite la clasificacion, organizacion y gestion de las actividades de tu empresa
          que requieren mantener en soporte fisico, sin limitar tu espacio y garantizando
          la recuperacion inmediata.
        </p>
      </div>

      <div class="services-grid">
        {#each physicalServices as service, i}
          <div class="service-card" style="--delay: {i * 0.1}s">
            <div class="card-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div class="card-content">
              <h3 class="card-title">{service.title}</h3>
              <p class="card-subtitle">{service.subtitle}</p>
              <p class="card-description">{service.description}</p>
              <ul class="card-features">
                {#each service.features as feature}
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .services {
    overflow: hidden;
  }

  /* Digital Section */
  .services-category.digital {
    position: relative;
    padding: clamp(80px, 12vw, 140px) 0;
    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  }

  .category-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .bg-pattern {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: url('/images/pattern-servicios-01.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    mask-image: linear-gradient(to left, black, transparent);
    -webkit-mask-image: linear-gradient(to left, black, transparent);
  }

  /* Physical Section */
  .services-category.physical {
    padding: clamp(80px, 12vw, 140px) 0;
    background: #ffffff;
  }

  .services-container {
    position: relative;
    z-index: 10;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  /* Category Header */
  .category-header {
    max-width: 680px;
    margin-bottom: 4rem;
  }

  .category-label {
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

  .services-category.physical .category-label {
    background: rgba(139, 176, 25, 0.1);
    color: #8BB019;
  }

  .category-title {
    font-size: clamp(2rem, 4.5vw, 2.75rem);
    font-weight: 600;
    line-height: 1.15;
    color: var(--gray-900);
    margin-bottom: 1.25rem;
    letter-spacing: -0.02em;
  }

  .title-accent {
    color: #004387;
  }

  .services-category.physical .title-accent {
    color: #8BB019;
  }

  .category-description {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--gray-600);
  }

  /* Services Grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* Service Card */
  .service-card {
    background: #ffffff;
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: 2rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay);
  }

  .services.visible .service-card {
    opacity: 1;
    transform: translateY(0);
  }

  .service-card:hover {
    border-color: #004387;
    box-shadow: 0 12px 40px rgba(0, 67, 135, 0.1);
    transform: translateY(-4px);
  }

  .services-category.physical .service-card:hover {
    border-color: #8BB019;
    box-shadow: 0 12px 40px rgba(139, 176, 25, 0.12);
  }

  /* Card Icon */
  .card-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
  }

  .card-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* Card Content */
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.375rem;
  }

  .card-subtitle {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #004387;
    margin-bottom: 1rem;
  }

  .services-category.physical .card-subtitle {
    color: #8BB019;
  }

  .card-description {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--gray-600);
    margin-bottom: 1.25rem;
  }

  /* Card Features */
  .card-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--gray-700);
  }

  .card-features svg {
    color: #8BB019;
    flex-shrink: 0;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .services-category {
      padding: 60px 0;
    }

    .category-header {
      margin-bottom: 2.5rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .service-card {
      padding: 1.5rem;
    }

    .card-icon {
      width: 56px;
      height: 56px;
    }
  }
</style>
