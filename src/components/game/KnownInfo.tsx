import { Item } from "@/src/interfaces/item"
import { useState } from "react"
import Image from "next/image"

export default function KnownInfo() {
  let [known, setKnown] = useState<Item>({
    name: 'Unidentified',
    quality: 'base'
  })
  
  return (
    <div className="w-[320px] sm:w-[400px] mx-auto bg-black border-zinc-800 border-2 p-2 space-y-2">
      <div className={ `bg-${known.quality}` + ' aspect-[350/40] bg-no-repeat bg-cover grid p-2'}>
        <p className="place-self-center text-lg sm:text-xl text-red-800 tracking-wider uppercase">{known.name}</p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="w-20 h-40 border-grey border-2"></div>
        <div></div>
      </div>
    </div>
  )
}