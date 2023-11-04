import { Classes, Item } from '@/src/interfaces/Item';

interface Amulet extends Item {
  class: Classes,
  equipment: {
    slot: 'neck',
    type: 'amulet'
  }
}

export const neckItems:Amulet[] = [
]