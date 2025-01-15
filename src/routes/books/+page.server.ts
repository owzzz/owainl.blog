import { getPosts } from '$lib/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const bookPosts = await getPosts('Books');

    return { posts: bookPosts };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};