<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
  $: ({ children } = value);
</script>

{#if children.length === 1 && children[0].text}
  <p class="font-body text-gray-700">{children[0].text}</p>
{/if}