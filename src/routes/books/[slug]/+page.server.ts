import { getBook } from '$lib/queries/books';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const book = await getBook(params.slug);
    
    if (!book) {
      throw redirect(302, '/books');
    }

    return {
      book
    };
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
};