import { ItemRecord } from "@/src/interfaces/ItemRecord";
import ItemNameplate from "../ItemNameplate";

interface RecordItemProps {
  record: ItemRecord
}

export default function RecordItem({ record }: RecordItemProps) {
  return (
    <div key={record.name}>
      <ItemNameplate item={record} />
      <div className='grid grid-cols-6'>
        { Object.entries(record.qualities).map((quality, chosen) => 
          <p>{quality}</p>
        )}
      </div>
    </div>
  )
}