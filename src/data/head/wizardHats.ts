import { Item } from '@/src/interfaces/Item'

interface WizardHat extends Item {
  class: 'wizard',
  equipment: {
    slot: 'head',
    type: 'wizard hat'
  }
}

export const wizardHats:WizardHat[] = [
]