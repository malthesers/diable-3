import { Item } from '@/src/interfaces/Item'

interface Sword extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'sword'
  }
}

export const swords:Sword[] = [
  {
    name: 'The Zweihander',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
  },
]