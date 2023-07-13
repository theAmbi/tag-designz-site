/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      container: {
        screens: {
          sm: '320px',
          md: '650px',
          lg: '980px',
          xl: '1200px',

        },
        center: true,
      },

      colors: {
        'mainBG': '#FFFFFF',
        'darkBlue': "#151421",
        'textOrange': '#F06435',
        'textGray': '#606671',
        'subTitle': '#000000',
        'paragraph': '#606671',
        'headingWhite': '#F9F9F9',
        'headingDark': '#151421',
        'grayBG': '#F9F9F9',
        'heroBG': '#E4592B',
        'textPlaceholder': '#A4ADBB',
        'footerRights': '#211E2F',
        'fadedBlue': "#A1D7F8",
        'gradientBlue': "#313852",
        'tabBlue': "#f4fcff",

      },

      fontFamily: {
        'clashDisplay': ['Clash Display', 'sans-serif'],
      },

      backgroundImage: {
        'office': "url('/office.jpg')",
        'office2': "url('/office-2.jpg')",
        'design': "url('/design.jpg')",
        'development': "url('/development.jpg')",
        'pattern': "url('/pattern.png')",
        'designFeatured': "url('/design_featured.jpg')",
        'logoDesign': "url('/logo-design.jpg')",
        'uiDesign': "url('/ui-design.jpg')",
        'imageEdit': "url('/image-edit.jpg')",
        'illustration': "url('/illustration.jpg')",
        'about': "url('/who-we-are.jpg')",
        'contactBanner': "url('/contact-banner.png')",
        'identity': "url('/identity.jpg')",
      },

      backgroundSize: {
        'auto': 'auto',
        'contain': 'contain',
        'cover': 'cover',
        '90%': '90%',
        '110%': '110%',
      },

    },
  },
  plugins: [],
}
