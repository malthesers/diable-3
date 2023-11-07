import { Item } from '@/src/interfaces/Item'

interface MightyBelt extends Item {
  class: 'barbarian',
  equipment: {
    slot: 'waist',
    type: 'mighty belt'
  }
}

export const mightyBelts:MightyBelt[] = [
  {
    name: 'Chilanik\'s Chain',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
    legendaryPower: 'Using War Cry increases the movement speed for you and all allies affected by [30 - 40%] for 10 seconds.'
  },
  {
    name: 'Dread Iron',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
    legendaryPower: 'Ground Stomp causes an Avalanche.'
  },
  {
    name: 'Girdle of Giants',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
    legendaryPower: 'Seismic Slam increases Earthquake damage by [200 - 250%] for 3 seconds.'
  },
  {
    name: 'Lamentation',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
    legendaryPower: 'Rend can now stack up to 2 times on an enemy, and the damage of Rend is increased by [100 - 150%].'
  },
  {
    name: 'Pride of Cassius',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
    legendaryPower: 'Increases the duration of Ignore Pain by [4 - 6] seconds.'
  },
  {
    name: 'The Undisputed Champion',
    class: 'barbarian',
    quality: 'legendary',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
    legendaryPower: 'Frenzy gains the effect of every rune and deals [300 - 400%] increased damage.'
  },
  {
    name: 'Immortal King\'s Tribal Binding',
    class: 'barbarian',
    quality: 'set',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
  },
  {
    name: 'Sovereign Ascended Scourge',
    class: 'barbarian',
    quality: 'rare',
    equipment: {
      slot: 'waist',
      type: 'mighty belt'
    },
  },
]