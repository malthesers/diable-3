import { Item } from '@/src/interfaces/Item'

interface Flail extends Item {
  class: 'crusader',
  equipment: {
    slot: '1-hand',
    type: 'flail'
  }
}

export const flails:Flail[] = [
  {
    name: 'Darklight',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Fist of the Heavens now casts twice and deals [800 - 1000]% more damage.',
    elementalDamage: 'lightning'
  },
]