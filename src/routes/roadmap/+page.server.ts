import { getPage } from '$lib/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const page = await getPage('site-roadmap');
    return { page };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};