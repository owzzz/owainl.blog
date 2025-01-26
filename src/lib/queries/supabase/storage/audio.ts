import { supabase } from '$lib/supabase/client';
import { STORAGE_BUCKET_NAME } from '$env/static/private';

if (!STORAGE_BUCKET_NAME) {
  throw new Error('STORAGE_BUCKET_NAME environment variable is not set');
}

export async function getAudio(slug: string, type: 'book' | 'post' = 'book') {

  const fileExistsResponse = await supabase
    .storage
    .from(STORAGE_BUCKET_NAME)
    .exists(`${type}s/${slug}.mp3`);

  if (!fileExistsResponse.data || fileExistsResponse.error) {
    return null;
  }

  const publicUrlResponse = await supabase
    .storage
    .from(STORAGE_BUCKET_NAME)
    .getPublicUrl(`${type}s/${slug}.mp3`);

  return publicUrlResponse.data.publicUrl;
}