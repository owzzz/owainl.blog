import type { ImageAsset, PortableTextBlock, Slug } from "@sanity/types";

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

export interface Page {
  _type: 'page';
  title: string;
  slug: Slug;
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