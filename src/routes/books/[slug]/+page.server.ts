import { getBook } from '$lib/sanity/api/books';
import { getAudio } from '$lib/audio-transcript/audio';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const book = await getBook(params.slug);
    const audio = await getAudio(params.slug);

    // TODO: Add related links
    // const relatedLinks = await getRelatedLinks(`${book.title, extractTextFromBlocks(book.body));
    
    if (!book) {
      throw redirect(302, '/books');
    }

    return {
      book,
      audio
    };
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
};