<script lang="ts">
  // Import shared Clover styles
  import '$lib/styles/variables.css';
  import '$lib/styles/base.css';
  import '$lib/styles/components.css';
  // Import app-specific overrides
  import '../app.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <!-- Default favicon - pages should override title and description -->
  <link rel="icon" href="/images/favicon.ico" />
  <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
</svelte:head>

<Header />

<main>
  {@render children()}
</main>

<Footer />

<style>
  main {
    min-height: 100vh;
  }
</style>
