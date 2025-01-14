import groq from 'groq';
import { client } from './sanity/client.server';
import type { Page, Post } from '$lib/types';

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current) && publishedAt != null] {
      _createdAt,
      title,
      publishedAt,
      body,
      slug,
      categories[]-> {
        title
      }
    } | order(publishedAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug && publishedAt != null][0]`, {
		slug
	});
}

export async function getPageBySlug(slug: string): Promise<Page> {
	return await client.fetch(groq`*[_type == "page" && slug.current == $slug][0]`, {
		slug
	});
}