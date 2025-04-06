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
        'containerTwo': '1120px',
        'containerThree': '1210px',
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
        
        // ProjectThree
        "threePrimaryColor": "#183f72",
        "threeSecondaryColor": "#e8465f",
        "threeParaColor" : '#777777',
        "threeSubTitleColor" : '#222529',
        "threeBgColor":"#eef0f4",
        "threeHoverBgColor":"#ec687c",

      },backgroundImage: {
        'pOneBannerBG': "url('./src/AllProjects/projectOne/images/bannerBg.jpg')",
        'pOneBannerComment': "url('./src/AllProjects/projectOne/images/comments-BG.jpg')",
        'footerBg': "url('./src/AllProjects/projectOne/images/footerBG.jpg')",
        'threeBannerBg': "url('./src/AllProjects/projectThree/images/slide-2.jpg')",
        "threeServiceBG":"url('./src/AllProjects/projectThree/images/serviceBg.jpg')"
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