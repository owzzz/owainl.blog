<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
  $: ({ children } = value);
</script>

{#if children.length === 1 && children[0].text}
  <p class="font-body mt-4 text-sm">{children[0].text}</p>
{:else}
  <br />
{/if}