import { supabase } from '$lib/supabase/client';
import { PUBLIC_STORAGE_BUCKET_NAME } from '$env/static/public';

export async function getAudio(slug: string, type: 'book' | 'post' = 'book') {

  const fileExistsResponse = await supabase
    .storage
    .from(PUBLIC_STORAGE_BUCKET_NAME)
    .exists(`${type}s/${slug}.mp3`);

  if (!fileExistsResponse.data || fileExistsResponse.error) {
    return null;
  }

  const publicUrlResponse = await supabase
    .storage
    .from(PUBLIC_STORAGE_BUCKET_NAME)
    .getPublicUrl(`${type}s/${slug}.mp3`);

  return publicUrlResponse.data.publicUrl;
}