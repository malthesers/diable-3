import { Item } from '@/src/interfaces/Item'

interface Quiver extends Item {
  class: 'demon hunter',
  equipment: {
    slot: 'off-hand',
    type: 'quiver'
  }
}

export const quivers:Quiver[] = [
  {
    name: 'Archfiend Arrows',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
  },
  {
    name: 'Augustine\'s Panacea',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'Elemental Arrow gains an effect based on the rune: Ball Lightning now travels at 30% speed. Frost Arrow damage, Chilled duration, Immolation Arrow ground damage over time, Lightning Bolts damage, Stun duration, Nether Tentacles damage and healing amount increased by [200 - 250%].'
  },
  {
    name: 'Bombardier\'s Rucksack',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'You may have 2 additional Sentries. Cluster Arrow deals [150 - 200%] increased damage.'
  },
  {
    name: 'Dead Man\'s Legacy',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'Multishot hits enemies below 60% health twice and its damage is increased by [150 - 200%].'
  },
  {
    name: 'Emimei\'s Duffel',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'Bolas now explode instantly and deal [150 - 175%] increased damage.'
  },
  {
    name: 'Flecther\'s Pride',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
  },
  {
    name: 'Holy Point Shot',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'Impale throws two additional knives and deals [75 - 100%] increased damage.'
  },
  {
    name: 'Sin Seekers',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'Rapid Fire no longer has a channel cost and deals [250 - 300%] increased damage.'
  },
  {
    name: 'Spines of Seething Hatred',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'Chakram now generates [3 - 4] Hatred.'
  },
  {
    name: 'The Ninth Cirri Satchel',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'quiver'
    },
    legendaryPower: 'Hungering Arrow is guaranteed to pierce and also deals [450 - 600%] increased damage. Hungering Arrow can only pierce up to 4 times.'
  },
]