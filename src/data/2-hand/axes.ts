import { Item } from '@/src/interfaces/Item'

interface Axe extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'axe'
  }
}

export const axes:Axe[] = [
  {
    name: 'Burst of Wrath',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
    legendaryPower: 'Killing enemies and destroying objects has a chance to grant 20% of your maximum primary resource.',
  },
  {
    name: 'Butcher\'s Carver',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
    legendaryPower: 'The Butcher still inhabits his carver.',
  },
  {
    name: 'Cinder Switch',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
    legendaryPower: '[25 - 50%] chance to cast a fireball when attacking.',
    elementalDamage: 'fire'
  },
  {
    name: 'The Executioner',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
    legendaryPower: 'Attacks will slay enemies with less than [5 - 10%] health.',
  },
  {
    name: 'Messerschmidt\'s Reaver',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
    legendaryPower: 'Reduce the remaining cooldown of one of your skills by [1] second when you slay an enemy.',
    elementalDamage: 'fire'
  },
  {
    name: 'Skorn',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
  },
  {
    name: 'Kanai\'s Skorn',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
  },
  {
    name: 'King Maker',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
  },
  {
    name: 'Sungjae\'s Fury',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '2-hand',
      type: 'axe'
    },
  },
]