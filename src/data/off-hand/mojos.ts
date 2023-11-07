import { Item } from '@/src/interfaces/Item'

interface Mojo extends Item {
  class: 'witch doctor',
  equipment: {
    slot: 'off-hand',
    type: 'mojo'
  }
}

export const mojos:Mojo[] = [
  {
    name: 'Bitterness',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
  },
  {
    name: 'Gazing Demise',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'The damage of Spirit Barrage is increased by [100 - 150%]. Spirit Barrage gains the Phantasm rune which lasts twice as long, and the attack rate from Manitou spectres is increased.'
  },
  {
    name: 'Henri\'s Perquisition',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'The first time an enemy deals damage to you, reduce that damage by [60 - 80%] and Charm the enemy for 3 seconds.'
  },
  {
    name: 'Homunculus',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'A Zombie Dog is automatically summoned to your side every [2] seconds.'
  },
  {
    name: 'Shukrani\'s Triumph',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'After the initial duration of Spirit Walk ends, it will continue to last until you attack 3 times or until an elite enemy is within 20 yards of you. Attacks while in the spirit realm deal [75 - 100%] increased damage.'
  },
  {
    name: 'Spite',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'Non-cleaving Gargantuans gain the cleave and chilling effects of the Humongoid rune.'
  },
  {
    name: 'Thing of the Deep',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'Increases Gold and Health Pickup by [20] yards.'
  },
  {
    name: 'Uhkapian Serpent',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: '[25 - 30%] of the damage you take is redirected to your Zombie Dogs.'
  },
  {
    name: 'Ursua\'s Trodden Effigy',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'Zombie Charger deals [100 - 150%] increased damage. The Zombie Bears rune now summons 8 bears that travel farther.'
  },
  {
    name: 'Vile Hive',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'Locust Swarm gains the effect of the Pestilence rune and deals [45 - 60%] increased damage.'
  },
  {
    name: 'Wilken\'s Reach',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
    legendaryPower: 'Grasp of the Dead no longer has a cooldown.'
  },
  {
    name: 'Manajuma\'s Gory Fetch',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
  },
  {
    name: 'Zunimasa\'s String of Skulls',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
  },
  {
    name: 'Sovereign Thing That Should Not Be',
    class: 'witch doctor',
    quality: 'rare',
    equipment: {
      slot: 'off-hand',
      type: 'mojo'
    },
  },
]