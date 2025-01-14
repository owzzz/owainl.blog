<script lang="ts">
	import type { PageData } from './$types';
	import PortableTextComponents from '$lib/components/portable-text/portable-text-components.svelte';

	export let data: PageData;
</script>

<div class="flex-grow w-full max-w-xl">
  <header>
    <span class='inline-block text-gray-400 font-semibold uppercase text-xs'>{data.page.title}</span>
  </header>
  <main class="my-8">
    {#if data.page}
      <main>
        <PortableTextComponents value={data.page.body} />
      </main>
    {/if}
  </main>
</div>