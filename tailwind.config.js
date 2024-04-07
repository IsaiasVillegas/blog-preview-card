/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#F4CF4F",
        },
        n: {
          1: "#FFFFFF",
          2: "#7F7F7F",
          3: "#111111",
        },
      },
      fontFamily: {
        figtree: "var(--font-figtree)",
      },
      boxShadow: {
        cardShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
        cardShadowActive: "16px 16px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
