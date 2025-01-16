import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Fredoka Variable']
			}
		}
	},
	daisyui: {
		themes: ['sunset']
	},
	plugins: [daisyui, typography, forms]
} satisfies Config;
