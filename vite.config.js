import { sveltekit } from '@sveltejs/kit/vite';
import { webSocketServer } from './server/webSocketServer';

const config = {
	plugins: [sveltekit(), webSocketServer],
	server: { port: 3000 }
};

export default config;
