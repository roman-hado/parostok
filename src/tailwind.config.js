/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        dark: {
          100: '#161925',
          80: '#454751',
          60: '#73757c',
          20: '#d0d1d3',
          10: '#e8e8e9'
        },
        "blue-primary": '#3BC5EB',
        "black-primary": '#18191F',
        "gray-primary": '#8CA1AA',
        "gray-secondary": '#E4ECF0',
        "gray-dark": '#687479',
        yellowMetal: '#6D6F3E',
        whiteBlack: '#FFFEF8',
        grey: '#8E8E8E',
        disabled: '#D7D7D7',
      }
    },
    screens: {
      'us': '370px',
      'sm': '680px',
      'md': '768px',
      'md-1': '767px',
      'lg': '1024px',
      'lg-1': '1023px',
      'xl': '1366px',
      'xl-1': '1365px',
      '2xl': '1536px',
    },
    boxShadow: {
      product: "0px 0.1px 0.3px rgba(62, 112, 134, 0.1), 0px 1px 2px rgba(62, 112, 134, 0.2)",
      "filters-bar": '0px 0.1px 0.3px rgba(62, 112, 134, 0.1), 0px 1px 2px rgba(62, 112, 134, 0.2)',
      none: "0 0 #0000",
    },
    container: {
      center: true,
    },
    important: true,
    fontFamily: {
      'PlusJakartaSans': ['"Plus Jakarta Sans"', 'sans-serif'],
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1284px',
          paddingInline: '16px',
          '@screen sm': {
            paddingInline: '30px',
          },
        }
      })
    }
  ],
  content: [
    path.resolve(__dirname, '**/*.{js,vue}'),
    path.resolve(__dirname, '../shopify/**/*.liquid')
  ]
}
