module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "nunito": ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'login-bg': "url('./../images/bg-pattern-light.svg')"
      },
      // container: {
      //   padding: "1.5rem"
      // }
    },
  },
  plugins: [],
}