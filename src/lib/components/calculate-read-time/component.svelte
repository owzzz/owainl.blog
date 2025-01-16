<script lang="ts">
	import type { Book, Post } from '$lib/types';
  import { calculateReadTime } from '$lib/utils/calculate-read-time';

  export let post: Post|Book;

  const readTime = calculateReadTime(post.body || post.excerpt || []);
</script>

{#if post}
  Reading Time: {readTime} {readTime === 1 ? 'Minute' : 'Minutes'}
{/if}
