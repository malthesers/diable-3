const slotTypes: { [key:string]: string[] } = {
  head: ['helm', 'spirit stone', 'voodoo mask', 'wizard hat']
}

type head = 'helm' | 'spirit stone' | 'voodoo mask' | 'wizard hat'

type slots = {
  'unknown': string,
  'head': head,
  'shoulders': string,
  'torso': string,
  'wrists': string,
  'hands': string,
  'waist': string,
  'legs': string,
  'feet': string,
  'neck': string,
  'finger': string,
  'off-hand': string,
  '1-hand': string,
  '2-hand': string
}

export interface Item {
  name: string,
  class?: 'barbarian' | 'crusader' | 'demon hunter' | 'monk' | 'necromancer' | 'witch dcotor' | 'wizard',
  quality: 'undefined' | 'base' | 'common' | 'magic' | 'rare' | 'legendary' | 'set',
  slot: 'unknown' | 'head' | 'shoulders' | 'torso' | 'wrists' | 'hands' | 'waist' | 'legs' | 'feet' | 'neck' | 'finger' | 'off-hand' | '1-hand' | '2-hand',
  type: 'something' | 'crossbow'
}