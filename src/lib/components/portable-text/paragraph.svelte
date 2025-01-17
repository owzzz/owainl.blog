<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
</script>

{#if value.children.length > 0 }
  <p class="font-body">
    {#each value.children as child}
      {#if child.marks?.length > 0}
        {#if child.marks?.includes('strong')}
          <strong class="font-bold text-black">{child.text}</strong>
        {:else if child.marks?.includes('em')}
          <em class="font-italic">{child.text}</em>
        {:else if child.marks?.includes('code')}
          <code class="font-mono">{child.text}</code>
        {:else if child.marks?.includes('underline')}
          <u class="underline">{child.text}</u>
        {:else if child.marks?.includes('italic')}
          <i class="italic">{child.text}</i>
        {:else if child.marks?.includes('strike-through')}
          <s class="line-through">{child.text}</s>
        {:else if child.marks?.includes('highlight')}
          <span class="bg-yellow-100">{child.text}</span>
        {:else if child.marks?.includes('superscript')}
          <sup>{child.text}</sup>
        {:else if child.marks?.includes('subscript')}
          <sub>{child.text}</sub>
        {:else}
          {#each child.marks as mark}
            {#if value.markDefs?.find(def => def._key === mark)}
              {@const linkDef = value.markDefs.find(def => def._key === mark)}
              {#if linkDef._type === 'link'}
                <a href={linkDef.href} class="text-customOrange underline">{child.text}</a>
              {:else}
                {child.text}
              {/if}
            {:else}
              {child.text}
            {/if}
          {/each}
        {/if}
      {:else}
        {child.text}
      {/if}
    {/each}
  </p>
{/if}