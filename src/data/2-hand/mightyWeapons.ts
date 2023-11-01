import { Item } from '@/src/interfaces/Item'

interface MightyWeapon extends Item {
  class: 'barbarian',
  equipment: {
    slot: '2-hand',
    type: 'mighty weapon'
  }
}

export const mightyWeapons:MightyWeapon[] = [
  {
    name: 'Bastion\'s Reward',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Frenzy now stacks up to 10 times and hits an additional time per stack. Each additional hit will chain to any enemies within 15 yards, and the damage is split between all of the affected enemies.',
    elementalDamage: 'cold'
  },
]