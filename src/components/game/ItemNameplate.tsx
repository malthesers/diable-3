import { Item } from "@/src/interfaces/item";

export default function ItemNameplate({ item }: { item: Item}) {
  return (
    <div className={`bg-${item.quality}-name` + ' w-[330px] sm:w-[400px] aspect-[350/40] bg-no-repeat bg-cover grid p-1'}>
      <p className={(item.name === 'unidentified' ? 'text-undefined' : `text-${item.quality}`) + ' pt-1 leading-none uppercase place-self-center'}>{item.name}</p>
    </div>
  )
}