/* eslint-disable import/no-extraneous-dependencies */
import { type Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography()],
  fontFamily: {
    sans: ['system-ui', 'sans-serif'],
  },
} satisfies Config;
