<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import TrustSection from '$lib/components/TrustSection.svelte';
  import StatsSection from '$lib/components/StatsSection.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getOrganizationSchema, getWebSiteSchema, getAllServicesSchemas } from '$lib/seo/schemas';
  import { pageSEO } from '$lib/seo/keywords';

  const seo = pageSEO.home;
  const jsonLd = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    ...getAllServicesSchemas()
  ];
</script>

<SEO
  title={seo.title}
  description={seo.description}
  {jsonLd}
/>

<Hero />
<Services />
<TrustSection />
<StatsSection />
<CTASection />
