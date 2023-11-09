import { ItemRecord } from "@/src/interfaces/ItemRecord";
import ItemNameplate from "../ItemNameplate";
import QualityBox from "./QualityBox";

interface RecordItemProps {
  record: ItemRecord
}

export default function RecordItem({ record }: RecordItemProps) {
  return (
    <article>
      <ItemNameplate item={record} />
      <div className='nameplate mx-auto grid grid-cols-6'>
        { Object.entries(record.chosen).map(([quality, chosen]) => 
          <QualityBox key={quality} quality={quality} chosen={chosen}/>
        )}
      </div>
    </article>
  )
}