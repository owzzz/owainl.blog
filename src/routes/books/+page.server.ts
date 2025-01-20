import { getBooks } from '$lib/queries/books';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const books = await getBooks();
    return { books };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};