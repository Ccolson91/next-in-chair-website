import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 5176,
		allowedHosts: [
			'5173-i3kxn04f0819ye8p21pqa-f9537aaf.manusvm.computer',
			'5176-i3kxn04f0819ye8p21pqa-f9537aaf.manusvm.computer'
		]
	}
});

