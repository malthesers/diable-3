export interface Item {
  name: string,
  quality: 'base' | 'magic' | 'rare' | 'legendary' | 'set',
  slot: 'Unknown' | 'Head' | 'Shoulders' | 'Torso' | 'Wrists' | 'Hands' | 'Waist' | 'Legs' | 'Feet' | 'Neck' | 'Finger' | 'Off-Hand' | '1-Hand' | '2-Hand',
}