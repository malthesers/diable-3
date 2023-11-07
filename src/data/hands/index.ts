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
  {
    name: 'Sage\'s Purchase',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Cain\'s Scrivener',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Asheara\'s Ward',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Claws of Savages',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Immortal King\'s Irons',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Pull of the Earth',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Raekor\'s Wraps',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Gauntlet of the Wastes',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Gauntlets of Valor',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Gauntlets of Akkhan',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Roland\'s Grasp',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Pride of the Invoker',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Will of the Light',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Fiendish Grips',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Gas Powered Automail Forearm',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Marauder\'s Gloves',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Natalya\'s Touch',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'The Shadow\'s Grasp',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Bazubands of Justice',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Sunwuko\'s Paws',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Fists of Thunder',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Uliana\'s Fury',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Inna\'s Hold',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Rathma\'s Macabre Vambracers',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Inarius\'s Will',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Lavishing Gloves',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Pestilence Gloves',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Trag\'Oul\'s Claws',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Helltooth Gauntlets',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Jade Harvester\'s Mercy',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Arachyr\'s Claws',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Mundunugu\'s Rhythm',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Zunimasssa\'s Finger Wraps',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Firebird\'s Talons',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Fierce Gauntlets',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Typhon\'s Claws',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Vyr\'s Grasping Gauntlets',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Tal Rasha\'s Grasp',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
  {
    name: 'Sovereign Ascended Gloves',
    class: 'generic',
    quality: 'rare',
    equipment: {
      slot: 'hands',
      type: 'gloves'
    },
  },
]