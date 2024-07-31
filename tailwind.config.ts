import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue/base': '#375DFB',
        'disabled/300': '#CDD0D5',
        'grey/200': '#e4e7ec',
        'main/900': '#0A0D14',
        'surface/700': '#20232D',
        'soft/200': '#E2E4E9',
        'soft/400': '#868C98',
        'state/error': '#DF1C41',
        'sub/300': '#CDD0D5',
        'sub/500': '#525866',
        'weak/100': '#F6F8FA',

        'office/brown50': '#FBF1F1'
      },
      backgroundImage: {
        'blue-gradient':
          'radial-gradient(86.07% 185.2% at 8.64% 0%, #ebfaff 0%, #ffffff 77.53%);',
        'key-gradient':
          'linear-gradient(180deg, rgba(228, 229, 231, 0.48) 0%, rgba(247, 248, 248, 0) 100%, rgba(228, 229, 231, 0) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
