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
        grey: '#2E2921',
        undefined: '#FFFFFF',
        common: '#FFFFFF',
        magic: '#6969FF',
        rare: '#FFFF00',
        legendary: '#BF642F',
        set: '#00FF00'
      },
      backgroundImage: {
        undefined: "url('/images/nameplates/base.jpg')",
        common: "url('/images/nameplates/common.jpg')",
        magic: "url('/images/nameplates/magic.jpg')",
        rare: "url('/images/nameplates/rare.jpg')",
        legendary: "url('/images/nameplates/legendary.jpg')",
        set: "url('/images/nameplates/set.jpg')",
      },
    },
  },
  safelist: [
    'text-undefined',
    'text-common',
    'text-rare',
    'text-magic',
    'text-legendary',
    'text-set',
    'bg-undefined',
    'bg-common',
    'bg-rare',
    'bg-magic',
    'bg-legendary',
    'bg-set',
  ],
  plugins: [],
}
export default config
