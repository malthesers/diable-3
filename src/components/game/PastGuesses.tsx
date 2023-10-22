import { useItems } from '@/src/app/items-provider'
import ItemGuess from './guesses/ItemGuess'

export default function PastGuesses() {
  const { guesses } = useItems()

  return (
    <div>
      <p className='text-2xl text-center'>Guesses</p>
      <div className='flex flex-col gap-2'>
        { guesses.map((item) =>
          <ItemGuess key={item.name} item={item}/>
        )}
      </div>
    </div>
  )
}