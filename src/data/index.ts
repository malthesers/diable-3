import { Item } from '@/src/interfaces/Item';
import { shouldersItems } from './shoulders';
import { offHandItems } from './off-hand';
import { oneHandItems } from './1-hand';
import { twoHandItems } from './2-hand';
import { wristsItems } from './wrists';
import { torsoItems } from './torso';
import { headItems } from './head';

export const allItems:Item[] = [
  ...shouldersItems,
  ...offHandItems,
  ...oneHandItems,
  ...twoHandItems,
  ...wristsItems,
  ...torsoItems,
  ...headItems
]