import { Classes, Item } from '@/src/interfaces/Item'

interface ChestArmor extends Item {
  class: Classes,
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
  {
    name: 'Aughild\'s Rule',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Born\'s Frozen Soul',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Demon\'s Marrow',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Blackthorne\'s Surcoat',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Markings of Savages',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Immortal King\'s Eternal Reign',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Spirit of the Earth',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Raekor\'s Heart',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Cuirass of the Wastes',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Brigandine of Valor',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Breastplate of Akkhan',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Roland\'s Bearing',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Heart of the Light',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Marauder\'s Carapace',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'The Shadow\'s Bane',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Lamellars of Justice',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Sunwuko\'s Soul',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Heart of the Crashing Wave',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Uliana\'s Heart',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Inna\'s Vast Expanse',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Rathma\'s Ribcage Plate',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Inarius\'s Conviction',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Sophisticated Vest',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Pestilence Robe',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Trag\'Oul\'s Scales',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Helltooth Tunic',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Jade Harvester\'s Peace',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Arachyr\'s Carapace',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Mundunugu\'s Robe',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Zunimasssa\'s Marrow',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Firebird\'s Breast',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Harness of Truth',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Typhon\'s Thorax',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Vyr\'s Astonishing Aura',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Tal Rasha\'s Relentless Pursuit',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
  {
    name: 'Sovereign Ascended Armor',
    class: 'generic',
    quality: 'rare',
    equipment: {
      slot: 'torso',
      type: 'chest armor'
    },
  },
]