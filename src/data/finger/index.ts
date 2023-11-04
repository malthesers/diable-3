import { Classes, Item } from '@/src/interfaces/Item';

interface Ring extends Item {
  class: Classes,
  equipment: {
    slot: 'finger',
    type: 'ring'
  }
}

export const fingerItems:Ring[] = [
  {
    name: 'Arcstone',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Lightning pulses periodically between all wearers of this item, dealing [1000 - 1500%] weapon damage.'
  },
  {
    name: 'Avarice Band',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Each time you pick up gold, increase your Gold and Health Pickup radius by 1 yard for 10 seconds, stacking up to 30 times. (Emanates)'
  },
  {
    name: 'Band of Hollow Whispers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'This ring occasionally haunts nearby enemies.'
  },
  {
    name: 'Band of Might',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'After casting Furious Charge, Ground Stomp, or Leap, take [60 - 80%] reduced damage for 8 seconds.'
  },
  {
    name: 'Band of the Rue Chambers',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Your Spirit Generators generate [40 - 50%] more Spirit.'
  },
  {
    name: 'Briggs\' Wrath',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Uncursed enemies are pulled to the target location when a curse is applied to them.'
  },
  {
    name: 'Broken Promises',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'After 5 consecutive non-critical hits, your chance to critically hit is increased to 100% for [3] seconds.'
  },
  {
    name: 'Bul-Kathos\'s Wedding Band',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'You drain life from enemies around you.'
  },
  {
    name: 'Circle of Nailuj\'s Evol',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'You now raise an additional Skeletal Mage with each cast and they last an additional [2 - 4] seconds.'
  },
  {
    name: 'Convention of Elements',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Gain [150 - 200%] increased damage to a single element for 4 seconds. This non-static effect rotates through the elements available to your class in the following order: Arcane, Cold, Fire, Holy, Lightning, Physical, Poison.'
  },
  {
    name: 'Elusive Ring',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'After casting Shadow Power, Smoke Screen, or Vault, take [50 - 60%] reduced damage for 8 seconds.'
  },
  {
    name: 'Eternal Union',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Increases the duration of summoned Phalanx Bowmen and Bodyguard indefinitely.'
  },
  {
    name: 'Halo of Arlyse',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Your Ice Armor now reduces damage from melee attacks by [50 - 60%] and automatically casts Frost Nova whenever you take 10% of your Life in damage.'
  },
  {
    name: 'Halo of Karini',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'You take [60 - 80%] less damage for 5 seconds after your Storm Armor electrocutes an enemy more than 15 yards away.'
  },
  {
    name: 'Hellfire Ring',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Chance on hit to engulf the ground in lava, dealing 200% weapon damage per second for 6 seconds.'
  },
  {
    name: 'Justice Lantern',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Gain damage reduction equal to [45 - 55%] of your Block Chance.'
  },
  {
    name: 'Krede\'s Flame',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Taking Fire damage restores your primary resource. (Emanates)'
  },
  {
    name: 'Krysbin\'s Sentence',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'You deal [75 - 100%] increased damage against slowed enemies or triple this bonus against enemies afflicted by any other type of control-impairing effect.'
  },
  {
    name: 'Leoric\'s Signet',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'Lornelle\'s Sunstone',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Your damage reduction is increased by [0.75 - 0.95%] for every 1% Life you are missing.'
  },
  {
    name: 'Manald Heal',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Enemies stunned with Paralysis also take [13,000 - 14,000%] weapon damage as Lightning.'
  },
  {
    name: 'Nagelring',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Summons a Fallen Lunatic to your side every [10 - 12] seconds.'
  },
  {
    name: 'Obsidian Ring of the Zodiac',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Reduce the remaining cooldown of one of your skills by [1] second when you hit with a resource-spending attack.'
  },
  {
    name: 'Oculus Ring',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Chance to create an area of focused power on killing a monster. Damage is increased by [70 - 85%] while standing in the area.'
  },
  {
    name: 'Pandemonium Loop',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Enemies slain while Feared die in a bloody explosion and cause other nearby enemies to flee in Fear.'
  },
  {
    name: 'Puzzle Ring',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Summon a treasure goblin who picks up normal-quality items for you. After picking up [12 - 16] items, he drops a rare item with a chance for a legendary.'
  },
  {
    name: 'Rechel\'s Ring of Larceny',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Gain [45 - 60%] increased movement speed for 4 seconds after Fearing an enemy.'
  },
  {
    name: 'Ring of Emptiness',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'You and your non-Fetish pets deal [250 - 300%] increased damage to enemies affected by either your Haunt or Locust Swarm.'
  },
  {
    name: 'Ring of Royal Grandeur',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Reduces the number of items needed for set bonuses by 1 (to a minimum of 2).'
  },
  {
    name: 'Rogar\'s Huge Stone',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Increase your Life per Second by up to [75 - 100%] based on your missing Life.'
  },
  {
    name: 'Skull Grasp',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Increase the damage of Whirlwind by [300 - 400%].'
  },
  {
    name: 'Stone of Jordan',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Each of your elemental\'s damage bonus is equal to your highest static elemental bonus to skill.'
  },
  {
    name: 'The Short Man\'s Finger',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Gargantuan instead summons three smaller gargantuans that have their damage increased by [500 - 650%].'
  },
  {
    name: 'The Tall Man\'s Finger',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Zombie Dogs instead summons a single gargantuan dog with more damage and health than all other dogs combined.'
  },
  {
    name: 'Unity',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'All damage taken is split between wearers of this item.'
  },
  {
    name: 'Wyrdward',
    class: 'generic',
    quality: 'legendary',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
    legendaryPower: 'Lightning damage has a [25 - 35%] chance to Stun for 1.5 seconds.'
  },
  {
    name: 'Ring of Truth',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'Empyrean Band',
    class: 'generic',
    quality: 'magic',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'Focus',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'Restraint',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'Litany of the Undaunted',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'The Wailing Host',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'The Compass Rose',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'Natalya\'s Reflection',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
  {
    name: 'Zunimassa\'s Pox',
    class: 'generic',
    quality: 'set',
    equipment: {
      slot: 'finger',
      type: 'ring'
    },
  },
]