// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // You can keep your other fonts here
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        
        // Add this line for Sansita Swashed
        'sansita-swashed': ['"Sansita Swashed"', 'cursive'], 
      },
    },
  },
  plugins: [],
}