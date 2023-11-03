import { Classes, Item } from '@/src/interfaces/Item';

interface Gloves extends Item {
  class: Classes,
  equipment: {
    slot: 'hands',
    type: 'gloves'
  }
}

export const handsItems:Gloves[] = [
  {
    name: 'Frostburn',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'Cold skills deal [15 - 20%] increased damage and have a 50% chance to Freeze enemies.',
    elementalDamage: 'cold'
  },
  {
    name: 'Gladiator Gauntlets',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'After earning a massacre bonus, gold rains from sky. (Emanates)',
  },
  {
    name: 'Gloves of Worship',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'Shrine effects last for 10 minutes. (Emanates)',
  },
  {
    name: 'Grasps of Essence',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'When an exploded corpse damages at least one enemy, your Corpse Explosion deals [150 - 200%] increased damage for 6 seconds, stacking up to 5 times.',
  },
  {
    name: 'Magefist',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'Fire skills deal [15 - 20%] increased damage.',
    elementalDamage: 'fire'
  },
  {
    name: 'Moribund Gauntlets',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'Your Golem sheds a corpse every second.',
  },
  {
    name: 'Penders Purchase',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'St. Archew\'s Gage',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'The first time an elite pack damages you, gain an absorb shield equal to [120 - 150%] of your maximum Life for 10 seconds.',
  },
  {
    name: 'Stone Gauntlets',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'Getting hit increases your armor by 50%, but reduces your movement speed by 15% and attack speed by 20%. This effect stacks up to 5 times.',
  },
  {
    name: 'Tasker and Theo',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
    legendaryPower: 'Increase attack speed of your pets by [40 - 50%]',
  },
]