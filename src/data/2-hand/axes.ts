import { Item } from '@/src/interfaces/Item'

interface Axe extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'axe'
  }
}

export const axes:Axe[] = [
  {
    name: 'The Executioner',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
    legendaryPower: 'Attacks will slay enemies with less than [5 - 10%] health.',
  },
]