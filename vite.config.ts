import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		exclude: ['punycode']
	},
	build: {
		minify: 'terser',
		rollupOptions: {
			output: {
				manualChunks: undefined
			}
		}
	}
});
