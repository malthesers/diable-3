import { Item } from '@/src/interfaces/Item'

interface Phylactery extends Item {
  class: 'necromancer',
  equipment: {
    slot: 'off-hand',
    type: 'phylactery'
  }
}

export const phylacteries:Phylactery[] = [
  {
    name: '',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'phylactery'
    },
  },
]