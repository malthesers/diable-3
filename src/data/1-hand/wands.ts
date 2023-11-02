import { Item } from '@/src/interfaces/Item'

interface Wand extends Item {
  class: 'wizard',
  equipment: {
    slot: '1-hand',
    type: 'wand'
  }
}

export const wands:Wand[] = [
  {
    name: 'Aether Walker',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'Teleport no longer has a cooldown but costs 25 Arcane Power.',
  },
  {
    name: 'Atrophy',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Blackhand Key',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    elementalDamage: 'arcane'
  },
  {
    name: 'Fragment of Destiny',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'Your Signature Spells attack 50% faster and deal triple damage. You gain a Spectral buff whenever you land an attack with a Signature Spell. Hydras deal [20 - 30%] increased damage for each Spectral stack. Max 10 stacks.'
  },
  {
    name: 'Gesture of Orpheus',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'Reduces the cooldown of Slow Time by [30 - 40%].',
  },
  {
    name: 'Serpent\'s Sparker',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'You may have one extra Hydra active at a time and they deal [250 - 300%] increased damage.',
  },
  {
    name: 'Slorak\'s Madness',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'This wand finds your death humorous.',
    elementalDamage: 'arcane'
  },
  {
    name: 'Starfire',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'Lightning damage is increased by [10 - 15]% for every 10 yards you are from the target up to a maximum of 40 yards.',
    elementalDamage: 'cold'
  },
  {
    name: 'Unstable Scepter',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'The damage of Arcane Orb is increased by [350 - 400%] and its explosion triggers an additional time.',
  },
  {
    name: 'Wand of Woh',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
    legendaryPower: 'The damage of Explosive Blast is increased by [300 - 400%] and 3 additional blasts are triggered after casting Explosive Blast.',
  },
  {
    name: 'Chantodo\'s Will',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
  },
  {
    name: 'Hallowed Baton',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'wand'
    },
  },
]