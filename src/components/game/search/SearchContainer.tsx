import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import { useRef } from 'react'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'

export default function SearchContainer() {
  const { items, guesses, validateGuess, search, setSearch } = useItems()
  const ref = useRef<HTMLInputElement | null>(null)
  const remaining:Item[] = items.filter(item =>  !guesses.some(guess => guess.name === item.name))
  const results:Item[] = remaining.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 10)

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