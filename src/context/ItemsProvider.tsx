'use client'

import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { ChosenQualities } from '../interfaces/ChosenQualities'
import { ItemsContext } from '../interfaces/ItemsContext'
import { useModals } from './ModalsProvider'
import { Item } from '@/src/interfaces/Item'
import { allItems } from '@/src/data'

const defaultItem:Item = {
  name: 'unidentified',
  class: 'anonymous',
  quality: 'undefined',
  equipment: {
    slot: 'unknown',
    type: 'something'
  }
}

const defaultChosen:ChosenQualities = {
  common: true,
  magic: true,
  rare: true,
  legendary: true,
  set: true,
  ethereal: true
}

const ItemsContext = createContext<ItemsContext>({
  validateGuess: () => {},
  surrenderGame: () => {},
  toggleChosen: () => {},
  setSearch: () => {},
  resetGame: () => {},
  items: allItems,
  guesses: [],
  answer: null,
  search: '',
  known: defaultItem,
  chosen: defaultChosen
})

export function useItems() {
  return useContext(ItemsContext)
}

export default function ItemsProvider({ children }: { children: ReactNode }) {
  const { toggleShowVictory, toggleShowDefeat } = useModals()
  const [chosen, setChosen] = useState<ChosenQualities>(defaultChosen)
  const [known, setKnown] = useState<Item>({...defaultItem})
  const [answer, setAnswer] = useState<Item | null>(null)
  const [guesses, setGuesses] = useState<Item[]>([])
  const [search, setSearch] = useState<string>('')
  const [items, setItems] = useState<Item[]>(allItems)
  const [mounted, setMounted] = useState<boolean>(false)

  function selectAnswer() {
    // Remove items of deselected qualities and pick random item from those
    const eligibleItems:Item[] = items.filter(item => chosen[item.quality as keyof typeof chosen])
    setAnswer(eligibleItems[Math.floor(Math.random() * eligibleItems.length)])
  }

  function toggleChosen(quality: keyof ChosenQualities) {
    // Toggle quality passed in parameter
    setChosen((prevState) => ({
      ...prevState,
      [quality]: !prevState[quality]
    }))
  }

  function resetGame() {
    // Set new answer, empty guesses, clear search and reset known
    selectAnswer()
    setGuesses([])
    setSearch('')
    setKnown({
      ...defaultItem,
      equipment: {
        slot: 'unknown',
        type: 'something'
      }
    })
  }

  function surrenderGame() {
    if (answer) {
      // Set correct info as known and show modal
      setKnown({
        ...answer,
        equipment: {...answer.equipment},
      })
      toggleShowDefeat(true)
    }
  }

  function validateGuess(item:Item) {
    // Add guess to list of guesses
    setGuesses([
      item,
      ...guesses
    ])
    
    // Set known info if correct and show modal if correct item
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
    // Load chosen qualities from localStorage
    if (localStorage.getItem('qualities')) {
      setChosen(JSON.parse(localStorage.getItem('qualities') as string))
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    // Set random item as answer when qualities have been loaded
    selectAnswer()
  }, [mounted])

  return (
    <ItemsContext.Provider value={{ items, answer, known, guesses, search, chosen, toggleChosen, setSearch, resetGame, surrenderGame, validateGuess }}>
      {children}
    </ItemsContext.Provider>
  )
}