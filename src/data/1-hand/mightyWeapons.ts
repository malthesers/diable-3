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
    name: 'Ambo\'s Pride',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Attacking with Whirlwind also applies Rend, and the total damage of Rend is dealt over 1 second.',
  },
  {
    name: 'Blade of the Warlord',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Bash consumes up to 40 Fury to deal up to [400 - 500]% increased damage.',
    elementalDamage: 'holy'
  },
  {
    name: 'Dishonored Legacy',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Cleave deals up to [300 - 400]% increased damage based on percentage of missing Fury.',
  },
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
  {
    name: 'Night\'s Reaping',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    elementalDamage: 'cold'
  },
  {
    name: 'Oathkeeper',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'Your primary skills attack 50% faster and deal [150 - 200]% increased damage.'
  },
  {
    name: 'Remorseless',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    legendaryPower: 'While both Wrath of the Berserker and Call of the Ancients are active, Hammer of the Ancients deals [200 - 800]% increased damage.'
  },
  {
    name: 'Bul-Katho\'s Solemn Vow',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Bul-Katho\'s Warrior Blood',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Hallowed Nemesis',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'mighty weapon'
    },
    elementalDamage: 'holy'
  },
]