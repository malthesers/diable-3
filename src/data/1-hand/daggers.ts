import { Item } from '@/src/interfaces/Item'

interface Dagger extends Item {
  class: 'generic',
  equipment: {
    slot: '1-hand',
    type: 'dagger'
  }
}

export const daggers:Dagger[] = [
  {
    name: 'Blood-Magic Edge',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'Blood oozes from you.',
  },
  {
    name: 'Envious Blade',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'Gain 100% Critical Hit Chance against enemies at full health.',
    elementalDamage: 'poison'
  },
  {
    name: 'Eun-jang-do',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'Attacking enemies below [17 - 20%] Life freezes them for 3 seconds.',
    elementalDamage: 'cold'
  },
  {
    name: 'Karlei\'s Point',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'The damage of Impale is increased by [300 - 375%] and it returns 15 Hatred if it hits an enemy already Impaled.',
    elementalDamage: 'cold'
  },
  {
    name: 'Lord Greenstone\'s Fan',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'Every second, gain [300 - 400%] increased damage for your next Fan of Knives. Stacks up to 30 times.',
    elementalDamage: 'cold'
  },
  {
    name: 'Pig Sticker',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'Squeal!',
  },
  {
    name: 'The Horadric Hamburger',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
  },
  {
    name: 'Wizardspike',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
    legendaryPower: 'Performing an attack has a 25% chance to hurl a Frozen Orb. Arcane Orb deals [300 - 350%] increased damage.'
  },
  {
    name: 'The Clipper',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'dagger'
    },
  },
]