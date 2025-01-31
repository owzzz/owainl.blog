<script>
  import "../app.css";

  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  
  inject({ mode: dev ? 'development' : 'production' });

  import GlobalNavigation from "$lib/components/global-nav/component.svelte";
  import Footer from "$lib/components/footer/component.svelte";

  import "@fontsource/roboto";
  import '@fontsource/be-vietnam-pro/500.css';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();
</script>

<GlobalNavigation />
<slot />
<Footer />