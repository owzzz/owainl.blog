<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
  
  $: ({ code, filename } = value);
</script>

<div class="px-4 py-4 bg-gray-800 text-white border-b rounded-md mt-4">
  <div class="flex justify-between items-center font-body text-xs border-b pb-2">
    {#if filename}
      <div class="italic text-gray-400">{filename}</div>
    {/if}
  </div>
  <pre class="m-0 p-0">
    <code class="block text-sm p-0 m-0">{code}</code></pre>
</div>