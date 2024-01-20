import { Item } from '@/src/interfaces/Item'

interface Scythe extends Item {
  class: 'necromancer',
  equipment: {
    slot: '2-hand',
    type: 'scythe'
  }
}

export const scythes:Scythe[] = [
  {
    name: 'Bloodtide Blade',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'scythe'
    },
    legendaryPower: 'Death Nova deals [300 - 400%] increased damage for every enemy within 25 yards, up to 25 enemies.',
  },
  {
    name: 'Maltorius\' Petrified Spike',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'scythe'
    },
    legendaryPower: 'Bone Spear now costs 40 Essence and deals [550 - 700%] increased damage.',
  },
  {
    name: 'Nayr\'s Black Death',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'scythe'
    },
    legendaryPower: 'Each different poison skill you use increases the damage of your poison skills by [75 - 100%] for 15 seconds.',
  },
  {
    name: 'Reilena\'s Shadowhook',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'scythe'
    },
    legendaryPower: 'Every point of Maximum Essence increases your damage by 0.5% and Bone Spikes generates [2 - 5] additional Essence for each enemy hit.',
  },
  {
    name: 'Sovereign Scythe',
    class: 'necromancer',
    quality: 'rare',
    equipment: {
      slot: '2-hand',
      type: 'scythe'
    },
  },
]