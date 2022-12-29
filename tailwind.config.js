/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['var(--font-roboto)'],
        'title': ['var(--font-beVietnamPro)']
      },
      keyframes: {
        blink: {
          '0%': { visibility: 'hidden' },
          '50%': { visibility: 'hidden' },
          '100%': { visibility: 'visible' },
        },
      },
      animation: {
        blink: 'blink 1500ms linear infinite',
      }
    },
  },
  plugins: [],
};