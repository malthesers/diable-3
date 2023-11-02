import { Item } from '@/src/interfaces/Item'

interface Staff extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'staff'
  }
}

export const staves:Staff[] = [
  {
    name: 'Ahavarion, Spear of Lycander',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Chance on killing a demon to gain a random Shrine effect.',
    elementalDamage: 'holy'
  },
  {
    name: 'Maloth\'s Focus',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Enemies occasionally flee at the sight of this staff.',
    elementalDamage: 'fire'
  },
  {
    name: 'Mark of The Magi',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    elementalDamage: 'arcane'
  },
  {
    name: 'Staff of Chiropetra',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Firebats attacks 100% faster, costs 75% less Mana, and has its damage increased by [125 - 150%].',
  },
  {
    name: 'SuWong Diviner',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Acid Cloud gains the effect of the Lob Blob Bomb rune.',
    elementalDamage: 'fire'
  },
  {
    name: 'The Broken Staff',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    elementalDamage: 'lightning'
  },
  {
    name: 'The Grand Vizier',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Reduces the Arcane Power cost of Meteor by 50% and increases its damage by [300 - 400%].',
    elementalDamage: 'fire'
  },
  {
    name: 'The Smoldering Core',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Lesser enemies are now lured to your Meteor impact areas. Meteors deal [40 - 50%] increased damage on consecutive hits to the same target. This stacks up to 10 times.',
    elementalDamage: 'fire'
  },
  {
    name: 'The Tormentor',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Chance to charm enemies when you hit them.',
    elementalDamage: 'arcane'
  },
  {
    name: 'Valthek\'s Rebuke',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Energy Twister now travels in a straight path and deals [300 - 400%] increased damage.',
    elementalDamage: 'arcane'
  },
  {
    name: 'Wormwood',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
    legendaryPower: 'Locust Swarm continuously plagues enemies around you.',
    elementalDamage: 'poison'
  },
  {
    name: 'Staff of Herding',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
  },
  {
    name: 'Nightmarish Staff of Herding',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
  },
  {
    name: 'Hellish Staff of Herding',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
  },
  {
    name: 'Infernal Staff of Herding',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
  },
  {
    name: 'Archangel\'s Staff of the Apocalypse',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '2-hand',
      type: 'staff'
    },
  },
]