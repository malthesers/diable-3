import { Item } from "@/src/interfaces/Item"

interface HandCrossbow extends Item {
  equipment: {
    slot: '1-hand',
    type: 'sword'
  }
}

export const handCrossbows:HandCrossbow[] = [
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