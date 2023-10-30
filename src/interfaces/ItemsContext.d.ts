import { ChosenQualities } from './ChosenQualities';
import { Item, Qualities } from './Item';

export interface ItemsContext {
  toggleChosen: (quality: keyof ChosenQualities) => void,
  validateGuess: (item:Item) => void,
  setSearch: (value:string) => void,
  surrenderGame: () => void,
  resetGame: () => void,
  chosen: ChosenQualities
  answer: Item | null,
  search: string,
  known: Item,
  guesses: Item[],
  items: Item[],
}