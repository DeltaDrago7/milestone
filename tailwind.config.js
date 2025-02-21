/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/DefaultComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      } ,
      colors: {
          pri: "#1C1C1C",
          sec: '#ffca05'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans font
      },
      
  },
  },
  plugins: [],
}

