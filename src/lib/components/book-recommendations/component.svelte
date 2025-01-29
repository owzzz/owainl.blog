<script lang="ts">
	import type { BookRecommendation } from "$lib/book-recommendations/recommendations";

  export let recommendations: BookRecommendation[];
</script>

{#if recommendations.length > 0}
  <section class="pt-10">
    <h4 class="text-gray-400 font-semibold uppercase text-xs">Continue Reading</h4>
    <ul class="mt-4 space-y-6 md:space-y-0 md:flex md:justify-start md:items-start gap-4">
      {#each recommendations as link}
        <li>
          <a href={`https://www.amazon.com/s?k=${link.title}`} target="_blank" rel="noopener noreferrer">
            <h5 class="font-title text-base tracking-wide leading-normal">{link.title}</h5>
            <p class="text-gray-500 text-sm">{link.description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/if}