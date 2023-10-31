import { Item } from '@/src/interfaces/Item'

interface Scythe extends Item {
  class: 'necromancer',
  equipment: {
    slot: '1-hand',
    type: 'scythe'
  }
}

export const scythes:Scythe[] = [
  {
    name: 'Trag\'Oul\'s Corroded Fang',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'scythe'
    },
    legendaryPower: 'The Cursed Scythe rune for Grim Scythe now has a 100% chance to apply a curse and you deal [150 - 200]% increased damage to cursed enemies.'
  },
]