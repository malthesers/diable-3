import { Item } from '@/src/interfaces/Item'

interface Mojo extends Item {
  class: 'witch doctor',
  equipment: {
    slot: 'off-hand',
    type: 'mojo'
  }
}

export const mojos:Mojo[] = [
  {
    name: '',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
  },
]