/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				'bounce-rotate': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-25%) rotate(15deg)' }
				}
			},
			animation: {
				'bounce-rotate': 'bounce-rotate 2s infinite'
			}
		},
	},
	plugins: [],
}
