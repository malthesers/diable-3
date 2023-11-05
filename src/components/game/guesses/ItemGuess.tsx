import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import ItemNameplate from '../ItemNameplate'
import GuessBox from './GuessBox'

export default function ItemGuess({ item }: { item: Item}) {
  const { answer, known } = useItems()
  const wasGuessed = answer?.id === known.id

  return (
    <article className={(wasGuessed ? '[&:not(:first-child)]:brightness-50 ' : '') + 'nameplate h-fit'}>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-2 xs:grid-cols-4 gap-1 sm:gap-2 text-center uppercase'>
        <GuessBox quality={item.quality} guess={item.quality} answer={answer?.quality}/>
        <GuessBox quality={item.quality} guess={item.equipment.slot} answer={answer?.equipment.slot}/>
        <GuessBox quality={item.quality} guess={item.equipment.type} answer={answer?.equipment.type}/>
        <GuessBox quality={item.quality} guess={item?.class} answer={answer?.class}/>
      </div>
    </article>
  )
}