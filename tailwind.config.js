/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary": {
                100: "#4d5dfa",
            },
            "secondary": {
                100: "#FFB800",
            },
        },
    },
  },
  plugins: [],
}

