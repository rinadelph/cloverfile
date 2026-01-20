<script lang="ts">
  import { localeStore, setLocale, type Locale, supportedLocales } from '$lib/i18n';

  let currentLocale = $state<Locale>('es');
  let isOpen = $state(false);

  // Subscribe to locale changes
  $effect(() => {
    const unsubscribe = localeStore.subscribe((value) => {
      currentLocale = value;
    });
    return unsubscribe;
  });

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectLocale(locale: Locale) {
    setLocale(locale);
    isOpen = false;
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-switcher')) {
      isOpen = false;
    }
  }

  $effect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  });

  const localeLabels: Record<Locale, string> = {
    es: 'ES',
    en: 'EN'
  };

  const localeFullNames: Record<Locale, string> = {
    es: 'Espanol',
    en: 'English'
  };
</script>

<div class="language-switcher">
  <button
    class="language-toggle"
    onclick={toggleDropdown}
    aria-expanded={isOpen}
    aria-label="Select language"
  >
    <svg class="globe-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
    <span class="current-locale">{localeLabels[currentLocale]}</span>
    <svg class="chevron" class:open={isOpen} width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>

  {#if isOpen}
    <div class="language-dropdown">
      {#each supportedLocales as locale}
        <button
          class="language-option"
          class:active={locale === currentLocale}
          onclick={() => selectLocale(locale)}
        >
          <span class="locale-code">{localeLabels[locale]}</span>
          <span class="locale-name">{localeFullNames[locale]}</span>
          {#if locale === currentLocale}
            <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .language-switcher {
    position: relative;
  }

  .language-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--gray-600);
    background: transparent;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .language-toggle:hover {
    color: var(--gray-900);
    border-color: var(--gray-300);
    background: var(--gray-50);
  }

  .globe-icon {
    flex-shrink: 0;
    opacity: 0.7;
  }

  .current-locale {
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .chevron {
    transition: transform var(--transition-fast);
  }

  .chevron.open {
    transform: rotate(180deg);
  }

  .language-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    min-width: 140px;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    padding: 4px;
    z-index: 100;
    animation: fadeIn 0.15s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .language-option {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 12px;
    font-size: 0.875rem;
    color: var(--gray-700);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all var(--transition-fast);
    text-align: left;
  }

  .language-option:hover {
    background: var(--gray-50);
    color: var(--gray-900);
  }

  .language-option.active {
    background: var(--gray-50);
    color: var(--clover-green);
  }

  .locale-code {
    font-weight: 600;
    min-width: 24px;
  }

  .locale-name {
    flex: 1;
    color: var(--gray-500);
  }

  .language-option.active .locale-name {
    color: var(--clover-green);
  }

  .check-icon {
    flex-shrink: 0;
    color: var(--clover-green);
  }
</style>
