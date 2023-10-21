import { Item } from '@/src/interfaces/item'
import ItemNameplate from './ItemNameplate'
import { useItems } from '@/src/app/items-provider'


export default function ItemGuess({ item }: { item: Item}) {
  const { answer } = useItems()

  return (
    <div className='w-[315px] sm:w-[350px] md:w-[420px] h-fit mx-auto'>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-4 gap-2 text-sm text-center uppercase [&>p]:grid [&>p]:place-content-center [&>p]:h-16'>
          <p className={item.quality === answer?.quality ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.quality}</span>
          </p>
          <p className={item.equipment.type === answer?.equipment.type ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.equipment.type}</span>
          </p>
          <p className={item.equipment.slot === answer?.equipment.slot ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.equipment.slot}</span>
          </p>
          <p className={item.class === answer?.class ? 'bg-green-700' : 'bg-red-700'}>
            <span>{item.class}</span>
          </p>
      </div>
    </div>
  )
}