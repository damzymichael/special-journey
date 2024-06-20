import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sub/500': '#525866',
        'surface/700': '#20232D',
        'disabled/300': '#CDD0D5',
        'soft/200': '#E2E4E9',
        'main/900': '#0A0D14',
        'blue/base': '#375DFB',
        'weak/100': '#F6F8FA',
        'sub/300': '#CDD0D5'
      }
    }
  },
  plugins: []
};

export default config;
