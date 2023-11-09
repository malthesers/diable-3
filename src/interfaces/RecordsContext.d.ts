import { ItemRecord } from "./ItemRecord";

export interface RecordsContext {
  setRecords: (value:ItemRecord) => void,
  records: ItemRecord[]
}