import { Item } from '@/src/interfaces/Item'

interface Axe extends Item {
  class: 'generic',
  equipment: {
    slot: '1-hand',
    type: 'axe'
  }
}

export const axes:Axe[] = [
  {
    name: 'Genzaniku',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: 'Chance to summon a ghostly Fallen Champion when attacking.'
  },
]