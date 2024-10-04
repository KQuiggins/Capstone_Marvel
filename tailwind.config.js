/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['var(--font-geist-sans)', 'sans-serif'],
		  mono: ['var(--font-geist-mono)', 'monospace'],
		  marvel_header: ['var(--marvel-header)', 'serif'],
		  marvel_light: ['var(--font-masked-marvel-light)', 'sans-serif'],
		}, // <-- Corrected brace here
		colors: {
		  background: 'var(--background)',
		  foreground: 'var(--foreground)',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
