import groq from 'groq';
import { client } from '$lib/sanity/client.server';
import type { Post } from '$lib/types';

const isDev = import.meta.env.DEV;

export async function getPosts(category?: string): Promise<Post[]> {
  let query = `*[_type == "post" && defined(slug.current)`;
  
  // Only check publishedAt in production
  if (!isDev) {
    query += ` && publishedAt != null`;
  }

  query += category 
    ? ` && "${category}" in categories[]->title` 
    : ` && !("Books" in categories[]->title)`

  query += `] | order(publishedAt desc) {
    title,
    publishedAt,
    slug,
    excerpt,
    body,
    _type,
    categories[]-> {
      title
    }
  }`

	return await client.fetch(groq`${query}`);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug${!isDev ? ' && publishedAt != null' : ''}][0] {
      _id,
      title,
      publishedAt,
      slug,
      excerpt,
      body,
      _type,
      categories[]-> {
        title
      }
    }`,
    { slug }
  );
}