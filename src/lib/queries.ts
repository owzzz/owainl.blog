import groq from 'groq';
import { client } from './sanity/client.server';
import type { ImageAsset, PortableTextBlock, Slug } from '@sanity/types';

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] {
      _createdAt,
      title,
      publishedAt,
      body,
      slug,
      categories[]-> {
        title
      }
    } | order(_createdAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug && publishedAt != null][0]`, {
		slug
	});
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
  publishedAt?: string;
	slug: Slug;
	author: Author,
	mainImage?: ImageAsset;
  categories?: Category[];
	body: PortableTextBlock[];
}

export interface Category {
  _type: 'category';
  title: string;
  description?: string;
}

export interface Author {
  _type: 'author';
  name: string;
  slug: string;
  image?: ImageAsset;
  bio?: PortableTextBlock[];
}