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
      name: 'Dawn',
      quality: 'legendary'
    },
    {
      name: 'Valla\'s Bequest',
      quality: 'legendary'
    }
  ])

  useEffect(() => {
    setAnswer(items[Math.floor(Math.random() * items.length)])
  }, [])

  return (
    <main>
      <section className="sm:grid grid-cols-[1fr_2fr] gap-4">
        <KnownInfo/>
        <PastGuesses items={items}/>
      </section>
    </main>
  )
}
