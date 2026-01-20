<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let sectionRef = $state<HTMLElement | null>(null);
  let animatedValues = $state([0, 0, 0, 0]);

  const stats = [
    { value: 60, suffix: '+', label: 'Años de operación', sublabel: 'Desde 1964' },
    { value: 6, suffix: '', label: 'Países con presencia', sublabel: 'Venezuela, USA, Países Bajos, China, Brasil, Panamá' },
    { value: 70000, suffix: '', label: 'm² de almacenaje', sublabel: 'Capacidad instalada' },
    { value: 40, suffix: '+', label: 'Años en CloverFile', sublabel: 'Gestión documental' }
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
      <h2>Números que respaldan nuestra experiencia</h2>
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

  <!-- Background decoration -->
  <div class="stats-bg">
    <div class="bg-pattern"></div>
  </div>
</section>

<style>
  .stats {
    position: relative;
    padding: 140px 0;
    background: var(--gray-900);
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

  .stats-header h2 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: -0.01em;
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
    margin-bottom: 0.75rem;
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
    color: var(--clover-green);
    margin-left: 0.125rem;
  }

  .stat-label {
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);
    margin-bottom: 0.25rem;
  }

  .stat-sublabel {
    font-size: 0.8125rem;
    color: var(--gray-500);
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

  @media (max-width: 640px) {
    .stats {
      padding: 80px 0;
    }

    .stats-header {
      margin-bottom: 2.5rem;
    }

    .stat-sublabel {
      font-size: 0.6875rem;
    }
  }
</style>
