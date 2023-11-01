import { Item } from '@/src/interfaces/Item'

interface Wand extends Item {
  class: 'wizard',
  equipment: {
    slot: '1-hand',
    type: 'wand'
  }
}

export const wands:Wand[] = [
  {
    name: 'Starfire',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'Lightning damage is increased by [10 - 15]% for every 10 yards you are from the target up to a maximum of 40 yards.',
    elementalDamage: 'cold'
  },
]