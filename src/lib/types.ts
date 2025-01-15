import type { ImageAsset, PortableTextBlock, Slug } from "@sanity/types";

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
  publishedAt?: string;
	slug: Slug;
	author: Author,
	mainImage?: string;
  categories?: Category[];
	body: PortableTextBlock[];
  excerpt: string;
}

export interface Page {
  _type: 'page';
  title: string;
  slug: Slug;
  body: PortableTextBlock[];
  excerpt: string;
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