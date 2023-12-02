import { useModals } from '@/src/context/ModalsProvider'
import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import { useEffect, useRef } from 'react'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'

export default function SearchContainer() {
  const { answer, guessed, validateGuess, setSearch } = useItems()
  const { isOpen } = useModals()
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

  // Focus if modal is closed
  useEffect(() => {
    if (!isOpen) focusInput()
  }, [isOpen])

  // Focus if answer is changed, i.e. new game started
  useEffect(() => {
    focusInput()
  }, [answer])

  // Clear input field when surrendering, preventing guessing after reveal
  useEffect(() => {
    if (guessed) setSearch('')
  }, [guessed])

  return (
    <div className='relative mb-2'>
      <SearchBar ref={ref} />
      <SearchResults submitGuess={submitGuess} focusInput={focusInput}/>
    </div>
  )
}