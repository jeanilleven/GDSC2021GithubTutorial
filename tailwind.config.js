module.exports = {
	mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			fontWeight: {
				normal: 400,
				bold: 700
			},
			fontFamily: {
				display: ["'Kumbh Sans'", "sans-serif"], 
			},
			colors: {
				primary: {
					200: "hsl(26, 100%, 55%)",
					100: "hsl(25, 100%, 94%)",
				},
				neutral: {
					400: "hsl(220, 13%, 13%)",
					300: "hsl(219, 9%, 45%)",
					200: "hsl(220, 14%, 75%)",
					100: "hsl(223, 64%, 98%)",
				},
				white: "hsl(0, 0%, 100%)",
				dark: "hsl(0, 0%, 0%)",
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
