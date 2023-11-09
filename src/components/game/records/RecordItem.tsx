import { ItemRecord } from "@/src/interfaces/ItemRecord";
import ItemNameplate from "../ItemNameplate";
import QualityBox from "./QualityBox";

interface RecordItemProps {
  record: ItemRecord
}

export default function RecordItem({ record }: RecordItemProps) {
  return (
    <div key={record.name}>
      <ItemNameplate item={record} />
      <div className='grid grid-cols-6'>
        { Object.entries(record.chosen).map(([quality, chosen]) => 
          <QualityBox key={quality} quality={quality} chosen={chosen}/>
        )}
      </div>
    </div>
  )
}