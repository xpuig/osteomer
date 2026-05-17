/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        osteomer: {
          black: '#000000',
          white: '#FFFFFF',
          gray: '#F9F9F9',
        }
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '10px',
        lg: '16px',
        xl: '20px',
      }
    },
  },
  plugins: [],
}
