import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-11-19',
  perspective: 'published'
});