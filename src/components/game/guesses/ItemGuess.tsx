import { useItems } from '@/src/app/items-provider'
import { Item } from '@/src/interfaces/item'
import ItemNameplate from '../ItemNameplate'
import GuessBox from './GuessBox'

export default function ItemGuess({ item }: { item: Item}) {
  const { answer } = useItems()

  return (
    <div className='nameplate h-fit mx-auto'>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-4 gap-1 sm:gap-2 text-center uppercase'>
        <GuessBox guess={item.quality} answer={answer?.quality}/>
        <GuessBox guess={item.equipment.slot} answer={answer?.equipment.slot}/>
        <GuessBox guess={item.equipment.type} answer={answer?.equipment.type}/>
        <GuessBox guess={item.class} answer={answer?.class}/>
      </div>
    </div>
  )
}