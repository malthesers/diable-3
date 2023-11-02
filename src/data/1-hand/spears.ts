import { Item } from '@/src/interfaces/Item'

interface Spear extends Item {
  class: 'generic',
  equipment: {
    slot: '1-hand',
    type: 'spear'
  }
}

export const spears:Spear[] = [
  {
    name: 'Spear of Jairo',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'spear'
    },
    legendaryPower: 'Your Thorns is increased by [10 - 15]% for every enemy afflicted by one of your curses.'
  },
  {
    name: 'Scrimshaw',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'spear'
    },
    legendaryPower: 'Reduces the Mana cost of Zombie Charger by 75% and increases its damage by [6 - 7] times.'
  },
  {
    name: 'Arreat\'s Law',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'spear'
    },
    legendaryPower: 'Weapon Throw and Ancient Spear deal [150 - 200]% increased damage. Weapon Throw generates up to 50 additional Fury based on the distance of the enemy hit. The generated Fury can go above the maximum cap by 200 Fury. Ancient Spear refunds up to 50 Fury based on the distance of the enemy hit, and resets your Fury cap to its base maximum.'
  },
  {
    name: 'The Three Hundredth Spear',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'spear'
    },
    legendaryPower: 'Increase the damage of Weapon Throw and Ancient Spear by [150 - 200]%. The attack speed of Weapon Throw is increased by 200%.'
  },
  {
    name: 'Empyrean Messenger',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'spear'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Akanesh, the Herald of Righteousness',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'spear'
    },
    elementalDamage: 'holy'
  },
]