'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
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

  useEffect(() => {

  }, [])

  useEffect(() => {
    // localStorage.setItem('diable3-records', JSON.stringify(records))
    console.log(records)
  }, [records])

  return (
    <RecordsContext.Provider value={{ records, updateRecords }}>
      {children}
    </RecordsContext.Provider>
  )
}