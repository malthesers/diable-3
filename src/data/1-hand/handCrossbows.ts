import { Item } from "../../interfaces/item";

interface HandCrossbow extends Item {
  equipment: {
    slot: '1-hand',
    type: 'hand crossbow'
  }
}

export const handCrossbows:HandCrossbow[] = [
  {
    name: 'Dawn',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    }
  },
  {
    name: 'Valla\'s Bequest',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    }
  },
  {
    name: 'Natalya\'s Slayer',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    }
  },
  {
    name: 'Penetrator',
    class: 'demon hunter',
    quality: 'rare',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    }
  },
  {
    name: 'Hand Crossbow',
    class: 'demon hunter',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    }
  },
  {
    name: 'Initiate\'s Hand Crossbow',
    class: 'demon hunter',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    }
  },
]