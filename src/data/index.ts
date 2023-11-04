import { Item } from '@/src/interfaces/Item';
import { shouldersItems } from './shoulders';
import { offHandItems } from './off-hand';
import { oneHandItems } from './1-hand';
import { twoHandItems } from './2-hand';
import { wristsItems } from './wrists';
import { waistItems } from './waist';
import { handsItems } from './hands';
import { torsoItems } from './torso';
import { headItems } from './head';
import { legsItems } from './legs';
import { feetItems } from './feet';

export const allItems:Item[] = [
  ...shouldersItems,
  ...offHandItems,
  ...oneHandItems,
  ...twoHandItems,
  ...wristsItems,
  ...waistItems,
  ...handsItems,
  ...torsoItems,
  ...headItems,
  ...legsItems,
  ...feetItems
]