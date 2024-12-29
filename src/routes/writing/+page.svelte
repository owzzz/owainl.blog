<script lang="ts">
	import type { PageData } from './$types';
  import { formatDate } from '$lib/utils/format-date';
  import { PortableText } from '@portabletext/svelte';
	import CustomHeading from '$lib/components/portable-text/custom-heading.svelte';
	import CodeBlock from '$lib/components/portable-text/code-block.svelte';
	import Paragraph from '$lib/components/portable-text/paragraph.svelte';
	import ListWrapper from '$lib/components/portable-text/list-wrapper.svelte';
	import Table from '$lib/components/portable-text/table.svelte';

	export let data: PageData;
</script>

<div class="flex-grow w-full max-w-xl">
  <header class="border-b-4 border-gray-200 pb-4">
    <h1 class="font-title text-3xl md:text-4xl tracking-wide leading-normal">Notes</h1>
    <p class="text-sm mt-1">Daily musings, experiments and things I find of interest.</p>
  </header>
  <main class="mt-8">
    {#if data.posts.length}
      {#each data.posts as post}
        <article class="space-y-4">
          <header>
            <h2 class="font-title text-1xl md:text-2xl tracking-wide leading-normal">{post.title}</h2>
            <span class="text-sm inline-block text-gray-500 my-2">Published: {formatDate(post._createdAt)}, Updated: {formatDate(post.publishedAt)}</span>
          </header>
          <main>
            <PortableText 
              value={post.body} 
              components={{
                types: {
                  code: CodeBlock,
                  table: Table,
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