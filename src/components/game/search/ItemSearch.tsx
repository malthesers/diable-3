import { useItems } from '@/src/app/items-provider'
import { Item } from '@/src/interfaces/item'
import { useRef } from 'react'
import ItemNameplate from '../ItemNameplate'
import SearchBar from './SearchBar'

export default function ItemSearch() {
  const { items, guesses, validateGuess, search, setSearch } = useItems()
  const ref = useRef<HTMLInputElement | null>(null)
  const remaining:Item[] = items.filter(item => !guesses.includes(item))
  const results:Item[] = remaining.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 10)

  function submitGuess(item:Item) {
    if (ref.current) ref.current.focus()
    validateGuess(item)
    setSearch('')
  }

  return (
    <div className='relative'>
      <SearchBar ref={ref}/>
      <div className='absolute z-10 w-full h-fit'>
        <div className='w-fit bg-black bg-opacity-70 flex flex-col gap-2'>
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
    </div>
  )
}