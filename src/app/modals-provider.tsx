'use client'

import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { ModalsContext } from '../interfaces/context'

const ModalsContext = createContext<ModalsContext>({
  setShowVictory: (boolean) => {},
  showVictory: false
})

export function useModals() {
  return useContext(ModalsContext)
}

export default function ItemsProvider({ children }: { children: ReactNode }) {
  const [showVictory, setShowVictory] = useState<boolean>(false)


  return (
    <ModalsContext.Provider value={{ showVictory, setShowVictory }}>
      {children}
    </ModalsContext.Provider>
  )
}