import { Item } from '@/src/interfaces/Item'

interface Mace extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'mace'
  }
}

export const maces:Mace[] = [
  {
    name: 'Arthef\'s Spark of Life',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: 'Heal for [3 - 4%] of your missing Life when you kill an Undead enemy.',
  },
  {
    name: 'Crushbane',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    elementalDamage: 'cold'
  },
  {
    name: 'Schaefer\'s Hammer',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: 'Casting a Lightning skill charges you with Lightning, causing you to deal [650 - 850%] weapon damage as Lightning every second for 5 seconds to nearby enemies.',
    elementalDamage: 'lightning'
  },
  {
    name: 'Skywarden',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: 'Every 60 seconds, gain a random Law for 60 seconds.',
    elementalDamage: 'holy'
  },
  {
    name: 'Sledge of Athskeleng',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
  },
  {
    name: 'Soulsmasher',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: 'When you kill an enemy, it explodes for [450 - 600%] of your Life per Kill as damage to all enemies within 20 yards. You no longer benefit from your Life per Kill.'
  },
  {
    name: 'Sunder',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: '[25 - 50%] chance to sunder the ground your enemies walk on when you attack.',
    elementalDamage: 'fire'
  },
  {
    name: 'The Furnace',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: 'Increases damage against elites by [40 - 50%].',
    elementalDamage: 'fire'
  },
  {
    name: 'Wrath of the Bone King',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'mace'
    },
    legendaryPower: 'Increases damage against elites by [40 - 50%].',
    elementalDamage: 'cold'
  },
]