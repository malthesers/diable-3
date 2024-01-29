import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xs': '320px',
      'xs': '400px',
      'sm': '640px',
      'md': '860px',
      'lg': '960px',
    },
    extend: {
      boxShadow: {
        'item-inner': 'inset 0px 0px 5px 5px rgba(240,222,108,0.25)',
        'quality-inner': 'inset 0px 0px 7px 7px rgba(240,222,108,0.5)',
        'guess-inner': 'inset 0px 0px 4px 4px #413014',
        'guess-ethereal': 'inset 0px 0px 4px 4px #0F5753',
      },
      colors: {
        'grey': '#2E2921',
        'gold': '#DCAE73',
        'gold-light': '#E0D2BF',
        'bronze': '#54421E',
        'undefined': '#9B221B',
        'common': '#FFFFFF',
        'magic': '#6969FF',
        'rare': '#FFFF00',
        'legendary': '#BF642F',
        'set': '#00FF00',
        'ethereal': '#43EBBB',
        'undefined-accent': '#513F2E',
        'common-accent': '#513F2E',
        'magic-accent': '#6091A6',
        'rare-accent': '#9B8E3C',
        'legendary-accent': '#B07B38',
        'set-accent': '#748E3D',
        'ethereal-accent': '#4A9A8C',
      },
      backgroundImage: {
        "icon-gradient": "-webkit-linear-gradient(top, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0))",
        "undefined-name": "url('/images/nameplates/base.jpg')",
        "common-name": "url('/images/nameplates/common.jpg')",
        "magic-name": "url('/images/nameplates/magic.jpg')",
        "rare-name": "url('/images/nameplates/rare.jpg')",
        "legendary-name": "url('/images/nameplates/legendary.jpg')",
        "set-name": "url('/images/nameplates/set.jpg')",
        "ethereal-name": "url('/images/nameplates/ethereal.jpg')",
        "undefined-gradient": "url('/images/gradients/base.png')",
        "common-gradient": "url('/images/gradients/common.png')",
        "magic-gradient": "url('/images/gradients/magic.png')",
        "rare-gradient": "url('/images/gradients/rare.png')",
        "legendary-gradient": "url('/images/gradients/legendary.png')",
        "set-gradient": "url('/images/gradients/set.png')",
        "ethereal-gradient": "url('/images/gradients/ethereal.png')",
      },
    },
  },
  safelist: [
    'guess-inner',
    'guess-ethereal',
    'border-undefined-accent',
    'border-common-accent',
    'border-rare-accent',
    'border-magic-accent',
    'border-legendary-accent',
    'border-set-accent',
    'border-ethereal-accent',
    'text-undefined',
    'text-common',
    'text-rare',
    'text-magic',
    'text-legendary',
    'text-set',
    'text-ethereal',
    'bg-undefined-name',
    'bg-common-name',
    'bg-rare-name',
    'bg-magic-name',
    'bg-legendary-name',
    'bg-set-name',
    'bg-ethereal-name',
    'bg-undefined-gradient',
    'bg-common-gradient',
    'bg-rare-gradient',
    'bg-magic-gradient',
    'bg-legendary-gradient',
    'bg-set-gradient',
    'bg-ethereal-gradient'
  ],
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.nameplate': {
           '@apply w-[280px] xs:w-[350px] sm:w-[420px] lg:w-[455px]': {}
        },
        '.grid-center': {
          'grid-column-start': '1',
          'grid-column-end': '1',
          'grid-row-start': '1',
          'grid-row-end': '1',
        }
      })
    }
  ],
}
export default config
