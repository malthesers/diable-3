import { Item } from "@/src/interfaces/item"
import { useEffect, useState } from "react"

export default function KnownInfo() {
  let [known, setKnown] = useState<Item>({
    name: 'Unidentified',
    quality: 'base'
  })
  
  return (
    <div className="bg-black border-zinc-800 border-2 p-2">
      <div className={ `bg-${known.quality}` + ' w-[350px] bg-no-repeat p-2'}>
        <p className="text-center uppercase">{known.name}</p>
      </div>
    </div>
  )
}