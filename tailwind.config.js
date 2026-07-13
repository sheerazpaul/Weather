/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057c2',
          container: '#2c70e2',
          fixed: '#d9e2ff',
          'fixed-dim': '#afc6ff',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#fefcff',
          fixed: '#001a43',
          'fixed-variant': '#004398',
        },
        secondary: {
          DEFAULT: '#006686',
          container: '#7ed4fd',
          fixed: '#c0e8ff',
          'fixed-dim': '#7bd1fa',
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          container: '#005b78',
          fixed: '#001e2b',
          'fixed-variant': '#004d66',
        },
        tertiary: {
          DEFAULT: '#8c4b00',
          container: '#b06000',
          fixed: '#ffdcc2',
          'fixed-dim': '#ffb77b',
        },
        'on-tertiary': {
          DEFAULT: '#ffffff',
          container: '#fffbff',
          fixed: '#2e1500',
          'fixed-variant': '#6d3a00',
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        'on-error': {
          DEFAULT: '#ffffff',
          container: '#93000a',
        },
        surface: {
          DEFAULT: '#faf9ff',
          dim: '#d8d9e3',
          bright: '#faf9ff',
          container: '#ecedf7',
          'container-low': '#f2f3fd',
          'container-high': '#e7e7f1',
          'container-highest': '#e1e2ec',
          'container-lowest': '#ffffff',
          variant: '#e1e2ec',
          tint: '#0059c6',
        },
        'on-surface': {
          DEFAULT: '#191b22',
          variant: '#424753',
        },
        'on-background': '#191b22',
        'inverse-surface': '#2e3038',
        'inverse-on-surface': '#eff0fa',
        'inverse-primary': '#afc6ff',
        outline: {
          DEFAULT: '#727785',
          variant: '#c2c6d6',
        },
        background: '#faf9ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
