import { Item } from '@/src/interfaces/Item'

interface Cloak extends Item {
  class: 'demon hunter',
  equipment: {
    slot: 'torso',
    type: 'cloak'
  }
}

export const cloaks:Cloak[] = [
  {
    name: 'Beckon Sail',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
    legendaryPower: 'When receiving fatal damage, you instead automatically cast Smoke Screen and are healed to 25% Life. This effect may occur once every 120 seconds.'
  },
  {
    name: 'Blackfeather',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
    legendaryPower: 'Dodging or getting hit by a ranged attack automatically shoots a homing rocket back at the attacker for [600 - 800%] weapon damage as Physical.'
  },
  {
    name: 'Cape of the Dark Night',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
    legendaryPower: 'Automatically drop Caltrops when you are hit. This effect may only occur once every 6 seconds.'
  },
  {
    name: 'Cloak of Deception',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
    legendaryPower: 'Enemy missiles sometimes pass through you harmlessly.'
  },
  {
    name: 'The Cloak of the Garwulf',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
    legendaryPower: 'Companion - Wolf Companion now summons 3 wolves.'
  },
  {
    name: 'Cage of the Hellborn',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
  },
  {
    name: 'Galvanized Vest',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
  },
  {
    name: 'Natalya\'s Embrace',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
  },
  {
    name: 'Sovereign Ascended Cloak',
    class: 'demon hunter',
    quality: 'rare',
    equipment: {
      slot: 'torso',
      type: 'cloak'
    },
  },
]