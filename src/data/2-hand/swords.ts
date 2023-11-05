import { Classes, Item } from '@/src/interfaces/Item'

interface Sword extends Item {
  class: Classes,
  equipment: {
    slot: '2-hand',
    type: 'sword'
  }
}

export const swords:Sword[] = [
  {
    name: 'Blackguard',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
  },
  {
    name: 'Blade of Prophecy',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Two Condemned enemies also trigger Condemn\'s explosion and the damage of Condemn is increased by [600 - 800%].'
  },
  {
    name: 'Blood Brother',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Grants a [15 - 20%] chance to block attacks. Blocked attacks inflict 30% less damage. After blocking an attack, your next attack inflicts 30% additional damage.'
  },
  {
    name: 'Cam\'s Rebuttal',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Falling Sword can be used again within 4 seconds before the cooldown is triggered.'
  },
  {
    name: 'Corrupted Ashbringer',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Chance on kill to raise a skeleton to fight for you. Upon accumulating 5 skeletons, they each explode for 1000% weapon damage and the sword transforms into Ashbringer for a short time. Attacking with Ashbringer burns your enemy for [5000 - 6000%] weapon damage as Holy. ',
    elementalDamage: 'poison'
  },
  {
    name: 'Faithful Memory',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Each enemy hit by Falling Sword increases the damage of Blessed Hammer by [60 - 80%] for 10 seconds. Max 10 stacks.',
  },
  {
    name: 'Maximus',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Chance on hit to summon a Demonic Slave.',
    elementalDamage: 'fire'
  },
  {
    name: 'Scourge',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: '[20 - 45%] chance when attacking to explode with demonic fury for 1800-2000% weapon damage as Fire.',
    elementalDamage: 'poison'
  },
  {
    name: 'Stalgard\'s Decimator',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Your melee attacks throw a piercing axe at a nearby enemy, dealing [550 - 700%] weapon damage as Physical.',
    elementalDamage: 'poison'
  },
  {
    name: 'The Grandfather',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
  },
  {
    name: 'The Sultan of Blinding Sand',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'The Zweihander',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
  },
  {
    name: 'Warmonger',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
  },
  {
    name: 'Splintered Oar',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
  },
  {
    name: 'The Grandfather',
    class: 'barbarian',
    quality: 'ethereal',
    equipment: {
      slot: '2-hand',
      type: 'sword'
    },
    legendaryPower: 'Random legendary weapon effect.',
  },
]