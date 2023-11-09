'use client'

import { ReactNode, createContext, useContext } from 'react'
import { RecordsContext } from '../interfaces/RecordsContext'
import { ItemRecord } from '../interfaces/ItemRecord'

const RecordsContext = createContext<RecordsContext>({
  records: []
})

export function useRecords() {
  return useContext(RecordsContext)
}

export default function RecordsProvider({ children }: { children: ReactNode }) {
  const records:ItemRecord[] = [
    {
      id: 1,
      name: 'Dawn',
      class: 'demon hunter',
      quality: 'legendary',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      },
      legendaryPower: 'Reduce the cooldown of Vengeance by [50 - 65%].',
      elementalDamage: 'holy',
      guesses: 999,
      chosen: {
        common: true,
        magic: true,
        rare: true,
        legendary: true,
        set: true,
        ethereal: true
      }
    },
    {
      id: 2,
      name: 'Thunderfury, Blessed Blade of the Windseeker',
      class: 'demon hunter',
      quality: 'ethereal',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      },
      guesses: 1,
      chosen: {
        common: false,
        magic: false,
        rare: false,
        legendary: true,
        set: true,
        ethereal: true
      }
    }]

  return (
    <RecordsContext.Provider value={{ records }}>
      {children}
    </RecordsContext.Provider>
  )
}