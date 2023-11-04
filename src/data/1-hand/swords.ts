import { Item } from '@/src/interfaces/Item'

interface Sword extends Item {
  equipment: {
    slot: '1-hand',
    type: 'sword'
  }
}

export const swords:Sword[] = [
  {
    name: 'Azurewrath',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Undead and Demon enemies within 25 yards take [500 - 650%] weapon damage as Holy every second and are sometimes knocked into the air.',
    elementalDamage: 'cold'
  },
  {
    name: 'Deathwish',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'While channeling Arcane Torrent, Disintegrate, or Ray of Frost for at least 1 second, all damage is increased by [250 - 325%]',
  },
  {
    name: 'Devil Tongue',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Doombringer',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Exarian',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Fulminator',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Lightning damage has a chance to turn enemies into lightning rods, causing them to pulse [444 - 555%] weapon damage as Lightning every second to nearby enemies for 6 seconds.',
    elementalDamage: 'lightning'
  },
  {
    name: 'Gift of Silaria',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Griswold\'s Perfection',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'In-geom',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Your skill cooldowns are reduced by [8 - 10] seconds for 15 seconds after killing an elite pack.',
    elementalDamage: 'holy'
  },
  {
    name: 'Monster Hunter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'Rimeheart',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: '20% chance on hit to instantly deal [10,000%] weapon damage as Cold to enemies that are Frozen.',
    elementalDamage: 'cold'
  },
  {
    name: 'Sever',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Slain enemies rest in pieces.',
  },
  {
    name: 'Shard of Hate',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Elemental skills have a chance to trigger a powerful attack that deals [200 - 250%] weapon damage: Cold skills trigger Freezing Skull. Poison skills trigger Poison Nova. Lightning skills trigger Charged Bolt',
    elementalDamage: 'cold'
  },
  {
    name: 'Skycutter',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Chance to summon angelic assistance when attacking.',
    elementalDamage: 'holy'
  },
  {
    name: 'Spectrum',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Sword of Ill Will',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Chakram deals [1.0 - 1.4%] increased damage for every point of Hatred you have.'
  },
  {
    name: 'Sword of Mediocrity',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Your primary attributes are reduced to zero.'
  },
  {
    name: 'The Ancient Bonesaber of Zumakalis',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    elementalDamage: 'arcane'
  },
  {
    name: 'The Twisted Sword',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Energy Twister damage is increased by [125 - 150%] for each Energy Twister you have out up to a maximum of 5. The Raging Storm rune is automatically applied to Energy Twister and allows the tornado to merge with 3 additional Energy Twisters.'
  },
  {
    name: 'Thunderfury, Blessed Blade of the Windseeker',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'Chance on hit to blast your enemy with Lightning, dealing [279 - 372%] weapon damage as Lightning and then jumping to additional nearby enemies. Each enemy hit has their attack speed and movement speed reduced by 30% for 3 seconds. Jumps up to 5 targets.',
    elementalDamage: 'lightning'
  },
  {
    name: 'Wildwood',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    elementalDamage: 'poison'
  },
  {
    name: 'Born\'s Furious Wrath',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    elementalDamage: 'holy'
  },
  {
    name: 'Little Rogue',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'The Slanderer',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Griswold\'s Edge',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Griswold\'s Worn Edge',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    elementalDamage: 'fire'
  },
  {
    name: 'King\'s Sword of Haste',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Rakanishu\'s Blade',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
    legendaryPower: 'When you kill a Fallen, you have a [9 - 12%] chance to charm all other nearby Fallen.'
  },
  {
    name: 'Amberwing',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Ghoul King\'s Blade',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'God-Butcher',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Quinquennial Sword',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
  {
    name: 'Second Quinquennial Sword',
    class: 'generic',
    quality: 'common',
    equipment: {
      slot: '1-hand',
      type: 'sword'
    },
  },
]