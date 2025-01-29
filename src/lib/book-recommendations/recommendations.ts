import { supabase } from '../supabase/client';

export interface BookRecommendation {
  title: string;
  description: string;
}

export async function getBookRecommendations(id: string): Promise<BookRecommendation[]> {
  if (!id) {
    throw new Error('Document id is required');
  }

  try {
    const { data, error } = await supabase
      .from('book_recommendations')
      .select('title, description')
      .eq('document_id', id);

    if (error) {
      throw new Error('Failed to fetch book recommendations');
    }

    return data;
  } catch (error) {
    console.error('Error fetching book recommendations:', error);
    throw new Error('Failed to fetch book recommendations');
  }
}