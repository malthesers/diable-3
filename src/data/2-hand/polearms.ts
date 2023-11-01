import { Item } from '@/src/interfaces/Item'

interface Polearm extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'polearm'
  }
}

export const polearms:Polearm[] = [
  {
    name: 'Pledge of Caldeum',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'polearm'
    },
    elementalDamage: 'fire'
  },
]