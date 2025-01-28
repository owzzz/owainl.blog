import groq from 'groq';
import { client } from '../sanity/client.server';
import type { Book } from '$lib/types';

export async function getBooks(): Promise<Book[]> {
  return await client.fetch(groq`*[_type == "book" && defined(slug.current) && publishedAt != null] | order(publishedAt desc) {
    title,
    publishedAt,
    slug,
    excerpt,
    body,
    "quote": {
        "text": quote->quote,
        "author": quote->bookAuthor->name,
        "link": quote->link
      },
    _type,
    chapters[]-> {
      title,
      slug,
      body,
      "quote": {
        "text": quote->quote,
        "author": quote->bookAuthor->name,
        "link": quote->link
      }
    },
    "genre": {
      "title": genre->title
    },
    "bookAuthor": {
      "name": bookAuthor->name
    },
  }`);
}

export async function getBook(slug: string): Promise<Book> {
	return await client.fetch(
    groq`*[_type == "book" && slug.current == $slug && publishedAt != null][0] {
      title,
      publishedAt,
      slug,
      excerpt,
      body,
      "quote": {
        "text": quote->quote,
        "author": quote->bookAuthor->name,
        "link": quote->link
      },
      _type,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "genre": {
        "title": genre->title
      },
      "bookAuthor": {
        "name": bookAuthor->name
      },
      chapters[]-> {
        title,
        slug,
        body,
        "quote": {
          "text": quote->quote,
          "author": quote->bookAuthor->name,
          "link": quote->link
        }
      }
    }`,
    { slug }
  );
}

