'use client'

import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { Item } from '../interfaces/item'
import { Context } from '../interfaces/context'


const ItemsContext = createContext<Context>({
  items: [],
  guesses: [],
  answer: null,
  validateGuess: () => {},
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
      name: 'Thunderfury, Blessed Blade of the Windseeker',
      quality: 'legendary',
      equipment: {
        slot: '1-hand',
        type: 'sword'
      }
    },
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

  function validateGuess(item:Item) {
    setGuesses([
      item,
      ...guesses
    ])

    if (item.name === answer?.name) {
      console.log('won') // TODO: win
    } else {
      if (item.class === answer?.class) known.class = item.class
      if (item.quality === answer?.quality) known.quality = item.quality
      if (item.equipment.slot === answer?.equipment.slot) known.equipment.slot = item.equipment.slot
      if (item.equipment.type === answer?.equipment.type) known.equipment.type = item.equipment.type
    }
  }

  useEffect(() => {
    setAnswer(items[Math.floor(Math.random() * items.length)])
  }, [])

  return (
    <ItemsContext.Provider value={{ items, answer, known, guesses, validateGuess }}>
      {children}
    </ItemsContext.Provider>
  )
}