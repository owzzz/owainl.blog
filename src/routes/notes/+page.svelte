<script lang="ts">
	import type { PageData } from './$types';
  import { formatDate } from '$lib/utils/format-date';
  import { calculateReadTime } from '$lib/utils/calculate-read-time';
  import { PortableText } from '@portabletext/svelte';
	import CustomHeading from '$lib/components/portable-text/custom-heading.svelte';
	import CodeBlock from '$lib/components/portable-text/code-block.svelte';
	import Paragraph from '$lib/components/portable-text/paragraph.svelte';
	import ListWrapper from '$lib/components/portable-text/list-wrapper.svelte';
	import Table from '$lib/components/portable-text/table.svelte';
	import Link from '$lib/components/portable-text/link.svelte';

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
  <main class="mt-8">
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
            <PortableText 
              value={post.body} 
              components={{
                types: {
                  code: CodeBlock,
                  table: Table,
                },
                marks: {
                  link: Link,
                },
                block: {
                  normal: Paragraph,
                  h1: CustomHeading,
                  h2: CustomHeading,
                  h3: CustomHeading,
                  h4: CustomHeading,
                  h5: CustomHeading,
                  h6: CustomHeading,
                },
                list: {
                  bullet: ListWrapper,
                  numbered: ListWrapper
                },
              }}
            />
          </main>
        </article>
      {/each}
    {:else}
      <p>No posts yet.</p>
    {/if}
  </main>
</div>