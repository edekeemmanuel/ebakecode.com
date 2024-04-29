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
        primary: 'var(--primary)',
       secondary: 'var(--secondary)',
       bgblue: "#2a4365",
       bgamber: "#ed8936",
      },
    },
    screens: {
      "4xs": "320px",
      "myPhone":"384px",
      "3xs": "420px",
      "2xs":"485px",
      "xs": "576px",
      "sm": "640px",
      "md": "768px",
      "mlg": "940px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [],
};
