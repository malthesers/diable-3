import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import ItemSearch from './ItemSearch'
import { RefObject, createRef } from 'react'
import ItemNameplate from '../ItemNameplate'

interface SearchResultsProps {
  submitGuess: (item:Item) => void,
  results: Item[],
}

interface RefItem extends Item {
  node: RefObject<HTMLDivElement>
}

export default function SearchResults({ submitGuess, results }: SearchResultsProps) {
  const { search } = useItems()

  const nodeResults:RefItem[] = results.map(item => {
    return {
      ...item,
      node: createRef()
    }
  })

  return (
    <div className='absolute z-10 w-full h-fit mt-2'>
      { 1 < search.length && 
        <TransitionGroup className='w-fit flex flex-col gap-2'>
          {results.map((item) => (
            <CSSTransition
              timeout={250}
              classNames='fade'
              key={item.name}
              unmountOnExit
            >
              <article
                tabIndex={0}
                onClick={() => submitGuess(item)}
                onKeyDown={(e) => {if (e.key === 'Enter') submitGuess(item)}}
                className='group focus-within:outline-none'
              >
                <ItemNameplate item={item} hover={true}/>
              </article>
            </CSSTransition>
          ))}
        </TransitionGroup>
      }
    </div>
  )
}