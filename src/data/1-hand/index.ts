import { Item } from "@/src/interfaces/Item";
import { handCrossbows } from "./handCrossbows";
import { swords } from "./swords";
import { wands } from './wands'
import { mightyWeapons } from "./mightyWeapons";
import { flails } from "./flails";
import { scythes } from "./scythes";
import { ceremonialKnives } from "./ceremonialKnives";
import { fistWeapons } from "./fistWeapons";

export const oneHandItems:Item[] = [
  ...ceremonialKnives,
  ...mightyWeapons,
  ...handCrossbows,
  ...fistWeapons,
  ...flails,
  ...scythes,
  ...swords,
  ...wands
]