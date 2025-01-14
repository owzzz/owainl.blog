<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
  $: ({ children } = value);
</script>

{#if children.length > 0 }
  <p class="font-body">
    {#each children as child}
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
      {:else if child.marks?.includes('strike')}
        <s class="line-through">{child.text}</s>
      {:else if child.marks?.includes('highlight')}
        <span class="bg-yellow-100">{child.text}</span>
      {:else if child.marks?.includes('superscript')}
        <sup>{child.text}</sup>
      {:else if child.marks?.includes('subscript')}
        <sub>{child.text}</sub>
      {:else if child.marks?.includes('link')}
        <a href={child.marks.link.href} class="text-blue-500 hover:underline">{child.text}</a>
      {:else}
        {child.text}
      {/if}
    {/each}
  </p>
{/if}