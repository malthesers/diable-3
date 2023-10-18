import { Item } from "@/src/interfaces/item"

export default function ItemSearch({ items }: { items:Array<Item>}) {
  return (
    <div>
      <input></input>
      <div className="flex flex-wrap">
        { items.map((item) =>
          <p key={item.name}>{item.name}</p>
        )}
      </div>
    </div>
  )
}