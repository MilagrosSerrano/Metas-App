/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '36px',
        xxl: '48px',
        other:'72px',
      },
      boxShadow: {
        'icon': ' inset 0px 0px 4px 0px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

