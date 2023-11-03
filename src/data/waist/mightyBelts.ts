import { Item } from '@/src/interfaces/Item'

interface MightyBelt extends Item {
  class: 'barbarian',
  equipment: {
    slot: 'waist',
    type: 'mighty belt'
  }
}

export const mightyBelts:MightyBelt[] = [
]