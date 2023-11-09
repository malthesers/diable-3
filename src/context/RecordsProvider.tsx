'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { RecordsContext } from '../interfaces/RecordsContext'
import { ItemRecord } from '../interfaces/ItemRecord'
import useToggle from '../hooks/useToggle'

const RecordsContext = createContext<RecordsContext>({
  updateRecords: (value:ItemRecord) => {},
  records: []
})

export function useRecords() {
  return useContext(RecordsContext)
}

export default function RecordsProvider({ children }: { children: ReactNode }) {
  const [records, setRecords] = useState<ItemRecord[]>([])
  const [mounted, setMounted] = useToggle(false)

  function updateRecords(record: ItemRecord) {
    const newRecords = [...records, record]
    const sortedRecords = newRecords.sort((rec1, rec2) => rec1.guesses - rec2.guesses)
    const slicedRecords = sortedRecords.slice(0, 10)

    setRecords(slicedRecords)
  }

  useEffect(() => {
    if (localStorage.getItem('diable3-records')) {
      setRecords(JSON.parse(localStorage.getItem('diable3-records') as string))
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('diable3-records', JSON.stringify(records))
    }
  }, [records])

  return (
    <RecordsContext.Provider value={{ records, updateRecords }}>
      {children}
    </RecordsContext.Provider>
  )
}