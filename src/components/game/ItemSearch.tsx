'use client'

import { useItems } from '@/src/app/items-provider'
import { Item } from '@/src/interfaces/item'
import { useState } from 'react'
import ItemNameplate from './ItemNameplate'

export default function ItemSearch() {
  const { items } = useItems()

  const [search, setSearch] = useState<string>('')
  const results:Item[] = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 10)

  return (
    <div>
      <label htmlFor='item-search' className='w-[315px] sm:w-[350px] md:w-[385px] bg-undefined-name bg-no-repeat bg-cover aspect-[350/40] grid p-1 mb-2'>
        <input value={search} onChange={e => setSearch(e.target.value)} type='text' name='item-search' placeholder='Enter item name...' className='bg-transparent text-center uppercase focus:outline-none'></input>
      </label>
      <div className='absolute w-[315px] sm:w-[350px] md:w-[385px] h-fit mx-auto flex flex-col gap-1'>
        { 0 < search.length && results.map((item) =>
          <article key={item.name} className='cursor-pointer shadow-item-inner'>
            <ItemNameplate item={item} hover={true}/>
          </article>
        )}
      </div>
    </div>
  )
}