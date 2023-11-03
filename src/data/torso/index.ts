import { Item } from '@/src/interfaces/Item';
import { chestArmors } from './chestArmors';
import { cloaks } from './cloaks';

export const torsoItems:Item[] = [
  ...chestArmors,
  ...cloaks
]