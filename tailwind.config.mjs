/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pureWhite: '#FFFFFF',
				hombleBlack: '#1D1E1C',
				redModello: '#E42500',
				powerlessGray: '#F1F1F1',
			},
			fontFamily: {
				krona: ['Krona One', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
