import { useItems } from '@/src/app/items-provider'
import { Item } from '@/src/interfaces/item'
import ItemNameplate from '../ItemNameplate'
import GuessBox from './GuessBox'

export default function ItemGuess({ item }: { item: Item}) {
  const { answer } = useItems()

  return (
    <div className='w-[350px] md:w-[420px] lg:w-[455px] h-fit mx-auto'>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-4 gap-1 sm:gap-2 text-center uppercase'>
          {/* <p className={item.quality === answer?.quality ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.quality}</span>
          </p>
          <p className={item.equipment.slot === answer?.equipment.slot ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.equipment.slot}</span>
          </p>
          <p className={item.equipment.type === answer?.equipment.type ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.equipment.type}</span>
          </p>
          <p className={item.class === answer?.class ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.class}</span>
          </p> */}
          <GuessBox guess={item.quality} answer={answer?.quality}/>
          <GuessBox guess={item.equipment.slot} answer={answer?.equipment.slot}/>
          <GuessBox guess={item.equipment.type} answer={answer?.equipment.type}/>
          <GuessBox guess={item.class} answer={answer?.class}/>
      </div>
    </div>
  )
}