"use client"

import { useEffect, useState } from "react"
import { Item } from "../interfaces/item"
import ItemBox from "../components/game/ItemBox"
import PastGuesses from "../components/game/PastGuesses"

export default function Home() {
  const [answer, setAnswer] = useState<Item | null>(null)

  const [known, setKnown] = useState<Item>({
    name: 'unidentified',
    quality: 'undefined',
    slot: 'head',
    type: 'something'
  })

  const [items, setItems] = useState<Array<Item>>([
    {
      name: 'Dawn',
      class: 'demon hunter',
      quality: 'legendary',
      slot: '1-hand',
      type: 'hand crossbow'
    },
    {
      name: 'Valla\'s Bequest',
      class: 'demon hunter',
      quality: 'legendary',
      slot: '1-hand',
      type: 'hand crossbow'
    },
    {
      name: 'Natalya\'s Slayer',
      class: 'demon hunter',
      quality: 'set',
      slot: '1-hand',
      type: 'hand crossbow'
    },
    {
      name: 'Penetrator',
      class: 'demon hunter',
      quality: 'rare',
      slot: '1-hand',
      type: 'hand crossbow'
    },
    {
      name: 'Hand Crossbow',
      class: 'demon hunter',
      quality: 'magic',
      slot: '1-hand',
      type: 'hand crossbow'
    },
    {
      name: 'Initiate\'s Hand Crossbow',
      class: 'demon hunter',
      quality: 'set',
      slot: '1-hand',
      type: 'hand crossbow'
    },
  ])

  useEffect(() => {
    setAnswer(items[Math.floor(Math.random() * items.length)])
  }, [])

  return (
    <main>
      <section className="sm:grid grid-cols-[1fr_2fr] gap-4">
        <ItemBox item={known}/>
        <PastGuesses items={items}/>
      </section>
    </main>
  )
}
