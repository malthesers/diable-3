import { Item } from '@/src/interfaces/Item'

interface Mace extends Item {
  class: 'generic',
  equipment: {
    slot: '1-hand',
    type: 'mace'
  }
}

export const maces:Mace[] = [
  {
    name: 'Odyn Son',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    legendaryPower: '34% chance to Chain Lightning enemies when you hit them.',
    elementalDamage: 'lightning'
  },
]