/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'audiowide': ['Audiowide', 'cursive'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))' 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.9))' 
          },
        }
      }
    },
  },
  plugins: [],
}