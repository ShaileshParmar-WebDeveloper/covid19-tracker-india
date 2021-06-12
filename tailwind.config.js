module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  prefix: "tw-",
  variants: {
    extend: {
      borderCollapse: ["hover", "focus"],
    },
  },
  plugins: [],
};
