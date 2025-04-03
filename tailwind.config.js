/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'containerWidth': '1320px',
        'containerOne': '1140px',
        'containerTwo': '1140px',
      },
      fontFamily: {
        'poppins': `"Poppins", sans-serif`,
      },
      colors:{
        "pOnePrimary" : '#E04622',
        "navBG" : '#ffffffcc',
        "headingColor" : '#212529',
        "paraColor" : '#777777',
        // ProjectTwo
        "twoPrimaryColor" : '#079cf4',
        'twoPara': 'rgb(177 177 177)',
        "twoBgColor": "#f4f4f4",

      },backgroundImage: {
        'pOneBannerBG': "url('./src/AllProjects/projectOne/images/bannerBg.jpg')",
        'pOneBannerComment': "url('./src/AllProjects/projectOne/images/comments-BG.jpg')",
        'footerBg': "url('./src/AllProjects/projectOne/images/footerBG.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-transparent-stroke': {
            '-webkit-text-fill-color': 'transparent',
            '-webkit-text-stroke-color': 'white',
            '-webkit-text-stroke-width': '0.3px',
            'letter-spacing': '5px',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}