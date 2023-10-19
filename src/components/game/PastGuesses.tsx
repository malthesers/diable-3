import { useItems } from '@/src/app/items-provider'
import ItemBox from './ItemBox'

export default function PastGuesses() {
  const { guesses } = useItems()

  return (
    <div>
      <p className='text-2xl text-center mb-4'>Guesses</p>
      <div className='flex flex-wrap gap-2'>
        { guesses.map((item) =>
          <ItemBox key={item.name} item={item}/>
        )}
      </div>
    </div>
  )
}