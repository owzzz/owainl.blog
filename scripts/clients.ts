import 'dotenv/config';
import { createClient } from '@sanity/client';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import groq from 'groq';

if (!process.env.PUBLIC_SUPABASE_URL || !process.env.PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API key');
}

export const supabase = createSupabaseClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.PUBLIC_SUPABASE_ANON_KEY
);

export const sanity = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-11-19',
  perspective: 'published'
});

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function getBook(slug: string): Promise<Book> {
	return await sanity.fetch(
    groq`*[_type == "book" && slug.current == $slug && publishedAt != null][0] {
      slug,
      excerpt,
      body,
      chapters[]-> {
        title,
        slug,
        body,
        quote
      }
    }`,
    { slug }
  );
}

export async function getPost(slug: string): Promise<Book> {
	return await sanity.fetch(
    groq`*[_type == "post" && slug.current == $slug && publishedAt != null][0] {
      slug,
      excerpt,
      body
    }`,
    { slug }
  );
}