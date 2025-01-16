import { getBook } from '$lib/queries/books';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }: { params: { slug: string } }) => {
  const book = await getBook(params.slug);

  if (!book) {
    throw redirect(302, '/books');
  }
  
  return {
    book
  };
};