import { Item } from "@/src/interfaces/Item"

interface Sword extends Item {
  equipment: {
    slot: '1-hand',
    type: 'sword'
  }
}

export const swords:Sword[] = [
  {
    name: 'Thunderfury, Blessed Blade of the Windseeker',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    }
  },
]