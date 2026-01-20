<script lang="ts">
  import { page } from '$app/stores';
  import { cmsStore } from '$lib/stores/cms';
  import { onMount } from 'svelte';

  let { children } = $props();

  let sidebarCollapsed = $state(false);
  let currentPath = $derived($page.url.pathname);

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: 'dashboard' },
    { href: '/admin/articles', label: 'Articles', icon: 'article' },
    { href: '/admin/case-studies', label: 'Case Studies', icon: 'cases' },
    { href: '/admin/media', label: 'Media', icon: 'image' }
  ];

  function isActive(href: string): boolean {
    if (href === '/admin') {
      return currentPath === '/admin';
    }
    return currentPath.startsWith(href);
  }

  onMount(() => {
    cmsStore.init();
  });
</script>

<div class="admin-layout" class:collapsed={sidebarCollapsed}>
  <aside class="admin-sidebar">
    <div class="sidebar-header">
      <a href="/admin" class="logo">
        <span class="logo-icon">C</span>
        {#if !sidebarCollapsed}
          <span class="logo-text">Clover CMS</span>
        {/if}
      </a>
      <button
        class="toggle-btn"
        onclick={() => sidebarCollapsed = !sidebarCollapsed}
        aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          {#if sidebarCollapsed}
            <path d="M9 18l6-6-6-6" />
          {:else}
            <path d="M15 18l-6-6 6-6" />
          {/if}
        </svg>
      </button>
    </div>

    <nav class="sidebar-nav">
      {#each navItems as item}
        <a
          href={item.href}
          class="nav-item"
          class:active={isActive(item.href)}
          title={sidebarCollapsed ? item.label : undefined}
        >
          <span class="nav-icon">
            {#if item.icon === 'dashboard'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            {:else if item.icon === 'article'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            {:else if item.icon === 'cases'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
              </svg>
            {:else if item.icon === 'image'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            {/if}
          </span>
          {#if !sidebarCollapsed}
            <span class="nav-label">{item.label}</span>
          {/if}
        </a>
      {/each}
    </nav>

    <div class="sidebar-footer">
      <a href="/" class="nav-item" title={sidebarCollapsed ? 'View Site' : undefined}>
        <span class="nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <path d="M15 3h6v6M10 14L21 3" />
          </svg>
        </span>
        {#if !sidebarCollapsed}
          <span class="nav-label">View Site</span>
        {/if}
      </a>
    </div>
  </aside>

  <main class="admin-main">
    <div class="admin-content">
      {@render children()}
    </div>
  </main>
</div>

<style>
  :global(body) {
    --admin-bg: #0f0f0f;
    --admin-surface: #1a1a1a;
    --admin-surface-hover: #242424;
    --admin-border: #2a2a2a;
    --admin-text: #e5e5e5;
    --admin-text-muted: #888888;
    --admin-accent: #00A651;
    --admin-accent-hover: #00c45f;
    --admin-danger: #ef4444;
    --admin-warning: #f59e0b;
    --admin-success: #10b981;
  }

  .admin-layout {
    display: flex;
    min-height: 100vh;
    background: var(--admin-bg);
    color: var(--admin-text);
  }

  .admin-sidebar {
    width: 260px;
    background: var(--admin-surface);
    border-right: 1px solid var(--admin-border);
    display: flex;
    flex-direction: column;
    transition: width 0.2s ease;
    position: fixed;
    height: 100vh;
    z-index: 100;
  }

  .collapsed .admin-sidebar {
    width: 72px;
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid var(--admin-border);
    min-height: 64px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--admin-text);
    font-weight: 600;
    font-size: 1.125rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    background: var(--admin-accent);
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .collapsed .logo-text {
    display: none;
  }

  .toggle-btn {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: transparent;
    border: none;
    color: var(--admin-text-muted);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
  }

  .toggle-btn:hover {
    background: var(--admin-surface-hover);
    color: var(--admin-text);
  }

  .toggle-btn svg {
    width: 18px;
    height: 18px;
  }

  .collapsed .toggle-btn {
    display: none;
  }

  .sidebar-nav {
    flex: 1;
    padding: 1rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    color: var(--admin-text-muted);
    text-decoration: none;
    transition: all 0.15s ease;
    font-size: 0.9375rem;
    font-weight: 500;
  }

  .nav-item:hover {
    background: var(--admin-surface-hover);
    color: var(--admin-text);
  }

  .nav-item.active {
    background: var(--admin-accent);
    color: white;
  }

  .nav-icon {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .nav-icon svg {
    width: 100%;
    height: 100%;
  }

  .collapsed .nav-item {
    justify-content: center;
    padding: 0.75rem;
  }

  .collapsed .nav-label {
    display: none;
  }

  .sidebar-footer {
    padding: 1rem 0.75rem;
    border-top: 1px solid var(--admin-border);
  }

  .admin-main {
    flex: 1;
    margin-left: 260px;
    transition: margin-left 0.2s ease;
    min-height: 100vh;
  }

  .collapsed .admin-main {
    margin-left: 72px;
  }

  .admin-content {
    padding: 2rem;
    max-width: 1600px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .admin-sidebar {
      width: 72px;
    }

    .admin-main {
      margin-left: 72px;
    }

    .logo-text,
    .nav-label {
      display: none;
    }

    .nav-item {
      justify-content: center;
      padding: 0.75rem;
    }

    .toggle-btn {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .admin-content {
      padding: 1rem;
    }
  }
</style>
