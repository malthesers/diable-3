import { Item } from '@/src/interfaces/Item'

interface SpiritStone extends Item {
  class: 'monk',
  equipment: {
    slot: 'head',
    type: 'spirit stone'
  }
}

export const spiritStones:SpiritStone[] = [
]