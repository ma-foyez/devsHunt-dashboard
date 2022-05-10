module.exports = {
  content: ["./public/**/*.{html,js}"],
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