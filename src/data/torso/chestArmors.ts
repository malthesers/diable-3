import { Item } from '@/src/interfaces/Item'

interface ChestArmor extends Item {
  class: 'generic',
  equipment: {
    slot: 'torso',
    type: 'chest armor'
  }
}

export const chestArmors:ChestArmor[] = [
]