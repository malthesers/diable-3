import { useItems } from '@/src/context/ItemsProvider'
import ItemGuess from './ItemGuess'

export default function PastGuesses() {
  const { guesses, search } = useItems()

  return (
    <div className={(1 < search.length ? 'brightness-50 ' : '') + 'flex flex-col gap-2 min-h-[400px] sm:min-h-min duration-200'}>
      { guesses.map((item) =>
        <ItemGuess key={item.name} item={item}/>
      )}
    </div>
  )
}