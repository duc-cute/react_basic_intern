/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        overlay: "rgba(0,0,0,0.5)",
        main: "#0F1320",
      },
      colors: {
        main: "#1E2640",
      },
      height: {
        header: "84px",
      },
    },
  },
  plugins: [],
};
