import { ItemRecord } from "@/src/interfaces/ItemRecord";
import ItemNameplate from "../ItemNameplate";
import QualityBox from "./QualityBox";

interface RecordItemProps {
  record: ItemRecord
}

export default function RecordItem({ record }: RecordItemProps) {
  return (
    <article className=''>
      <ItemNameplate item={record} />
      <div className='nameplate mx-auto grid grid-cols-7'>
        <div className='grid'>
          <div className='w-full h-full bg-opacity-40 shadow-guess-inner grid-center'></div>
          <p className='uppercase m-auto grid-center'>{record.guesses}</p>
        </div>
        { Object.entries(record.chosen).map(([quality, chosen]) => 
          <QualityBox key={quality} quality={quality} chosen={chosen}/>
        )}
      </div>
    </article>
  )
}