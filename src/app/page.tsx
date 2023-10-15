"use client"

import { useEffect, useState } from "react"
import { Item } from "../interfaces/item"
import ItemRow from "../components/game/ItemRow"

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
      <p>Answer</p>
      { answer && <ItemRow item={answer}/>}
      <p>Guesses</p>
      { items.map((item) =>
        <ItemRow key={item.name} item={item}/>
      )}
    </main>
  )
}
