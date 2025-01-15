<script lang="ts">
  import CenteredContent from '$lib/components/centered-content/component.svelte';

  export let title: string | undefined;
  export let description: string | undefined;
  export let additionalText: string | undefined;
</script>

<CenteredContent>
  {#if title || description}
    <h1 class="font-title text-1xl md:text-2xl tracking-wide leading-normal text-center">
      {#if title}
        {title}<span class="animate-blink">_</span><br />
      {/if}

      {#if description}
        <span class="text-1xl md:text-3xl mt-2 block">
          {description}
        </span>
      {/if}
    </h1>
  {/if}

  {#if additionalText}
    <p class="font-body text-gray-500 mt-4 leading-relaxed text-center">
      {additionalText}
    </p>
  {/if}
</CenteredContent>