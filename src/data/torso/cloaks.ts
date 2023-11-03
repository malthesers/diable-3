import { Item } from '@/src/interfaces/Item'

interface Cloak extends Item {
  class: 'demon hunter',
  equipment: {
    slot: 'torso',
    type: 'cloak'
  }
}

export const cloaks:Cloak[] = [
]