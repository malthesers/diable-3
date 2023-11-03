import { Item } from '@/src/interfaces/Item'

interface Helm extends Item {
  class: 'generic',
  equipment: {
    slot: 'head',
    type: 'helm'
  }
}

export const helms:Helm[] = [
]