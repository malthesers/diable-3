import { Item } from "@/src/interfaces/item"
import { useState } from "react"
import Image from "next/image"

export default function KnownInfo() {
  let [known, setKnown] = useState<Item>({
    name: 'Unidentified',
    quality: 'legendary',
    slot: 'Unknown'
  })
  
  return (
    <div className="w-[330px] sm:w-[400px] mx-auto bg-black border-grey border-4 p-1 space-y-2">
      <div className={ `bg-${known.quality}` + ' w-full aspect-[350/40] bg-no-repeat bg-cover grid p-1'}>
        <p className="text-red-800 pt-1 text-lg sm:text-xl leading-none tracking-wider uppercase place-self-center">{known.name}</p>
      </div>
      <div className="grid grid-cols-[5rem_auto] border-grey border-2 gap-4 p-2">
        <div className="h-40 p-2 border-grey border-2">
          <div className="bg-zinc-900 w-full h-full grid place-content-center text-4xl">?</div>
        </div>
        <div className="font-sans capitalize">
          <p className={ `text-${known.quality}` + ' flex gap-1'}>
            <span className="">{known.quality}</span>
            <span>Gloves</span>
            <span className="ml-auto text-neutral-500">{known.slot}</span>
          </p>
        </div>
      </div>
    </div>
  )
}