import { Item } from '@/src/interfaces/Item'

interface VoodooMask extends Item {
  class: 'witch doctor',
  equipment: {
    slot: 'head',
    type: 'voodoo mask'
  }
}

export const voodooMasks:VoodooMask[] = [
]