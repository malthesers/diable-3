import { useItems } from '@/src/app/items-provider'
import ItemGuess from './guesses/ItemGuess'

export default function PastGuesses() {
  const { guesses } = useItems()

  return (
    <div className='flex flex-col gap-2'>
      { guesses.map((item) =>
        <ItemGuess key={item.name} item={item}/>
      )}
    </div>
  )
}