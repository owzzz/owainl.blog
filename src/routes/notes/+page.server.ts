import { getPosts } from '$lib/queries';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async () => {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    throw redirect(307, '/');
  }

  return {
    posts
  };
});