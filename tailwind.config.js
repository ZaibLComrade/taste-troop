/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
			},
			fontFamily: {
				"playfair": ["Playfair Display", "serif"],
				"lato": ["Lato", "sans-serif"],
				"dancing": ["Dancing Script", "cursive"],
			},
		},
	},
	
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
				}
			}
		]
	},
	plugins: [require("daisyui")],
};
