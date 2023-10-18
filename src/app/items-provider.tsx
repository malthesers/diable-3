'use client'

import { ReactNode, createContext } from "react"

export const ItemsContext = createContext({})

export default function ItemsProvider({ children }: { children: ReactNode }) {
  const items = ['yo']

  return (
    <ItemsContext.Provider value={{ items }}>
      {children}
    </ItemsContext.Provider>
  )
}