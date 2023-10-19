import { Item } from './item';

export interface Context {
  items: Item[],
  guesses: Item[],
  answer: Item | null,
  known: Item
}