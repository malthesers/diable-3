import { Classes, Item } from '@/src/interfaces/Item'

interface Mace extends Item {
  class: Classes,
  equipment: {
    slot: '1-hand',
    type: 'mace'
  }
}

export const maces:Mace[] = [
  {
    name: 'Devastator',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Echoing Fury',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    legendaryPower: 'Slaying enemies engulfs the wielder into a Frenzy.'
  },
  {
    name: 'Jace\'s Hammer of Vigilance',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    legendaryPower: 'Increase the size of your Blessed Hammers.',
    elementalDamage: 'holy'
  },
  {
    name: 'Mad Monarch\'s Scepter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    legendaryPower: 'After killing 10 enemies, you release a Poison Nova that deals [1050 - 1400%] weapon damage as Poison to enemies within 30 yards.',
    elementalDamage: 'holy'
  },
  {
    name: 'Nailbiter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
  },
  {
    name: 'Neanderthal',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
  },
  {
    name: 'Nutcracker',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
  },
  {
    name: 'Odyn Son',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    legendaryPower: '[20 - 40%] chance to Chain Lightning enemies when you hit them.',
    elementalDamage: 'lightning'
  },
  {
    name: 'Solanium',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    legendaryPower: 'Critical Hits have a [3 - 4%] chance to spawn a health globe.',
    elementalDamage: 'holy'
  },
  {
    name: 'Sun Keeper',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Telranden\'s Hand',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    elementalDamage: 'arcane'
  },
  {
    name: 'Wirt\'s Leg',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
  },
  {
    name: 'Wirt\'s Original Leg',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
  },
  {
    name: 'Astreon\'s Iron Ward',
    class: 'crusader',
    quality: 'ethereal',
    equipment: {
      slot: '1-hand',
      type: 'mace'
    },
    legendaryPower: 'Random legendary weapon effect',
  },
]