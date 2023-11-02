import { Item } from '@/src/interfaces/Item'

interface Polearm extends Item {
  class: 'generic',
  equipment: {
    slot: '2-hand',
    type: 'polearm'
  }
}

export const polearms:Polearm[] = [
  {
    name: 'Bovine Bardiche',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'polearm'
    },
    legendaryPower: 'Chance on hit to summon a herd of murderous cows.',
    elementalDamage: 'lightning'
  },
  {
    name: 'Heart Slaugther',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'polearm'
    },
  },
  {
    name: 'Pledge of Caldeum',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'polearm'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Standoff',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'polearm'
    },
    legendaryPower: 'Furious Charge deals increased damage equal to [400 - 500%]% of your bonus movement speed.',
    elementalDamage: 'cold'
  },
  {
    name: 'Vigilance',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'polearm'
    },
    legendaryPower: 'Getting hit has a chance to automatically cast Inner Sanctuary..',
    elementalDamage: 'holy'
  },
  {
    name: 'Man Prodder',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '2-hand',
      type: 'polearm'
    },
  },
]