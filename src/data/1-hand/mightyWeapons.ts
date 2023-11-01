import { Item } from '@/src/interfaces/Item'

interface MightyWeapon extends Item {
  class: 'barbarian',
  equipment: {
    slot: '1-hand',
    type: 'mighty weapon'
  }
}

export const mightyWeapons:MightyWeapon[] = [
  {
    name: 'Fjord Cutter',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Seismic Slam attacks 50% faster and also deals [100 - 150]% increased damage against Slowed or Chilled enemies.',
    elementalDamage: 'cold'
  },
]