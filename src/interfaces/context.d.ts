import { Item } from './item';

export interface Context {
  items: Item[],
  guesses: Item[],
  resetGame: () => void,
  setSearch: (value:string) => void,
  validateGuess: (item:Item) => void,
  answer: Item | null,
  search: string,
  known: Item,
}