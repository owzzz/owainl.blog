import { getBook } from '$lib/sanity/api/books';
import { getAudio } from '$lib/audio-transcript/audio';
import { getBookRecommendations, type BookRecommendation } from '$lib/book-recommendations/recommendations';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const book = await getBook(params.slug);
    const audio = await getAudio(params.slug);
    let bookRecommendations: BookRecommendation[] = [];
    
    if (!book) {
      throw redirect(302, '/books');
    }

    if (book._id) {
      bookRecommendations = await getBookRecommendations(book._id);
    }
   
    return {
      book,
      audio,
      bookRecommendations
    };
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
};