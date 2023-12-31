import { ChosenQualities } from '@/src/interfaces/ChosenQualities';
import { Item } from '@/src/interfaces/Item';

interface ItemRecord extends Item {
  chosen: ChosenQualities,
  timestamp: number,
  guesses: number,
}