<script lang="ts">
	import CalculateReadTime from '$lib/components/calculate-read-time/component.svelte';
  import type { PageData } from './$types';
  import { formatDate } from '$lib/utils/format-date';
  import PortableTextComponents from '$lib/components/portable-text/portable-text-components.svelte';
	import type { Post } from '$lib/types';
  import AudioPlayer from '$lib/components/audio-player/component.svelte';

  export let data: PageData;
  const { post } = data as { post: Post };
</script>

<div class="flex-grow w-full max-w-xl">
  <header class="flex justify-between items-center">
    <a href="/notes" class="inline-block text-gray-400 font-semibold uppercase text-xs hover:underline">Notes_</a>
  </header>
  <main class="my-8">
    <article class="space-y-4">
      <header class="mb-4 pb-4 border-b border-gray-200">
        <h1 class="font-title text-1xl md:text-3xl tracking-wide leading-normal">{post.title}</h1>
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
            <span><CalculateReadTime content={post} /></span>
          </div>
        </div>
      </header>
      <main>
        <AudioPlayer slug={post.slug.current} title={post.title} type="post" />
        {#if post.body}
          <PortableTextComponents value={post.body} />
        {/if}
      </main>
    </article>
  </main>
</div>