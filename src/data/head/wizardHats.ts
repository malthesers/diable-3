import { Item } from '@/src/interfaces/Item'

interface WizardHat extends Item {
  class: 'wizard',
  equipment: {
    slot: 'head',
    type: 'wizard hat'
  }
}

export const wizardHats:WizardHat[] = [
  {
    name: 'Archmage\'s Vicalyke',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
    legendaryPower: 'Your Mirror Images have a chance to multiply when killed by enemies.'
  },
  {
    name: 'Crown of the Primus',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
    legendaryPower: 'Slow Time gains the effect of every rune except Point of No Return and permanently follows you.'
  },
  {
    name: 'Dark Mage\'s Shade',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
    legendaryPower: 'Automatically cast Diamond Skin when you fall below 35% Life. This effect may occur once every [15 - 20] seconds.'
  },
  {
    name: 'Storm Crow',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
    legendaryPower: '[20 - 40%] chance to cast a fiery ball when attacking.',
    elementalDamage: 'lightning'
  },
  {
    name: 'The Magistrate',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
    legendaryPower: 'Your Hydras now periodically cast Frost Nova and deal [250 - 300%] increased damage'
  },
  {
    name: 'The Swami',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
    legendaryPower: 'The bonuses from Archon stacks now last for [15 - 20] seconds after Archon expires.'
  },
  {
    name: 'Velvet Camaral',
    class: 'wizard',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
    legendaryPower: 'Double the number of enemies your Electrocute jumps to.'
  },
  {
    name: 'Sovereign Ascended Headpiece',
    class: 'wizard',
    quality: 'rare',
    equipment: {
      slot: 'head',
      type: 'wizard hat'
    },
  },
]