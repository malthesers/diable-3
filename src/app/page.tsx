"use client"

import { useEffect, useState } from "react"
import { Item } from "../interfaces/item"
import ItemRow from "../components/game/ItemRow"
import PastGuesses from "../components/game/PastGuesses"
import KnownInfo from "../components/game/KnownInfo"

export default function Home() {
  const [answer, setAnswer] = useState<Item | null>(null)
  const [items, setItems] = useState<Array<Item>>([
    {
      name: 'Dawn'
    },
    {
      name: 'Valla\'s Bequest'
    }
  ])

  useEffect(() => {
    setAnswer(items[Math.floor(Math.random() * items.length)])
  }, [])

  return (
    <main>
      <h1 className="text-2xl">Main</h1>
      <section className="sm:grid grid-cols-[1fr_2fr]">
        <KnownInfo/>
        <PastGuesses items={items}/>
      </section>
    </main>
  )
}
