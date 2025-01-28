<script lang="ts">
	import type { Book, Post } from '$lib/types';
  import { calculateReadTime } from '$lib/utils/calculate-read-time';

  export let content: Post|Book;

  const readTime = calculateReadTime(content);
</script>

{#if readTime > 0}
  Reading Time: {readTime}
  {#if readTime === 1}
    <span class="inline md:hidden">Min</span>
    <span class="hidden md:inline">Minute</span>
  {:else}
    <span class="inline md:hidden">Mins</span>
    <span class="hidden md:inline">Minutes</span>
  {/if}
{/if}