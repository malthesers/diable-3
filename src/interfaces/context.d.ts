import { Item } from './item';

export interface ItemsContext {
  items: Item[],
  guesses: Item[],
  resetGame: () => void,
  setSearch: (value:string) => void,
  validateGuess: (item:Item) => void,
  answer: Item | null,
  search: string,
  known: Item,
}

export interface ModalsContext {
  setShowVictory: (boolean) => void,
  showVictory: boolean,
}