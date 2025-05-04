// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { brainDbAstro } from "@braindb/astro";

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-garden.vercel.app/',
	integrations: [
		starlight({
			title: 'Forgetful Notes',
			logo: {
				src: './src/assets/logo.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/semanticdata/astro-garden' }],
			components: {
				Sidebar: "./src/components/Sidebar.astro",
			},
			customCss: [
				'./src/styles/custom.css',
			],
			lastUpdated: true,
		}),
		brainDbAstro(),
	],
});
