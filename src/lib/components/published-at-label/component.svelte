<script lang="ts">
  import { formatDate } from '$lib/utils/format-date';
  export let publishedAt: string | undefined;
</script>

{#if publishedAt}
  <span class="hidden md:inline"><span>Published:</span> {formatDate(publishedAt)}</span>
{/if}