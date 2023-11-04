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
]