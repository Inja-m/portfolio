/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	safelist: [
    {
			pattern: /bg-+/, 
    }
  ],
  theme: {
    extend: {
			fontFamily: {
				sans: ['Poppins']
			},
		colors: {
			red: {
				100: 'var(--red-100)',
				200: 'var(--red-200)',
				300: 'var(--red-300)',
				400: 'var(--red-400)',
				500: 'var(--red-500)',
				600: 'var(--red-600)',
				700: 'var(--red-700)',
				800: 'var(--red-800)',
				900: 'var(--red-900)'
			},
			green: {
				100: 'var(--green-100)',
				200: 'var(--green-200)',
				300: 'var(--green-300)',
				400: 'var(--green-400)',
				500: 'var(--green-500)',
				600: 'var(--green-600)',
				700: 'var(--green-700)',
				800: 'var(--green-800)',
				900: 'var(--green-900)'
			},
			yellow: {
				100: 'var(--yellow-100)',
				200: 'var(--yellow-200)',
				300: 'var(--yellow-300)',
				400: 'var(--yellow-400)',
				500: 'var(--yellow-500)',
				600: 'var(--yellow-600)',
				700: 'var(--yellow-700)',
				800: 'var(--yellow-800)',
				900: 'var(--yellow-900)'
			},
			primary: {
				50: 'rgb(var(--primary-50))',
				100: 'rgb(var(--primary-100))',
				200: 'rgb(var(--primary-200))',
				300: 'rgb(var(--primary-300))',
				400: 'rgb(var(--primary-400))',
				500: 'rgb(var(--primary-500))',
				600: 'rgb(var(--primary-600))',
				700: 'rgb(var(--primary-700))',
				800: 'rgb(var(--primary-800))',
				900: 'rgb(var(--primary-900))',
				950: 'rgb(var(--primary-950))'
			},
			'surface-0': 'rgb(var(--surface-0))',
			'surface-50': 'rgb(var(--surface-50))',
			'surface-100': 'rgb(var(--surface-100))',
			'surface-200': 'rgb(var(--surface-200))',
			'surface-300': 'rgb(var(--surface-300))',
			'surface-400': 'rgb(var(--surface-400))',
			'surface-500': 'rgb(var(--surface-500))',
			'surface-600': 'rgb(var(--surface-600))',
			'surface-700': 'rgb(var(--surface-700))',
			'surface-800': 'rgb(var(--surface-800))',
			'surface-900': 'rgb(var(--surface-900))',
			'surface-950': 'rgb(var(--surface-950))'
		}
	},
  },
  darkMode: 'selector',
  plugins: []
}

