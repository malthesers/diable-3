import { Item } from '@/src/interfaces/Item'

interface ChestArmor extends Item {
  class: 'generic',
  equipment: {
    slot: 'torso',
    type: 'chest armor'
  }
}

export const chestArmors:ChestArmor[] = [
  {
    name: 'Aquila Cuirass',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'While above [90 - 95%] primary resource, all damage taken is reduced by 50%.'
  },
  {
    name: 'Armor of the Kind Regent',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'Smite will now also be cast at a second nearby enemy.'
  },
  {
    name: 'Bloodsong Mail',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'While in the Land of the Dead, Command Skeletons deals [100 - 125%] additional damage and gains the effect of the Enforcer, Frenzy, Dark Mending and Freezing Grasp runes.'
  },
  {
    name: 'Chaingmail',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'After earning a survival bonus, quickly heal to full Life.'
  },
  {
    name: 'Cinder Coat',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'Reduces the resource cost of Fire skills by [23 - 30%].',
    elementalDamage: 'fire'
  },
  {
    name: 'Goldskin',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'Chance for enemies to drop gold when you hit them. (Emanates)',
  },
  {
    name: 'Heart of Iron',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'Gain Thorns equal to [250 - 300%] of your Vitality.',
  },
  {
    name: 'Mantle of the Rydraelm',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Requiem Cereplate',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'Devour restores an additional [75 - 100%] Essence and Life. In addition, when Devour restores Essence or Life above your maximum, the excess is granted over 3 seconds.'
  },
  {
    name: 'Shi Mizu\'s Haori',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
    legendaryPower: 'While below [20 - 25%] Life, all attacks are guaranteed Critical Hits.'
  },
  {
    name: 'Tyrael\'s Might',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Arkaine\'s Valor',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Godly Plate of the Whale',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
]