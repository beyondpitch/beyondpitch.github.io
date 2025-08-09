// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Beyond Pitch',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/beyondpitch/beyondpitch.github.io' }],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome Guide', slug: 'guides/welcome' },
						{ label: 'Trans Voice PSA for the Girlies', slug: 'trans-voice-psa-for-the-girlies' },
						{ label: 'Start Here', slug: 'guides/starthere' },
						{ label: 'Step by Step Guide', slug: 'step-by-step-guide' },
						{ label: 'Genlte Orientation', slug: 'guides/gentle-orientation' },
					],
				},
				{
					label: 'Phase 1 - Foundations',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Phase 1 Intro', slug: 'phase-1/phase-1' },
						{ label: 'Step 0 - Find Your Home Pitch', slug: 'phase-1/step-0' },
						{ label: 'Step 1 - Breath Flow with Straw', slug: 'phase-1/step-1' },
						{ label: 'Step 2 - Off the Straw Humming', slug: 'phase-1/step-2' },
						{ label: 'Step 3 - Mmm Word Practice', slug: 'phase-1/step-3' },
					],
				},
				{
					label: 'Phase 2 - Real Life Voice',
					items: [
						{ label: 'Phase 2 Intro', slug: 'phase-2/phase-2' },
					],
				},
				{
					label: 'Phase 3 - Feminization',
					items: [
						{ label: 'Phase 3 Intro', slug: 'phase-3/phase-3' },
					],
				},
				{
					label: 'Vocal Mixing Board',
					items: [
						{ label: 'What Changes and Why', slug: 'vocal-mixing-board/what-changes-and-why' },
						{ label: 'Sliders & Exercises', slug: 'vocal-mixing-board/sliders-and-exercises' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
