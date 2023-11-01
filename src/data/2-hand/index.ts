import { Item } from '@/src/interfaces/Item';
import { crossbows } from './crossbows';
import { polearms } from './polearms';
import { daibos } from './daibos';
import { flails } from './flails';
import { swords } from './swords';
import { staves } from './staves';
import { maces } from './maces';
import { bows } from './bows';
import { axes } from './axes';

export const twoHandItems:Item[] = [
  ...crossbows,
  ...polearms,
  ...daibos,
  ...flails,
  ...swords,
  ...staves,
  ...maces,
  ...axes,
  ...bows,
]