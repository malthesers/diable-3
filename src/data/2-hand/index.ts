import { Item } from '@/src/interfaces/Item';
import { crossbows } from './crossbows';
import { polearms } from './polearms';
import { daibos } from './daibos';
import { swords } from './swords';
import { staves } from './staves';
import { maces } from './maces';
import { bows } from './bows';
import { axes } from './axes';

export const twoHandItems:Item[] = [
  ...crossbows,
  ...polearms,
  ...daibos,
  ...swords,
  ...staves,
  ...maces,
  ...axes,
  ...bows,
]