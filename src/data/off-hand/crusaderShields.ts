import { Item } from '@/src/interfaces/Item'

interface CrusaderShield extends Item {
  class: 'crusader',
  equipment: {
    slot: 'off-hand',
    type: 'crusader shield'
  }
}

export const crusaderShields:CrusaderShield[] = [
  {
    name: '',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'crusader shield'
    },
  },
]