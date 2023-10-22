import { useItems } from '@/src/app/items-provider'
import ItemGuess from './guesses/ItemGuess'

export default function PastGuesses() {
  const { guesses, search } = useItems()

  return (
    <div className={(0 < search.length && 'brightness-50') + ' flex flex-col gap-2'}>
      { guesses.map((item) =>
        <ItemGuess key={item.name} item={item}/>
      )}
    </div>
  )
}