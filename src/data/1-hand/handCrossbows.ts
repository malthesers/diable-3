import { Item } from '@/src/interfaces/Item'

interface HandCrossbow extends Item {
  class: 'demon hunter',
  equipment: {
    slot: '1-hand',
    type: 'hand crossbow'
  }
}

export const handCrossbows:HandCrossbow[] = [
  {
    name: 'Fortress Ballista',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Attacks grant you an absorb shield for [2.0 - 3.0%] of your maximum Life. Stacks up to 10 times.'
  },
  {
    name: 'Lianna\'s Wings',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Shadow Power also triggers Smoke Screen.',
    elementalDamage: 'holy'
  },
  {
    name: 'The Demon\'s Demise',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Each blast from Spike Trap will damage all enemies again after 1 second, and deals [150 - 200%] increased damage.'
  },
  {
    name: 'Blitzbolter',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Calamity',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Automatically cast Marked for Death when you damage an enemy.'
  },
  {
    name: 'Deadeye',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
  },
  {
    name: 'K\'mar Tenclip',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Strafe gains the effect of the Drifting Shadow rune.'
  },
  {
    name: 'Balefire Caster',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Helltrapper',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: '[7 - 10%] chance on hit to summon a Spike Trap, Caltrops or Sentry.'
  },
  {
    name: 'Dawn',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Reduce the cooldown of Vengeance by [50 - 65%].',
    elementalDamage: 'holy'
  },
  {
    name: 'Valla\'s Bequest',
    class: 'demon hunter',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Strafe projectiles pierce.'
  },
  {
    name: 'Natalya\'s Slayer',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    elementalDamage: 'cold'
  },
  {
    name: 'Danetta\'s Revenge',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Vault gains the effect of the Rattling Roll rune.'
  },
  {
    name: 'Danetta\'s Spite',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    legendaryPower: 'Leave a clone of yourself behind after using Vault.'
  },
  {
    name: 'Hallowed Judgment',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Hallowed Condemnation',
    class: 'demon hunter',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'hand crossbow'
    },
    elementalDamage: 'holy'
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