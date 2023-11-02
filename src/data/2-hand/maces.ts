import { Item } from '@/src/interfaces/Item'

interface Mace extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'mace'
  }
}

export const maces:Mace[] = [
  {
    name: 'Arthef\'s Spark of Life',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: 'Heal for [3 - 4%] of your missing Life when you kill an Undead enemy.',
  },
]