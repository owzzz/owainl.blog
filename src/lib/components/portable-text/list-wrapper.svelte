<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps;
  
  $: ({ value } = portableText);
</script>

{#if value.listItem === 'bullet'}
  <ul class="list-disc list-outside ml-6 mt-5">
    {#each value.children as item}
      <li class="font-body text-gray-700">
        {#each item.children as child}
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
        {:else if child.marks?.includes('link')}
          <a 
            href={child.markDefs?.find(def => def._key === child.marks[child.marks.indexOf('link')])?.href} 
            class="text-blue-500 hover:underline"
          >
            {child.text}
          </a>
        {:else}
          {child.text}
        {/if}
        {/each}
      </li>
    {/each}
  </ul>
{:else if value.listItem === 'number'}
  <ol class="list-decimal list-outside ml-6 mt-5">
    {#each value.children as item}
      <li class="font-body text-gray-700">
        {#each item.children as child}
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
          {:else if child.markDefs?.includes('link')}
            <a 
              href={child.markDefs?.find(def => def._key === child.marks[child.marks.indexOf('link')])?.href} 
              class="text-blue-500 hover:underline"
            >
              {child.text}
            </a>
          {:else}
            {child.text}
          {/if}
        {/each}
      </li>
    {/each}
  </ol>
{/if}