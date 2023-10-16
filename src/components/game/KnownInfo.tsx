import { Item } from "@/src/interfaces/item"

export default function KnownInfo() {
  const known:Item = {
    name: 'Dawn',
    quality: "legendary"
  }

  return (
    <div className="bg-black border-white border-2 p-2">
      <div className={`bg-base` + ' w-[350px] bg-no-repeat p-2'}>
        <p className="text-center uppercase">{known.name}</p>
      </div>
    </div>
  )
}