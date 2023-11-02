import { Item } from '@/src/interfaces/Item'

interface Flail extends Item {
  class: 'crusader',
  equipment: {
    slot: '1-hand',
    type: 'flail'
  }
}

export const flails:Flail[] = [
  {
    name: 'Darklight',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Fist of the Heavens now casts twice and deals [800 - 1000]% more damage.',
    elementalDamage: 'lightning'
  },
  {
    name: 'Gyrfalcon\'s Foote',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Removes the resource cost of Blessed Shield and increases its damage by [275 - 350]%.',
  },
  {
    name: 'Justinian\'s Mercy',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Blessed Hammer gains the effect of the Dominion rune.',
  },
  {
    name: 'Swiftmount',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Doubles the duration of Steed Charge.',
  },
  {
    name: 'Kassar\'s Retribution',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Casting Justice increases your movement speed by [15 - 20]% for 2 seconds.',
  },
  {
    name: 'Inviolable Faith',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Casting Consecration also casts Consecration beneath all of your allies.',
    elementalDamage: 'holy'
  },
  {
    name: 'Johanna\'s Argument',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Increase the attack speed and damage of Blessed Hammer by 100%.',
  },
  {
    name: 'Golden Scourge',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'flail'
    },
    legendaryPower: 'Smite now jumps to 3 additional enemies.',
  },
]