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
			description: 'A personal knowledge management system built with Astro and BrainDB.',
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/lines.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/semanticdata/astro-garden' }],
			components: {
				Sidebar: "./src/components/Sidebar.astro",
			},
			customCss: [
				'./src/styles/custom.css',
				'@fontsource-variable/inter/standard.css',
			],
			lastUpdated: import.meta.env.PROD,
		}),
		brainDbAstro({
			git: import.meta.env.PROD,
		}),
	],
});
