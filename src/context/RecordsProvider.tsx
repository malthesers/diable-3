'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { RecordsContext } from '../interfaces/RecordsContext'
import { ItemRecord } from '../interfaces/ItemRecord'

const RecordsContext = createContext<RecordsContext>({
  updateRecords: (value:ItemRecord) => {},
  records: []
})

export function useRecords() {
  return useContext(RecordsContext)
}

export default function RecordsProvider({ children }: { children: ReactNode }) {
  const [records, setRecords] = useState<ItemRecord[]>([])

  function updateRecords(record: ItemRecord) {
    setRecords([
      ...records,
      record
    ])
  }

  return (
    <RecordsContext.Provider value={{ records, updateRecords }}>
      {children}
    </RecordsContext.Provider>
  )
}