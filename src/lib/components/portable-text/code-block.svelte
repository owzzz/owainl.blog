<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
  $: ({ language, code } = value);
</script>

<div class="px-4 py-4 bg-gray-800 text-white border-b rounded-md mt-4">
  <div class="block font-body text-xs border-b pb-2 uppercase">{language}</div>
  <pre class="m-0 p-0">
    <code class="block text-sm p-0 m-0">{code.trim()}</code></pre>
</div>