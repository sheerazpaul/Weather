/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          container: 'rgb(var(--color-primary-container) / <alpha-value>)',
          fixed: 'rgb(var(--color-primary-fixed) / <alpha-value>)',
          'fixed-dim': 'rgb(var(--color-primary-fixed-dim) / <alpha-value>)',
        },
        'on-primary': {
          DEFAULT: 'rgb(var(--color-on-primary) / <alpha-value>)',
          container: 'rgb(var(--color-on-primary-container) / <alpha-value>)',
          fixed: 'rgb(var(--color-on-primary-fixed) / <alpha-value>)',
          'fixed-variant': 'rgb(var(--color-on-primary-fixed-variant) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          container: 'rgb(var(--color-secondary-container) / <alpha-value>)',
          fixed: 'rgb(var(--color-secondary-fixed) / <alpha-value>)',
          'fixed-dim': 'rgb(var(--color-secondary-fixed-dim) / <alpha-value>)',
        },
        'on-secondary': {
          DEFAULT: 'rgb(var(--color-on-secondary) / <alpha-value>)',
          container: 'rgb(var(--color-on-secondary-container) / <alpha-value>)',
          fixed: 'rgb(var(--color-on-secondary-fixed) / <alpha-value>)',
          'fixed-variant': 'rgb(var(--color-on-secondary-fixed-variant) / <alpha-value>)',
        },
        tertiary: {
          DEFAULT: 'rgb(var(--color-tertiary) / <alpha-value>)',
          container: 'rgb(var(--color-tertiary-container) / <alpha-value>)',
          fixed: 'rgb(var(--color-tertiary-fixed) / <alpha-value>)',
          'fixed-dim': 'rgb(var(--color-tertiary-fixed-dim) / <alpha-value>)',
        },
        'on-tertiary': {
          DEFAULT: 'rgb(var(--color-on-tertiary) / <alpha-value>)',
          container: 'rgb(var(--color-on-tertiary-container) / <alpha-value>)',
          fixed: 'rgb(var(--color-on-tertiary-fixed) / <alpha-value>)',
          'fixed-variant': 'rgb(var(--color-on-tertiary-fixed-variant) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'rgb(var(--color-error) / <alpha-value>)',
          container: 'rgb(var(--color-error-container) / <alpha-value>)',
        },
        'on-error': {
          DEFAULT: 'rgb(var(--color-on-error) / <alpha-value>)',
          container: 'rgb(var(--color-on-error-container) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          dim: 'rgb(var(--color-surface-dim) / <alpha-value>)',
          bright: 'rgb(var(--color-surface-bright) / <alpha-value>)',
          container: 'rgb(var(--color-surface-container) / <alpha-value>)',
          'container-low': 'rgb(var(--color-surface-container-low) / <alpha-value>)',
          'container-high': 'rgb(var(--color-surface-container-high) / <alpha-value>)',
          'container-highest': 'rgb(var(--color-surface-container-highest) / <alpha-value>)',
          'container-lowest': 'rgb(var(--color-surface-container-lowest) / <alpha-value>)',
          variant: 'rgb(var(--color-surface-variant) / <alpha-value>)',
          tint: 'rgb(var(--color-surface-tint) / <alpha-value>)',
        },
        'on-surface': {
          DEFAULT: 'rgb(var(--color-on-surface) / <alpha-value>)',
          variant: 'rgb(var(--color-on-surface-variant) / <alpha-value>)',
        },
        'on-background': 'rgb(var(--color-on-background) / <alpha-value>)',
        'inverse-surface': 'rgb(var(--color-inverse-surface) / <alpha-value>)',
        'inverse-on-surface': 'rgb(var(--color-inverse-on-surface) / <alpha-value>)',
        'inverse-primary': 'rgb(var(--color-inverse-primary) / <alpha-value>)',
        outline: {
          DEFAULT: 'rgb(var(--color-outline) / <alpha-value>)',
          variant: 'rgb(var(--color-outline-variant) / <alpha-value>)',
        },
        background: 'rgb(var(--color-background) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
