import { Item } from "@/src/interfaces/Item";
import { handCrossbows } from "./handCrossbows";
import { swords } from "./swords";
import { wands } from './wands'

export const oneHandItems:Item[] = [
  ...handCrossbows,
  ...swords,
  ...wands
]