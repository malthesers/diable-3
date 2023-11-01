import { Item } from '@/src/interfaces/Item'

interface Spear extends Item {
  class: 'generic',
  equipment: {
    slot: '1-hand',
    type: 'spear'
  }
}

export const spears:Spear[] = [
  {
    name: 'Empyrean Messenger',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'spear'
    },
    elementalDamage: 'holy'
  },
]