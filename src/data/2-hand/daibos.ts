import { Item } from '@/src/interfaces/Item'

interface Daibo extends Item {
  class: 'monk',
  equipment: {
    slot: '2-hand',
    type: 'daibo'
  }
}

export const daibos:Daibo[] = [
  {
    name: 'Balance',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    legendaryPower: 'The damage of Tempest Rush is increased by [450 - 600%] and when your Tempest Rush hits 3 or fewer enemies, it gains 100% Critical Hit Chance.',
    elementalDamage: 'holy'
  },
]