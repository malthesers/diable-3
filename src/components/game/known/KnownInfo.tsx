import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { useRef } from 'react'
import LegendaryPower from './LegendaryPower'
import ItemNameplate from '../ItemNameplate'
import KnownValue from './KnownValue'
import Image from 'next/image'

export default function KnownInfo() {
  const { answer, known } = useItems()
  const node = useRef<HTMLImageElement>(null)
  const src = known.equipment.type !== 'something'
  ? `/items/${known.equipment.slot}/${known.equipment.type.replaceAll(' ', '-')}.png`
  : '/items/unknown/something.png'

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
                nodeRef={node}
                addEndListener={(done: () => void) =>
                  node.current?.addEventListener('transitionend', done, false)
                }
              >
                <Image
                  ref={node}
                  src={src}
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