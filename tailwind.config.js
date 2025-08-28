/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: { max: "1379.99px" },
      mobile: { max: "834.99px" },
      xs: { max: "375.99px" },
    },
    extend: {
       fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
