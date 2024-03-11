import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray100: '#E1E1E6',
      gray200: '#A9A9B2',
      gray400: '#7C7C8A',
      gray500: '#505059',
      gray600: '#323238',
      gray700: '#29292E',
      gray800: '#202024',
      gray900: '#121214',
      ignite300: '#00B37E',
      ignite500: '#00875F',
      ignite700: '#015F43',
      ignite900: '#00291D',
    },
    borderRadius: {
      px: '1px',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '16px',
      full: '99999px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSizes: {
        xxs: '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '8xl': '4.5rem',
        '9xl': '6rem',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      fontFamily: {
        default: 'Roboto, sans-serif',
        code: 'monospace',
      },
      lineHeight: {
        shorter: '125%',
        short: '140%',
        base: '160%',
        tall: '180%',
      },
      boxShadow: {
        custom: '0 0 0 2px #E1E1E6',
      },
    },
  },
  plugins: [],
}
export default config
