import { Item } from '@/src/interfaces/Item'

interface SpiritStone extends Item {
  class: 'monk',
  equipment: {
    slot: 'head',
    type: 'spirit stone'
  }
}

export const spiritStones:SpiritStone[] = [
  {
    name: 'Bezoar Stone',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
  },
  {
    name: 'Erlang Shen',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
  },
  {
    name: 'Eye of Peshkov',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
    legendaryPower: 'Reduce the cooldown of Breath of Heaven by [38 - 50%].'
  },
  {
    name: 'Gyana Na Kashu',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
    legendaryPower: 'Lashing Tail Kick releases a piercing fireball that deals [1050 - 1400%] weapon damage as Fire to enemies within 10 yards on impact.'
  },
  {
    name: 'Kekegi\'s Unbreakable Spirit',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
    legendaryPower: 'Damaging enemies has a chance to grant you an effect that removes the Spirit cost of your abilities for [2 - 4] seconds.'
  },
  {
    name: 'Madstone',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
    legendaryPower: 'Your Seven-Sided Strike applies Exploding Palm.'
  },
  {
    name: 'See No Evil',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
  },
  {
    name: 'Eye of the Storm',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
  },
  {
    name: 'The Laws of Seph',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
    legendaryPower: 'Using Blinding Flash restores [125 - 165] Spirit.'
  },
  {
    name: 'The Mind\'s Eye',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
    legendaryPower: 'Inner Sanctuary increases Spirit Regeneration per second by [10 - 15].'
  },
  {
    name: 'Tzo Krin\'s Gaze',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
    legendaryPower: 'Wave of Light is now cast at your enemy.'
  },
  {
    name: 'Inna\'s Radiance',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
  },
  {
    name: 'Sovereign Ascended Stone',
    class: 'monk',
    quality: 'rare',
    equipment: {
      slot: 'head',
      type: 'spirit stone'
    },
  },
]