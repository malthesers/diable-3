import { Item } from './item';

export interface Context {
  items: Item[],
  guesses: Item[],
  validateGuess: func,
  answer: Item | null,
  known: Item
}