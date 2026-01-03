import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';
import { loadEnv } from 'vite';

export default defineWorkersConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		test: {
			environment: "node",
			env:{
				...env
			},
			poolOptions: {
				workers: {
					wrangler: { configPath: './wrangler.jsonc' },
				},
			},
		},
	};
});
