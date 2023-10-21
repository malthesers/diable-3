import { useItems } from '@/src/app/items-provider'
import ItemGuess from './ItemGuess'

export default function PastGuesses() {
  const { guesses } = useItems()

  return (
    <div>
      <p className='text-2xl text-center'>Guesses</p>
      <div className='flex flex-wrap gap-2'>
        { guesses.map((item) =>
          <ItemGuess key={item.name} item={item}/>
        )}
      </div>
    </div>
  )
}