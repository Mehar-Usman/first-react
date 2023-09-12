/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'orange': '#EBB618', // Custom background color class
        'header' : '#4a4a4a'
      },
      textColor: {
        'orange': '#EBB618', // Custom text color class
      },
    },
  },
  plugins: [],
}
