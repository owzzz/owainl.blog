<script lang="ts">
	import type { Book, Post } from '$lib/types';
  import { calculateReadTime } from '$lib/utils/calculate-read-time';

  export let content: Post|Book;

  const readTime = calculateReadTime(content);
</script>

{#if readTime > 0}
  Reading Time: {readTime} {readTime === 1 ? 'Minute' : 'Minutes'}
{/if}
