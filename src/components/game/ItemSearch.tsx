'use client'

import { useItems } from "@/src/app/items-provider"
import { Item } from "@/src/interfaces/item"
import { useState } from "react"

export default function ItemSearch() {
  const { items } = useItems()

  const [search, setSearch] = useState<string>('')
  const results:Item[] = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 10)

  return (
    <div className="">
      <label htmlFor='item-search' className="w-[330px] sm:w-[400px] bg-undefined-name bg-no-repeat bg-cover aspect-[350/40] grid p-1 mb-2">
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" name="item-search" placeholder="Enter item name..." className="bg-transparent text-center uppercase focus:outline-none"></input>
      </label>
      <div className="absolute w-[330px] sm:w-[400px] h-fit mx-auto flex flex-wrap gap-1">
        { 0 < search.length && results.map((item) =>
          <div key={item.name} className={`bg-${item.quality}-name` + ' w-full aspect-[350/40] bg-no-repeat bg-cover grid p-1 cursor-pointer'}>
            <p className="text-red-800 pt-1 text-lg sm:text-xl leading-none tracking-wider uppercase place-self-center">{item.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}