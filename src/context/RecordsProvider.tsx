'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { RecordsContext } from '../interfaces/RecordsContext'
import { ItemRecord } from '../interfaces/ItemRecord'
import useToggle from '../hooks/useToggle'

const RecordsContext = createContext<RecordsContext>({
  updateRecords: (value:ItemRecord) => {},
  clearRecords: () => {},
  records: []
})

export function useRecords() {
  return useContext(RecordsContext)
}

export default function RecordsProvider({ children }: { children: ReactNode }) {
  const [records, setRecords] = useState<ItemRecord[]>([])
  const [mounted, setMounted] = useToggle(false)

  function updateRecords(record: ItemRecord) {
    // Added new record, sort by guesses and cut to 10 best
    const newRecords = [...records, record]
    const sortedRecords = newRecords.sort((rec1, rec2) => rec1.guesses - rec2.guesses)
    const slicedRecords = sortedRecords.slice(0, 10)

    setRecords(slicedRecords)
  }

  function clearRecords() {
    setRecords([])
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
    <RecordsContext.Provider value={{ records, updateRecords, clearRecords }}>
      {children}
    </RecordsContext.Provider>
  )
}