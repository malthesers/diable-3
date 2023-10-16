import { Item } from "@/src/interfaces/item"
import { useState } from "react"
import Image from "next/image"

export default function KnownInfo() {
  let [known, setKnown] = useState<Item>({
    name: 'Unidentified',
    quality: 'base'
  })
  
  return (
    <div className="w-[330px] sm:w-[400px] mx-auto bg-black border-grey border-4 p-2 space-y-2">
      <div className={ `bg-${known.quality}` + ' w-full aspect-[350/40] bg-no-repeat bg-cover grid p-2'}>
        <p className="place-self-center text-lg leading-none text-red-800 tracking-wider uppercase">{known.name}</p>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-20 h-40 border-grey border-2 p-2">
          <div className="bg-orange-900 bg-opacity-50 w-full h-full grid place-content-center text-4xl">?</div>
        </div>
        <div className="font-sans capitalize">
          <p><span className="">{known.quality}</span></p>
        </div>
      </div>
    </div>
  )
}