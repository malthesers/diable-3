import { Item } from '@/src/interfaces/Item';
import { offHandItems } from './off-hand';
import { oneHandItems } from './1-hand';
import { twoHandItems } from './2-hand';

export const allItems:Item[] = [
  ...offHandItems,
  ...oneHandItems,
  ...twoHandItems
]