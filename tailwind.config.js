/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: 'var(--color-plum)',
          dark: 'var(--color-plum-dark)',
          soft: 'var(--color-plum-soft)',
        },
        ivory: 'var(--color-ivory)',
        beige: 'var(--color-beige)',
        gold: {
          DEFAULT: 'var(--color-gold)',
          soft: 'var(--color-gold-soft)',
        },
        brown: 'var(--color-brown)',
        green: 'var(--color-green)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Petit Formal Script"', '"Playfair Display"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.35em',
      },
    },
  },
  plugins: [],
}
