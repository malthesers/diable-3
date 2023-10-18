import { Item } from "@/src/interfaces/item"

export default function ItemSearch({ items }: { items:Array<Item>}) {
  return (
    <div>
      <label htmlFor='item-search' className="w-[330px] sm:w-[400px] bg-undefined-name bg-no-repeat bg-cover aspect-[350/40] grid p-1">
        <input name="item-search" placeholder="Enter item name..." className="bg-transparent text-center uppercase focus:outline-none"></input>
      </label>
      <div className="flex flex-wrap">
        { items.map((item) =>
          <p key={item.name}>{item.name}</p>
        )}
      </div>
    </div>
  )
}