/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero: "url('/src/img/hero/altohero.jpg')",
        about: "url('/src/img/about/altoabout.jpg')",
        interview: "url('/src/img/interview/interview1.png')",
        star:"url('/src/img/interview/star.png')",
      },
      content: {
        outlineText: 'url("/src/img/hero/VINTAGESTYLE.svg")',
      },
    },
  },
  plugins: [],
};
