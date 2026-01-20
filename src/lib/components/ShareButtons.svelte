<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    title: string;
    url?: string;
    description?: string;
  }

  let { title, url = '', description = '' }: Props = $props();

  let currentUrl = $state('');

  onMount(() => {
    if (url) {
      currentUrl = url;
    } else if (typeof window !== 'undefined') {
      currentUrl = window.location.href;
    }
  });

  const encodedTitle = $derived(encodeURIComponent(title));
  const encodedUrl = $derived(encodeURIComponent(currentUrl));
  const encodedDescription = $derived(encodeURIComponent(description));

  const shareLinks = $derived({
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  });

  function handleShare(platform: string) {
    const link = shareLinks[platform as keyof typeof shareLinks];
    if (platform === 'email') {
      window.location.href = link;
    } else {
      window.open(link, '_blank', 'width=600,height=400');
    }
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(currentUrl);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      copied = true;
      setTimeout(() => copied = false, 2000);
    }
  }

  let copied = $state(false);
</script>

<div class="share-buttons">
  <span class="share-label">Compartir:</span>

  <div class="share-icons">
    <button
      onclick={() => handleShare('facebook')}
      class="share-btn facebook"
      aria-label="Compartir en Facebook"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
      </svg>
    </button>

    <button
      onclick={() => handleShare('twitter')}
      class="share-btn twitter"
      aria-label="Compartir en Twitter"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    </button>

    <button
      onclick={() => handleShare('linkedin')}
      class="share-btn linkedin"
      aria-label="Compartir en LinkedIn"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    </button>

    <button
      onclick={() => handleShare('whatsapp')}
      class="share-btn whatsapp"
      aria-label="Compartir en WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    </button>

    <button
      onclick={() => handleShare('email')}
      class="share-btn email"
      aria-label="Compartir por correo"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 7l-10 6L2 7"/>
      </svg>
    </button>

    <button
      onclick={copyToClipboard}
      class="share-btn copy"
      class:copied
      aria-label="Copiar enlace"
    >
      {#if copied}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      {:else}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="9" y="9" width="13" height="13" rx="2"/>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </svg>
      {/if}
    </button>
  </div>
</div>

<style>
  .share-buttons {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  .share-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-600);
  }

  .share-icons {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .share-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--gray-500);
    background: var(--gray-50);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .share-btn:hover {
    color: var(--white);
  }

  .share-btn.facebook:hover {
    background: #1877f2;
  }

  .share-btn.twitter:hover {
    background: #000000;
  }

  .share-btn.linkedin:hover {
    background: #0a66c2;
  }

  .share-btn.whatsapp:hover {
    background: #25d366;
  }

  .share-btn.email:hover {
    background: var(--gray-700);
  }

  .share-btn.copy:hover {
    background: var(--clover-green);
  }

  .share-btn.copy.copied {
    background: var(--clover-green);
    color: var(--white);
  }
</style>
