import { redirect } from '@sveltejs/kit';
import { getPost } from '$lib/queries/posts';
import { getAudio } from '$lib/queries/supabase/storage/audio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  const audio = await getAudio(params.slug);
  
  if (!post) {
    throw redirect(302, '/notes');
  }
  
  return {
    post,
    audio
  };
};