import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import ItemNameplate from '../ItemNameplate'
import GuessBox from './GuessBox'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'

export default function ItemGuess({ item }: { item: Item}) {
  const { answer, known } = useItems()
  const wasGuessed = answer?.name === known.name

  return (
    <article className={(wasGuessed ? '[&:not(:first-child)]:brightness-50 ' : '') + 'nameplate h-fit'}>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-4 gap-1 sm:gap-2 text-center uppercase'>
        <GuessBox guess={item.quality} answer={answer?.quality}/>
        <GuessBox guess={item.equipment.slot} answer={answer?.equipment.slot}/>
        <GuessBox guess={item.equipment.type} answer={answer?.equipment.type}/>
        <GuessBox guess={item.class} answer={answer?.class}/>
      </div>
    </article>
  )
}