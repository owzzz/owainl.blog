<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({indexInParent, global, value} = portableText)
  $: ({ptBlocks} = global)
  $: ({style} = value)

  $: precededByHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(ptBlocks[indexInParent - 1]?.style)

  $: anchorId = `heading-${value._key}`
</script>

<!-- If preceded by heading, have a higher margin top -->
<div class="{precededByHeading ? 'mt-10' : 'mt-4'}" id={anchorId}>
  <a href="#{anchorId}">
    <span class="sr-only">Link to this heading</span>
  </a>
  {#if style === 'h1'}
    <h1 class="font-title text-4xl md:text-5xl tracking-wide leading-normal"><slot /></h1>
  {:else if style === 'h2'}
    <h2 class="font-title text-3xl md:text-4xl tracking-wide leading-normal"><slot /></h2>
  {:else if style === 'h3'}
    <h3 class="font-title text-2xl md:text-3xl tracking-wide leading-normal"><slot /></h3>
  {:else if style === 'h4'}
    <h4 class="font-title text-xl md:text-2xl tracking-wide leading-normal"><slot /></h4>
  {:else if style === 'h5'}
    <h5 class="font-title text-lg md:text-xl tracking-wide leading-normal"><slot /></h5>
  {:else}
    <h6 class="font-title text-md md:text-lg tracking-wide leading-normal"><slot /></h6>
  {/if}
</div>