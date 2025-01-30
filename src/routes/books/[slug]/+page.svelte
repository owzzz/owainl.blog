<script lang="ts">
	import CalculateReadTime from '$lib/components/calculate-read-time/component.svelte';
  import type { PageData } from './$types';
  import PortableTextComponents from '$lib/components/portable-text/portable-text-components.svelte';
	import type { Book } from '$lib/types';
  import Sidebar from '$lib/components/sidebar/component.svelte';
  import AudioPlayer from '$lib/components/audio-player/component.svelte';
  import Quote from '$lib/components/quote/component.svelte';
  import PublishedAtLabel from '$lib/components/published-at-label/component.svelte';
	import type { BookRecommendation } from '$lib/book-recommendations/recommendations';
  import BookRecommendations from '$lib/components/book-recommendations/component.svelte';

  export let data: PageData;

  const { book, audio, bookRecommendations } = data as { book: Book, audio: string, bookRecommendations: BookRecommendation[] };
</script>

<div class="flex-grow w-full max-w-[800px] px-6">
  <header>
    <a href="/books" class="inline-block text-gray-400 font-semibold uppercase text-xs hover:underline">Books Summaries_</a>
  </header>
  <header class="flex flex-col-reverse md:flex-row justify-start md:justify-between items-center md:items-end mb-2 pb-2 border-b border-gray-200">
    <div>
      <h1 class="font-title text-2xl md:text-4xl tracking-wide leading-normal mt-2">
        {book.title}
        {#if book.bookAuthor}
          <span class="text-gray-500 text-sm">{book.bookAuthor.name}</span>
        {/if}
      </h1>
      <div class="text-sm text-gray-500 mt-4 flex justify-start items-center gap-2">
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
          <CalculateReadTime content={book} />
        </div>
      </div>
    </div>

    {#if book.mainImage}
      <img src={book.mainImage.url} alt={book.mainImage.alt} class="w-40 md:pl-6 h-auto py-6 md:py-0" />
    {/if}
  </header>
  <main class="flex justify-between items-start gap-4 my-8">
    <article class="space-y-4 w-full md:w-3/4">
      {#if audio}
        <AudioPlayer url={audio} title={book.title} />
      {/if}
      <main class="divide-y-4 divide-gray-200 space-y-8">
        {#if book.body && book.chapters?.length}
          {#if book.body}
            <section>
              <PortableTextComponents value={book.body} />
            </section>
          {/if}
          {#each book.chapters as chapter, idx}
            <section class="first:pt-0 pt-10 not-first:pb-4">
              <h4 class="font-title text-xl md:text-2xl tracking-wide leading-normal" id={chapter.slug.current} data-scroll-id={chapter.slug.current}>Chapter {idx + 1}: {chapter.title}</h4>
              <PortableTextComponents value={chapter.body} />

              {#if chapter.quote}
                <Quote quote={chapter.quote} />
              {/if}
            </section>
          {/each}

          <BookRecommendations recommendations={bookRecommendations} />
        {:else}
          <section>
            <h4 class="font-title text-xl md:text-2xl tracking-wide leading-normal">📚 Currently Reading</h4>
            <p>This is a placeholder for the book {book.title} that I'm currently reading, I'll begin to populate the with a summary of the book as I read it.</p>
          </section> 
        {/if}
      </main>
    </article>
    {#if book.chapters?.length}
      <aside class="hidden md:block w-1/4 sticky top-10">
        <Sidebar book={book} />
      </aside>
    {/if}
  </main>
</div>