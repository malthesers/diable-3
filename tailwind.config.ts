import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'item-inner': 'inset 0px 0px 5px 5px rgba(240,222,108,0.25)'
      },
      colors: {
        'grey': '#2E2921',
        'gold': '#DCAE73',
        'undefined': '#9B221B',
        'common': '#FFFFFF',
        'magic': '#6969FF',
        'rare': '#FFFF00',
        'legendary': '#BF642F',
        'set': '#00FF00',
        'undefined-accent': '#513F2E',
        'common-accent': '#513F2E',
        'magic-accent': '#6091A6',
        'rare-accent': '#9B8E3C',
        'legendary-accent': '#B07B38',
        'set-accent': '#748E3D'
      },
      backgroundImage: {
        "undefined-name": "url('/images/nameplates/base.jpg')",
        "common-name": "url('/images/nameplates/common.jpg')",
        "magic-name": "url('/images/nameplates/magic.jpg')",
        "rare-name": "url('/images/nameplates/rare.jpg')",
        "legendary-name": "url('/images/nameplates/legendary.jpg')",
        "set-name": "url('/images/nameplates/set.jpg')",
        "undefined-icon": "url('/images/icons/base.png')",
        "common-icon": "url('/images/icons/common.png')",
        "magic-icon": "url('/images/icons/magic.png')",
        "rare-icon": "url('/images/icons/rare.png')",
        "legendary-icon": "url('/images/icons/legendary.png')",
        "set-icon": "url('/images/icons/set.png')",
      },
    },
  },
  safelist: [
    'border-undefined-accent',
    'border-common-accent',
    'border-rare-accent',
    'border-magic-accent',
    'border-legendary-accent',
    'border-set-accent',
    'text-undefined',
    'text-common',
    'text-rare',
    'text-magic',
    'text-legendary',
    'text-set',
    'bg-undefined-name',
    'bg-common-name',
    'bg-rare-name',
    'bg-magic-name',
    'bg-legendary-name',
    'bg-set-name',
    'bg-undefined-icon',
    'bg-common-icon',
    'bg-rare-icon',
    'bg-magic-icon',
    'bg-legendary-icon',
    'bg-set-icon',
  ],
  plugins: [],
}
export default config
