import { Item } from "@/src/interfaces/item"

export default function KnownInfo() {
  const known:Item = {
    name: 'Dawn'
  }

  return (
    <div className="bg-black border-white border-2 p-2">
      <div className="grid place-content-center border-amber-900 border-2 p-2">
        <p className="uppercase">{known.name}</p>
      </div>
    </div>
  )
}