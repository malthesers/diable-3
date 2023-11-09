import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import { useRef } from 'react'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'

export default function SearchContainer() {
  const { validateGuess, setSearch } = useItems()
  const ref = useRef<HTMLInputElement | null>(null)

  function submitGuess(item:Item) {
    if (ref.current) ref.current.focus()
    console.log(item)
    validateGuess(item)
    setSearch('')
  }

  return (
    <div className='relative mb-2'>
      <SearchBar ref={ref}/>
      <SearchResults submitGuess={submitGuess}/>
    </div>
  )
}