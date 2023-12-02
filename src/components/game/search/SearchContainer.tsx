import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import { useEffect, useRef } from 'react'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'

export default function SearchContainer() {
  const { answer, validateGuess, setSearch } = useItems()
  const ref = useRef<HTMLInputElement | null>(null)

  function focusInput() {
    if (ref.current && screen.width > 669) ref.current.focus()
  }

  function submitGuess(item:Item) {
    delete item.ref
    validateGuess(item)
    setSearch('')
    focusInput()
  }

  useEffect(() => {
    focusInput()
  }, [answer])

  return (
    <div className='relative mb-2'>
      <SearchBar ref={ref} />
      <SearchResults submitGuess={submitGuess} focusInput={focusInput}/>
    </div>
  )
}