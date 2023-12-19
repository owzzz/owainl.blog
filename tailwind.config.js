/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
  plugins: []
};