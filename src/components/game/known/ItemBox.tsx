import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import { useRef } from 'react'
import LegendaryPower from './LegendaryPower'
import ItemNameplate from '../ItemNameplate'
import KnownValue from './KnownValue'
import Image from 'next/image'

export default function ItemBox({ item }: { item: Item}) {
  const { answer, known, guesses } = useItems()
  const wasGuessed = answer?.name === known.name
  const showHint = guesses.length > 1 || wasGuessed
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div className='h-fit w-min mx-auto bg-black border-zinc-800 border-2 p-1 space-y-2'>
      <ItemNameplate item={known}/>
      <div className='grid grid-cols-[4rem_auto] border-grey border-2 gap-4 p-2'>
        <div className={`bg-${known.quality}-icon border-${known.quality}-accent` + ' h-32 border rounded duration-500'}>
          <div className='h-full grid place-content-center icon-gradient'>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                classNames='fade'
                key={known.equipment.type}
                nodeRef={imageRef}
                addEndListener={(done: () => void) =>
                  imageRef.current?.addEventListener('transitionend', done, false)
                }
              >
                <Image
                  ref={imageRef}
                  src={`/images/items/${known.equipment.slot}/${known.equipment.type.replaceAll(' ', '-')}.png`}
                  alt={known.name}
                  width={64}
                  height={(['waist', 'neck', 'finger'].includes(known.equipment.slot)) ? 64 : 128}
                />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
        <div className='font-sans capitalize md:text-lg'>
          <p className='flex flex-col md:flex-row'>
            <span className={`text-${known.quality} flex flex-row gap-1 duration-500`}>
              <KnownValue value={known.quality}/>
              <KnownValue value={known.equipment.type}/>
            </span>
            <KnownValue value={known.equipment.slot} className='md:ml-auto text-neutral-500'/>
          </p>
          <KnownValue value={known.class} className='block md:text-right'/>
            <LegendaryPower power={(answer?.legendaryPower ? answer.legendaryPower : 'No legendary power')}/>
        </div>
      </div>
    </div>
  )
}