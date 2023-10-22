import { Item } from '@/src/interfaces/item';

interface ItemNameplateProps {
  item: Item
  hover?: boolean
}

export default function ItemNameplate({ item, hover = false }: ItemNameplateProps) {
  const hoverClasses = 'cursor-pointer duration-100 group-hover:shadow-item-inner group-focus-within:shadow-item-inner'
  const textColor = item.name === 'unidentified' ? 'text-undefined' : `text-${item.quality}`

  return (
    <div className={(hover && hoverClasses) + ` bg-${item.quality}-name` + ' nameplate mx-auto aspect-[350/40] bg-no-repeat bg-cover bg-center grid'}>
      <p className={textColor + ' text-sm/4 sm:text-base/4 md:text-lg/4 px-6 sm:px-12 text-center leading-none uppercase place-self-center'}>{item.name}</p>
    </div>
  )
}