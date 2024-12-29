<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
</script>

{#if value.listItem === 'bullet'}
  <ul class="list-disc list-inside mt-4">
    {#each value.children as item}
      {#if item.children.length === 1 && item.children[0].text}
        <li class="font-body">{item.children[0].text}</li>
      {/if}
    {/each}
  </ul>
{:else if value.listItem === 'number'}
  <ol class="list-decimal list-inside mt-4">
    {#each value.children as item}
      {#if item.children.length === 1 && item.children[0].text}
        <li class="font-body">{item.children[0].text}</li>
      {/if}
    {/each}
  </ol>
{/if}