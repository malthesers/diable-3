import { Classes, Item } from '@/src/interfaces/Item';

interface Boots extends Item {
  class: Classes,
  equipment: {
    slot: 'feet',
    type: 'boots'
  }
}

export const feetItems:Boots[] = [
  {
    name: 'Board Walkers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
  },
  {
    name: 'Boj Anglers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
  },
  {
    name: 'Boots of Disregard',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Gain 10000 Life regeneration per Second for each second you stand still. This effect stacks up to 4 times.'
  },
  {
    name: 'Bryner\'s Journey',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Attacking with Bone Spikes has a [20 - 30%] chance to cast a Bone Nova at the target location.'
  },
  {
    name: 'Fire Walkers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Burn the ground you walk on, dealing [300 - 400%] weapon damage each second.'
  },
  {
    name: 'Ice Climbers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Gain immunity to Freeze and Immobilize effects.'
  },
  {
    name: 'Illusory Boots',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'You may move unhindered through enemies.'
  },
  {
    name: 'Irontoe Mudsputters',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Gain up to [25 - 30%] increased movement speed based on amount of Life missing.'
  },
  {
    name: 'Lut Socks',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Leap can be cast up to three times within 2 seconds before the cooldown begins.'
  },
  {
    name: 'Nilfur\'s Boast',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Increase the damage of Meteor by 600%. When your Meteor hits 3 or fewer enemies, the damage is increased by [675 - 900%].'
  },
  {
    name: 'Rivera Dancers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Lashing Tail Kick attacks 50% faster and deals [250 - 300%] increased damage.'
  },
  {
    name: 'Steuart\'s Greaves',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'You gain [75 - 100%] increased movement speed for 10 seconds after using Blood Rush.'
  },
  {
    name: 'The Crudest Boots',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'feet',
      type: 'boots'
    },
    legendaryPower: 'Mystic Ally summons two Mystic Allies that fight by your side. They deal [150 - 200%] increased damage and are able to attack with their active forms longer.'
  },
]