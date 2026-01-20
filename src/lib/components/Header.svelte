<script lang="ts">
  import { onMount } from 'svelte';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import { localeStore, t, type Locale } from '$lib/i18n';

  let scrolled = $state(false);
  let mobileMenuOpen = $state(false);
  let serviciosOpen = $state(false);
  let currentLocale = $state<Locale>('es');

  $effect(() => {
    const unsubscribe = localeStore.subscribe((value) => {
      currentLocale = value;
    });
    return unsubscribe;
  });

  // Use currentLocale dependency to make these reactive when language changes
  const serviciosItems = $derived([
    { label: t('nav.digitalManagement', currentLocale), href: '/gestion-digital' },
    { label: t('nav.physicalManagement', currentLocale), href: '/gestion-fisica' },
  ]);

  const navItems = $derived([
    { label: t('nav.aboutUs', currentLocale), href: '/quienes-somos' },
    { label: t('nav.blog', currentLocale), href: '/para-ti' },
  ]);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }
</script>

<header class="header" class:scrolled class:menu-open={mobileMenuOpen}>
  <div class="header-container">
    <a href="/" class="logo">
      <img src="/images/logo-3.png" alt="Clover File" />
    </a>

    <nav class="nav-desktop">
      <!-- Servicios Dropdown -->
      <div
        class="nav-dropdown"
        onmouseenter={() => serviciosOpen = true}
        onmouseleave={() => serviciosOpen = false}
      >
        <button
          class="nav-link"
          aria-expanded={serviciosOpen}
          onclick={() => serviciosOpen = !serviciosOpen}
        >
          {t('nav.services', currentLocale)}
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        {#if serviciosOpen}
          <div class="dropdown-menu">
            {#each serviciosItems as item}
              <a href={item.href} class="dropdown-item" onclick={() => serviciosOpen = false}>{item.label}</a>
            {/each}
          </div>
        {/if}
      </div>

      {#each navItems as item}
        <a
          href={item.href}
          class="nav-link"
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <div class="header-actions">
      <LanguageSwitcher />
      <a href="/contacto" class="btn-contact">{t('common.contact', currentLocale)}</a>

      <button class="menu-toggle" onclick={toggleMenu} aria-label={t('common.menu', currentLocale)}>
        <span class="hamburger" class:open={mobileMenuOpen}>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="mobile-menu">
      <nav class="mobile-nav">
        <div class="mobile-section">
          <span class="mobile-label">{t('nav.services', currentLocale)}</span>
          {#each serviciosItems as item}
            <a href={item.href} class="mobile-link" onclick={toggleMenu}>{item.label}</a>
          {/each}
        </div>
        <div class="mobile-section">
          {#each navItems as item}
            <a
              href={item.href}
              class="mobile-link"
              onclick={toggleMenu}
            >
              {item.label}
            </a>
          {/each}
        </div>
        <a href="/contacto" class="mobile-cta" onclick={toggleMenu}>{t('common.contact', currentLocale)}</a>
      </nav>
    </div>
  {/if}
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: transparent;
    transition: all 0.3s ease;
  }

  .header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  }

  .header.menu-open {
    background: #ffffff;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 2.5rem);
    height: 80px;
  }

  .logo img {
    height: 48px;
    width: auto;
    transition: filter 0.3s ease;
  }

  /* On dark hero, invert the logo for visibility */
  .header:not(.scrolled):not(.menu-open) .logo img {
    filter: brightness(0) invert(1);
  }

  /* Desktop Nav */
  .nav-desktop {
    display: none;
    align-items: center;
    gap: 0.25rem;
  }

  @media (min-width: 1200px) {
    .nav-desktop {
      display: flex;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.5rem 0.875rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .header.scrolled .nav-link,
  .header.menu-open .nav-link {
    color: #424242;
  }

  .nav-link:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }

  .header.scrolled .nav-link:hover,
  .header.menu-open .nav-link:hover {
    color: #00A651;
    background: rgba(0, 166, 81, 0.05);
  }

  .nav-link svg {
    transition: transform 0.2s ease;
  }

  .nav-dropdown:hover .nav-link svg {
    transform: rotate(180deg);
  }

  /* Dropdown */
  .nav-dropdown {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
    padding: 0.5rem;
    animation: dropdownFade 0.15s ease;
  }

  @keyframes dropdownFade {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .dropdown-item {
    display: block;
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #424242;
    border-radius: 6px;
    transition: all 0.15s ease;
  }

  .dropdown-item:hover {
    background: #f5f5f5;
    color: #00A651;
  }

  /* Actions */
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .btn-contact {
    display: none;
    padding: 0.625rem 1.25rem;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #ffffff;
    background: #00A651;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  @media (min-width: 768px) {
    .btn-contact {
      display: block;
    }
  }

  .btn-contact:hover {
    background: #008744;
    transform: translateY(-1px);
  }

  /* Mobile Toggle */
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
  }

  @media (min-width: 1200px) {
    .menu-toggle {
      display: none;
    }
  }

  .hamburger {
    position: relative;
    width: 22px;
    height: 14px;
  }

  .hamburger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffffff;
    transition: all 0.25s ease;
  }

  .header.scrolled .hamburger span,
  .header.menu-open .hamburger span {
    background: #1a1a1a;
  }

  .hamburger span:first-child { top: 0; }
  .hamburger span:last-child { bottom: 0; }

  .hamburger.open span:first-child {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  .hamburger.open span:last-child {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }

  /* Mobile Menu */
  .mobile-menu {
    position: fixed;
    inset: 80px 0 0 0;
    background: #ffffff;
    overflow-y: auto;
    animation: slideDown 0.25s ease;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .mobile-nav {
    padding: 1.5rem;
  }

  .mobile-section {
    padding: 1rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .mobile-label {
    display: block;
    padding: 0.5rem 0;
    font-size: 0.6875rem;
    font-weight: 600;
    color: #9e9e9e;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .mobile-link {
    display: block;
    padding: 0.875rem 0;
    font-size: 1rem;
    font-weight: 500;
    color: #1a1a1a;
  }

  .mobile-link:hover {
    color: #00A651;
  }

  .mobile-cta {
    display: block;
    margin-top: 1.5rem;
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background: #00A651;
    border-radius: 8px;
  }
</style>
