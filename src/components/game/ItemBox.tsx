import { useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Item } from '@/src/interfaces/item'
import ItemNameplate from './ItemNameplate'
import Image from 'next/image'
import KnownValue from './KnownValue'

export default function ItemRow({ item }: { item: Item}) {
  const itemQuality = useRef<HTMLElement>(null)
  const itemClass = useRef<HTMLElement>(null)
  const itemType = useRef<HTMLElement>(null)
  const itemSlot = useRef<HTMLElement>(null)

  return (
    <div className='h-fit mx-auto bg-black border-zinc-800 border-2 p-1 space-y-2'>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-[4rem_auto] border-grey border-2 gap-4 p-2'>
        <div className={`bg-${item.quality}-icon border-${item.quality}-accent` + ' h-32 border rounded'}>
          <div className='h-full grid place-content-center icon-gradient'>
            {/* <span className='place-self-center text-4xl'>?</span> */}
            <Image
              src='/items/thunderfury.png'
              alt={item.name}
              width={64}
              height={(item.equipment.slot === ('waist' || 'neck' || 'finger')) ? 64 : 128}
            />
          </div>
        </div>
        <div className='font-sans capitalize md:text-lg'>
          <p className={`text-${item.quality}` + ' flex flex-col md:flex-row gap-1'}>
            <KnownValue value={item.quality}/>
            <KnownValue value={item.equipment.type}/>
            <KnownValue value={item.equipment.slot} className='md:ml-auto text-neutral-500'/>
          </p>
          <KnownValue value={item.class} className='block md:text-right'/>
        </div>
      </div>
    </div>
  )
}