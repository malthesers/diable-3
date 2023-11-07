import { Item } from '@/src/interfaces/Item'

interface Daibo extends Item {
  class: 'monk',
  equipment: {
    slot: '2-hand',
    type: 'daibo'
  }
}

export const daibos:Daibo[] = [
  {
    name: 'Flying Dragon',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    legendaryPower: 'Chance to double your attack speed when attacking.',
  },
  {
    name: 'Balance',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    legendaryPower: 'The damage of Tempest Rush is increased by [450 - 600%] and when your Tempest Rush hits 3 or fewer enemies, it gains 100% Critical Hit Chance.',
    elementalDamage: 'holy'
  },
  {
    name: 'Incense Torch of the Grand Temple',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    legendaryPower: 'Reduces the Spirit cost of Wave of Light by 50% and increases its damage by [450 - 550%].',
  },
  {
    name: 'Lai Yui\'s Persuader',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    elementalDamage: 'cold'
  },
  {
    name: 'Rozpedin\'s Force',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Staff of Kyro',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
  },
  {
    name: 'The Flow of Eternity',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    legendaryPower: 'Increase the damage of Seven-Sided Strike by 100% and reduce the cooldown of Seven-Sided Strike by [45 - 60%].'
  },
  {
    name: 'The Paddle',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    legendaryPower: 'Slap!'
  },
  {
    name: 'Warstaff of General Quang',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
    legendaryPower: 'Tempest Rush gains the effect of the Tailwind rune.'
  },
  {
    name: 'Inna\'s Reach',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
  },
  {
    name: 'Sovereign Whirlwind Staff',
    class: 'monk',
    quality: 'rare',
    equipment: {
      slot: '2-hand',
      type: 'daibo'
    },
  },
]