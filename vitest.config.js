import { loadEnv,defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
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
