import { Item } from '@/src/interfaces/item';

interface ItemNameplateProps {
  item: Item
  hover?: boolean
}

export default function ItemNameplate({ item, hover = false }: ItemNameplateProps) {
  return (
    <div className={(hover ? 'cursor-pointer duration-100 group-hover:shadow-item-inner group-focus-within:shadow-item-inner' : '') + ` bg-${item.quality}-name` + ' w-full mx-auto aspect-[350/40] bg-no-repeat bg-cover bg-center grid'}>
      <p className={(item.name === 'unidentified' ? 'text-undefined' : `text-${item.quality}`) + ' text-sm/4 sm:text-base/4 text-center leading-none uppercase place-self-center px-4'}>{item.name}</p>
    </div>
  )
}