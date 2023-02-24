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
      'Stars': "url('../stars.jpeg')",
      'Space2': "url('../assets/Space2.jpeg')",
      'Jet': "url('../StarSky.jpeg')",
      'Stars1': "url('../stars1.gif')",
      'Night': "url('../night.gif')",
      'Moon': "url('../Moon.gif')",
      'Space': "url('../space.jpeg')",
    },

  }
  },
  plugins: [require('daisyui')],
}
