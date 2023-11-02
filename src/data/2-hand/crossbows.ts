import { Item } from '@/src/interfaces/Item'

interface Crossbow extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'crossbow'
  }
}

export const crossbows:Crossbow[] = [
  {
    name: 'Demon Machine',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    legendaryPower: '[35 - 65%] chance to shoot explosive bolts when attacking.',
    elementalDamage: 'fire'
  },
]