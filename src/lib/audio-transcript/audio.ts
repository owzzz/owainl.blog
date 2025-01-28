import StorageApi from '$lib/supabase/api/storage';

export async function getAudio(slug: string, type: 'book' | 'post' = 'book'): Promise<string | null> {
  if (!slug) {
    throw new Error('Slug is required');
  }

  const fileExists = await StorageApi.fileExists(`${type}s/${slug}.mp3`);

  if (!fileExists) {
    return null;
  }

  const publicUrl = await StorageApi.getPublicUrl(`${type}s/${slug}.mp3`);

  return publicUrl;
}
