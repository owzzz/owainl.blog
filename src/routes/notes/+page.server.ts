import { getPosts } from '$lib/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async () => {    
  const posts = await getPosts();
  
  return { posts };
});