type classes = 'barbarian' | 'crusader' | 'demon hunter' | 'monk' | 'necromancer' | 'witch dcotor' | 'wizard'
type qualities = 'undefined' | 'base' | 'common' | 'magic' | 'rare' | 'legendary' | 'set'
type slots = 'unknown' | 'head' | 'shoulders' | 'torso' | 'wrists' | 'hands' | 'waist' | 'legs' | 'feet' | 'neck' | 'finger' | 'off-hand' | '1-hand' | '2-hand'
type types = 'something' | 'helm' | 'spirit stone' | 'voodoo mask' | 'wizard hat' | 'shoulders' | 'chest armor' | 'cloak' | 'bracers' | 'gloves' |
'belt' | 'mighty belt' | 'pants' | 'boots' | 'amulet' | 'ring' | 'shield' | 'crusader shield' | 'mojo' | 'source' | 'quiver' | 'phylactery' |
'axe' | 'dagger' | 'mace' | 'spear' | 'sword' | 'ceremonial knife' | 'fist weapon' | 'flail' | 'mighty weapon' | 'scythe' | 'polearm' | 'staff' | 'daibo' |
'bow' | 'crossbow' | 'hand crossbow' | 'wand'

export interface Item {
  name: string,
  class?: classes,
  quality: qualities,
  slot: slots,
  type: types
}