import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import ItemSearch from './ItemSearch'
import { createRef } from 'react'
import { ItemRef } from '@/src/interfaces/ItemRef'

interface SearchResultsProps {
  submitGuess: (item:Item) => void,
  results: Item[],
}

export default function SearchResults({ submitGuess, results }: SearchResultsProps) {
  const { search } = useItems()

  const resultsRef:ItemRef[] = results.map((item) => {
    return {
      ...item,
      ref: createRef()
    }
  })

  return (
    <div className='absolute z-10 w-full h-fit mt-2'>
      <TransitionGroup className='w-fit flex flex-col gap-2'>
        {1 < search.length && resultsRef.map((item) => (
          <CSSTransition
            timeout={250}
            classNames='search'
            key={item.name}
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