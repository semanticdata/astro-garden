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
				light: './src/assets/lines.svg',
				dark: './src/assets/lines-light.svg',
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
			sidebar: [
				{ slug: 'about' },
				{
					label: 'Knowledge',
					collapsed: true,
					items: [
						{ label: 'Concepts', autogenerate: { directory: 'knowledge/concepts' } },
						{ label: 'Design', autogenerate: { directory: 'knowledge/design' } },
						{ label: 'Music', autogenerate: { directory: 'knowledge/music' } },
						{ label: 'Science', autogenerate: { directory: 'knowledge/science' } },
					]
				},
				{
					label: 'Languages',
					collapsed: true,
					autogenerate: { directory: 'languages' },
				},
				{
					label: 'Lists',
					collapsed: true,
					autogenerate: { directory: 'lists' },
				},
				{
					label: 'Systems',
					collapsed: true,
					items: [
						{ label: 'Habits', autogenerate: { directory: 'systems/habits' } },
						{ label: 'Knowledge', autogenerate: { directory: 'systems/knowledge' } },
						{ label: 'Motivation', autogenerate: { directory: 'systems/motivation' } },
						{ label: 'Productivity', autogenerate: { directory: 'systems/productivity' } },
					]
				},
				{
					label: 'Tools',
					collapsed: true,
					items: [
						{ label: 'CLI', autogenerate: { directory: 'tools/cli' } },
						{ label: 'Development', autogenerate: { directory: 'tools/development' } },
						{ label: 'Hardware', autogenerate: { directory: 'tools/hardware' } },
						{ label: 'Software', autogenerate: { directory: 'tools/software' } },
					]
				},
				{
					label: 'Tutorials',
					collapsed: true,
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Writing',
					collapsed: true,
					items: [
						{ label: 'Craft', autogenerate: { directory: 'writing/craft' } },
						{ label: 'Snippets', autogenerate: { directory: 'writing/snippets' } },
					]
				},
				{ slug: 'meta' },
				{ slug: 'uses' },
			],
		}),
		brainDbAstro(),
	],
});
