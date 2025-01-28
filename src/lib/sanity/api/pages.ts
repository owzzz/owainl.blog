import groq from 'groq';
import { client } from '../client.server';
import type { Page } from '$lib/types';

export async function getPage(slug: string): Promise<Page> {
	return await client.fetch(groq`*[_type == "page" && slug.current == $slug][0]`, {
		slug
	});
}