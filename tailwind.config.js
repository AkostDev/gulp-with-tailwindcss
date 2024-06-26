const options = require('./config'); //options from config.js

const allPlugins = {
  typography: require('@tailwindcss/typography'),
  forms: require('@tailwindcss/forms'),
  containerQueries: require('@tailwindcss/container-queries'),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,php}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      screens: {
        xs: '375px',

        // Defaults:
        // sm:	'640px',
        // md:	'768px',
        // lg:	'1024px',
        // xl:	'1280px',
        // '2xl': '1536px',
      },
      spacing: {
        'half-screen': '50vw',
      }
    },
  },
  plugins: plugins,
};
