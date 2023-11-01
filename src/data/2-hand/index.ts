import { Item } from '@/src/interfaces/Item';
import { mightyWeapons } from './mightyWeapons';
import { crossbows } from './crossbows';
import { polearms } from './polearms';
import { scythes } from './scythes';
import { daibos } from './daibos';
import { flails } from './flails';
import { swords } from './swords';
import { staves } from './staves';
import { maces } from './maces';
import { bows } from './bows';
import { axes } from './axes';

export const twoHandItems:Item[] = [
  ...mightyWeapons,
  ...crossbows,
  ...polearms,
  ...scythes,
  ...daibos,
  ...flails,
  ...swords,
  ...staves,
  ...maces,
  ...axes,
  ...bows,
]