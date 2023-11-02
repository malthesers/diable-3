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
  {
    name: 'Blade of the Tribes',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'War Cry and Threatening Shout cause an Avalanche and Earthquake. Avalanche and Earthquake both deal [600 - 800%] increased damage.',
  },
  {
    name: 'Fury of the Vanished Peak',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Reduces the Fury cost of Seismic Slam by 50% and increases its damage by [400 - 500%].',
  },
  {
    name: 'Madawc\'s Sorrow',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Stun enemies for 2 seconds the first time you hit them.',
  },
  {
    name: 'The Gavel of Judgment',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'The damage of Hammer of the Ancients is increased by [600 - 800%] and it returns 25 Fury if it hits 3 or fewer enemies. ',
  },
  {
    name: 'War of the Dead',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mighty weapon'
    },
  },
  {
    name: 'Immortal King\'s Boulder Breaker',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: '2-hand',
      type: 'mighty weapon'
    },
  },
]