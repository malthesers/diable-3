import { Item } from '@/src/interfaces/Item';
import { ceremonialKnives } from './ceremonialKnives';
import { mightyWeapons } from './mightyWeapons';
import { handCrossbows } from './handCrossbows';
import { fistWeapons } from './fistWeapons';
import { scythes } from './scythes';
import { swords } from './swords';
import { flails } from './flails';
import { maces } from './maces';
import { wands } from './wands'
import { axes } from './axes';

export const oneHandItems:Item[] = [
  ...ceremonialKnives,
  ...mightyWeapons,
  ...handCrossbows,
  ...fistWeapons,
  ...scythes,
  ...swords,
  ...flails,
  ...maces,
  ...wands,
  ...axes
]