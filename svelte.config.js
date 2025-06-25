import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: ({ path, id, referrers, message }) => {
				// ignore all missing anchor IDs - they're not critical for deployment
				console.warn(`Missing ID: ${id} on ${path}`);
				return;
			}
		}
	}
};

export default config;

