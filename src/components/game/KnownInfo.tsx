import { Item } from "@/src/interfaces/item"
import { useState } from "react"
import Image from "next/image"

export default function KnownInfo() {
  let [known, setKnown] = useState<Item>({
    name: 'unidentified',
    quality: 'undefined',
    slot: 'unknown',
    type: 'something'
  })
  
  return (
    <div className="w-[330px] sm:w-[400px] h-fit mx-auto bg-black border-zinc-800 border-4 p-1 space-y-2">
      <div className={`bg-${known.quality}-name` + ' w-full aspect-[350/40] bg-no-repeat bg-cover grid p-1'}>
        <p className="text-red-800 pt-1 text-lg sm:text-xl leading-none tracking-wider uppercase place-self-center">{known.name}</p>
      </div>
      <div className="grid grid-cols-[5rem_auto] border-grey border-2 gap-4 p-2">
        <div className={`bg-${known.quality}-icon border-${known.quality}-accent` + ` h-36 border rounded`}>
          <div className="h-full grid icon-gradient">
            <span className="place-self-center text-4xl">?</span>
          </div>
        </div>
        <div className="font-sans capitalize">
          <p className={`text-${known.quality}` + ' flex gap-1'}>
            <span>{known.quality}</span>
            <span>{known.type}</span>
            <span className="ml-auto text-neutral-500">{known.slot}</span>
          </p>
          <p className="ml-auto">{known.class}</p>
        </div>
      </div>
    </div>
  )
}