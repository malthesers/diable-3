'use client'

import { Item } from "@/src/interfaces/item"
import { useState } from "react"

export default function ItemSearch({ items }: { items:Array<Item>}) {
  const [search, setSearch] = useState<string>('')
  const results:Item[] = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <label htmlFor='item-search' className="w-[330px] sm:w-[400px] bg-undefined-name bg-no-repeat bg-cover aspect-[350/40] grid p-1">
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" name="item-search" placeholder="Enter item name..." className="bg-transparent text-center uppercase focus:outline-none"></input>
      </label>
      <div className="flex flex-wrap">
        { 1 < search.length && results.map((item) =>
          <p key={item.name}>{item.name}</p>
        )}
      </div>
    </div>
  )
}