/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#edf8ff',
          100: '#d7ecff',
          200: '#b9e0ff',
          300: '#88ceff',
          400: '#50b2ff',
          500: '#2890ff',
          600: '#1e78ff',
          700: '#0a59eb',
          800: '#0f47be',
          900: '#134095',
        },
      },
    },
  },
  plugins: [],
};

