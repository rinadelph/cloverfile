<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  // Redirect to /para-ti which is the main blog listing page
  onMount(() => {
    goto('/para-ti', { replaceState: true });
  });
</script>

<div class="redirect-message">
  <p>Redirigiendo al blog...</p>
</div>

<style>
  .redirect-message {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    padding-top: 72px;
  }

  .redirect-message p {
    color: var(--gray-500);
  }
</style>
