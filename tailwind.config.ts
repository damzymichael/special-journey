import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sub/500': '#525866',
        'surface/700': '#20232D',
        'disabled/300': '#CDD0D5'
      }
    }
  },
  plugins: []
};

export default config;
