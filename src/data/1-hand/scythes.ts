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
    name: 'Funerary Pick',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'scythe'
    },
    legendaryPower: 'Siphon Blood drains blood from 2 additional targets. Each target takes [250 - 300%] increased damage from you unless there is only 1 target, then it gains double the increased damage. The bonus from Siphon Blood - Power Shift is now 20% per stack and benefits all skills.'
  },
  {
    name: 'Scythe of the Cycle',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'scythe'
    },
    legendaryPower: 'Your Secondary skills deal [350 - 400%] additional damage while Bone Armor is active but reduce the remaining duration of Bone Armor by 4 seconds. '
  },
  {
    name: 'Trag\'Oul\'s Corroded Fang',
    class: 'necromancer',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'scythe'
    },
    legendaryPower: 'The Cursed Scythe rune for Grim Scythe now has a 100% chance to apply a curse and you deal [150 - 200%] increased damage to cursed enemies.'
  },
  {
    name: 'Jesseth Skullscythe',
    class: 'necromancer',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'scythe'
    },
  },
  {
    name: 'Soul Harvest',
    class: 'necromancer',
    quality: 'ethereal',
    equipment: {
      slot: '1-hand',
      type: 'scythe'
    },
    legendaryPower: 'Random legendary weapon effect.',
  },
  {
    name: 'Sovereign Saber',
    class: 'necromancer',
    quality: 'rare',
    equipment: {
      slot: '1-hand',
      type: 'scythe'
    },
  },
]