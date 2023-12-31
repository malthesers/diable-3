import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import { createRef } from 'react'
import ItemSearch from './ItemSearch'
import Fuse from 'fuse.js'

interface SearchResultsProps {
  submitGuess: (item:Item) => void,
  focusInput: () => void,
}

export default function SearchResults({ submitGuess, focusInput }: SearchResultsProps) {
  const { items, guesses, chosen, search } = useItems()

  const remaining:Item[] = items.filter(item =>  {
    return !guesses.some(guess => guess.id === item.id) && chosen[item.quality as keyof typeof chosen]
  })

  const fuse = new Fuse(remaining, {
    keys: ['name'],
    threshold: 0.3
  })

  const results:Item[] = fuse.search(search, {
    limit: 10,
  }).map((result) => {
    return {
      ...result.item,
      ref: createRef()
    }
  })

  return (
    <div className='absolute z-10 w-full h-fit mt-2'>
      <TransitionGroup className='w-fit flex flex-col gap-2'>
        {1 < search.length && results.map((item) => (
          <CSSTransition
            timeout={250}
            classNames='search'
            key={item.id}
            nodeRef={item.ref}
          >
            <div ref={item.ref}>
              <ItemSearch submitGuess={submitGuess} focusInput={focusInput} item={item}/>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}