<script lang="ts">
	import CalculateReadTime from '$lib/components/calculate-read-time/component.svelte';
	import type { PageData } from './$types';
  import PublishedAtLabel from '$lib/components/published-at-label/component.svelte';
	import PortableTextComponents from '$lib/components/portable-text/portable-text-components.svelte';
  import EmptyBanner from '$lib/components/empty-banner/component.svelte';
	import type { Post } from '$lib/types';

	export let data: PageData;
  const { posts } = data as { posts: Post[] };

  console.log(posts);
</script>

<div class="flex-grow w-full max-w-xl">
  <header class="py-4 px-6">
    <span class='inline-block text-gray-400 font-semibold uppercase text-xs'>Notes_</span>
  </header>
  <main class="divide-y-4 space-y-8 divide-gray-200 px-6 pb-8">
    {#if posts.length}
      {#each data.posts as post}
        {#if post.excerpt}
          <article class="pt-4 space-y-6">
            <header class="mb-2 pb-2 border-b border-gray-200">
              <h1 class="font-title text-2xl md:text-4xl tracking-wide leading-normal mt-2">{post.title}</h1>
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
                    <PublishedAtLabel publishedAt={post.publishedAt} />
                  {/if}
                  {#if post.publishedAt}
                    <span>•</span>
                  {/if}
                  <span><CalculateReadTime content={post} /></span>
                </div>
              </div>
            </header>
            <main>
              <PortableTextComponents value={post.excerpt} />

              <div class="mt-4">
                <a href={`/notes/${post.slug.current}`} class="text-black text-sm underline">Continue Reading…</a>
              </div>
            </main>
          </article>
        {/if}
      {/each} 
    {:else}
      <EmptyBanner title="No posts yet" additionalText="If this is a mistake please try refreshing the page or check back later." />
    {/if}
  </main>
</div>