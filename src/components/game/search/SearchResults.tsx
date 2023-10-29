import { TransitionGroup } from 'react-transition-group'
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
      { 1 < search.length && 
        <TransitionGroup className='w-fit flex flex-col gap-2'>
          {results.map((item) =>(
            <ItemSearch key={item.name} item={item} submitGuess={submitGuess}/>
          ))}
        </TransitionGroup>
      }
    </div>
  )
}