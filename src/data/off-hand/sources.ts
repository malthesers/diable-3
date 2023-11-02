import { Item } from '@/src/interfaces/Item'

interface Source extends Item {
  class: 'wizard',
  equipment: {
    slot: 'off-hand',
    type: 'source'
  }
}

export const sources:Source[] = [
  {
    name: 'Cosmic Strand',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Teleport gains the effect of the Wormhole rune.'
  },
  {
    name: 'Etched Sigil',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'While channeling Arcane Torrent, Disintegrate, or Ray of Frost, the damage of your Energy Twister is increased by [200 - 250%], and you also cast Energy Twister every second.'
  },
  {
    name: 'Light of Grace',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Ray of Frost now pierces.'
  },
  {
    name: 'Mirrorball',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Magic Missile fires 2 extra missiles and deals [400 - 500%] increased damage.'
  },
  {
    name: 'Myken\'s Ball of Hate',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Electrocute can chain to enemies that have already been hit.'
  },
  {
    name: 'Orb of Infinite Depth',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Each time you hit an enemy with Explosive Blast your damage is increased by [8 - 10%] and your damage reduction is increased by 20% for 6 seconds. This effect can stack up to 4 times.'
  },
  {
    name: 'Primordial Soul',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Elemental Exposure\'s damage bonus per stack is increased to [10%].'
  },
  {
    name: 'The Oculus',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Taking damage has up to a [15 - 20%] chance to reset the cooldown on Teleport.'
  },
  {
    name: 'Triumvirate',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Your Signature Spells increase the damage of Arcane Orb by [300 - 400%] for 6 seconds, stacking up to 3 times.'
  },
  {
    name: 'Winter Flurry',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    legendaryPower: 'Enemies killed by Cold damage have a 25% chance to release a Frost Nova. Your Hydras deals [125 - 150%] increased damage to enemies in a Blizzard.',
    elementalDamage: 'cold'
  },
  {
    name: 'Chantodo\'s Force',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
  },
  {
    name: 'Firebird\'s Eye',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Tal Rasha\'s Unwavering Glare',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'off-hand',
      type: 'source'
    },
  },
]