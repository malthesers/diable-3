# <img src="/src/app/icon2.png" alt="diable 3 logo" align="center"> Diable III
Hellish Wordle-ish based on Diablo III | Guess the item by its properties!

## 📋 Instructions
Search for an item and enter your guess, then view your guess to find correct and incorrect properties.

Repeat the process, narrowing down the possibilities until you find the right item!

Revealed properties appear in the item tooltip. After 10 guesses, a blurred legendary power will also appear, which you may hover over to reveal it.

The background of guessed properties will be either green or red to indicate its correctness as displayed below.

| Correct | Incorrect |
| - | - |
| <img src="/public/docs/correct.png" alt="correct example" align="center"> | <img src="/public/docs/incorrect.png" alt="incorrect example" align="center"> |

## 📜 Properties

### ⭐ Qualities 

| 🎨 | Name | Description |
| - | - | - |
| ⬜ | Common | Includes only the items intended for transmogrification, e.g. *Star Helm* and *Quinquennial Sword* |
| 🟪 | Magic | Includes only special items like *Rakanishu's Blade* and Darkening of Tristram drops like *The Butcher's Cleaver* |
| 🟨 | Rare | Includes only the Level 70 craftable items, i.e. *Sovereign* items |
| 🟧 | Legendary | Includes all, but only the level 70 version of craftables, e.g. *Unbound Bolt* exists but not *Longshot* |
| 🟩 | Set | Includes all, but only the level 70 version of craftables, e.g. *Sage's Passage* exists but not *Sage's Journey* |
| 🟦 | Ethereal | Includes all, but item types are treated as their closest D3 equivalents, e.g. *bone knife* is considered a *dagger* |

### 🗡️ Equipment

Equipment makes up the two inner properties for items, *Slot* and *Type*, where the latter is a subset of the former.

Below is a table detailing each item slot as well as its possible item types.

| Slot | Type |
| - | - |
| Head | Helm, Spirit Stone, Voodoo Mask, Wizard Hat |
| Shoulders | Shoulders |
| Torso | Chest Armor, Cloak |
| Wrists | Bracers |
| Hands | Gloves |
| Waist | Belt, Mighty Belt |
| Legs | Pants |
| Feet | Boots |
| Neck | Amulet |
| Finger | Ring |
| Off-Hand | Shield, Crusader Shield, Mojo, Source, Quiver, Phylactery |
| One-Handed | Axe, Dagger, Mace, Spear, Sword, Ceremonial Knife, Fist Weapon, Flail, Mighty Weapon, Scythe |
| Two-Handed | Axe, Mace, Polearm, Staff, Sword, Daibo, Flail, Mighty Weapon, Scythe |

As mentioned in the Qualities subsection, the ethereal item types have been changed, as they do not exist in Diablo 3. Below is another table elaborating the converted item types, excluding *Khalim's Will* and *Soul Harvest* as they already match Diablo 3 item types.

| Type | Ethereal |
| - | - |
| Sword | Doombringer, The Grandfather, Blackhand Key |
| Axe | Gimmershred |
| Mace | Astreon's Iron Ward, The Redeemer |
| Crossbow | Buriza-Do Kyanon |
| Hand Crossbow | Doomslinger |
| Bow | Windforce |
| Fist Weapon | Bartuc's Cut-Throat, Jade Talon, Shadow Killer |
| Dagger | Blackbog's Sharp, Ghostflame, Wizardspike |
| Spear | Arioc's Needle |
| Ceremonial Knife | The Gidbinn |
| Staff | Mang Song's Lesson |
| Wand | The Oculus |

### 📚 Classes

All 7 classes are included, those being the base 5, *Barbarian*, *Demon Hunter*, *Monk*, *Witch Doctor* and *Wizard*, as well as the *Crusader* from *Reaper of Souls* and the *Necromancer* from the DLC *Rise of the Necromancer*.

Additionally *Generic* is included for items that are not class-specific, even if the item is intended for a specific class, e.g. *Wraps of Clarity* is treated as *Generic* despite its legendary power only working for *Demon Hunters*.

Meanwhile hand crossbows will be designated *Demon Hunter* as only that class can equip them. Class sets will be designated their class, even if the item slot may be *Generic*, due to class sets being inherently class-specific, e.g. *Shadow's Bane* is a *Chest Armor* but can only be equipped by *Demon Hunters*.

## 🙌 Support

...is for me? 😳👉👈

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S3NYYC4)
