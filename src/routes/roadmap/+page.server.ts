import { getPageBySlug } from '$lib/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const page = await getPageBySlug('site-roadmap');
    return { page };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};