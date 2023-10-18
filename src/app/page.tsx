"use client"

import { useEffect, useState } from "react"
import { Item } from "../interfaces/item"
import PastGuesses from "../components/game/PastGuesses"
import ItemSearch from "../components/game/ItemSearch"
import ItemBox from "../components/game/ItemBox"
import { useItems } from "./items-provider"

export default function Home() {
  const [answer, setAnswer] = useState<Item | null>(null)
  const { known } = useItems()
  // const [guesses, setGuesses] = useState<Item[]>([])
  // const [known, setKnown] = useState<Item>({
  //   name: 'unidentified',
  //   quality: 'undefined',
  //   slot: 'unknown',
  //   type: 'something'
  // })

  // const [items, setItems] = useState<Item[]>([
  //   {
  //     name: 'Dawn',
  //     class: 'demon hunter',
  //     quality: 'legendary',
  //     slot: '1-hand',
  //     type: 'hand crossbow'
  //   },
  //   {
  //     name: 'Valla\'s Bequest',
  //     class: 'demon hunter',
  //     quality: 'legendary',
  //     slot: '1-hand',
  //     type: 'hand crossbow'
  //   },
  //   {
  //     name: 'Natalya\'s Slayer',
  //     class: 'demon hunter',
  //     quality: 'set',
  //     slot: '1-hand',
  //     type: 'hand crossbow'
  //   },
  //   {
  //     name: 'Penetrator',
  //     class: 'demon hunter',
  //     quality: 'rare',
  //     slot: '1-hand',
  //     type: 'hand crossbow'
  //   },
  //   {
  //     name: 'Hand Crossbow',
  //     class: 'demon hunter',
  //     quality: 'magic',
  //     slot: '1-hand',
  //     type: 'hand crossbow'
  //   },
  //   {
  //     name: 'Initiate\'s Hand Crossbow',
  //     class: 'demon hunter',
  //     quality: 'common',
  //     slot: '1-hand',
  //     type: 'hand crossbow'
  //   },
  // ])

  // useEffect(() => {
  //   setAnswer(items[Math.floor(Math.random() * items.length)])
  // }, [])

  return (
    <main>
      <section className="sm:grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <ItemBox item={known}/>
          { answer && <ItemBox item={answer}/> }
        </div>
        <div>
          {/* <ItemSearch items={items} />
          <PastGuesses items={guesses}/> */}
        </div>
      </section>
    </main>
  )
}
