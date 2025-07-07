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
			lastUpdated: true,
			head: [
				// Add Umami analytics script tag.
				{
					tag: 'script',
					attrs: {
						src: 'https://umami.itscattime.com/script.js',
						'data-website-id': '71d40f80-545c-4902-91c2-9a12d10c5b12',
						defer: true,
					},
				},
			],
		}),
		brainDbAstro(),
	],
});
