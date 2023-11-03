import { Item } from '@/src/interfaces/Item';
import { spiritStones } from './spiritStones';
import { voodooMasks } from './voodooMasks';
import { wizardHats } from './wizardHats';
import { helms } from './helms';

export const offHandItems:Item[] = [
  ...spiritStones,
  ...voodooMasks,
  ...wizardHats,
  ...helms,
]