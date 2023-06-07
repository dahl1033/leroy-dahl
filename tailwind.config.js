/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        navy: "#334155"
      },
      backgroundColor: {
        darkBlue: "#10101A",
        navy: "#1D1E29"
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "30px",
        8: "52px",
      },
      minWidth: {
        "1/4": "25%",
        200: "200px",
      },
      maxWidth: {
        "1/4": "25%",
        300: "300px",
      },
    },
  },
  plugins: [],
};
