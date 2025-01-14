import groq from 'groq';
import { client } from './sanity/client.server';
import type { Page, Post } from '$lib/types';

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current) && publishedAt != null] {
      title,
      publishedAt,
      slug,
      excerpt,
      body,
      categories[]-> {
        title
      }
    } | order(publishedAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
  console.log(slug);
	return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug && publishedAt != null][0] {
      title,
      publishedAt,
      slug,
      excerpt,
      body,
      categories[]-> {
        title
      }
    }`,
    { slug }
  );
}

export async function getPage(slug: string): Promise<Page> {
	return await client.fetch(groq`*[_type == "page" && slug.current == $slug][0]`, {
		slug
	});
}