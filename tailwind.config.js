/** @type {import('tailwindcss').Config} */
export default {
  relative: true,
  content: [
    './public/index.html',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1D1337',
        accent: '#452E84',
      },
    },
    screens: {
      "4xs": "320px",
      "myPhone":"384px",
      "3xs": "386px",
      "2xs":"485px",
      "xs": "576px"
    }
  },
  plugins: [],
};
