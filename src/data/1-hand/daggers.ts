import { Item } from '@/src/interfaces/Item'

interface Dagger extends Item {
  class: 'generic',
  equipment: {
    slot: '1-hand',
    type: 'dagger'
  }
}

export const daggers:Dagger[] = [
  {
    name: 'Envious Blade',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'Gain 100% Critical Hit Chance against enemies at full health.',
    elementalDamage: 'poison'
  },
]