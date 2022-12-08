/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#0D0D0D',
          600: '#1A1A1A',
          500: '#262626',
          400: '#333333',
          300: '#808080',
          200: '#D9D9D9',
          100: '#F2F2F2',
        },
        "blue": "#4EA8DE",
        "dark-blue": "#1E6F9F",
        "purple": "#8284FA",
        "dark-purple": "#5E60CE",
        'danger': '#E25858',
      }
    },
  },
  plugins: [],
}
