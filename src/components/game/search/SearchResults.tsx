import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { ItemRef } from '@/src/interfaces/ItemRef'
import { Item } from '@/src/interfaces/Item'
import { createRef } from 'react'
import ItemSearch from './ItemSearch'
import Fuse from 'fuse.js'

interface SearchResultsProps {
  submitGuess: (item:Item) => void,
}

export default function SearchResults({ submitGuess }: SearchResultsProps) {
  const { items, guesses, chosen, search } = useItems()

  const remaining:Item[] = items.filter(item =>  {
    return !guesses.some(guess => guess.id === item.id) && chosen[item.quality as keyof typeof chosen]
  })

  const fuse = new Fuse(remaining, {
    keys: ['name'],
    threshold: 0.3
  })

  const results:ItemRef[] = fuse.search(search, {
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
              <ItemSearch submitGuess={submitGuess} item={item}/>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}