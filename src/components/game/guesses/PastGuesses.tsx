import { useItems } from '@/src/app/items-provider'
import ItemGuess from './ItemGuess'

export default function PastGuesses() {
  const { guesses, search } = useItems()

  return (
    <div className={(0 < search.length ? 'brightness-50 ' : '') + 'flex flex-col gap-2 min-h-[400px] sm:min-h-min'}>
      { guesses.map((item) =>
        <ItemGuess key={item.name} item={item}/>
      )}
    </div>
  )
}