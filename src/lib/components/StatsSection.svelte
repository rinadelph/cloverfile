<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let sectionRef = $state<HTMLElement | null>(null);
  let animatedValues = $state([0, 0, 0, 0]);

  const stats = [
    { value: 40, suffix: '+', label: 'Anos de experiencia', sublabel: 'Liderando la gestion documental desde 1984' },
    { value: 500, suffix: '+', label: 'Clientes satisfechos', sublabel: 'Empresas confian en nosotros' },
    { value: 4, suffix: 'M+', label: 'Cajas bajo custodia', sublabel: 'Documentos almacenados de forma segura' },
    { value: 24, suffix: '/7', label: 'Disponibilidad', sublabel: 'Acceso a tu informacion cuando la necesites' }
  ];

  function animateNumber(index: number, target: number, duration: number = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            isVisible = true;
            // Start animations with staggered delay
            stats.forEach((stat, i) => {
              setTimeout(() => {
                animateNumber(i, stat.value);
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section class="stats" class:visible={isVisible} bind:this={sectionRef}>
  <div class="stats-container">
    <div class="stats-header">
      <span class="stats-label">Nuestra Trayectoria</span>
      <h2 class="stats-title">
        Numeros que respaldan<br/>
        <span class="title-accent">nuestra experiencia</span>
      </h2>
    </div>

    <div class="stats-grid">
      {#each stats as stat, i}
        <div class="stat-item" style="--delay: {i * 0.1}s">
          <div class="stat-icon">
            {#if i === 0}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            {:else if i === 1}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            {:else if i === 2}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            {:else}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            {/if}
          </div>
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

  <!-- Background decoration -->
  <div class="stats-bg">
    <div class="bg-pattern"></div>
    <div class="bg-gradient"></div>
  </div>
</section>

<style>
  .stats {
    position: relative;
    padding: clamp(80px, 12vw, 140px) 0;
    background: linear-gradient(135deg, #003C75 0%, #004387 100%);
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
    margin-bottom: 4rem;
  }

  .stats-label {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(139, 176, 25, 0.2);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #8BB019;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .stats-title {
    font-size: clamp(2rem, 4.5vw, 2.75rem);
    font-weight: 600;
    line-height: 1.15;
    color: #ffffff;
    letter-spacing: -0.02em;
  }

  .title-accent {
    color: #8BB019;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }

  .stat-item {
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem 1.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay);
  }

  .stats.visible .stat-item {
    opacity: 1;
    transform: translateY(0);
  }

  .stat-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(139, 176, 25, 0.3);
    transform: translateY(-4px);
  }

  .stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin: 0 auto 1.25rem;
    background: rgba(139, 176, 25, 0.15);
    border-radius: 12px;
    color: #8BB019;
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
    color: var(--white);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .stat-suffix {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 600;
    color: #8BB019;
    margin-left: 0.125rem;
  }

  .stat-label {
    font-size: 1rem;
    font-weight: 600;
    color: #8BB019;
    margin-bottom: 0.5rem;
  }

  .stat-sublabel {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
  }

  /* Background */
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

  .bg-gradient {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 10% 90%, rgba(139, 176, 25, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
  }

  @media (max-width: 640px) {
    .stats {
      padding: 60px 0;
    }

    .stats-header {
      margin-bottom: 2.5rem;
    }

    .stat-item {
      padding: 1.5rem 1rem;
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 1rem;
    }

    .stat-sublabel {
      font-size: 0.6875rem;
    }
  }
</style>
