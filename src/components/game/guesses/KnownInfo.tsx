import { useItems } from '@/src/app/items-provider'
import ItemNameplate from '../ItemNameplate'

export default function KnownInfo() {
  const { known } = useItems()
  
  return (
    <div className='h-fit mx-auto bg-black border-zinc-800 border-4 p-1 space-y-2'>
      <ItemNameplate item={known}/>
      <div className='grid grid-cols-[5rem_auto] border-grey border-2 gap-4 p-2'>
        <div className={`bg-${known.quality}-icon border-${known.quality}-accent` + ' h-36 border rounded'}>
          <div className='h-full grid icon-gradient'>
            <span className='place-self-center text-4xl'>?</span>
          </div>
        </div>
        <div className='font-sans capitalize'>
          <p className={`text-${known.quality}` + ' flex gap-1'}>
            <span>{known.quality}</span>
            <span>{known.equipment.type}</span>
            <span className='ml-auto text-neutral-500'>{known.equipment.slot}</span>
          </p>
          <p className='ml-auto'>{known.class}</p>
        </div>
      </div>
    </div>
  )
}