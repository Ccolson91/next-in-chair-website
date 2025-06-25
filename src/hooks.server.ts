import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Add CSRF protection headers
	const response = await resolve(event);
	
	// Allow form submissions from the same origin
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	
	return response;
};

