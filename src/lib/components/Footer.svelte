<script lang="ts">
  import { localeStore, t, type Locale } from '$lib/i18n';

  let currentLocale = $state<Locale>('es');

  // Subscribe to locale changes to trigger reactivity
  $effect(() => {
    const unsubscribe = localeStore.subscribe((value) => {
      currentLocale = value;
    });
    return unsubscribe;
  });

  // Use currentLocale dependency to make these reactive when language changes
  const services = $derived([
    { label: t('nav.digitalManagement', currentLocale), href: '/gestion-digital' },
    { label: t('nav.physicalManagement', currentLocale), href: '/gestion-fisica' },
  ]);

  const company = $derived([
    { label: t('nav.aboutUs', currentLocale), href: '/quienes-somos' },
    { label: t('common.contact', currentLocale), href: '/contacto' },
    { label: t('footer.blog', currentLocale), href: '/para-ti' },
  ]);

  const platforms = [
    { label: 'Clover Venezuela', href: 'https://www.cloverve.com', external: true },
    { label: 'Clover Mudanzas', href: 'https://www.clovermudanzas.com', external: true },
    { label: 'Portal de Solicitudes', href: 'https://servicioscloverfile.com/', external: true },
  ];

  const social = [
    { name: 'Instagram', href: 'https://instagram.com/cloverfile' },
    { name: 'Facebook', href: 'https://www.facebook.com/cloverfile' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/clovervzla/' },
  ];
</script>

<footer class="footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <img src="/images/logo-3.png" alt="Clover File" />
          </a>
          <p class="footer-tagline">
            {t('footer.tagline', currentLocale)}
          </p>
          <div class="footer-social">
            {#each social as item}
              <a href={item.href} target="_blank" rel="noopener" aria-label={item.name}>
                {#if item.name === 'Instagram'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                {:else if item.name === 'Facebook'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                  </svg>
                {:else if item.name === 'LinkedIn'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                {/if}
              </a>
            {/each}
          </div>
        </div>

        <div class="footer-links">
          <h4>{t('common.services', currentLocale)}</h4>
          <ul>
            {#each services as item}
              <li><a href={item.href}>{item.label}</a></li>
            {/each}
          </ul>
        </div>

        <div class="footer-links">
          <h4>{t('common.company', currentLocale)}</h4>
          <ul>
            {#each company as item}
              <li>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener' : undefined}
                >
                  {item.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <div class="footer-links">
          <h4>{t('common.platforms', currentLocale)}</h4>
          <ul>
            {#each platforms as item}
              <li>
                <a href={item.href} target="_blank" rel="noopener">
                  {item.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
      <div class="footer-legal-links">
        <a href="/terms-of-services">{t('footer.termsAndConditions')}</a>
        <span class="separator">|</span>
        <a href="/privacy-policy">{t('footer.privacyPolicy')}</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--gray-900);
    color: var(--gray-400);
  }

  .footer-main {
    padding: var(--space-4xl) 0;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  @media (min-width: 768px) {
    .footer-grid {
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: var(--space-2xl);
    }
  }

  .footer-brand {
    max-width: 280px;
  }

  .footer-logo img {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
    margin-bottom: var(--space-lg);
  }

  .footer-tagline {
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .footer-social {
    display: flex;
    gap: var(--space-sm);
  }

  .footer-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--gray-400);
    background: var(--gray-800);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .footer-social a:hover {
    color: var(--white);
    background: var(--clover-green);
  }

  .footer-links h4 {
    margin-bottom: var(--space-lg);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .footer-links ul {
    list-style: none;
  }

  .footer-links li {
    margin-bottom: var(--space-sm);
  }

  .footer-links a {
    font-size: 0.875rem;
    color: var(--gray-400);
    transition: color var(--transition-fast);
  }

  .footer-links a:hover {
    color: var(--white);
  }

  .footer-bottom {
    border-top: 1px solid var(--gray-800);
    padding: var(--space-lg) 0;
  }

  .footer-bottom .container {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }

  @media (min-width: 768px) {
    .footer-bottom .container {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  .footer-bottom p,
  .footer-bottom a {
    font-size: 0.8125rem;
    color: var(--gray-500);
  }

  .footer-bottom a:hover {
    color: var(--white);
  }

  .footer-legal-links {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .footer-legal-links .separator {
    color: var(--gray-600);
  }
</style>
