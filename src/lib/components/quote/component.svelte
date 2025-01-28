<script lang="ts">
  export let quote: Quote;

  console.log(quote);
</script>

{#if quote.text && quote.author}
  <blockquote class="border-l-4 border-gray-200 pl-4 mt-6 mb-4">
    <p class="text-xl italic text-gray-900 mb-2">"{quote.text}"</p>
    <a 
      href={quote.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Read more from {quote.author}"
      class="text-customOrange font-semibold hover:underline">
      — {quote.author}
    </a>
  </blockquote>
{/if}