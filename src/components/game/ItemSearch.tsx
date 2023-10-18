'use client'

import { Item } from "@/src/interfaces/item"
import { useRef } from "react"

export default function ItemSearch({ items }: { items:Array<Item>}) {
  const input = useRef(null)
  const results:Item[] = items.filter(item => item.name.includes('a'))

  return (
    <div>
      <label htmlFor='item-search' className="w-[330px] sm:w-[400px] bg-undefined-name bg-no-repeat bg-cover aspect-[350/40] grid p-1">
        <input ref={input} type="text" name="item-search" placeholder="Enter item name..." className="bg-transparent text-center uppercase focus:outline-none"></input>
      </label>
      <div className="flex flex-wrap">
        { results && results.map((item) =>
          <p key={item.name}>{item.name}</p>
        )}
      </div>
    </div>
  )
}