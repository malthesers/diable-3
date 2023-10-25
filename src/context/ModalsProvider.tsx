'use client'

import { ReactNode, createContext, useContext } from 'react'
import { ModalsContext } from '../interfaces/modals-context'
import useToggle from '../hooks/useToggle'

const ModalsContext = createContext<ModalsContext>({
  toggleShowVictory: (value?: boolean) => {},
  showVictory: false
})

export function useModals() {
  return useContext(ModalsContext)
}

export default function ModalsProvider({ children }: { children: ReactNode }) {
  const [showVictory, toggleShowVictory] = useToggle(false)


  return (
    <ModalsContext.Provider value={{ showVictory, toggleShowVictory }}>
      {children}
    </ModalsContext.Provider>
  )
}