import { Item } from '@/src/interfaces/Item'

interface Flail extends Item {
  class: 'crusader',
  equipment: {
    slot: '2-hand',
    type: 'flail'
  }
}

export const flails:Flail[] = [
  {
    name: 'Akkhan\'s Addendum',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Akarat\'s Champion gains the effects of the Prophet and Embodiment of Power runes.',
  },
  {
    name: 'Akkhan\'s Leniency',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Each enemy hit by your Blessed Shield increases the damage of your Blessed Shield by [35 - 40%] for 6 seconds. Stacks up to 100 times.',
  },
  {
    name: 'Baleful Remnant',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Enemies killed while Akarat\'s Champion is active turn into Phalanx Avatars for 10 seconds.',
  },
  {
    name: 'Fate of the Fell',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Heaven\'s Fury gains two additional rays and has its damage increased by [375 - 500%]. ',
  },
  {
    name: 'Flail of the Ascended',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Your Shield Glare deals damage equal to up to your last [5] Shield Bash casts.',
  },
  {
    name: 'Golden Flense',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Sweep Attack restores 6 Wrath for each enemy hit and has its damage increased by [225 - 300%].',
  },
  {
    name: 'The Mortal Drama',
    class: 'crusader',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
    legendaryPower: 'Double the number of Bombardment impacts. Bombardment deals [400 - 500%] increased damage.',
  },
  {
    name: 'Flail of the Charge',
    class: 'crusader',
    quality: 'set',
    equipment: {
      slot: '2-hand',
      type: 'flail'
    },
  },
]