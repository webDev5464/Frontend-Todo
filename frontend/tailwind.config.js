/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tab: "500px",
      largeTab: "745px",
    },
    extend: {
      padding: {
        "component-top": "70px",
      },
      width: {
        form: "90vw",
        input: "70vw",
        timeDate: "85vw",
        todoCard: "90%",
      },
      height: {
        form500: "80vh",
      },
    },
  },
  plugins: [],
};
