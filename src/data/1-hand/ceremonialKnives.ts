import { Item } from '@/src/interfaces/Item'

interface CeremonialKnife extends Item {
  class: 'witch doctor',
  equipment: {
    slot: '1-hand',
    type: 'ceremonial knife'
  }
}

export const ceremonialKnives:CeremonialKnife[] = [
  {
    name: 'Anessazi Edge',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Zombie Dogs stuns enemies around them for 1.5 seconds when summoned.',
  },
  {
    name: 'The Barber',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Instead of dealing direct damage, your Spirit Barrage now accumulates on the target. When you stop casting, it explodes dealing [400 - 500%] of the accumulated damage to all enemies within 15 yards.',
    elementalDamage: 'cold'
  },
  {
    name: 'The Dagger of Darts',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Your Poison Darts and your Fetishes\' Poison Darts now pierce and deal an additional [400 - 500%] damage.',
  },
  {
    name: 'Deadly Rebirth',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Grasp of the Dead gains the effect of the Rain of Corpses rune.',
    elementalDamage: 'arcane'
  },
  {
    name: 'The Gidbinn',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Chance to summon a Fetish when attacking.',
  },
  {
    name: 'Last Breath',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Reduces cooldown of Mass Confusion by [15 - 20] seconds.',
  },
  {
    name: 'Living Umbral Oath',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
  },
  {
    name: 'Rhen\'ho Flayer',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Plague of Toads now seek out enemies and can explode twice. ',
  },
  {
    name: 'Sacred Harvester',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Soul Harvest now stacks up to 10 times.',
  },
  {
    name: 'The Spider Queen\'s Grasp',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Corpse Spiders deals an additional [600 - 800%] damage and releases a web on impact that Slows enemies by 80%.',
  },
  {
    name: 'Starmetal Kukri',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Reduce the cooldown of Fetish Army and Big Bad Voodoo by 1 second each time your fetishes deal damage.',
  },
  {
    name: 'Voo\'s Juicer',
    class: 'witch doctor',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    legendaryPower: 'Spirit Barrage gains the effects of the Phlebotomize and The Spirit is Willing runes.',
    elementalDamage: 'cold'
  },
  {
    name: 'Manajuma\'s Carving Knife',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    elementalDamage: 'poison'
  },
  {
    name: 'Hallowed Sufferance',
    class: 'witch doctor',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'ceremonial knife'
    },
    elementalDamage: 'holy'
  },
]