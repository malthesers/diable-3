import { Item } from "@/src/interfaces/item"
import ItemBox from "./ItemBox"

export default function PastGuesses({ items }: { items:Array<Item>}) {
  return (
    <div>
      <p className="text-2xl text-center mb-4">Guesses</p>
      <div className="flex flex-wrap gap-2">
        { items.map((item) =>
          <ItemBox key={item.name} item={item}/>
        )}
      </div>
    </div>
  )
}