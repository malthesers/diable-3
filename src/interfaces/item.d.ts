export interface Item {
  name: string,
  class: Classes,
  quality: Qualities,
  equipment: Unknown | Head | Shoulders | Torso | Wrists | Hands | Waist | Legs | Feet | Neck | Finger | OffHand | TwoHand | OneHand,
  legendaryPower?: string
  elementalDamage?: ElementalDamage
}

type Classes = 'anonymous' | 'generic' | 'barbarian' | 'crusader' | 'demon hunter' | 'monk' | 'necromancer' | 'witch doctor' | 'wizard'

type Qualities = 'undefined' | 'base' | 'common' | 'magic' | 'rare' | 'legendary' | 'set'

type ElementalDamage = 'physical' | 'arcane' | 'cold' | 'fire' | 'holy' | 'lightning' | 'poison'

type Unknown = {
  slot: 'unknown'
  type: 'something'
}

type Head = {
  slot: 'head'
  type: 'helm' | 'spirit stone' | 'voodoo mask' | 'wizard hat'
}

type Shoulders = {
  slot: 'shoulders'
  type: 'shoulders'
}

type Torso = {
  slot: 'torso'
  type: 'chest armor' | 'cloak'
}

type Wrists = {
  slot: 'wrists'
  type: 'bracers'
}

type Hands = {
  slot: 'hands'
  type: 'gloves'
}

type Waist = {
  slot: 'waist'
  type: 'belt' | 'mighty belt'
}

type Legs = {
  slot: 'legs'
  type: 'pants'
}

type Feet = {
  slot: 'feet'
  type: 'boots'
}

type Neck = {
  slot: 'neck'
  type: 'amulet'
}

type Finger = {
  slot: 'finger'
  type: 'ring'
}

type OffHand = {
  slot: 'off-hand'
  type: 'shield' | 'crusader shield' | 'mojo' | 'source' | 'quiver' | 'phylactery'
}

type TwoHand = {
  slot: '2-hand'
  type: 'axe' | 'mace' | 'polearm' | 'staff' | 'sword' | 'daibo' | 'flail' | 'mighty weapon' | 'scythe' | 'bow' | 'crossbow'
}

type OneHand = {
  slot: '1-hand'
  type: 'axe' | 'dagger' | 'mace' | 'spear' | 'sword' | 'ceremonial knife' | 'scythe' | 'fist weapon' | 'flail' | 'mighty weapon' | 'hand crossbow' | 'wand'
}