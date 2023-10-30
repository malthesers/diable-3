'use client'

import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { ChosenQualities } from '../interfaces/ChosenQualities'
import { ItemsContext } from '../interfaces/ItemsContext'
import { useModals } from './ModalsProvider'
import { Item } from "@/src/interfaces/Item"
import { allItems } from '@/src/data'

const defaultItem:Item = {
  name: 'unidentified',
  class: 'anonymous',
  quality: 'undefined',
  equipment: {
    slot: 'unknown',
    type: 'something'
  },
  legendaryPower: ''
}

const ItemsContext = createContext<ItemsContext>({
  validateGuess: () => {},
  surrenderGame: () => {},
  setSearch: () => {},
  resetGame: () => {},
  items: allItems,
  guesses: [],
  answer: null,
  search: '',
  known: defaultItem
})

export function useItems() {
  return useContext(ItemsContext)
}

export default function ItemsProvider({ children }: { children: ReactNode }) {
  const { toggleShowVictory, toggleShowDefeat } = useModals()
  const [answer, setAnswer] = useState<Item | null>(null)
  const [guesses, setGuesses] = useState<Item[]>([])
  const [items, setItems] = useState<Item[]>(allItems)
  const [known, setKnown] = useState<Item>(defaultItem)
  const [search, setSearch] = useState<string>('')

  const [qualities, setQualities] = useState<ChosenQualities>({
    common: false,
    magic: false,
    rare: false,
    legendary: false,
    set: false
  })

  function resetGame() {
    setAnswer(items[Math.floor(Math.random() * items.length)])
    setGuesses([])
    setSearch('')
    setKnown(defaultItem)
  }

  function surrenderGame() {
    if (answer) {
      setKnown({
        ...answer,
        legendaryPower: answer.legendaryPower || ''
      })
      toggleShowDefeat(true)
    }
  }

  function validateGuess(item:Item) {
    setGuesses([
      item,
      ...guesses
    ])
    
    if (item.equipment.slot === answer?.equipment.slot) known.equipment.slot = item.equipment.slot
    if (item.equipment.type === answer?.equipment.type) known.equipment.type = item.equipment.type
    if (item.quality === answer?.quality) known.quality = item.quality
    if (item.class === answer?.class) known.class = item.class
    if (item.name === answer?.name) {
      known.name = item.name
      toggleShowVictory(true)
    } 
  }

  useEffect(() => {
    setAnswer(items[Math.floor(Math.random() * items.length)])
  }, [])

  return (
    <ItemsContext.Provider value={{ items, answer, known, guesses, search, setSearch, resetGame, surrenderGame, validateGuess }}>
      {children}
    </ItemsContext.Provider>
  )
}