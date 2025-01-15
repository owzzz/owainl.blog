<script lang="ts">
	import type { Post } from '$lib/types';
  import { calculateReadTime } from '$lib/utils/calculate-read-time';

  export let post: Post;

  const readTime = calculateReadTime(post.body ? post.body : post.excerpt);
</script>

{#if post}
  Reading Time: {readTime} {readTime === 1 ? 'Minute' : 'Minutes'}
{/if}
