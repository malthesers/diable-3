type Classes = 'barbarian' | 'crusader' | 'demon hunter' | 'monk' | 'necromancer' | 'witch dcotor' | 'wizard'
type Qualities = 'undefined' | 'base' | 'common' | 'magic' | 'rare' | 'legendary' | 'set'
type Slots = 'unknown' | 'head' | 'shoulders' | 'torso' | 'wrists' | 'hands' | 'waist' | 'legs' | 'feet' | 'neck' | 'finger' | 'off-hand' | '1-hand' | '2-hand'

type Head = 'helm' | 'spirit stone' | 'voodoo mask' | 'wizard hat'
type Torso = 'chest armor' | 'cloak'
type Waist = 'belt' | 'mighty belt'
type OffHand = 'shield' | 'crusader shield' | 'mojo' | 'source' | 'quiver' | 'phylactery'
type TwoHand = 'axe' | 'mace' | 'polearm' | 'staff' | 'sword' | 'daibo' | 'flail' | 'mighty weapon' | 'scythe' | 'bow' | 'crossbow'
type OneHand = 'axe' | 'dagger' | 'mace' | 'spear' | 'sword' | 'ceremonial knife' | 'fist weapon' | 'flail' | 'mighty weapon' | 'hand crossbow' | 'wand'

type Types<TSlot extends Item['slot']> =
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

export interface Item<TSlot extends Item['slot']> {
  name: string,
  class?: Classes,
  quality: Qualities,
  slot: Slots,
  type: Types<TSlot>
}