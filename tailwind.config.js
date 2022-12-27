module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundImage: {
      'Earth1': "url('../Earth1.gif')",
      'Planet': "url('../Planet.gif')",
      'Jet': "url('../Jet.gif')",
      'Jet': "url('../giphy.gif')",
      'Jet': "url('../stars.jpeg')",
      'Jet': "url('../Space2.jpeg')",
      'Jet': "url('../StarSky.jpeg')",
      'Jet': "url('../stars1.gif')",
      'Jet': "url('../night.gif')",
      'Jet': "url('../Moon.gif')",
      'Jet': "url('../space.jpeg')",
    },

  }
  },
  plugins: [require('daisyui')],
}
