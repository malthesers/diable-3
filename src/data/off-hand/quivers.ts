import { Item } from '@/src/interfaces/Item'

interface Quiver extends Item {
  class: 'demon hunter',
  equipment: {
    slot: 'off-hand',
    type: 'quiver'
  }
}

export const quivers:Quiver[] = [
  {
    name: '',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
  },
]