import { Item } from '@/src/interfaces/Item'

interface Shield extends Item {
  class: 'generic',
  equipment: {
    slot: 'off-hand',
    type: 'shield'
  }
}

export const shields:Shield[] = [
  {
    name: '',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
  },
]