import { ItemRecord } from './ItemRecord';

export interface RecordsContext {
  updateRecords: (value:ItemRecord) => void,
  clearRecords: () => void,
  records: ItemRecord[]
}