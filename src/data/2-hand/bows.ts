import { Classes, Item } from '@/src/interfaces/Item'

interface Bow extends Item {
  class: Classes,
  equipment: {
    slot: '2-hand',
    type: 'bow',
  }
}

export const bows:Bow[] = [
  {
    name: 'Uskang',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    elementalDamage: 'lightning'
  },
  {
    name: 'Longshot',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
  },
  {
    name: 'The Raven\'s Wing',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    legendaryPower: 'A raven flies to your side.'
  },
  {
    name: 'Etrayu',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    elementalDamage: 'cold'
  },
  {
    name: 'Kridershot',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    legendaryPower: 'Elemental Arrow now generates [3 - 4] Hatred.'
  },
  {
    name: 'Cluckeye',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    legendaryPower: '[25 - 50%] chance to cluck when attacking.'
  },
  {
    name: 'Venomhusk',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    elementalDamage: 'poison'
  },
  {
    name: 'Windforce',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
  },
  {
    name: 'Yang\'s Recurve',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    legendaryPower: 'Multishot attacks 50% faster and its damage is increased by [150 - 200%].'
  },
  {
    name: 'Leonine Bow of Hashir',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    legendaryPower: 'Bolas have a 100% chance on explosion to pull in all enemies within 24 yards, and also deals [100 - 150%] increased damage.'
  },
  {
    name: 'Sydyru Crust',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    elementalDamage: 'poison'
  },
  {
    name: 'Odyssey\'s End',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    legendaryPower: 'Enemies snared by your Entangling Shot take [100 - 150%] increased damage from all sources.'
  },
  {
    name: 'Unbound Bolt',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'bow',
    },
    elementalDamage: 'cold'
  },
  {
    name: 'Windforce',
    class: 'demon hunter',
    quality: 'ethereal',
    equipment: {
      slot: '2-hand',
      type: 'bow'
    },
    legendaryPower: 'Random legendary weapon effect.',
  },
]