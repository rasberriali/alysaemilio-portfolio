/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },

      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px)',
      },
      
      backgroundSize: {
        'grid-size': '40px 40px', // Adjust grid spacing to make the grid more prominent
      },
      
    },
  },
  plugins: [],
}

