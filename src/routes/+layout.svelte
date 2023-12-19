<script>
    import "../app.css";
    import GlobalNavigation from "$lib/components/global-nav/component.svelte";
    import Footer from "$lib/components/footer/component.svelte";

    import "@fontsource/roboto";
    import '@fontsource/be-vietnam-pro/500.css';
</script>

<GlobalNavigation />
<slot />
<Footer />