import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === '/_vercel/insights/script.js') {
    return new Response('', { status: 204 });
  }

  return resolve(event);
};