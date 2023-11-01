import { Item } from '@/src/interfaces/Item'

interface Flail extends Item {
  class: 'crusader',
  equipment: {
    slot: '2-hand',
    type: 'flail'
  }
}

export const flails:Flail[] = [
  {
    name: 'Flail of the Ascended',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Your Shield Glare deals damage equal to up to your last 5 Shield Bash casts.',
  },
]