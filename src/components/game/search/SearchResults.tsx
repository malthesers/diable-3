import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import ItemNameplate from '../ItemNameplate'

interface SearchResultsProps {
  submitGuess: (item:Item) => void,
  results: Item[],
}

export default function SearchResults({ submitGuess, results }: SearchResultsProps) {
  const { search } = useItems()

  return (
    <div className='absolute z-10 w-full h-fit mt-2'>
      <div className='w-fit flex flex-col gap-2'>
        { 0 < search.length && results.map((item) =>
          <article
            key={item.name} tabIndex={0}
            onClick={() => submitGuess(item)}
            onKeyDown={(e) => {if (e.key === 'Enter') submitGuess(item)}}
            className='group focus-within:outline-none'
          >
            <ItemNameplate item={item} hover={true}/>
          </article>
        )}
      </div>
    </div>
  )
}