import { Item } from "@/src/interfaces/Item";
import { handCrossbows } from "./handCrossbows";
import { swords } from "./swords";

export const oneHandItems:Item[] = [
  ...handCrossbows,
  ...swords
]