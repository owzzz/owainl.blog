import { supabase } from '$lib/supabase/client';
import { PUBLIC_STORAGE_BUCKET_NAME } from '$env/static/public';

export async function getAudio(slug: string, type: 'book' | 'post' = 'book') {
  const { data, error } = await supabase
    .storage
    .from(PUBLIC_STORAGE_BUCKET_NAME)
    .getPublicUrl(`${type}s/${slug}.mp3`);

  if (error) {
    console.error('Error fetching audio:', error);
    return null;
  }

  return data.publicUrl;
}