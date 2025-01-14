<script lang="ts">
	import type { PageData } from './$types';
  import { formatDate } from '$lib/utils/format-date';
  import { calculateReadTime } from '$lib/utils/calculate-read-time';
	import PortableTextComponents from '$lib/components/portable-text/portable-text-components.svelte';

	export let data: PageData;

  function getPostContent(post: any): string {
    return post.body
      .map((block: any) => 
        block.children
          ?.map((child: any) => child.text)
          .join(' ') || ''
      )
      .join(' ');
  }
</script>

<div class="flex-grow w-full max-w-xl">
  <header>
    <span class='inline-block text-gray-400 font-semibold uppercase text-xs'>Notes_</span>
  </header>
  <main class="my-8">
    {#if data.posts.length}
      {#each data.posts as post}
        <article class="space-y-4">
          <header class="mb-4 pb-4 border-b border-gray-200">
            <h1 class="font-title text-1xl md:text-3xl tracking-wide leading-normal">{post.title}</h1>
            <div class="text-sm text-gray-500 my-2 flex justify-start items-center gap-2">
              {#if post.categories?.length}
                <ul class="flex flex-wrap space-x-1">
                  {#each post.categories ?? [] as category}
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
                <span>{calculateReadTime(getPostContent(post))} min read</span>
              </div>
            </div>
          </header>
          <main>
            <PortableTextComponents value={post.body} />
          </main>
        </article>
      {/each}
    {:else}
      <p>No posts yet.</p>
    {/if}
  </main>
</div>