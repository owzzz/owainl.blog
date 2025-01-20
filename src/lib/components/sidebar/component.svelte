<script lang="ts">
  import { scrollSpy } from '$lib/actions/scroll-spy';
	import type { Book } from '$lib/types';

  export let book: Book;
</script>

<nav use:scrollSpy class="sidebar">
  <div class="pl-4">
    <h2 class="font-normal text-md border-b border-gray-200 pb-2">Table of Contents</h2>
    <ul class="space-y-6 mt-3">
      {#each book.chapters as chapter, idx}
        <li>
          <h6 class="text-gray-400 font-light uppercase text-xs">Chapter {idx + 1}</h6>
          <a href={`#${chapter.slug.current}`} data-scroll-link={chapter.slug.current} class="hover:underline text-sm text-gray-500"> 
            {chapter.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>  
</nav>