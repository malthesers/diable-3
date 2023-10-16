import { Item } from "@/src/interfaces/item"
import { useState } from "react"
import Image from "next/image"

export default function KnownInfo() {
  let [known, setKnown] = useState<Item>({
    name: 'Unidentified',
    quality: 'base'
  })
  
  return (
    <div className="bg-black border-zinc-800 border-2 p-2">
      <div className={ `bg-${known.quality}` + ' w-[350px] bg-no-repeat p-2'}>
        <p className="text-red-800 text-center uppercase">{known.name}</p>
      </div>
      <div className="flex flex-row">
        <div className="w-8 h-20"></div>
      </div>
    </div>
  )
}