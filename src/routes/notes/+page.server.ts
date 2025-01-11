import { getPosts } from '$lib/queries';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async () => {
  const posts = await getPosts();

	if (posts) {
		return {
			posts
		};
	}

	throw error(404, 'Not found');
});