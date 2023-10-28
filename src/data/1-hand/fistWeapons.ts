import { Item } from "@/src/interfaces/Item"

interface FistWeapon extends Item {
  class: 'monk',
  equipment: {
    slot: '1-hand',
    type: 'fist weapon'
  }
}

export const fistWeapons:FistWeapon[] = [
  {
    name: 'Fleshrake',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Dashing Strike increases the damage of Dashing Strike by [75 - 100]% for 1 second, stacking up to 5 times.'
  },
]