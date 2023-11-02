import { Item } from '@/src/interfaces/Item';
import { crusaderShields } from './crusaderShields';
import { phylacteries } from './phylacteries';
import { sources } from './sources';
import { quivers } from './quivers';
import { shields } from './shields';
import { mojos } from './mojos';

export const offHandItems:Item[] = [
  ...crusaderShields,
  ...phylacteries,
  ...sources,
  ...quivers,
  ...shields,
  ...mojos,
]