'use client'

import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { Item } from '../interfaces/item'
import { Context } from '../interfaces/context'


const ItemsContext = createContext<Context>({
  items: [],
  guesses: [],
  answer: null,
  known: {
    name: 'unidentified',
    quality: 'undefined',
    equipment: {
      slot: 'unknown',
      type: 'something'
    }
  }
})
export function useItems() {
  return useContext(ItemsContext)
}

export default function ItemsProvider({ children }: { children: ReactNode }) {
  const [answer, setAnswer] = useState<Item | null>(null)
  const [guesses, setGuesses] = useState<Item[]>([])
  const [known, setKnown] = useState<Item>({
    name: 'unidentified',
    quality: 'undefined',
    equipment: {
      slot: 'unknown',
      type: 'something'
    }
  })
  const [items, setItems] = useState<Item[]>([
    {
      name: 'Dawn',
      class: 'demon hunter',
      quality: 'legendary',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      }
    },
    {
      name: 'Valla\'s Bequest',
      class: 'demon hunter',
      quality: 'legendary',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      }
    },
    {
      name: 'Natalya\'s Slayer',
      class: 'demon hunter',
      quality: 'set',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      }
    },
    {
      name: 'Penetrator',
      class: 'demon hunter',
      quality: 'rare',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      }
    },
    {
      name: 'Hand Crossbow',
      class: 'demon hunter',
      quality: 'magic',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      }
    },
    {
      name: 'Initiate\'s Hand Crossbow',
      class: 'demon hunter',
      quality: 'common',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      }
    },
  ])

  useEffect(() => {
    setAnswer(items[Math.floor(Math.random() * items.length)])
  }, [])

  return (
    <ItemsContext.Provider value={{ items, answer, guesses, known }}>
      {children}
    </ItemsContext.Provider>
  )
}