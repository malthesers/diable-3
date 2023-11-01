import { Item } from '@/src/interfaces/Item';
import { crossbows } from './crossbows';
import { bows } from './bows';
import { axes } from './axes';

export const twoHandItems:Item[] = [
  ...crossbows,
  ...axes,
  ...bows,
]