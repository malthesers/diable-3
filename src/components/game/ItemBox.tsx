import { Item } from '@/src/interfaces/item'
import ItemNameplate from './ItemNameplate'

export default function ItemRow({ item }: { item: Item}) {
  return (
    <div className='w-[315px] sm:w-[350px] md:w-[420px] h-fit mx-auto bg-black border-zinc-800 border-4 p-1 space-y-2'>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-[5rem_auto] border-grey border-2 gap-4 p-2'>
        <div className={`bg-${item.quality}-icon border-${item.quality}-accent` + ' h-36 border rounded'}>
          <div className='h-full grid icon-gradient'>
            <span className='place-self-center text-4xl'>?</span>
          </div>
        </div>
        <div className='font-sans capitalize'>
          <p className={`text-${item.quality}` + ' flex flex-col sm:flex-row gap-1'}>
            <span>{item.quality}</span>
            <span>{item.equipment.type}</span>
            <span className='sm:ml-auto text-neutral-500'>{item.equipment.slot}</span>
          </p>
          <p className='sm:text-right'>{item.class}</p>
        </div>
      </div>
    </div>
  )
}