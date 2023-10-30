import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import ItemSearch from './ItemSearch'

interface SearchResultsProps {
  submitGuess: (item:Item) => void,
  results: Item[],
}

export default function SearchResults({ submitGuess, results }: SearchResultsProps) {
  const { search } = useItems()

  return (
    <div className='absolute z-10 w-full h-fit mt-2'>
      <TransitionGroup className='w-fit flex flex-col gap-2'>
        {1 < search.length && results.map((item) => (
          <CSSTransition
            timeout={250}
            classNames='search'
            key={item.name}
          >
            <ItemSearch submitGuess={submitGuess} item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}