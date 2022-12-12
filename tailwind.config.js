module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundImage: {
      'Earth1': "url('../public/Earth1.gif')",
      'Planet': "url('../public/Planet.gif')",
      'Jet': "url('../public/Jet.gif')",
      'Jet': "url('../public/giphy.gif')",
    },

  }
  },
  plugins: [require('daisyui')],
}
