import { Item } from '@/src/interfaces/Item'

interface Crossbow extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'crossbow'
  }
}

export const crossbows:Crossbow[] = [
  {
    name: 'Arcane Barb',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    elementalDamage: 'arcane'
  },
  {
    name: 'Bakkan Caster',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
  },
  {
    name: 'Buriza-Do Kyanon',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    elementalDamage: 'cold',
    legendaryPower: 'Your projectiles pierce [1 - 2] additional times.'
  },
  {
    name: 'Chanon Bolter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    legendaryPower: 'Your Spike Traps lure enemies to them and deal [150 - 200%] increased damage. Enemies may be taunted once every 10 seconds.'
  },
  {
    name: 'Demon Machine',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    legendaryPower: '[35 - 65%] chance to shoot explosive bolts when attacking.',
    elementalDamage: 'fire'
  },
  {
    name: 'Hellrack',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    legendaryPower: 'Chance to root enemies to the ground when you hit them.',
    elementalDamage: 'fire'
  },
  {
    name: 'Manticore',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    legendaryPower: 'Reduces the Hatred cost of Cluster Arrow by 50% and increases its damage by [250 - 300%].',
    elementalDamage: 'poison'
  },
  {
    name: 'Pus Spitter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    legendaryPower: '[25 - 50%] chance to lob an acid blob when attacking',
    elementalDamage: 'poison'
  },
  {
    name: 'Starspine',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    elementalDamage: 'arcane'
  },
  {
    name: 'Wojahnni Assaulter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
    legendaryPower: 'Rapid Fire increasingly deals [75 - 100%] increased damage while channeling. Stacks up to 30 times.'
  },
  {
    name: 'Crossbow of Corvus',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '2-hand',
      type: 'crossbow'
    },
  },
]