import { Classes, Item } from '@/src/interfaces/Item';

interface Boots extends Item {
  class: Classes,
  equipment: {
    slot: 'feet',
    type: 'boots'
  }
}

export const feetItems:Boots[] = [
]