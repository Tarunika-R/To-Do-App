/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        '3xl': '64px',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #2a2a72, #009ffd)',
        'gradient-light': 'linear-gradient(to bottom right, #fbc2eb, #a6c1ee)',
      },
    },
  },
  plugins: [],
}

