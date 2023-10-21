import { useItems } from '@/src/app/items-provider'
import { Item } from '@/src/interfaces/item'
import ItemNameplate from '../ItemNameplate'

export default function ItemGuess({ item }: { item: Item}) {
  const { answer } = useItems()

  return (
    <div className='w-[315px] sm:w-[350px] md:w-[420px] h-fit mx-auto'>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-4 gap-2 text-sm text-center uppercase'>
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
          <div className='grid aspect-square bg-[url("/images/icons/set.png")] bg-center bg-cover'>
            <div className={(item.quality === answer?.quality ? 'bg-green-700' : 'bg-red-700') + ' w-full h-full bg-opacity-40 grid-center'}></div>
            <span className='grid-center my-auto'>{item.quality}</span>
          </div>
          <div className='grid aspect-square bg-[url("/images/icons/set.png")] bg-center bg-cover'>
            <div className={(item.equipment.slot === answer?.equipment.slot ? 'bg-green-700' : 'bg-red-700') + ' w-full h-full bg-opacity-40 grid-center'}></div>
            <span className='grid-center my-auto'>{item.equipment.slot}</span>
          </div>
          <div className='grid aspect-square bg-[url("/images/icons/set.png")] bg-center bg-cover'>
            <div className={(item.equipment.type === answer?.equipment.type ? 'bg-green-700' : 'bg-red-700') + ' w-full h-full bg-opacity-40 grid-center'}></div>
            <span className='grid-center my-auto'>{item.equipment.type}</span>
          </div>
          <div className='grid aspect-square bg-[url("/images/icons/set.png")] bg-center bg-cover'>
            <div className={(item.class === answer?.class ? 'bg-green-700' : 'bg-red-700') + ' w-full h-full bg-opacity-40 grid-center'}></div>
            <span className='grid-center my-auto'>{item.class}</span>
          </div>
      </div>
    </div>
  )
}