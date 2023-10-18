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

  return (
    <main>
      <section className="sm:grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <ItemBox item={known}/>
          { answer && <ItemBox item={answer}/> }
        </div>
        <div>
          <ItemSearch />
          {/* <PastGuesses items={guesses}/> */}
        </div>
      </section>
    </main>
  )
}
