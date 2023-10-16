import { Item } from "@/src/interfaces/item"
import ItemRow from "./ItemRow"

export default function PastGuesses({ items }: { items:Array<Item>}) {
  return (
    <div>
      <p>Guesses</p>
      { items.map((item) =>
        <ItemRow key={item.name} item={item}/>
      )}
    </div>
  )
}