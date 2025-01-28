<script lang="ts">
  export let relatedLinks: { title: string, description: string }[];
</script>

{#if relatedLinks.length > 0}
  <section class="pt-10">
    <h4 class="text-gray-400 font-semibold uppercase text-xs">Continue Reading</h4>
    <ul class="flex justify-start items-start gap-4 mt-4">
      {#each relatedLinks as link}
        <li>
          <h5 class="font-title text-xs md:text-base tracking-wide leading-normal">{link.title}</h5>
          <p class="text-gray-500 text-sm">{link.description}</p>
          <a href={`https://www.amazon.com/s?k=${link.title}`} class="text-gray-500 text-sm underline mt-4 block text-customOrange">View on Amazon</a>
        </li>
      {/each}
    </ul>
  </section>
{/if}