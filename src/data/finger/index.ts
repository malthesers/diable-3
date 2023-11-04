import { Classes, Item } from '@/src/interfaces/Item';

interface Ring extends Item {
  class: Classes,
  equipment: {
    slot: 'finger',
    type: 'ring'
  }
}

export const fingerItems:Ring[] = [
]