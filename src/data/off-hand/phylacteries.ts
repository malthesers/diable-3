import { Item } from '@/src/interfaces/Item'

interface Phylactery extends Item {
  class: 'necromancer',
  equipment: {
    slot: 'off-hand',
    type: 'phylactery'
  }
}

export const phylacteries:Phylactery[] = [
  {
    name: 'Bone Ringer',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'phylactery'
    },
    legendaryPower: 'The damage bonus of Command Skeletons increases by [25 - 30%] per second they spend attacking the same target. This effect stacks up to 60 times.'
  },
  {
    name: 'Iron Rose',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'phylactery'
    },
    legendaryPower: 'Attacking with Siphon Blood has a 100% chance to cast a free Blood Nova. After cumulatively losing 10% of your maximum Life, your Death Nova deals [40 - 50%] increased damage for 60 seconds. This effect stacks up to 10 times.'
  },
  {
    name: 'Leger\'s Disdain',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'phylactery'
    },
    legendaryPower: 'Grim Scythe deals an additional [65 - 80%] damage for each point of essence it restores.'
  },
  {
    name: 'Lost Time',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: 'off-hand',
      type: 'phylactery'
    },
    legendaryPower: 'Your cold skills reduce the movement speed of enemies by 30%. In addition, your movement speed is increased by [8 - 10%] for 5 seconds. Maximum 5 stacks.'
  },
  {
    name: 'Sovereign Embalming Vessel',
    class: 'necromancer',
    quality: 'rare',
    equipment: {
      slot: 'off-hand',
      type: 'phylactery'
    },
  }
]