import { Classes, Item } from '@/src/interfaces/Item'

interface Axe extends Item {
  class: Classes,
  equipment: {
    slot: '1-hand',
    type: 'axe'
  }
}

export const axes:Axe[] = [
  {
    name: 'The Burning Axe of Sankis',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: 'Chance to fight through the pain when enemies hit you.',
    elementalDamage: 'fire'
  },
  {
    name: 'The Butcher\'s Sickle',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: '[20 - 25%] chance to drag enemies to you when attacking.',
  },
  {
    name: 'Flesh Tearer',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
  },
  {
    name: 'Genzaniku',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: 'Chance to summon a ghostly Fallen Champion when attacking.'
  },
  {
    name: 'Hack',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: '[75 - 100%] of your Thorns damage is applied on every attack.'
  },
  {
    name: 'Sky Splitter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: '[15 - 20%] chance to Smite enemies for 600-750% weapon damage as Lightning when you hit them.',
    elementalDamage: 'holy'
  },
  {
    name: 'Utar\'s Roar',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    elementalDamage: 'cold'
  },
  {
    name: 'Mordullu\'s Promise',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: 'Firebomb generates [100 - 125] Mana.',
  },
  {
    name: 'Hallowed Breach',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'The Butcher\'s Cleaver',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
  },
  {
    name: 'Gimmershred',
    class: 'barbarian',
    quality: 'ethereal',
    equipment: {
      slot: '1-hand',
      type: 'axe'
    },
    legendaryPower: 'Random legendary weapon effect.',
    elementalDamage: 'cold'
  },
]