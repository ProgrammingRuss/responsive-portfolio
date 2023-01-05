/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{.html,.js}"],
  theme: {
    extend: {
     backgroundImage:{
      'hero_h1': "url('../image/h1_hero.webp')",
      'hero': "url('../image/hero.webp')"
     },
     fontFamily:{
      "promt":"'Prompt', sans-serif"
     },
     screens:{
      "mob":"576px",
      "tab":"768px",
      "lap":"992px",
      "desk":"1200px"
    }
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [function ({ addComponents }) {
    addComponents({
      '.container': {
          Width: '100%',
        '@screen mob': {
          maxWidth: '540px',
        },
        '@screen tab': {
          maxWidth: '720px',
        },
        '@screen lap': {
          maxWidth: '960px',
        },
        '@screen desk': {
          maxWidth: '1200px',
        },
      }
    })
  }]
}
