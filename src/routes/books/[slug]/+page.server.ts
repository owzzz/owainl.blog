import { getBook } from '$lib/queries/books';
import { getAudio } from '$lib/queries/supabase/storage/audio';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const book = await getBook(params.slug);
    const audio = await getAudio(params.slug);
    
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