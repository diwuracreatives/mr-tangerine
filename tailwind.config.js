/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffeeda",
        primary1: "#FFE0BA",
        accent: "#002416",
      },
      fontSize: {
        main: "clamp(1.5rem, 1.05rem + 2.25vw, 3.75rem)",
        alt: "clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem)",
      },
    },
  },
  plugins: [],
};
