import { Item } from '@/src/interfaces/Item'

interface Scythe extends Item {
  class: 'necromancer',
  equipment: {
    slot: '2-hand',
    type: 'scythe'
  }
}

export const scythes:Scythe[] = [
  {
    name: 'Reilena\'s Shadowhook',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'scythe'
    },
    legendaryPower: 'Every point of Maximum Essence increases your damage by 0.5% and Bone Spikes generates [2 - 5] additional Essence for each enemy hit.',
  },
]