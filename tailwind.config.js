/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          mobile: '350px',
          tablet: '900px',
          desktop: '1200px'
        },
        center: true,
      },

      colors: {
        'mainBG': '#FFFFFF',
        'darkBlue': '#151421',
        'textOrange': '#F06435',
        'textGray': '#606671',
        'subTitle': '#000000',
        'paragraph': '#606671',
        'headingWhite': '#F9F9F9',
        'headingDark': '#151421',
        'grayBG': '#F9F9F9',
        'heroBG': '#E4592B',
      },

      fontFamily: {
        // 'clashDisplay': ['Clash_Display_Regular', 'sans-serif'],
        'clashDisplay': ['Clash Display', 'sans-serif'],
        // 'clashDisplaySEMIBOLD': ['Display_Semibold', 'sans-serif'],
      }

    },
  },
  plugins: [],
}
