<script lang="ts">
	import CalculateReadTime from '$lib/components/calculate-read-time/component.svelte';
  import type { PageData } from './$types';
  import { formatDate } from '$lib/utils/format-date';
  import PortableTextComponents from '$lib/components/portable-text/portable-text-components.svelte';
	import type { Post } from '$lib/types';

  export let data: PageData;
  const { post } = data as { post: Post };
</script>

<div class="flex-grow w-full max-w-xl">
  <header>
    <a href="/books" class="inline-block text-gray-400 font-semibold uppercase text-xs hover:underline">Books_</a>
  </header>
  <main class="my-8">
    <article class="space-y-4">
      <header class="mb-4 pb-4 border-b border-gray-200">
        <div class="flex justify-between items-end">
          <h1 class="font-title text-1xl md:text-4xl tracking-wide leading-normal">
            {post.title}
          </h1>
          {#if post.mainImage}
            <img src={post.mainImage.url} alt={post.mainImage.alt} class="w-36 pl-6 h-auto" />
          {/if}
        </div>
        <div class="text-sm text-gray-500 my-2 flex justify-start items-center gap-2">
          {#if post.categories?.length}
            <ul class="flex flex-wrap space-x-1">
              {#each post.categories as category}
                <li class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{category.title}</li>
              {/each}
            </ul>
          {/if}
          <div>
            {#if post.publishedAt}
              <span>Published: {formatDate(post.publishedAt)}</span>
            {/if}
            {#if post.publishedAt}
              <span>•</span>
            {/if}
            <span><CalculateReadTime post={post} /></span>
          </div>
        </div>
      </header>
      <main>
        {#if post.body}
          <PortableTextComponents value={post.body} />
        {/if}
      </main>
    </article>
  </main>
</div>