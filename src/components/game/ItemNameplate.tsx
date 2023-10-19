import { Item } from "@/src/interfaces/item";

export default function ItemNameplate({ item }: { item: Item}) {
  return (
    <div className={`bg-${item.quality}-name` + ' w-full mx-auto aspect-[350/40] bg-no-repeat bg-cover bg-center grid p-1'}>
      <p className={(item.name === 'unidentified' ? 'text-undefined' : `text-${item.quality}`) + ' pt-1 leading-none uppercase place-self-center'}>{item.name}</p>
    </div>
  )
}