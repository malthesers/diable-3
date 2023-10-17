"use client"

import { useEffect, useState } from "react"
import { Item } from "../interfaces/item"
import ItemBox from "../components/game/ItemBox"
import PastGuesses from "../components/game/PastGuesses"
import KnownInfo from "../components/game/KnownInfo"

export default function Home() {
  const [answer, setAnswer] = useState<Item | null>(null)

  const [known, setKnown] = useState<Item>({
    name: 'unidentified',
    quality: 'undefined',
    slot: 'unknown',
    type: 'something'
  })

  const [items, setItems] = useState<Array<Item>>([
    {
      name: 'Dawn',
      class: 'demon hunter',
      quality: 'legendary',
      slot: '1-hand',
      type: 'crossbow'
    },
    {
      name: 'Valla\'s Bequest',
      class: 'demon hunter',
      quality: 'legendary',
      slot: '1-hand',
      type: 'crossbow'
    }
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
