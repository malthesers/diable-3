import { Item } from '@/src/interfaces/Item'

interface CeremonialKnife extends Item {
  class: 'witch doctor',
  equipment: {
    slot: '1-hand',
    type: 'ceremonial knife'
  }
}

export const ceremonialKnives:CeremonialKnife[] = [
  {
    name: 'Deadly Rebirth',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Grasp of the Dead gains the effect of the Rain of Corpses rune.'
  },
]