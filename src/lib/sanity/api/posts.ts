import groq from 'groq';
import { client } from '$lib/sanity/client.server';
import type { Post } from '$lib/types';

export async function getPosts(category?: string): Promise<Post[]> {
  let query = `*[_type == "post" && defined(slug.current) && publishedAt != null`

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
    groq`*[_type == "post" && slug.current == $slug && publishedAt != null][0] {
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