import { Config } from 'tailwindcss';

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['system-ui', 'sans-serif'],
  },
} satisfies Config;
