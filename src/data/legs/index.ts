import { Classes, Item } from '@/src/interfaces/Item';

interface Pants extends Item {
  class: Classes,
  equipment: {
    slot: 'legs',
    type: 'pants'
  }
}

export const legsItems:Pants[] = [
]