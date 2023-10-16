export interface Item {
  name: string,
  quality: 'undefined' | 'base' | 'common' | 'magic' | 'rare' | 'legendary' | 'set',
  slot: 'unknown' | 'head' | 'shoulders' | 'torso' | 'wrists' | 'hands' | 'waist' | 'legs' | 'feet' | 'neck' | 'finger' | 'off-hand' | '1-hand' | '2-hand',
  type: 'something' | 'crossbow'
}