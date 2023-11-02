import { Item } from '@/src/interfaces/Item'

interface Shield extends Item {
  class: 'generic',
  equipment: {
    slot: 'off-hand',
    type: 'shield'
  }
}

export const shields:Shield[] = [
  {
    name: 'Coven\'s Criterion',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: 'You take [45 - 60%] less damage from blocked attacks.'
  },
  {
    name: 'Defender of Westmarch',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: 'Blocks have a chance of summoning a charging wolf that deals [800 - 1000%] weapon damage to all enemies it passes through.'
  },
  {
    name: 'Denial',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: 'Each enemy hit by your Sweep Attack increases the damage of your next Sweep Attack by [100 - 125]%, stacking up to 5 times.'
  },
  {
    name: 'Eberli Charo',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: 'Reduces the cooldown of Heaven\'s Fury by [45 - 50%].'
  },
  {
    name: 'Freeze of Deflection',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: 'Blocking an attack has a chance to Freeze the attacker for [0.5 - 1.5] seconds.'
  },
  {
    name: 'Ivory Tower',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: 'Blocks release forward a Fires of Heaven.'
  },
  {
    name: 'Lidless Wall',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
  },
  {
    name: 'Stormshield',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
  },
  {
    name: 'Vo\'Toyias Spiker',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: 'Enemies affected by Provoke take double damage from Thorns.'
  },
  {
    name: 'Wall of Man',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    legendaryPower: '[20 - 30%] chance to be protected by a shield of bones when you are hit.'
  },
  {
    name: 'Hallowed Barricade',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Jesseth Skullshield',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
  },
  {
    name: 'Lachdanan\'s Stormshield',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: 'off-hand',
      type: 'shield'
    },
  },
]