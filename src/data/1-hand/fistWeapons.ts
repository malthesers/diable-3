import { Item } from '@/src/interfaces/Item'

interface FistWeapon extends Item {
  class: 'monk',
  equipment: {
    slot: '1-hand',
    type: 'fist weapon'
  }
}

export const fistWeapons:FistWeapon[] = [
  {
    name: 'Crystal Fist',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Dashing Strike reduces your damage taken by [40 - 50%] for 6 seconds.'
  },
  {
    name: 'Demon Claw',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Fleshrake',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Dashing Strike increases the damage of Dashing Strike by [75 - 100%] for 1 second, stacking up to 5 times.'
  },
  {
    name: 'Jawbreaker',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'When Dashing Strike hits an enemy more than [30 - 35] yards away, its Charge cost is refunded.'
  },
  {
    name: 'Kyoshiro\'s Blade',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Increase the damage of Wave of Light by 150%. When the initial impact of your Wave of Light hits 3 or fewer enemies, the damage is increased by [200 - 250%].'
  },
  {
    name: 'Lion\'s Claw',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Seven-Sided Strike performs an additional 7 strikes.'
  },
  {
    name: 'Logan\'s Claw',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    elementalDamage: 'poison'
  },
  {
    name: 'Rabid Strike',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Spirit spenders that teleport you while Epiphany is active are also mimicked on a nearby target with [350 - 450%] increased damage for free.'
  },
  {
    name: 'Scarbringer',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'The damage of Lashing Tail Kick is increased by [450 - 600%] to the first 7 enemies hit.'
  },
  {
    name: 'Sledge Fist',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
  },
  {
    name: 'The Fist of Az\'Turrasq',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Exploding Palm\'s on-death explosion damage is increased by [400 - 500%].'
  },
  {
    name: 'Vengeful Wind',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Increases the maximum stack count of Sweeping Wind by 10 and increases the damage by [600 - 800%].'
  },
  {
    name: 'Won Khim Lau',
    class: 'monk',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Hitting with Tempest Rush will activate Cyclone Strike, and both skills deal [500 - 600%] increased damage.',
    elementalDamage: 'lightning'
  },
  {
    name: 'Hallowed Hold',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Shenlong\'s Fist of Legend',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    elementalDamage: 'lightning'
  },
  {
    name: 'Shenlong\'s Relentless Assault',
    class: 'monk',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    elementalDamage: 'lightning'
  },
  {
    name: 'Hand of Despair',
    class: 'monk',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
  },
  {
    name: 'Panther\'s Claw',
    class: 'monk',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
  },
  {
    name: 'Bartuc\'s Cut-Throat',
    class: 'monk',
    quality: 'ethereal',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Random legendary weapon effect.',
  },
  {
    name: 'Jade Talon',
    class: 'monk',
    quality: 'ethereal',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Random legendary weapon effect.',
  },
  {
    name: 'Shadow Killer',
    class: 'monk',
    quality: 'ethereal',
    equipment: {
      slot: '1-hand',
      type: 'fist weapon'
    },
    legendaryPower: 'Random legendary weapon effect.',
  },
]