/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pitch: "#159447",
        sun: "#f5c319",
        ocean: "#2456c4",
        ink: "#102033",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(16, 32, 51, 0.12)",
      },
    },
  },
  plugins: [],
};
