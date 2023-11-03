import { Item } from '@/src/interfaces/Item'

interface Belt extends Item {
  class: 'generic',
  equipment: {
    slot: 'waist',
    type: 'belt'
  }
}

export const belts:Belt[] = [
]