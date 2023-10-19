import { Item } from './item';

export interface Context {
  items: Item[],
  guesses: Item[],
  addGuess: func,
  answer: Item | null,
  known: Item
}