import { Classes, Item } from '@/src/interfaces/Item';

interface Pants extends Item {
  class: Classes,
  equipment: {
    slot: 'legs',
    type: 'pants'
  }
}

export const legsItems:Pants[] = [
  {
    name: 'Death\'s Bargain',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'Gain an aura of death that deals [750 - 1000%] of your Life per Second as Physical damage to enemies within 16 yards. You no longer regenerate Life.'
  },
  {
    name: 'Defiler Cuisses',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'Your Bone Spirit\'s damage is increased by [400 - 500%] for every second it is active and will also freeze enemies on impact. Maximum of 5 seconds.'
  },
  {
    name: 'Depth Diggers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'Primary skills deal [80 - 100%] additional damage.'
  },
  {
    name: 'Golemskin Breeches',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'The cooldown on Command Golem is reduced by [20 - 25] seconds and you take 30% less damage while your golem is alive.'
  },
  {
    name: 'Hammer Jammers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'Enemies take [300 - 400%] increased damage from your Blessed Hammers for 10 seconds after you hit them with a Blind, Immobilize, or Stun.'
  },
  {
    name: 'Hexing Pants of Mr. Yan',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'Your resource generation and damage is increased by 25% while moving and decreased by [20 - 25%] while standing still.'
  },
  {
    name: 'Pox Faulds',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'When 3 or more enemies are within 12 yards, you release a vile stench that deals [450 - 550%] weapon damage as Poison every second for 5 seconds to enemies within 15 yards.'
  },
  {
    name: 'Skelon\'s Deceit',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Swamp Land Waders',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
    legendaryPower: 'Sacrifice deals [300 - 400%] additional damage against enemies affected by Locust Swarm or Grasp of the Dead.'
  },
  {
    name: 'Demon\'s Plate',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Captain Crimson\s Thrust',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Cain\s Habit',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Asheara\s Pace',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Blackthorne\'s Jousting Mail',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Leggings of Savages',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Immortal King\'s Stature',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Weight of the Earth',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Raekor\'s Breeches',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Tasset of the Wastes',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Chausses of Valor',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Cuisses of Akkhan',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Roland\'s Determination',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Towers of the Light',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Renewal of the Invoker',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Unholy Plates',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Marauder\'s Encasement',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'The Shadow\'s Coil',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Natalya\'s Leggings',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Cold Cathode Trousers',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Mountains of Justice',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Sunwuko\'s Leggings',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Scales of the Dancing Serpent',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Uliana\'s Burden',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Inna\'s Temperance',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Rathma\'s Skeletal Legplates',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Inarius\'s Reticence',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Elegant Pants',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Pestilence Incantations',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Trag\'Oul\'s Hide',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Helltooth Leg Guards',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Jade Harvester\'s Courage',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Arachyr\'s Legs',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Mundunugu\'s Decoration',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Zunimasssa\'s Cloth',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Firebird\'s Down',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Leg Guards of Mystery',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Typhon\'s Abdomen',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Vyr\'s Fantastic Finery',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Tal Rasha\'s Stride',
    class: 'wizard',
    quality: 'set',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
  {
    name: 'Sovereign Ascended Faulds',
    class: 'generic',
    quality: 'rare',
    equipment: {
      slot: 'legs',
      type: 'pants'
    },
  },
]