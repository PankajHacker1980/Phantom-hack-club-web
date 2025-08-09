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
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'expand-width': 'expand-width 1s forwards ease-in-out',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))' 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.9))' 
          },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'float-slow': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: 0.5 },
          '50%': { transform: 'scale(1.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
        'expand-width': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}