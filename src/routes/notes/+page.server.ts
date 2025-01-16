import { getPosts } from '$lib/queries/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const posts = await getPosts();
    return { posts };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};