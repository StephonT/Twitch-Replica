/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    // customizing media query breakpoints
    screens: {
      sm: '640px',
      // => @media (min-widt: 640px) { ... }

      md: '768px',
      // => @media (min-widt: 768px) { ... }

      lg: '1028px',
      // => @media (min-widt: 1028px) { ... }

      xl: '1280px',
      // => @media (min-widt: 1280px) { ... }

      '2xl' : '1600px',
      // => @media (min-widt: 1600px) { ... }

      '3xl': '1800px',
      // => @media (min-widt: 1800px) { ... }

    }
  },
  plugins: [],
}
