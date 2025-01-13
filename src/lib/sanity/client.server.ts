import { createClient } from '@sanity/client';

import { NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID } from '$env/static/private';

if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: NEXT_PUBLIC_SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-11-19',
  perspective: 'published'
});
