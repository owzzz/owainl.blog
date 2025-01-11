<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps;
  
  $: ({ value } = portableText);
</script>

{#if value.listItem === 'bullet'}
  <ul class="list-disc list-outside ml-6 mt-5">
    {#each value.children as item}
      <li class="font-body text-gray-700">
        {#each item.children as span}
          {#if span.marks?.includes('strong')}
            <span class="font-bold text-black">{span.text}</span>
          {:else}
            {span.text}
          {/if}
        {/each}
      </li>
    {/each}
  </ul>
{:else if value.listItem === 'number'}
  <ol class="list-decimal list-outside ml-6 mt-5">
    {#each value.children as item}
      <li class="font-body text-gray-700">
        {#each item.children as span}
          {#if span.marks?.length}
            <span class={span.marks.join(' ')}>{span.text}</span>
          {:else}
            {span.text}
          {/if}
        {/each}
      </li>
    {/each}
  </ol>
{/if}