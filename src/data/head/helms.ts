import { Item } from '@/src/interfaces/Item'

interface Helm extends Item {
  class: 'generic',
  equipment: {
    slot: 'head',
    type: 'helm'
  }
}

export const helms:Helm[] = [
  {
    name: 'Andariel\'s Visage',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Attacks release a Poison Nova that deals [350 - 450%] weapon damage as Poison to enemies within 10 yards.'
  },
  {
    name: 'Blind Faith',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
  },
  {
    name: 'Broken Crown',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Whenever a gem drops, a gem of the type socketed into your helmet also drops. This effect does not apply to Legendary Gems. (Emanates)'
  },
  {
    name: 'Deathseer\'s Cowl',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: '[15 - 20%] chance on being hit by an Undead enemy to charm it for 2 seconds.'
  },
  {
    name: 'Fate\'s Vow',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Army of the Dead deals an additional [200 - 250%] damage and gains the effect of the Unconventional Warfare rune.'
  },
  {
    name: 'Leoric\'s Crown',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Increase the effect of any gem socketed into this item by [75 - 100%]. This effect does not apply to Legendary Gems.'
  },
  {
    name: 'Mask of Scarlet Death',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Revive now consumes all corpses to raise a minion that deals [125 - 150%] more damage per corpse.'
  },
  {
    name: 'Mempo of Twilight',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Meteor Shower rune is now applied to all cast Meteors and deals [300 - 400%] increased damage.'
  },
  {
    name: 'Pride\'s Fall',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Your resource costs are reduced by 30% after not taking damage for 5 seconds.'
  },
  {
    name: 'Skull of Resonance',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Threatening Shout has a chance to Charm enemies and cause them to join your side.'
  },
  {
    name: 'The Helm of Rule',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
  },
  {
    name: 'Visage of Gunes',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Vengeance gains the effect of the Dark Heart rune.'
  },
  {
    name: 'Warhelm of Kassar',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'helm'
    },
    legendaryPower: 'Reduce the cooldown and increase the damage of Phalanx by [45 - 60%].'
  },
]