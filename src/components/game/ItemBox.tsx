import { Item } from "@/src/interfaces/item"

export default function ItemRow({ item }: { item: Item}) {
  return (
    <div className="w-[330px] sm:w-[400px] h-fit mx-auto bg-black border-zinc-800 border-4 p-1 space-y-2">
      <div className={`bg-${item.quality}-name` + ' w-full aspect-[350/40] bg-no-repeat bg-cover grid p-1'}>
        <p className="text-red-800 pt-1 text-lg sm:text-xl leading-none tracking-wider uppercase place-self-center">{item.name}</p>
      </div>
      <div className="grid grid-cols-[5rem_auto] border-grey border-2 gap-4 p-2">
        <div className={`bg-${item.quality}-icon border-${item.quality}-accent` + ` h-36 border rounded`}>
          <div className="h-full grid icon-gradient">
            <span className="place-self-center text-4xl">?</span>
          </div>
        </div>
        <div className="font-sans capitalize">
          <p className={`text-${item.quality}` + ' flex gap-1'}>
            <span>{item.quality}</span>
            <span>{item.type}</span>
            <span className="ml-auto text-neutral-500">{item.slot}</span>
          </p>
          <p className="text-right">{item.class}</p>
        </div>
      </div>
    </div>
  )
}