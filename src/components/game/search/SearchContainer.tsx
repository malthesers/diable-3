import { useItems } from '@/src/context/ItemsProvider'
import { ItemRef } from '@/src/interfaces/ItemRef'
import { Item } from '@/src/interfaces/Item'
import { useRef, createRef } from 'react'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'
import Fuse from 'fuse.js'

export default function SearchContainer() {
  const { items, chosen, guesses, validateGuess, search, setSearch } = useItems()
  const ref = useRef<HTMLInputElement | null>(null)

  const remaining:Item[] = items.filter(item =>  {
    return !guesses.some(guess => guess.name === item.name) && chosen[item.quality as keyof typeof chosen]
  })

  const fuse = new Fuse(remaining, {
    keys: ['name'],
    threshold: 0.3
  })

  const fuseResults = fuse.search(search, {
    limit: 10,
  })

  const results:ItemRef[] = fuseResults.map((result) => {
    return {
      ...result.item,
      ref: createRef()
    }
  })

  function submitGuess(item:Item) {
    if (ref.current) ref.current.focus()
    validateGuess(item)
    setSearch('')
  }

  return (
    <div className='relative mb-2'>
      <SearchBar ref={ref}/>
      <SearchResults submitGuess={submitGuess} results={results} />
    </div>
  )
}