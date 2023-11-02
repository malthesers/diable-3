import { Item } from '@/src/interfaces/Item'

interface Source extends Item {
  class: 'wizard',
  equipment: {
    slot: 'off-hand',
    type: 'source'
  }
}

export const sources:Source[] = [
  {
    name: '',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
  },
]