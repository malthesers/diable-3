type Classes = 'barbarian' | 'crusader' | 'demon hunter' | 'monk' | 'necromancer' | 'witch dcotor' | 'wizard'
type Qualities = 'undefined' | 'base' | 'common' | 'magic' | 'rare' | 'legendary' | 'set'
type Slots = 'unknown' | 'head' | 'shoulders' | 'torso' | 'wrists' | 'hands' | 'waist' | 'legs' | 'feet' | 'neck' | 'finger' | 'off-hand' | '1-hand' | '2-hand'

type Types<TSlot> =
  TSlot extends 'head' ? Head :
  TSlot extends 'shoulders' ? 'shoulders' :
  TSlot extends 'torso' ? Torso :
  TSlot extends 'wrists' ? 'bracers' :
  TSlot extends 'hands' ? 'gloves' :
  TSlot extends 'waist' ? Waist :
  TSlot extends 'legs' ? 'pants' :
  TSlot extends 'feet' ? 'boots' :
  TSlot extends 'neck' ? 'amulet' :
  TSlot extends 'finger' ? 'ring' :
  TSlot extends 'off-hand' ? OffHand :
  TSlot extends '2-hand' ? TwoHand :
  TSlot extends '1-hand' ? OneHand :
  'something';

export interface TItem {
  name: string,
  class?: Classes,
  quality: Qualities,
  slot: Slots,
  type: Types<Item['slot']>
}

export interface Item {
  name: string,
  class?: Classes,
  quality: Qualities,
  equipment: Head | Shoulders | Torso | Wrists | Hands | Waist | Legs | Feet | Neck | Finger | OffHand | TwoHand | OneHand
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
  type: 'axe' | 'dagger' | 'mace' | 'spear' | 'sword' | 'ceremonial knife' | 'fist weapon' | 'flail' | 'mighty weapon' | 'hand crossbow' | 'wand'
}