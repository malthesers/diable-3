'use client'

import { useItems } from '@/src/app/items-provider'
import { Item } from '@/src/interfaces/item'
import { useState, useRef } from 'react'
import ItemNameplate from './ItemNameplate'

export default function ItemSearch() {
  const { items, guesses, validateGuess } = useItems()
  const [search, setSearch] = useState<string>('')
  const input = useRef<HTMLInputElement | null>(null)
  const remaining:Item[] = items.filter(item => !guesses.includes(item))
  const results:Item[] = remaining.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 10)

  function submitGuess(item:Item) {
    if (input.current) input.current.focus()
    validateGuess(item)
    setSearch('')
  }

  return (
    <div className='relative w-[315px] sm:w-[350px] md:w-[420px] mx-auto'>
      <div className='p-2'>
        <label htmlFor='item-search' className='mx-auto bg-undefined-name bg-no-repeat bg-cover bg-center aspect-[350/40] grid'>
          <input
            ref={input}
            value={search}
            onChange={e => setSearch(e.target.value)}
            id='item-search'
            placeholder='Enter item name...'
            autoComplete='off'
            className='bg-transparent text-center uppercase focus:outline-none'
            ></input>
        </label>
      </div>
      <div className='absolute w-full h-fit mx-auto flex flex-col gap-1 px-2'>
        { 0 < search.length && results.map((item) =>
          <article
            key={item.name} tabIndex={0}
            onClick={() => submitGuess(item)}
            onKeyDown={(e) => {if (e.key === 'Enter') submitGuess(item)}}
            className='group focus-within:outline-none'
          >
            <ItemNameplate item={item} hover={true}/>
          </article>
        )}
      </div>
    </div>
  )
}