'use client'

import { ReactNode, createContext, useContext } from 'react'
import { ModalsContext } from '../interfaces/modals-context'
import useToggle from '../hooks/useToggle'

const ModalsContext = createContext<ModalsContext>({
  toggleShowInstructions: (value?: boolean) => {},
  toggleShowVictory: (value?: boolean) => {},
  toggleShowDefeat: (value?: boolean) => {},
  showInstructions: false,
  showVictory: false,
  showDefeat: false,
})

export function useModals() {
  return useContext(ModalsContext)
}

export default function ModalsProvider({ children }: { children: ReactNode }) {
  const [showInstructions, toggleShowInstructions] = useToggle(false)
  const [showVictory, toggleShowVictory] = useToggle(false)
  const [showDefeat, toggleShowDefeat] = useToggle(false)


  return (
    <ModalsContext.Provider value={{ showInstructions, toggleShowInstructions, showVictory, toggleShowVictory, showDefeat, toggleShowDefeat }}>
      {children}
    </ModalsContext.Provider>
  )
}