/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // El HTML está en la raíz del proyecto
    "./src/**/*.{js,ts}",  // Por si después agregás JS/TS en src
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
      },
      animation: {
        fadein: 'fadein 0.7s cubic-bezier(.77,0,.18,1) both'
      }
    }
  },
  plugins: [],
}
