import OpenAI from 'openai';

import { OPENAI_API_KEY } from '$env/static/private';

if (!OPENAI_API_KEY) {
	throw new Error('Did you forget to add your openai environment variables?');
}

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});