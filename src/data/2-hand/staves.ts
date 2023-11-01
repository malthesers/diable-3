import { Item } from '@/src/interfaces/Item'

interface Staff extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'staff'
  }
}

export const staves:Staff[] = [
  {
    name: 'Ahavarion, Spear of Lycander',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Chance on killing a demon to gain a random Shrine effect.',
    elementalDamage: 'holy'
  },
]