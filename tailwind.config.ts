import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: '#2E2921'
      },
      backgroundImage: {
        'base': "url('/images/nameplates/base.jpg')",
        'rare': "url('/images/nameplates/rare.jpg')",
        'magic': "url('/images/nameplates/magic.jpg')",
        'legendary': "url('/images/nameplates/legendary.jpg')",
        'set': "url('/images/nameplates/set.jpg')",
      },
    },
  },
  safelist: [
    'bg-base',
    'bg-rare',
    'bg-magic',
    'bg-legendary',
    'bg-set',
  ],
  plugins: [],
}
export default config
