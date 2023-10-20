import { Item } from './item';

export interface Context {
  items: Item[],
  guesses: Item[],
  resetGame: func,
  validateGuess: func,
  answer: Item | null,
  known: Item
}