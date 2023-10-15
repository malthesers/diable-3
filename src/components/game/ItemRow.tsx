import { Item } from "@/src/interfaces/item"

export default function ItemRow({ item }: { item: Item}) {
  return (
    <div className="flex flex-row gap-4">
      <p>{item.name}</p>
    </div>
  )
}