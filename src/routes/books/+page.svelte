<script lang="ts">
	import EmptyBanner from '$lib/components/empty-banner/component.svelte';
	import CalculateReadTime from '$lib/components/calculate-read-time/component.svelte';
	import type { PageData } from './$types';
	import PublishedAtLabel from '$lib/components/published-at-label/component.svelte';
	import PortableTextComponents from '$lib/components/portable-text/portable-text-components.svelte';

	export let data: PageData;
  let books = data.books;
</script>

<div class="flex-grow w-full max-w-xl">
  <header class="py-4 px-6">
    <span class='inline-block text-gray-400 font-semibold uppercase text-xs'>Book Summaries_</span>
  </header>
  <main class="divide-y-4 space-y-8 divide-gray-200 px-6 pb-8">
    {#if books.length}
      {#each books as book}
        <article class="pt-4 space-y-6">
          <header class="mb-2 pb-2 border-b border-gray-200">
            <h1 class="font-title text-2xl md:text-4xl tracking-wide leading-normal mt-2">
              {book.title}
              {#if book.bookAuthor}
                <span class="text-gray-500 text-sm">{book.bookAuthor.name}</span>
              {/if}
            </h1>
            <div class="text-sm text-gray-500 my-2 flex justify-start items-center gap-2">
              {#if book.genre}
                <ul class="flex flex-wrap space-x-1">
                  <li class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{book.genre.title}</li>
                </ul>
              {/if}
              <div>
                {#if book.publishedAt}
                  <PublishedAtLabel publishedAt={book.publishedAt} />
                {/if}
                {#if book.publishedAt}
                  <span>•</span>
                {/if}
                <span><CalculateReadTime content={book} /></span>
              </div>
            </div>
          </header>
          <main>
            {#if book.excerpt}
              <PortableTextComponents value={book.excerpt} />
            {/if}

            <div class="mt-4">
              {#if book.slug}
                <a href={`/books/${book.slug.current}`} class="text-black text-sm underline">Continue Reading…</a>
              {/if}
            </div>
          </main>
        </article>
      {/each}
    {:else}
      <EmptyBanner title="No book reviews yet" description="If this is a mistake please try refreshing the page or check back later." additionalText="If this is a mistake please try refreshing the page or check back later." />
    {/if}
  </main>
</div>