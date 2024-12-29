import { createClient } from '@sanity/client';

import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';

if (!SANITY_PROJECT_ID || !SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-03-20' // date of setup
});