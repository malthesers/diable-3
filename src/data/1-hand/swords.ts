import { Item } from '@/src/interfaces/Item'

interface Sword extends Item {
  equipment: {
    slot: '1-hand',
    type: 'sword'
  }
}

export const swords:Sword[] = [
  {
    name: 'Thunderfury, Blessed Blade of the Windseeker',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Chance on hit to blast your enemy with Lightning, dealing 372% weapon damage as Lightning and then jumping to additional nearby enemies. Each enemy hit has their attack speed and movement speed reduced by 30% for 3 seconds. Jumps up to 5 targets.'
  },
]