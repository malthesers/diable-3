import { Item } from "@/src/interfaces/item"
import ItemBox from "./ItemBox"

export default function PastGuesses({ items }: { items:Array<Item>}) {
  return (
    <div>
      <p>Guesses</p>
      <div className="grid gap-2">
        { items.map((item) =>
          <ItemBox key={item.name} item={item}/>
        )}
      </div>
    </div>
  )
}