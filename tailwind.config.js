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
      'Jet': "url('../stars.jpeg')",
      'Jet': "url('../Space2.jpeg')",
      'Jet': "url('../StarSky.jpeg')",
      'Jet': "url('../public/stars1.gif')",
      'Jet': "url('../night.gif')",
      'Jet': "url('../public/Moon.gif')",
      'Jet': "url('../public/space.jpeg')",
    },

  }
  },
  plugins: [require('daisyui')],
}
