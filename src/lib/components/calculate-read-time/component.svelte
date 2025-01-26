<script lang="ts">
	import type { Book, Post } from '$lib/types';
  import { calculateReadTime } from '$lib/utils/calculate-read-time';

  export let content: Post|Book;

  const readTime = calculateReadTime(content);
</script>

{#if readTime > 0}
  Reading Time: {readTime}
  {#if readTime === 1}
    <span>Min<span class="hidden md:inline">ute</span></span>
  {:else}
    <span>Mins<span class="hidden md:inline">utes</span></span>
  {/if}
{/if}