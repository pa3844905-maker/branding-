/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F7F3',
        secondary: '#E8DCCB',
        accent: '#C8A97E',
        text: '#1E1E1E',
        lightgray: '#F3F3F3'
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(30,30,30,0.06)'
      },
      borderRadius: {
        'xl': '18px'
      }
    }
  },
  plugins: []
}
